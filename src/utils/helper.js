export const getWidthString = (span) => {
  if (!span) return
  const width = (span / 12) * 100
  return `flex: 0 0 ${width}%;max-width: ${width}%`
}
export const getStorage = (name) => localStorage.getItem(name)

export const setStorage = (name, value) => localStorage.setItem(name, value)
