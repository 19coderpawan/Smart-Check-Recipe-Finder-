import { Link } from "react-router-dom";
import chef from "../assets/chef.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4">
      
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg mb-4">
        SmartChef 🍲
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Your AI-powered cooking assistant — just tell me what ingredients you have,
        and SmartChef will cook up magic for you!
      </p>

      {/* CTA button */}
      <Link
        to="/generate"
        className="px-8 py-3 bg-primary text-black font-bold rounded-xl shadow-lg 
        hover:bg-orange-400 hover:scale-105 transition-all duration-300"
      >
        Start Cooking
      </Link>

      {/* Floating Chef Image */}
      <img
        src={chef}
        alt="AI Chef"
        className="w-48 h-48 mt-10 rounded-full opacity-80 shadow-2xl 
        hover:opacity-100 transition-all duration-300 hover:scale-110
        animate-floating border-4 border-primary/50"
      />
    </section>
  );
}
