import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Generator() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateRecipe = async () => {
    setLoading(true);
    setError("");
    setRecipes([]);

    const token = localStorage.getItem("accessToken");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/ai/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ ingredients }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate recipe");
      }

      setRecipes(data);   // <-- now we store multiple recipes
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        What’s in your kitchen? 🍅🥚
      </h2>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <textarea
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
          rows="4"
          placeholder="e.g. eggs, onion, bread"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <button
          onClick={generateRecipe}
          disabled={loading}
          className="mt-4 w-full px-6 py-3 bg-primary text-black font-bold rounded-lg
                     hover:bg-orange-400 transition disabled:opacity-50"
        >
          {loading ? "Cooking..." : "Generate Recipes"}
        </button>

        {error && (
          <p className="mt-4 text-red-400 text-center">{error}</p>
        )}
      </div>

      {/* Multiple Recipes */}
      {recipes.length > 0 && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((r, i) => (
            <RecipeCard key={i} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
