import { NavBar } from "./Navbar"
import { WordList } from "./WordList"

export function WordController({
  words,
  chosenNavItem,
  setChosenNavItem,
  chosenWord,
  setChosenWord,
}) {
  return (
    <div className="word-controller">
      <NavBar
        chosenNavItem={chosenNavItem}
        setChosenNavItem={setChosenNavItem}
      />
      <p>Word List</p>
      <WordList
        words={words}
        chosenWord={chosenWord}
        setChosenWord={setChosenWord}
      />
    </div>
  )
}
