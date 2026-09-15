// // import { useState } from "react";
// // import type { Application } from "../../types/application";


// // interface ApplicationModalProps {
// //   setIsModalOpen: (value: boolean) => void;
// //   onAddApplication: (application: Application) => void;
// // }

// // const ApplicationModal = ({
// //   setIsModalOpen,
// //   onAddApplication
// // }: ApplicationModalProps) => {
// //   const [company, setCompany] = useState("");
// //   const [role, setRole] = useState("");
// //   const [desc, setDesc] = useState("");
// //   const [date, setDate] = useState("");
// //   const [status, setStatus] = useState("Applied");
// //   const [url, setUrl] = useState("");
// //   const [notes, setNotes] = useState("");

// //   const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const newApplication: Application = {
// //       id: Date.now(),
// //       company,
// //       role,
// //       description: desc,
// //       date,
// //       status,
// //       url,
// //       notes,
// //     };

// //     onAddApplication(newApplication);
// //   };

// //   const handleClose = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     /* Overlay */
// //     <div
// //       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
// //       onClick={handleClose}
// //     >
// //       {/* Modal */}
// //       <div
// //         className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* Close Button */}
// //         <button
// //           type="button"
// //           onClick={handleClose}
// //           className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
// //         >
// //           ×
// //         </button>

// //         <div className="p-6 sm:p-8">

// //           {/* Header */}
// //           <div className="mb-8 pr-10">
// //             <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
// //               Job Tracker
// //             </p>

// //             <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
// //               Add Application
// //             </h1>

// //             <p className="mt-2 text-sm text-gray-500">
// //               Add a new job application and keep all the details organized.
// //             </p>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleAdd} className="space-y-6">

// //             {/* Company + Role */}
// //             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

// //               <div>
// //                 <label
// //                   htmlFor="company"
// //                   className="mb-2 block text-sm font-semibold text-gray-700"
// //                 >
// //                   Company Name
// //                 </label>

// //                 <input
// //                   id="company"
// //                   type="text"
// //                   placeholder="e.g. Google"
// //                   value={company}
// //                   onChange={(e) => setCompany(e.target.value)}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="role"
// //                   className="mb-2 block text-sm font-semibold text-gray-700"
// //                 >
// //                   Job Role
// //                 </label>

// //                 <input
// //                   id="role"
// //                   type="text"
// //                   placeholder="e.g. Frontend Developer"
// //                   value={role}
// //                   onChange={(e) => setRole(e.target.value)}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //                   required
// //                 />
// //               </div>

// //             </div>

// //             {/* Description */}
// //             <div>
// //               <label
// //                 htmlFor="description"
// //                 className="mb-2 block text-sm font-semibold text-gray-700"
// //               >
// //                 Job Description
// //               </label>

// //               <textarea
// //                 id="description"
// //                 placeholder="Paste or enter the job description..."
// //                 value={desc}
// //                 onChange={(e) => setDesc(e.target.value)}
// //                 rows={5}
// //                 className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //                 required
// //               />
// //             </div>

// //             {/* Date + Status */}
// //             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

// //               <div>
// //                 <label
// //                   htmlFor="date"
// //                   className="mb-2 block text-sm font-semibold text-gray-700"
// //                 >
// //                   Application Date
// //                 </label>

// //                 <input
// //                   id="date"
// //                   type="date"
// //                   value={date}
// //                   onChange={(e) => setDate(e.target.value)}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="status"
// //                   className="mb-2 block text-sm font-semibold text-gray-700"
// //                 >
// //                   Application Status
// //                 </label>

// //                 <select
// //                   id="status"
// //                   value={status}
// //                   onChange={(e) => setStatus(e.target.value)}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //                 >
// //                   <option value="Applied">Applied</option>
// //                   <option value="Interview">Interview</option>
// //                   <option value="Offer">Offer</option>
// //                   <option value="Rejected">Rejected</option>
// //                 </select>
// //               </div>

