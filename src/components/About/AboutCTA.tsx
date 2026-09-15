import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-purple-600 px-6 py-16 text-center shadow-xl sm:px-12">

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to organize your job search?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-purple-100">
          Start tracking your applications and let AI help you prepare
          for your next opportunity.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="mt-8 rounded-xl bg-white px-7 py-3.5 font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
        >
          Get Started →
        </button>

      </div>
    </section>
  );
};

export default AboutCTA;