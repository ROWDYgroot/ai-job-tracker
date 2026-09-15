import { useState } from "react";
import RecentApplication from "../components/Dashboard/RecentApplication";
import StatsCard from "../components/Dashboard/StatsCard";
import { useApplications } from "../context/ApplicationContext";
import ApplicationModal from "../components/Applications/ApplicationModal";

const Dashboard = () => {
  const { applications, addApplication } = useApplications();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalApplied = applications.length;
  const interviewCount = applications.filter((app) => app.status === "Interview").length;
  const rejectedCount = applications.filter((app) => app.status === "Rejected").length;
  const offersCount = applications.filter((app) => app.status === "Offer").length;

  const status = [
    {
      id: 1,
      title: "Total Applied",
      count: totalApplied,
    },
    {
      id: 2,
      title: "Interviews",
      count: interviewCount,
    },
    {
      id: 3,
      title: "Rejected",
      count: rejectedCount,
    },
    {
      id: 4,
      title: "Offers",
      count: offersCount,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Track and manage your job applications.
            </p>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700 hover:shadow-lg sm:w-auto">
            + Add Application
          </button>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {status.map((stat) => (
            <StatsCard
              key={stat.id}
              title={stat.title}
              count={stat.count}
            />
          ))}
        </section>

        {/* Recent Applications */}
        <section className="mt-8">
          <RecentApplication />
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Quickly access your most important tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Analyze Resume */}
            <button className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl transition group-hover:bg-purple-600 group-hover:text-white">
                📄
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Analyze Resume
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Get AI-powered feedback and improve your resume.
              </p>
            </button>

            {/* Practice Interview */}
            <button className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl transition group-hover:bg-purple-600 group-hover:text-white">
                🎤
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Practice Interview
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Practice interview questions and improve your answers.
              </p>
            </button>

            {/* Add Application */}
            <button onClick={() => setIsModalOpen(true)} className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl transition group-hover:bg-purple-600 group-hover:text-white">
                ➕
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Add Application
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Add a new job application to your tracker.
              </p>
            </button>

          </div>
        </section>
        {
          isModalOpen && (
            <ApplicationModal setIsModalOpen={setIsModalOpen} onSubmit={(application) => {
              addApplication(application);
              setIsModalOpen(false);
            }}/>
          )
        }
      </div>
    </main>
  );
};

export default Dashboard;