// import { useState } from "react";
// import ResumeUpload from "../components/ResumeAnalyzer/ResumeUpload";
// interface ResumeAnalysis {
//   score: number;
//   matchedSkills: string[];
//   missingSkills: string[];
//   strengths: string[];
//   weaknesses: string[];
//   suggestions: string[];
// }

// const ResumeAnalyzer = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [desc, setDesc] = useState("");
//   const [error, setError] = useState("");
//   const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

//   const handleAnalyze = async () => {
//     setError("");
//     if (!file) {
//       setError("Please select a file before moving forward");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("resume", file);
//     formData.append("jobDescription", desc);
//     const response = await fetch("http://localhost:5000/api/resume/analyze", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     setAnalysis(data.analysis);
//     console.log("Analyze response:", data);
//     console.log("Analysis:", data.analysis);
//     console.log("Analysis type:", typeof data.analysis);
//   };

//   return (
//     <div className="mx-auto flex max-w-md flex-col gap-6 p-6">
//       <h1 className="text-2xl font-bold text-gray-800">Resume Analyzer</h1>

//       <ResumeUpload file={file} setFile={setFile} />
//       <div>
//         <label
//           htmlFor="description"
//           className="mb-2 block text-sm font-semibold text-gray-700"
//         >
//           Job Description
//         </label>

//         <textarea
//           id="description"
//           placeholder="Paste or enter the job description..."
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//           rows={5}
//           className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//           required
//         />
//       </div>

//       <button
//         onClick={handleAnalyze}
//         className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
//       >
//         Analyze
//       </button>
//       {error && (
//         <p className="mt-1 text-sm font-medium text-red-600">{error}</p>
//       )}
//       {analysis && (
//         <div>
//           <h2>Resume Analysis</h2>

//           <h3>Score: {analysis.score}/100</h3>

//           <h3>Matched Skills</h3>
//           <ul>
//             {analysis.matchedSkills.map((skill) => (
//               <li key={skill}>{skill}</li>
//             ))}
//           </ul>

//           <h3>Missing Skills</h3>
//           <ul>
//             {analysis.missingSkills.map((skill) => (
//               <li key={skill}>{skill}</li>
//             ))}
//           </ul>

//           <h3>Strengths</h3>
//           <ul>
//             {analysis.strengths.map((strength) => (
//               <li key={strength}>{strength}</li>
//             ))}
//           </ul>

//           <h3>Weaknesses</h3>
//           <ul>
//             {analysis.weaknesses.map((weakness) => (
//               <li key={weakness}>{weakness}</li>
//             ))}
//           </ul>

//           <h3>Suggestions</h3>
//           <ul>
//             {analysis.suggestions.map((suggestion) => (
//               <li key={suggestion}>{suggestion}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResumeAnalyzer;

import { useState } from "react";
import ResumeUpload from "../components/ResumeAnalyzer/ResumeUpload";

interface ResumeAnalysis {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setError("");

    if (!file) {
      setError("Please select a resume before moving forward");
      return;
    }

    if (!desc.trim()) {
      setError("Please enter a job description");
      return;
    }

