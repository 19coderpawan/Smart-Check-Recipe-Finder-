import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-primary mb-6">SmartChef 🍲</h1>
      <p className="text-lg text-gray-300 mb-8">
        Your AI-powered cooking assistant — just tell me what’s in your kitchen!
      </p>
      <Link
        to="/generate"
        className="px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-orange-400 transition"
      >
        Start Cooking
      </Link>
    </div>
  );
}
