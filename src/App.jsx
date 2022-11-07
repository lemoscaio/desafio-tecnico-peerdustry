import { useState } from "react"
import { WordController } from "./components/WordController"
import { WordInfo } from "./components/WordInfo"
import { FavoriteWordsProvider } from "./contexts/favoriteWordsContext"
import { HistoryWordsProvider } from "./contexts/historyWordsContext"
import { useWindowSize } from "./hooks/useWindowSize"

function App() {
  const [chosenWord, setChosenWord] = useState("")
  const windowSize = useWindowSize()

  return (
    <HistoryWordsProvider chosenWord={chosenWord}>
      <FavoriteWordsProvider>
        {windowSize.width > 940 ? (
          <section className="desktop-wrapper">
            <WordInfo chosenWord={chosenWord} setChosenWord={setChosenWord} />
            <WordController
              chosenWord={chosenWord}
              setChosenWord={setChosenWord}
            />
          </section>
        ) : chosenWord.length === 0 ? (
          <WordController
            chosenWord={chosenWord}
            setChosenWord={setChosenWord}
          />
        ) : (
          <WordInfo chosenWord={chosenWord} setChosenWord={setChosenWord} />
        )}
      </FavoriteWordsProvider>
    </HistoryWordsProvider>
  )
}

export default App
