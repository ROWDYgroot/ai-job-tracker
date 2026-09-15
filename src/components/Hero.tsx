import { useNavigate } from "react-router-dom";

const Hero = () => {
  const description = [
    {
      id: 1,
      title: "Track job applications",
    },
    {
      id: 2,
      title: "Analyze resumes using AI",
    },
    {
      id: 3,
      title: "Prepare for interviews",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
          ✨ AI-powered job search
        </div>

        {/* Main heading */}
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          AI Job Tracker
        </h1>

        {/* Subheading */}
        <h2 className="mt-6 text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl">
          Stop Applying Blindly.{" "}
          <span className="text-purple-600">
            Start Interviewing Directly.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Skip the recruiter black hole. PathFinder matches your verified
          skills with hiring managers who are actively looking to offer
          interviews.
        </p>

        {/* Features */}
        <ul className="mx-auto mt-8 flex max-w-xl flex-col items-start gap-4 text-left sm:items-center">
          {description.map((desc) => (
            <li
              key={desc.id}
              className="flex items-center gap-3 text-gray-700"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm text-purple-600">
                ✓
              </span>

              <span className="font-medium">
                {desc.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/register")}
            className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl"
          >
            Get Started →
          </button>

          <button
            onClick={() => navigate("/login")}
            className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;