import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  console.log("email", email);
  console.log("password", password);
  console.log("error", emailError, passwordError);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please add a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (isValid) {
      const success = await login(email, password);

    if (!success) {
      setLoginError("Invalid email or password");
      return;
    }

    navigate("/dashboard");
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-12">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              ✨
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Sign in to continue to{" "}
              <span className="font-semibold text-purple-600">
                AI Job Tracker
              </span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                required
              />
              {emailError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                required
              />
              {showPassword ? <span onClick={handleShowPassword}>Hide</span> : <span onClick={handleShowPassword}>Show</span>}
              {passwordError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Remember + Forgot Password */}
            <div className="flex items-center justify-between">

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />

                <span className="text-sm text-gray-600">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-sm font-medium text-purple-600 hover:text-purple-700"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot password?
              </button>

            </div>

            {/* Sign In */}
            {loginError && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {loginError}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
            </span>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-sm font-semibold text-purple-600 hover:text-purple-700"
            >
              Create an account
            </button>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Login;