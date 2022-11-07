import { useLocalStorage } from "./useLocalStorage"

export function useFavoriteWords() {
  const [favoriteWords, setFavoriteWords] = useLocalStorage(
    "favorite_words",
    [],
  )

  function addFavoriteWord(word) {
    const newFavoriteWords = [...favoriteWords, word]
    setFavoriteWords([...newFavoriteWords])
  }

  function removeFavoriteWord(word) {
    const newFavoriteWords = favoriteWords.filter(
      (favoriteWord) => favoriteWord !== word,
    )
    setFavoriteWords([...newFavoriteWords])
  }

  return {
    favoriteWords,
    addFavoriteWord,
    removeFavoriteWord,
  }
}
