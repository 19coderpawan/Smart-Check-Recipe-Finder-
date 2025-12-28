import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-darkbg border-b border-gray-700 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          SmartChef 🍲
        </Link>

        <div className="flex gap-6 items-center text-gray-300 font-medium">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/generate" className="hover:text-primary transition">Generate</Link>
          {/* <Link to="/saved" className="hover:text-primary transition">Saved</Link> */}

          {user ? (
            <>
              <span className="text-sm text-gray-400">
                Hi, {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 bg-primary text-black font-semibold rounded-lg shadow-md 
                       hover:bg-orange-400 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
