import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    termsError: "",
    registerError: "",
  })

  const [successMessage, setSuccessMessage] = useState("");

  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      termsError: "",
      registerError: ""
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if(!name){
      setError((prev) => ({
        ...prev,
        nameError: "Please enter name"
      }))
      isValid = false;
    } else if(name.length < 2) {
      setError((prev) => ({
        ...prev,
        nameError: "Please enter valid name"
      }))
      isValid = false;
    }

    if(!email){
      setError((prev) => ({
        ...prev,
        emailError: "Please enter email"
      }))
      isValid = false;
    } else if(!emailRegex.test(email)) {
      setError((prev) => ({
        ...prev,
        emailError: "Please enter valid email"
      }))
      isValid = false;
    }

    if(!password){
      setError((prev) => ({
        ...prev,
        passwordError: "Please enter password"
      }))
      isValid = false;
    } else if(password.length < 8){
      setError((prev) => ({
        ...prev,
        passwordError: "Please enter valid password"
      }))
      isValid = false;
    }

    if(!confirmPassword){
      setError((prev) => ({
        ...prev,
        confirmPasswordError: "Please enter password"
      }))
      isValid = false;
    } else if(password !== confirmPassword){
      setError((prev) => ({
        ...prev,
        confirmPasswordError: "Both passwords should be same"
      }))
      isValid = false;
    }

    if(terms === false){
      setError((prev) => ({
        ...prev,
        termsError: "Please accept the terms and conditions before going forward!!"
      }))
      isValid = false
    }

    if(isValid) {
      const success = await register(email, password);

    if (!success) {
      setError((prev) => ({
        ...prev,
        registerError: "An account with this email already exists"
      }));
      return;
    }

    setSuccessMessage("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
    }
  }

  const navigate = useNavigate();
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-12">
       <div className="w-full max-w-md">

        {/* Signup card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 item-center justify-center rounded-xl bg-purple-100 text-2xl">
              ✨
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
              Welcome
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Sign up to continue to{" "}
              <span className="font-semibold text-purple-600">
                AI Job Tracker
              </span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="jhon doe"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                error.nameError
                  ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
                  : "border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              }`}
              />
              {error.nameError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {error.nameError}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input 
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                error.emailError
                  ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
                  : "border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              }`}
              />
              {error.emailError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {error.emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                error.passwordError
                  ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
                  : "border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              }`}
              />
              {error.passwordError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {error.passwordError}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="cpassword" className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input 
                id="cpassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                error.confirmPasswordError
                  ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
                  : "border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              }`}
              />
              {error.confirmPasswordError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {error.confirmPasswordError}
                </p>
              )}
            </div>
            
            {/* Terms */}
            <div className="flex items-center justify-between">

              <label className="flex cursor-pointer items-center gap-2">
                <input 
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-blue-600">
                  Terms and conditions
                </span>
              </label>
            </div>
              {error.termsError && (
                <p className="mt-1 text-sm font-medium text-red-600">
                  {error.termsError}
                </p>
              )}
            {/* Sign UP */}
            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl"
            >
              Register
            </button>
            {error.registerError && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {error.registerError}
              </p>
            )}
            {successMessage && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {successMessage}
              </p>
            )}
          </form>

          {/* Login */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
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
  )
}

export default Register
