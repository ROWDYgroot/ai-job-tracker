import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Job Application Tracking",
      description: "Track your applications and keep everything organized in one place.",
    },
    {
      id: 2,
      title: "AI Resume Analysis",
      description: "Analyze your resume and get AI-powered suggestions for improvement.",
    },
    {
      id: 3,
      title: "AI Interview Preparation",
      description: "Prepare for interviews with AI-powered questions and feedback.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Everything You Need for Your Job Search
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Powerful AI tools to help you find jobs, improve your resume,
          and prepare for interviews.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;