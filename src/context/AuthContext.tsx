import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  id: string;
  email: string;
}

// interface StoredUser {
//   email: string;
//   password: string;
// }

interface AuthContextType {
  user: User | null;
  //using localstorage
  // register: (email: string, password: string) => boolean;
  // login: (email: string, password: string) => boolean;

  //using api
  register: (email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return null;
  });

  // Register using localstorage
  // const register = (email: string, password: string) => {
  //   const savedUsers = localStorage.getItem("users");

  //   const users: StoredUser[] = savedUsers
  //     ? JSON.parse(savedUsers)
  //     : [];

  //   const existingUser = users.find(
  //     (user) => user.email === email
  //   );

  //   if (existingUser) {
  //     return false;
  //   }

  //   const newUser: StoredUser = {
  //     email,
  //     password,
  //   };

  //   users.push(newUser);

  //   localStorage.setItem(
  //     "users",
  //     JSON.stringify(users)
  //   );

  //   return true;
  // };

  //Register using API
  const register = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Register error:", error);
      return false;
    }
  };

  // Login using localstorage
  // const login = (email: string, password: string) => {
  //   const savedUsers = localStorage.getItem("users");

  //   const users: StoredUser[] = savedUsers
  //     ? JSON.parse(savedUsers)
  //     : [];

  //   const existingUser = users.find(
  //     (user) =>
  //       user.email === email &&
  //       user.password === password
  //   );

  //   if (!existingUser) {
  //     return false;
  //   }

  //   const loggedInUser: User = {
  //     email: existingUser.email,
  //   };

  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify(loggedInUser)
  //   );

  //   setUser(loggedInUser);

  //   return true;
  // };

  //Login using api call
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return false;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
