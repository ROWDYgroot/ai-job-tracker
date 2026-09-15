import { useNavigate } from "react-router-dom";
import { useApplications } from "../../context/ApplicationContext";

const RecentApplication = () => {
  const { applications } = useApplications();
  const navigate = useNavigate();

  console.log("applications", applications)
  const latestApplication = [...applications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
  console.log("latestApplications", latestApplication);

  const statusStyles: Record<string, string> = {
    Interview: "bg-blue-100 text-blue-700",
    Applied: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
    Offer: "bg-green-100 text-green-700",
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Keep track of your latest job applications
          </p>
        </div>

        <button onClick={() => navigate("/applications")} className="hidden rounded-lg px-4 py-2 text-sm font-medium text-purple-600 transition hover:bg-purple-50 sm:block">
          View All
        </button>
      </div>

      {/* Applications */}
      <div className="divide-y divide-gray-100">
        {latestApplication.map((app) => (
          <div
            key={app.id}
            className="flex flex-col gap-4 py-5 transition first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Company + Role */}
            <div className="flex items-center gap-4">
              {/* Company Avatar */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-bold text-purple-600">
                {app.company.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {app.company}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {app.role}
                </p>
              </div>
            </div>

            {/* Status */}
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                statusStyles[app.status] ?? "bg-gray-100 text-gray-700"
              }`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <button onClick={() => navigate("/applications")} className="mt-6 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-purple-600 transition hover:bg-purple-50 sm:hidden">
        View All Applications
      </button>
    </section>
  );
};

export default RecentApplication;