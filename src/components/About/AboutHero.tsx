const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
          About AI Job Tracker
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your AI-powered
          <span className="block text-purple-600">
            career companion
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Managing a job search shouldn't feel like managing dozens of
          spreadsheets. AI Job Tracker helps you organize applications,
          understand job requirements, and prepare for interviews.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;