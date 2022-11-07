import { useInView } from "react-intersection-observer"

export function WordList({ words, chosenWord, setChosenWord, setWordPage }) {
  function handleClick(word) {
    setChosenWord(word)
  }
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) setWordPage((prev) => prev + 1)
    },
    threshold: 0,
  })

  return (
    <section className="word-list">
      {words.length > 0 ? (
        <div className="word-list__wrapper">
          {words?.map((word, index) => (
            <div
              key={word}
              ref={index === words.length - 1 ? ref : null}
              className={`word-list__word ${
                word === chosenWord ? "word-list__word--selected" : ""
              }`}
              onClick={() => handleClick(word)}
            >
              {word}
            </div>
          ))}
        </div>
      ) : (
        <div className="word-list__empty">
          <p className="word-list__empty-message">Empty list</p>
        </div>
      )}
    </section>
  )
}
