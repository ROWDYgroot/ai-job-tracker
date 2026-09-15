
import React, { useState } from "react";

const InterviewSetup = () => {
  const [jobRole, setJobRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const options = [
    {
      level: 1,
      value: "Freshers",
    },
    {
      level: 2,
      value: "Intermediate",
    },
    {
      level: 3,
      value: "Experienced",
    },
  ];

  const handleStartInterview = () => {
    console.log("Job Role:", jobRole);
    console.log("Experience Level:", experienceLevel);
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            AI-Powered Interview Preparation
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ace your next
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              technical interview.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Prepare smarter with personalized AI-generated interview
            questions based on your role, experience, and job description.
          </p>

        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

          {/* Card Header */}
          <div className="mb-8 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-2xl">
              🎯
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Set up your interview
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Tell us about the role you're preparing for.
              </p>
            </div>

          </div>

          {/* Form */}
          <div className="space-y-6">

            {/* Job Role */}
            <div>
              <label
                htmlFor="jobRole"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Job Role
              </label>

              <input
                type="text"
                id="jobRole"
                name="jobRole"
                placeholder="e.g. React.js Developer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter the position you want to practice for.
              </p>
            </div>

            {/* Experience Level */}
            <div>
              <label
                htmlFor="experienceLevel"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Experience Level
              </label>

              <select
                id="experienceLevel"
                name="experienceLevel"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-slate-200 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10"
              >
                <option value="" className="bg-slate-900">
                  Select experience level
                </option>

                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-slate-900"
                  >
                    {option.value}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs text-slate-500">
                Choose the difficulty level for your interview.
              </p>
            </div>

            {/* Job Description */}
            <div>
              <label
                htmlFor="jobDescription"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Job Description
              </label>

              <textarea
                id="jobDescription"
                name="jobDescription"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={7}
                className="w-full resize-y rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10"
              />

              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Add responsibilities and required skills.
                </span>

                <span>{jobDescription.length} characters</span>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10" />

          {/* Start Button */}
          <button
            onClick={handleStartInterview}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-purple-900/30 transition hover:scale-[1.01] hover:from-purple-500 hover:to-blue-500 active:scale-[0.99]"
          >
            <span>✨</span>
            Start Interview
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Your AI interview session will be personalized to your inputs.
          </p>

        </div>

        {/* Bottom Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="mb-2 text-xl">🤖</div>
            <h3 className="text-sm font-semibold">AI Questions</h3>
            <p className="mt-1 text-xs text-slate-500">
              Personalized questions
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="mb-2 text-xl">💡</div>
            <h3 className="text-sm font-semibold">Smart Practice</h3>
            <p className="mt-1 text-xs text-slate-500">
              Role-based preparation
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="mb-2 text-xl">🚀</div>
            <h3 className="text-sm font-semibold">Build Confidence</h3>
            <p className="mt-1 text-xs text-slate-500">
              Improve your skills
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 pb-4 text-center text-xs text-slate-600">
          Built with React.js · AI Interview Intelligence
        </div>

      </div>
    </div>
  );
};

export default InterviewSetup;