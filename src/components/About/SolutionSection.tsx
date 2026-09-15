const SolutionSection = () => {
  const solutions = [
    {
      id: 1,
      title: "Track",
      description:
        "Keep all your job applications organized in one place.",
    },
    {
      id: 2,
      title: "Analyze",
      description:
        "Use AI to analyze your resume and understand job requirements.",
    },
    {
      id: 3,
      title: "Prepare",
      description:
        "Prepare for interviews with AI-powered practice and guidance.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Our Solution
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need in one place
          </h2>

          <p className="mt-4 text-gray-600">
            Simplify your job search with powerful tools designed to help
            you move from application to interview faster.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-xl font-bold text-purple-600">
                {solution.id}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {solution.title}
              </h3>

              <p className="mt-3 leading-6 text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;