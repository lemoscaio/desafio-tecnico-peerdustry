import { useState } from "react"
import { WordController } from "./components/WordController"
import { WordInfo } from "./components/WordInfo"

function App() {
  const [chosenWord, setChosenWord] = useState("")

  return chosenWord.length === 0 ? (
    <WordController chosenWord={chosenWord} setChosenWord={setChosenWord} />
  ) : (
    <WordInfo chosenWord={chosenWord} setChosenWord={setChosenWord} />
  )
}

export default App
