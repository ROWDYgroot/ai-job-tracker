import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-sm font-bold text-white shadow-sm">
            AI
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-bold leading-tight text-gray-900">
              AI Job Tracker
            </p>

            <p className="text-xs text-gray-500">
              Career companion
            </p>
          </div>
        </button>

        {/* User Section */}
        {user && (
          <div className="flex items-center gap-3 sm:gap-5">

            {/* User Info */}
            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                {user.email.charAt(0).toUpperCase()}
              </div>

              <div className="max-w-[220px]">
                <p className="text-xs text-gray-500">
                  Signed in as
                </p>

                <p className="truncate text-sm font-semibold text-gray-800">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Mobile Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 sm:hidden">
              {user.email.charAt(0).toUpperCase()}
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-gray-200 sm:block" />

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-4"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;