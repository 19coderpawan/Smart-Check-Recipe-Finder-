import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">

        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Account ✨
        </h2>

        <form className="flex flex-col gap-4">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
            focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
            focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
            focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-primary text-black font-bold py-3 rounded-lg 
            hover:bg-orange-400 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
