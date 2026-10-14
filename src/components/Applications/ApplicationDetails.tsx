import type { Application } from "../../types/application";

interface ApplicationDetailsProps {
  application: Application;
  onClose: () => void;
}

const ApplicationDetails = ({
  application,
  onClose,
}: ApplicationDetailsProps) => {
  const details = Object.entries(application).filter(
    ([key]) => !["_id", "__v", "userId"].includes(key),
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Application Details
            </p>

            <h2 className="mt-2 break-words text-2xl font-bold text-gray-900">
              {application.company}
            </h2>

            <p className="mt-1 break-words text-gray-500">
              {application.role}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="rounded-lg px-3 py-2 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        {/* Details */}
        <div className="grid gap-4 sm:grid-cols-2">
          {details.map(([key, value]) => (
            <div
              key={key}
              className="min-w-0 rounded-xl border border-gray-200 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {key.replace(/([A-Z])/g, " $1")}
              </p>

              <p className="mt-2 break-words text-sm font-medium text-gray-900">
                {value == null || value === ""
                  ? "Not provided"
                  : typeof value === "object"
                    ? JSON.stringify(value, null, 2)
                    : String(value)}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;