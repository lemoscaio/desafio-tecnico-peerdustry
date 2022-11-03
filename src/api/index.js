import axios from "axios"

export const api = axios.create({ baseURL: "http://localhost:3000" })

export const dictionaryApi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
})
