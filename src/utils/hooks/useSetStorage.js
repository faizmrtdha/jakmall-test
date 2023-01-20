import { useEffect } from "react"

export const useSetStorage = (name, value) => {
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value))
  }, [name, value])
  return
}
