import { forwardRef } from "react"

function IngredientsList({
  ingredients = [],
  getRecipe,
}, ref) {
  return (
    <section className="ingredients__container">
      <h2>Ingredients on hand:</h2>
      <ul>
        {
          ingredients.map(each => (
            <li key={each}>{each}</li>
          ))
        }
      </ul>
      {
        ingredients.length > 3 && (
          <div className="get__recipe">
            <aside className="ready" ref={ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </aside>
            <button className="btn" onClick={getRecipe}>Get a recipe</button>
          </div>
        )
      }
    </section>
  )
}

export default forwardRef(IngredientsList)