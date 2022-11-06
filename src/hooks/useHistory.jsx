import { useLocalStorage } from "./useLocalStorage"

export function useHistory(word = null) {
  const [historyWords, setHistoryWords] = useLocalStorage("history_words", [])

  const cachedWord = (() => {
    if (word) {
      return (
        historyWords.find((historyWord) => word === historyWord.word) || null
      )
    }
    return null
  })()

  function clearHistory() {
    setHistoryWords([])
  }

  function addToHistory(word) {
    if (!historyWords.find((historyWord) => historyWord.word === word.word))
      setHistoryWords([...historyWords, word])
  }

  const historyWordsList = historyWords.map((historyWord) => historyWord.word)

  return {
    historyWords: historyWordsList,
    addToHistory,
    clearHistory,
    cachedWord,
  }
}