    try {
      setLoading(true);
      setAnalysis(null);

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("jobDescription", desc);

      const response = await fetch("http://localhost:5000/api/resume/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }

      const data = await response.json();

      setAnalysis(data.analysis);

      console.log("Analyze response:", data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const scoreColor =
    analysis && analysis.score >= 80
      ? "#22c55e"
      : analysis && analysis.score >= 60
        ? "#eab308"
        : "#ef4444";

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            AI-Powered Resume Analysis
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Land your dream job
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              with confidence.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Upload your resume and compare it against any job description. Get
            an AI-powered score, skill match, and actionable feedback.
          </p>
        </div>

        {/* Input Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Resume Upload Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/15 text-xl">
                📄
              </div>

              <div>
                <h2 className="text-lg font-bold">Upload your resume</h2>
                <p className="text-sm text-slate-400">PDF</p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-purple-400/30 bg-purple-500/[0.04] p-4 transition hover:border-purple-400/70">
              <ResumeUpload file={file} setFile={setFile} />
            </div>

            {file && (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3">
                <span className="text-emerald-400">✓</span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-emerald-300">
                    {file.name}
                  </p>

                  <p className="text-xs text-emerald-400/70">
                    Resume selected successfully
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Job Description Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-xl">
                💼
              </div>

              <div>
                <h2 className="text-lg font-bold">Job description</h2>

                <p className="text-sm text-slate-400">
                  Paste the role you're applying for
                </p>
              </div>
            </div>

            <textarea
              id="description"
              placeholder="Paste or enter the job description..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={8}
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10"
              required
            />

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>Include skills and responsibilities</span>
              <span>{desc.length} characters</span>
            </div>
          </div>
        </div>

        {/* Analyze Button */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="group flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-900/30 transition hover:scale-[1.02] hover:from-purple-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Analyzing your resume...
              </>
            ) : (
              <>
                ✨ Analyze My Resume
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>

          <p className="text-xs text-slate-500">
            AI-powered insights to improve your job match
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mx-auto mt-6 max-w-md rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-300">
            ⚠️ {error}
          </div>
        )}

        {/* Analysis Results */}
        {analysis && (
          <div className="mt-14 space-y-8">
            {/* Results Header */}
            <div className="text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Your Results
              </p>

              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Resume Analysis
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Here's how well your resume matches this job description.
              </p>
            </div>

            {/* Score Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
                {/* Score Circle */}
                <div
                  className="relative flex h-44 w-44 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(
      ${scoreColor} ${analysis.score * 3.6}deg,
      rgba(255,255,255,0.08) ${analysis.score * 3.6}deg
    )`,
                  }}
                >
                  {/* Inner Circle */}
                  <div className="absolute inset-2 flex flex-col items-center justify-center rounded-full bg-slate-950">
                    <p
                      className="text-5xl font-extrabold"
                      style={{ color: scoreColor }}
                    >
                      {analysis.score}
                    </p>

                    <p className="text-sm text-slate-400">out of 100</p>
                  </div>
                </div>

                {/* Score Details */}
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                    ATS Compatibility
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {analysis.score >= 80
                      ? "Excellent Match 🎉"
                      : analysis.score >= 60
                        ? "Good Match 👍"
                        : "Room for Improvement"}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                    Your resume has been analyzed against the provided job
                    description. Review the insights below to improve your
                    chances.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Matched Skills */}
              <div className="rounded-3xl border border-emerald-400/15 bg-emerald-500/[0.04] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Matched Skills</h3>

                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                    {analysis.matchedSkills.length} Skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {analysis.matchedSkills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-300"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                {analysis.matchedSkills.length === 0 && (
                  <p className="text-sm text-slate-500">
                    No matched skills found.
                  </p>
                )}
              </div>

              {/* Missing Skills */}
              <div className="rounded-3xl border border-orange-400/15 bg-orange-500/[0.04] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Missing Skills</h3>

                  <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-400">
                    {analysis.missingSkills.length} Skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {analysis.missingSkills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="rounded-xl border border-orange-400/20 bg-orange-400/10 px-3 py-2 text-sm font-medium text-orange-300"
                    >
                      + {skill}
                    </span>
                  ))}
                </div>

                {analysis.missingSkills.length === 0 && (
                  <p className="text-sm text-slate-500">
                    No missing skills found.
                  </p>
                )}
              </div>
            </div>

            {/* Feedback Sections */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Strengths */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-lg">
                    💪
                  </div>

                  <h3 className="text-xl font-bold">Strengths</h3>
                </div>

                <ul className="space-y-3">
                  {analysis.strengths.map((strength, index) => (
                    <li
                      key={`${strength}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-1 text-emerald-400">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-lg">
                    ⚠️
                  </div>

                  <h3 className="text-xl font-bold">Weaknesses</h3>
                </div>

                <ul className="space-y-3">
                  {analysis.weaknesses.map((weakness, index) => (
                    <li
                      key={`${weakness}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-1 text-red-400">•</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suggestions */}
            <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-xl">
                  ✨
                </div>

                <div>
                  <h3 className="text-xl font-bold">AI Suggestions</h3>

                  <p className="text-sm text-slate-400">
                    Actionable steps to improve your resume
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {analysis.suggestions.map((suggestion, index) => (
                  <div
                    key={`${suggestion}-${index}`}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-xs font-bold text-purple-300">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-slate-300">
                      {suggestion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pb-4 text-center text-xs text-slate-600">
          Built with React.js · AI Resume Intelligence
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
