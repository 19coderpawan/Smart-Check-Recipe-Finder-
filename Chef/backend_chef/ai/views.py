import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def generate_recipe(request):
    ingredients = request.data.get("ingredients", "")

    if not ingredients:
        return Response({"error": "Ingredients are required"}, status=400)

    # User ingredients list
    user_ingredients = [i.strip().lower() for i in ingredients.split(",")]

    # Use only first ingredient to query API
    first_ingredient = user_ingredients[0]

    url = f"https://www.themealdb.com/api/json/v1/1/filter.php?i={first_ingredient}"
    data = requests.get(url).json()

    if not data["meals"]:
        return Response({"error": "No recipes found"}, status=404)

    matched_recipes = []

    for meal in data["meals"][:6]:  # limit to 6 for performance
        meal_id = meal["idMeal"]
        details_url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}"
        meal_data = requests.get(details_url).json()["meals"][0]

        # extract ingredients
        meal_ingredients = []
        for i in range(1, 21):
            ing = meal_data.get(f"strIngredient{i}")
            if ing:
                meal_ingredients.append(ing.lower())

        # check if recipe matches user ingredients
        if all(ui in meal_ingredients for ui in user_ingredients):
            matched_recipes.append({
                "title": meal_data["strMeal"],
                "image": meal_data["strMealThumb"],
                "instructions": meal_data["strInstructions"].split(". "),
                "ingredients": meal_ingredients,
                "category": meal_data["strCategory"],
                "area": meal_data["strArea"]
            })

    if not matched_recipes:
        return Response({"error": "No recipes match all ingredients"}, status=404)

    return Response(matched_recipes)
