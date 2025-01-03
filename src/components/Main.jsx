import { useState, useRef, useEffect } from "react"
import IngredientsList from "./Ingredients/IngredientsList"
import Recipe from "./Recipe/Recipe"
import { getRecipeFromMistral } from "../ai"

function Main() {

  const [ingredients, setIngredients] = useState([])

  const [recipe, setRecipe] = useState("")

  const recipeSection = useRef(null)
  // console.log(recipeSection)

  useEffect(() => {
    if (recipe != '' && recipeSection != null) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' })
      // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
      // window.scroll({
      //   top: yCoord,
      //   behavior: "smooth"
      // })
    }
  }, [recipe])

  function addIngredient(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const ingredient = formData.get('ingredient')

    if (ingredient.trim()) {
      setIngredients(prev => [...prev, ingredient])
    }
    e.target.reset()
  }

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe)
  }


  return (
    <main className="container">
      <form onSubmit={addIngredient} className="form__container">
        <label hidden htmlFor="input"></label>
        <input type="text" name="ingredient" id="input" placeholder="e.g. oregano"
          aria-label="add ingredient"
        />
        <button id="submit">+ Add ingredient</button>
      </form>

      {
        ingredients.length > 0 &&
        <IngredientsList
          ref={recipeSection}
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