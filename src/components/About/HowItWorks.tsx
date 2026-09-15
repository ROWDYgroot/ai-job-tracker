const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Add a job",
      description:
        "Enter the company name, position, and job description.",
    },
    {
      id: 2,
      title: "Analyze with AI",
      description:
        "Let AI analyze the job requirements and your resume.",
    },
    {
      id: 3,
      title: "Prepare & apply",
      description:
        "Get personalized preparation and track your application progress.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
          How It Works
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Start your job search in three steps
        </h2>
      </div>

      {/* Steps */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-200">
              {step.id}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-3 leading-6 text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;