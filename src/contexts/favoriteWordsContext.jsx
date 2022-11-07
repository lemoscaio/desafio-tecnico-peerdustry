import { createContext, useMemo } from "react"
import { useFavoriteWords } from "../hooks/useFavoriteWords"

export const favoriteWordsContext = createContext()

export function FavoriteWordsProvider({ children }) {
  const { favoriteWords, addFavoriteWord, removeFavoriteWord } =
    useFavoriteWords()

  const value = useMemo(() => {
    return {
      favoriteWords,
      addFavoriteWord,
      removeFavoriteWord,
    }
  }, [favoriteWords])

  return (
    <favoriteWordsContext.Provider value={value}>
      {children}
    </favoriteWordsContext.Provider>
  )
}
