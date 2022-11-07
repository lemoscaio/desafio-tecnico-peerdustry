import { useContext, useState } from "react"
import { favoriteWordsContext } from "../contexts/favoriteWordsContext"
import { historyWordsContext } from "../contexts/historyWordsContext"
import { useFetchWords } from "../hooks/useFetchWords"
import { NavBar } from "./Navbar"
import { WordList } from "./WordList"

export function WordController({ chosenWord, setChosenWord }) {
  const [chosenNavItem, setChosenNavItem] = useState("Word List")

  const [wordPage, setWordPage] = useState(1)
  const WORD_QUANTITY = 48

  const { words } = useFetchWords(WORD_QUANTITY, wordPage)
  const { historyWords, clearHistory } = useContext(historyWordsContext)
  const { favoriteWords } = useContext(favoriteWordsContext)

  const wordList = {
    "Word List": words,
    "History": historyWords,
    "Favorites": favoriteWords,
  }

  function handleClearHistory() {
    clearHistory()
  }

  return (
    <div className="word-controller">
      <NavBar
        chosenNavItem={chosenNavItem}
        setChosenNavItem={setChosenNavItem}
      />
      <p className="word-controller__title">Word List</p>
      <WordList
        words={wordList[chosenNavItem]}
        chosenWord={chosenWord}
        setChosenWord={setChosenWord}
        setWordPage={setWordPage}
      />
      <footer className="word-controller__footer">
        {chosenNavItem === "History" && (
          <button
            onClick={handleClearHistory}
            className="word-controller__footer-button"
          >
            Clear History
          </button>
        )}
      </footer>
    </div>
  )
}
