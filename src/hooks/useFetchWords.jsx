import axios from "axios"
import { useEffect, useState } from "react"
import { api } from "../api"

export function useFetchWords(quantity, page) {
  const [words, setWords] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchWords() {
      try {
        const response = await api.get(
          `/words?_limit=${quantity}&_page=${page}`,
          {
            signal: controller.signal,
          },
        )
        const { data } = response
        setWords((prevWords) => [...prevWords, ...data])
      } catch (error) {
        if (controller.signal.aborted) return
        console.log(error)
      }
    }

    fetchWords()

    return () => controller.abort()
  }, [quantity, page])

  return { words }
}
