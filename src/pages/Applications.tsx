import { useState } from "react";
import ApplicationCard from "../components/Applications/ApplicationCard";
import ApplicationSearch from "../components/Applications/ApplicationSearch";
import ApplicationFilter from "../components/Applications/ApplicationFilter";
import ApplicationModal from "../components/Applications/ApplicationModal";
import type { Application } from "../types/application";
import { useApplications } from "../context/ApplicationContext";
// import { useAuth } from "../context/AuthContext";


const Applications = () => {
  const { applications, addApplication, deleteApplication, updateApplication } = useApplications();
  const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { user } = useAuth();
  // const resultForUser = applications.filter((prev) => prev.userId === user?.email);

  const searchResult = applications.filter((res) =>
    `${res.company} ${res.role}`.toLowerCase().includes(search.toLowerCase()),
  );

  const finalResult =
    selected === "ALL"
      ? searchResult
      : searchResult.filter((app) => app.status === selected);

  const handleAddApplication = (newApplication: Application) => {
    addApplication(newApplication)

    setIsModalOpen(false);
  };

  // const handleAddApplication = async (newApplication: Application) => {
  //   const success = await addApplication(newApplication);

  //   if (success) {
  //     setIsModalOpen(false);
  //   }
  // };

  const handleDelete = (id: string) => {
    deleteApplication(id);
  };

  const handleEdit = (id: string) => {
    const appToEdit = applications.find((app) => app._id === id);
    if (appToEdit) {
      setEditingApplication(appToEdit);
      setIsModalOpen(true);
    }
  };

  const handleUpdateApplication = (updatedApp: Application) => {
    updateApplication(updatedApp)
    setIsModalOpen(false);
    setEditingApplication(null);
  };

  // const handleUpdateApplication = async (updatedApp: Application) => {
  //   const success = await updateApplication(updatedApp);

  //   if (success) {
  //     setIsModalOpen(false);
  //     setEditingApplication(null);
  //   }
  // };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Job Tracker
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Applications
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage and track all your job applications.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700 hover:shadow-lg sm:w-auto"
          >
            + Add Application
          </button>
        </div>

        {/* Search */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3">
            <h2 className="text-sm font-semibold text-gray-900">
              Search Applications
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Search by company or job role.
            </p>
          </div>

          <ApplicationSearch search={search} setSearch={setSearch} />
        </section>

        {/* Filter */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3">
            <h2 className="text-sm font-semibold text-gray-900">
              Filter by Status
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              View applications based on their current status.
            </p>
          </div>

          <ApplicationFilter selected={selected} setSelected={setSelected} />
        </section>

        {/* Results */}
        <section className="mt-8">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Your Applications
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {finalResult.length} application
                {finalResult.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {selected !== "ALL" && (
              <span className="w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                Filter: {selected}
              </span>
            )}
          </div>

          {finalResult.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {finalResult.map((data) => (
                <ApplicationCard
                  key={data._id}
                  id={data._id!}
                  company={data.company}
                  role={data.role}
                  status={data.status}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-xl">
                🔍
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No applications found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or selecting a different status.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelected("ALL");
                }}
                className="mt-5 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {isModalOpen && (
        <ApplicationModal
          setIsModalOpen={(open) => {
            setIsModalOpen(open);
            if (!open) setEditingApplication(null);
          }}
          initialData={editingApplication}
          onSubmit={
            editingApplication ? handleUpdateApplication : handleAddApplication
          }
        />
      )}
    </main>
  );
};

export default Applications;
