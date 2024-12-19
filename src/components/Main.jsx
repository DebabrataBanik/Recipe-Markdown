import { useState } from "react"

function Main() {

  const [ingredients, setIngredients] = useState([])

  function addIngredient(form) {
    const ingredient = form.get('ingredient')

    if (ingredient.trim()) {
      setIngredients(prev => [...prev, ingredient])
    }

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
        ingredients.length > 0 && (
          <section className="ingredients__container">
            <h2>Ingredients on hand:</h2>
            <ul>
              {
                ingredients.map(each => (
                  <li key={each}>{each}</li>
                ))
              }
            </ul>
          </section>
        )
      }
    </main>
  )
}

export default Main