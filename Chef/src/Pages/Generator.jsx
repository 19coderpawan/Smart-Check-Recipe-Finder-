import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

export default function Generator() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();

    // mock response for now
    const mockRecipe = {
      title: "Tomato Pasta",
      description: "A quick and delicious pasta with fresh tomato sauce.",
      ingredients: ["Tomatoes", "Garlic", "Pasta", "Olive Oil", "Basil"],
      steps: [
        "Boil pasta until al dente.",
        "Sauté garlic in olive oil.",
        "Add chopped tomatoes and cook into a sauce.",
        "Mix pasta and sauce together.",
      ],
      time: "20 minutes",
      difficulty: "Easy",
    };

    setRecipe(mockRecipe);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Link to="/">
      <h1 className="text-red-700">HOME</h1>
      </Link>
      
      <h2 className="text-3xl font-bold mb-6 text-primary">AI Recipe Generator</h2>
      <form onSubmit={handleGenerate} className="flex gap-3 mb-6">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g., tomato, cheese, pasta"
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-primary text-black rounded font-semibold hover:bg-orange-400"
        >
          Generate
        </button>
      </form>

      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}