// //             </div>

// //             {/* URL */}
// //             <div>
// //               <label
// //                 htmlFor="url"
// //                 className="mb-2 block text-sm font-semibold text-gray-700"
// //               >
// //                 Job URL
// //               </label>

// //               <input
// //                 id="url"
// //                 type="url"
// //                 placeholder="https://company.com/jobs/..."
// //                 value={url}
// //                 onChange={(e) => setUrl(e.target.value)}
// //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //               />
// //             </div>

// //             {/* Notes */}
// //             <div>
// //               <label
// //                 htmlFor="notes"
// //                 className="mb-2 block text-sm font-semibold text-gray-700"
// //               >
// //                 Notes
// //               </label>

// //               <textarea
// //                 id="notes"
// //                 placeholder="Add any notes about this application..."
// //                 value={notes}
// //                 onChange={(e) => setNotes(e.target.value)}
// //                 rows={3}
// //                 className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
// //               />
// //             </div>

// //             {/* Actions */}
// //             <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">

// //               <button
// //                 type="button"
// //                 onClick={handleClose}
// //                 className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
// //               >
// //                 Cancel
// //               </button>

// //               <button
// //                 type="submit"
// //                 className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
// //               >
// //                 Add Application
// //               </button>

// //             </div>

// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplicationModal;





// import { useState, useEffect } from "react";
// import type { Application } from "../../types/application";
// import { useAuth } from "../../context/AuthContext";

// interface ApplicationModalProps {
//   setIsModalOpen: (value: boolean) => void;
//   onSubmit: (application: Application) => void;
//   initialData?: Application | null;
// }

// const ApplicationModal = ({
//   setIsModalOpen,
//   onSubmit,
//   initialData,
// }: ApplicationModalProps) => {
//   const [company, setCompany] = useState(initialData?.company || "");
//   const [role, setRole] = useState(initialData?.role || "");
//   const [desc, setDesc] = useState(initialData?.description || "");
//   const [date, setDate] = useState(initialData?.date || "");
//   const [status, setStatus] = useState(initialData?.status || "Applied");
//   const [url, setUrl] = useState(initialData?.url || "");
//   const [notes, setNotes] = useState(initialData?.notes || "");

//   // Sync state if initialData changes dynamically
//   useEffect(() => {
//     if (initialData) {
//       setCompany(initialData.company);
//       setRole(initialData.role);
//       setDesc(initialData.description || "");
//       setDate(initialData.date);
//       setStatus(initialData.status);
//       setUrl(initialData.url || "");
//       setNotes(initialData.notes || "");
//     }
//   }, [initialData]);

//   const { user } = useAuth();

