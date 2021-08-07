import { useState, useEffect } from 'react'

// A hook to toggle the dark mode
const useDarkMode = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme'))
      ? JSON.parse(localStorage.getItem('theme'))
      : 'light'
  )
  const colorTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

export default useDarkMode
