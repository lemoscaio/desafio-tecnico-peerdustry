import { useEffect, useState } from "react"
import { dictionaryApi } from "../api"

export function WordInfo({ chosenWord, setChosenWord }) {
  const [wordInfo, setWordInfo] = useState({})
  useEffect(() => {
    async function fetchWord() {
      const { data } = await dictionaryApi.get(`/${chosenWord}`)
      console.log(data)
      setWordInfo(data[0])
    }
    fetchWord()
  }, [])

  return (
    <section className="word-info">
      <div className="word-info__close" onClick={() => setChosenWord("")}>
        x
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
      {wordInfo.meanings?.map((meaning) => {
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
      })}
      <nav className="word-info__nav">
        <button className="word-info__nav-item">Voltar</button>
        <button className="word-info__nav-item">Próximo</button>
      </nav>
    </section>
  )
}
