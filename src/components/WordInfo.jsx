import { useEffect, useState } from "react"
import { dictionaryApi } from "../api"
import { useFavoriteWords } from "../hooks/useFavoriteWords"
import { useHistory } from "../hooks/useHistory"

export function WordInfo({ chosenWord, setChosenWord }) {
  const [wordInfo, setWordInfo] = useState({})
  const [meaningIndex, setMeaningIndex] = useState(0)
  const { favoriteWords, addFavoriteWord, removeFavoriteWord } =
    useFavoriteWords()
  const { cachedWord, addToHistory } = useHistory(chosenWord)

  console.log(cachedWord)

  useEffect(() => {
    async function fetchWord() {
      try {
        const { data } = await dictionaryApi.get(`/${chosenWord}`)
        console.log(data)

        setWordInfo(data[0])

        addToHistory(data[0])
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    if (!cachedWord) fetchWord()
    if (cachedWord) setWordInfo(cachedWord)
  }, [])

  const isFavorite = favoriteWords?.find((word) => word === chosenWord)

  function handleFavoriteClick() {
    if (isFavorite) removeFavoriteWord(chosenWord)
    if (!isFavorite) addFavoriteWord(chosenWord)
  }

  return (
    <section className="word-info">
      <div className="word-info__top-nav">
        <div className="word-info__close" onClick={() => setChosenWord("")}>
          x
        </div>
        <div className="word-info__close" onClick={handleFavoriteClick}>
          {isFavorite ? "Remove from Favorites" : "Save to Favorites"}
        </div>
      </div>
      <div className="word-info__word-display">
        <p>{chosenWord}</p>
        <p>{wordInfo?.phonetic}</p>
      </div>
      <div className="word-info__audio-wrapper">
        {wordInfo.phonetics?.map((phonetic) => {
          return phonetic.audio ? (
            <audio controls>
              <source src={phonetic.audio} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <></>
          )
        })}
      </div>
      <h2 className="word-info__section-title">Meanings</h2>

      {wordInfo.meanings
        ?.map((meaning) => {
          return (
            <div className="word-info__meaning">
              <p className="word-info__part-of-speech">
                {meaning.partOfSpeech[0].toUpperCase() +
                  meaning.partOfSpeech.substring(1)}
              </p>
              <ul className="word-info__definition-list">
                {meaning.definitions?.map(({ definition }) => (
                  <li className="word-info__definition">{definition}</li>
                ))}
              </ul>
            </div>
          )
        })
        .filter((meaning, index) => index === meaningIndex)}
      <nav className="word-info__nav">
        <button
          className={`word-info__nav-item ${
            meaningIndex === 0 ? "word-info__nav-item--disabled" : ""
          }`}
          onClick={() => setMeaningIndex((prev) => prev - 1)}
        >
          Back
        </button>

        <button
          className={`word-info__nav-item ${
            wordInfo.meanings?.length - 1 === meaningIndex
              ? "word-info__nav-item--disabled"
              : ""
          }`}
          onClick={() => setMeaningIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </nav>
    </section>
  )
}
