import { createContext, useMemo } from "react"
import { useHistory } from "../hooks/useHistory"

export const historyWordsContext = createContext()

export function HistoryWordsProvider({ chosenWord, children }) {
  const { historyWords, addToHistory, clearHistory, cachedWord } =
    useHistory(chosenWord)

  const value = useMemo(() => {
    return {
      historyWords,
      addToHistory,
      clearHistory,
      cachedWord,
    }
  }, [historyWords])

  return (
    <historyWordsContext.Provider value={value}>
      {children}
    </historyWordsContext.Provider>
  )
}
