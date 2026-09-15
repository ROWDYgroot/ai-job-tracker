const ProblemSection = () => {
  const problems = [
    "Applications get lost",
    "Statuses are difficult to remember",
    "Every job requires resume customization",
    "Interview preparation takes time",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            The Problem
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Job searching shouldn't be this complicated.
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Job searching can become difficult when you're applying to
            multiple companies at the same time.
          </p>
        </div>

        {/* Problems */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <ul className="space-y-4">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                  ✕
                </span>

                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;