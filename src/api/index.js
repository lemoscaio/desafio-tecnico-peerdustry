import axios from "axios"

const DATABASE_URL = import.meta.env.VITE_APP_DATABASE_URL
const DICTIONARY_API_URL = import.meta.env.VITE_APP_DICTIONARY_API_URL

export const api = axios.create({ baseURL: DATABASE_URL })

export const dictionaryApi = axios.create({
  baseURL: DICTIONARY_API_URL,
})
