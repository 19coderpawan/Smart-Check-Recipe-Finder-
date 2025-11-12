export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2 text-primary">{recipe.title}</h3>
      <p className="text-gray-300 mb-4">{recipe.description}</p>
      <p><strong>Time:</strong> {recipe.time} | <strong>Difficulty:</strong> {recipe.difficulty}</p>

      <h4 className="mt-4 font-semibold text-lg">Ingredients:</h4>
      <ul className="list-disc list-inside text-gray-300">
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <h4 className="mt-4 font-semibold text-lg">Steps:</h4>
      <ol className="list-decimal list-inside text-gray-300">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
