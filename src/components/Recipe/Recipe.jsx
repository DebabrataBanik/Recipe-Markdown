import ReactMarkdown from 'react-markdown';

function Recipe({ recipe }) {
  return (
    <section className="recipe__container" aria-live='polite'>

      <ReactMarkdown>
        {recipe}
      </ReactMarkdown>
    </section>
  )
}

export default Recipe