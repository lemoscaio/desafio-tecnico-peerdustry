import { useEffect, useState } from "react"
import { api } from "./api"
import { WordController } from "./components/WordController"
import { WordInfo } from "./components/WordInfo"

function App() {
  const [words, setWords] = useState([])
  const [chosenNavItem, setChosenNavItem] = useState("Word List")
  const [chosenWord, setChosenWord] = useState("")

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("/words?_limit=200")
      setWords(data)
    }
    fetchData()
  }, [])

  return chosenWord.length === 0 ? (
    <WordController
      words={words}
      chosenNavItem={chosenNavItem}
      setChosenNavItem={setChosenNavItem}
      chosenWord={chosenWord}
      setChosenWord={setChosenWord}
    />
  ) : (
    <WordInfo chosenWord={chosenWord} setChosenWord={setChosenWord} />
  )
}

export default App
