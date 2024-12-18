function Main() {
  return (
    <main className="container">
      <form className="form__container">
        <label hidden htmlFor="input"></label>
        <input type="text" id="input" placeholder="e.g. oregano"
          aria-label="add ingredient"
        />
        <button id="submit">+ Add ingredient</button>
      </form>
    </main>
  )
}

export default Main