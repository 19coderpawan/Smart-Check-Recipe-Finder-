export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-3xl mx-auto">
      
      {/* Title */}
      <h3 className="text-3xl font-bold mb-4 text-primary">
        {recipe.title}
      </h3>

      {/* Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover rounded-xl mb-4"
        />
      )}

      {/* Category + Cuisine */}
      <p className="text-gray-400 mb-4">
        🍽 {recipe.category} | 🌍 {recipe.area}
      </p>

      {/* Ingredients */}
      <h4 className="mt-4 font-semibold text-lg text-white">
        🧂 Ingredients
      </h4>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
        {recipe.ingredients?.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      {/* Instructions */}
      <h4 className="mt-6 font-semibold text-lg text-white">
        👨‍🍳 Cooking Steps
      </h4>
      <ol className="list-decimal list-inside text-gray-300 mt-2 space-y-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

    </div>
  );
}
