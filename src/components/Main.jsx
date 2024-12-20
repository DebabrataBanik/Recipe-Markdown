import { useState } from "react"
import IngredientsList from "./Ingredients/IngredientsList"
import Recipe from "./Recipe/Recipe"
import { getRecipeFromMistral } from "../ai"

function Main() {

  const [ingredients, setIngredients] = useState([])

  const [recipe, setRecipe] = useState("")

  function addIngredient(form) {
    const ingredient = form.get('ingredient')

    if (ingredient.trim()) {
      setIngredients(prev => [...prev, ingredient])
    }
  }

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe)
  }


  return (
    <main className="container">
      <form action={addIngredient} className="form__container">
        <label hidden htmlFor="input"></label>
        <input type="text" name="ingredient" id="input" placeholder="e.g. oregano"
          aria-label="add ingredient"
        />
        <button id="submit">+ Add ingredient</button>
      </form>

      {
        ingredients.length > 0 &&
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      }

      {
        recipe && <Recipe recipe={recipe} />
      }
    </main>
  )
}

export default Main