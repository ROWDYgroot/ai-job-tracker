import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setSuccessMessage("");
    if (!email) {
      setError("Please add email before proceeding");
    } else if (!emailRegex.test(email)) {
      setError("Please enter the valid email")
    } else {
        setSuccessMessage("✓ Reset link requested If an account exists for this email, you'll receive instructions shortly.");
        setEmail("");
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-14 items-center justify-center rounded-xl text-2xl">
              🔐
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Enter your email address and we'll help you reset your password.
            </p>
          </div>
          <form onSubmit={handleSend} className="mt-8 space-y-5">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              required
            />
            {error && (
              <p className="mt-1 text-sm font-medium text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl"
            >
              Send
            </button>
            {successMessage && (
              <p className="mt-1 text-sm font-medium text-green-600">{successMessage}</p>
            )}
            </form>
            <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              Remember your password?{" "}
            </span>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-purple-600 hover:text-purple-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
