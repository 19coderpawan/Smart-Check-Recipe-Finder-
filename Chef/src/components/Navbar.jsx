import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-primary text-2xl font-bold">SmartChef</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/generate" className="hover:text-primary">Generate</Link>
        <Link to="/saved" className="hover:text-primary">Saved</Link>

         {/* Auth Buttons */}
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
      </div>
    </nav>
  );
}
