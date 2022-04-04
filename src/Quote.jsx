
const Quote = ({ quote: { text, author } }) => {
  return (
    <div className="quote">
        <h1 className="quote-text">{text}</h1>
        <h3 className="author">- {(author !== null ? author : 'Proverb')}</h3>
      </div>
  )
}

export default Quote