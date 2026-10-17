// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";
// import type { Application } from "../types/application";
// import { mockData } from "../utils/mockData";
// import { useAuth } from "./AuthContext";

// interface ApplicationContextType {
//   applications: Application[];
//   addApplication: (application: Application) => void;
//   updateApplication: (application: Application) => void;
//   deleteApplication: (id: number) => void;
// }

// const ApplicationContext = createContext<ApplicationContextType | undefined>(
//   undefined,
// );

// interface ApplicationProviderProps {
//   children: ReactNode;
// }

// export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
//   //   const [applications, setApplications] =
//   //     useState<Application[]>(mockData);

//   const [applications, setApplications] = useState<Application[]>(() => {
//     const savedApplications = localStorage.getItem("applications");

//     if (savedApplications) {
//       return JSON.parse(savedApplications);
//     }

//     return mockData;
//   });

//   useEffect(() => {
//     localStorage.setItem("applications", JSON.stringify(applications));
//   }, [applications]);
//   const { user } = useAuth();
//   const userApplications = user
//     ? applications.filter((application) => application.userEmail === user.email)
//     : [];

//   const addApplication = (application: Application) => {
//     setApplications((prev) => [...prev, application]);
//   };

//   const updateApplication = (updatedApplication: Application) => {
//     setApplications((prev) =>
//       prev.map((application) =>
//         application.id === updatedApplication.id
//           ? updatedApplication
//           : application,
//       ),
//     );
//   };

//   const deleteApplication = (id: number) => {
//     setApplications((prev) =>
//       prev.filter((application) => application.id !== id),
//     );
//   };

//   return (
//     <ApplicationContext.Provider
//       value={{
//         applications: userApplications,
//         addApplication,
//         updateApplication,
//         deleteApplication,
//       }}
//     >
//       {children}
//     </ApplicationContext.Provider>
//   );
// };

// export const useApplications = () => {
//   const context = useContext(ApplicationContext);

//   if (!context) {
//     throw new Error("useApplications must be used inside ApplicationProvider");
//   }

//   return context;
// };

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";
import type { Application } from "../types/application";

interface ApplicationContextType {
  applications: Application[];
  addApplication: (application: Application) => Promise<boolean>;
  updateApplication: (application: Application) => Promise<boolean>;
  deleteApplication: (id: string) => Promise<boolean>;
}

const ApplicationContext = createContext<
  ApplicationContextType | undefined
>(undefined);

interface ApplicationProviderProps {
  children: ReactNode;
}

const API_URL = "https://ai-job-tracker-backend-ujlt.onrender.com/api/application";

export const ApplicationProvider = ({
  children,
}: ApplicationProviderProps) => {
  const { user } = useAuth();

  const [applications, setApplications] = useState<Application[]>([]);

  // GET applications
  useEffect(() => {
    const fetchApplications = async () => {
      if (!user?.id) {
        setApplications([]);
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}?userId=${user.id}`
        );

        const data = await response.json();

        if (!response.ok) {
          console.error(data.message);
          return;
        }

        setApplications(data.applications);
      } catch (error) {
        console.error("Get applications error:", error);
      }
    };

    fetchApplications();
  }, [user]);

  // CREATE application
  const addApplication = async (
    application: Application
  ): Promise<boolean> => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return false;
      }

      setApplications((prev) => [
        ...prev,
        data.application,
      ]);

      return true;
    } catch (error) {
      console.error("Create application error:", error);
      return false;
    }
  };

  // UPDATE application
  const updateApplication = async (
    application: Application
  ): Promise<boolean> => {
    if (!application._id) {
      console.error("Application ID is missing");
      return false;
    }

    try {
      const response = await fetch(
        `${API_URL}/${application._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(application),
        }
      );

      const data = await response.json();
      console.log("UPDATE RESPONSE:", data);

      if (!response.ok) {
        console.error(data.message);
        return false;
      }

      setApplications((prev) =>
        prev.map((item) =>
          item._id === application._id
            ? data.application
            : item
        )
      );

      return true;
    } catch (error) {
      console.error("Update application error:", error);
      return false;
    }
  };

  // DELETE application
  const deleteApplication = async (
    id: string
  ): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return false;
      }

      setApplications((prev) =>
        prev.filter((application) => application._id !== id)
      );

      return true;
    } catch (error) {
      console.error("Delete application error:", error);
      return false;
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      "useApplications must be used inside ApplicationProvider"
    );
  }

  return context;
};