//   if(!user) {
//     return
//   }
//   console.log("userEmail", user?.email)

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const applicationData: Application = {
//       id: initialData ? initialData.id : Date.now(),
//       userEmail: user.email,
//       company,
//       role,
//       description: desc,
//       date,
//       status,
//       url,
//       notes,
//     };

//     onSubmit(applicationData);
//   };

//   const handleClose = () => {
//     setIsModalOpen(false);
//   };

//   const isEditing = Boolean(initialData);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
//       onClick={handleClose}
//     >
//       <div
//         className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           type="button"
//           onClick={handleClose}
//           className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
//         >
//           ×
//         </button>

//         <div className="p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8 pr-10">
//             <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
//               Job Tracker
//             </p>

//             <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
//               {isEditing ? "Edit Application" : "Add Application"}
//             </h1>

//             <p className="mt-2 text-sm text-gray-500">
//               {isEditing
//                 ? "Update the details of your job application."
//                 : "Add a new job application and keep all the details organized."}
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="company" className="mb-2 block text-sm font-semibold text-gray-700">
//                   Company Name
//                 </label>
//                 <input
//                   id="company"
//                   type="text"
//                   placeholder="e.g. Google"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="role" className="mb-2 block text-sm font-semibold text-gray-700">
//                   Job Role
//                 </label>
//                 <input
//                   id="role"
//                   type="text"
//                   placeholder="e.g. Frontend Developer"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="description" className="mb-2 block text-sm font-semibold text-gray-700">
//                 Job Description
//               </label>
//               <textarea
//                 id="description"
//                 placeholder="Paste or enter the job description..."
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//                 rows={5}
//                 className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-700">
//                   Application Date
//                 </label>
//                 <input
//                   id="date"
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="status" className="mb-2 block text-sm font-semibold text-gray-700">
//                   Application Status
//                 </label>
//                 <select
//                   id="status"
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//                 >
//                   <option value="Applied">Applied</option>
//                   <option value="Interview">Interview</option>
//                   <option value="Offer">Offer</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="url" className="mb-2 block text-sm font-semibold text-gray-700">
//                 Job URL
//               </label>
//               <input
//                 id="url"
//                 type="url"
//                 placeholder="https://company.com/jobs/..."
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//               />
//             </div>

//             <div>
//               <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-gray-700">
//                 Notes
//               </label>
//               <textarea
//                 id="notes"
//                 placeholder="Add any notes about this application..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 rows={3}
//                 className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//               />
//             </div>

//             <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
//               <button
//                 type="button"
//                 onClick={handleClose}
//                 className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
//               >
//                 {isEditing ? "Save Changes" : "Add Application"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationModal;

import { useState, useEffect } from "react";
import type { Application } from "../../types/application";
import { useAuth } from "../../context/AuthContext";

interface ApplicationModalProps {
  setIsModalOpen: (value: boolean) => void;
  onSubmit: (application: Application) => void;
  initialData?: Application | null;
}

const ApplicationModal = ({
  setIsModalOpen,
  onSubmit,
  initialData,
}: ApplicationModalProps) => {
  const [company, setCompany] = useState(initialData?.company || "");
  const [role, setRole] = useState(initialData?.role || "");
  const [desc, setDesc] = useState(initialData?.description || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [status, setStatus] = useState<Application["status"]>(
    initialData?.status || "Applied"
  );
  const [url, setUrl] = useState(initialData?.url || "");
  const [notes, setNotes] = useState(initialData?.notes || "");

  const { user } = useAuth();

  // Sync form when editing data changes
  useEffect(() => {
    if (initialData) {
      setCompany(initialData.company);
      setRole(initialData.role);
      setDesc(initialData.description || "");
      setDate(initialData.date);
      setStatus(initialData.status);
      setUrl(initialData.url || "");
      setNotes(initialData.notes || "");
    }
  }, [initialData]);

  if (!user) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const applicationData: Application = {
      ...(initialData?._id && {
        _id: initialData._id,
      }),
      userId: user.id,
      company,
      role,
      description: desc,
      date,
      status,
      url,
      notes,
    };

    console.log("application Data", applicationData);

    onSubmit(applicationData);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isEditing = Boolean(initialData);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
        >
          ×
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-8 pr-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Job Tracker
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              {isEditing ? "Edit Application" : "Add Application"}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {isEditing
                ? "Update the details of your job application."
                : "Add a new job application and keep all the details organized."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company + Role */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="e.g. Google"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Job Role
                </label>

                <input
                  id="role"
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Job Description
              </label>

              <textarea
                id="description"
                placeholder="Paste or enter the job description..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={5}
                className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                required
              />
            </div>

            {/* Date + Status */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Application Date
                </label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Application Status
                </label>

                <select
                  id="status"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as Application["status"])
                  }
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* URL */}
            <div>
              <label
                htmlFor="url"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Job URL
              </label>

              <input
                id="url"
                type="url"
                placeholder="https://company.com/jobs/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Notes
              </label>

              <textarea
                id="notes"
                placeholder="Add any notes about this application..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
              >
                {isEditing ? "Save Changes" : "Add Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
