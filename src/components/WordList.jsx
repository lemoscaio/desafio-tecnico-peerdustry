export function WordList({ words, chosenWord, setChosenWord }) {
  function handleClick(word) {
    setChosenWord(word)
  }
  return (
    <section className="word-list">
      {words.map((word, index) => (
        <div
          key={word}
          className={`word-list__word ${
            word === chosenWord && "word-list__word--selected"
          }`}
          onClick={() => handleClick(word)}
        >
          {word}
        </div>
      ))}
    </section>
  )
}
