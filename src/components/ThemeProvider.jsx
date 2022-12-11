import React, { useEffect, useState } from 'react'
import themeEnum from '../enums/themeEnum'
import { detectThemeColor, loadTheme } from '../utils'

const defaultTheme = loadTheme()

const defaultThemeColor = defaultTheme === themeEnum.AUTO ? detectThemeColor() : defaultTheme

const ThemeContext = React.createContext({
  themeColor: defaultThemeColor,
  toggleTheme: () => {},
  getThemeIcon: () => {}
})

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme)

  const [themeColor, setThemeColor] = useState(defaultThemeColor)

  const toggleTheme = () => {
    const themeCases = Object.values(themeEnum)

    const currentIndex = themeCases.indexOf(theme)

    const nextTheme = themeCases[currentIndex >= themeCases.length - 1 ? 0 : currentIndex + 1]

    setThemeColor(nextTheme === themeEnum.AUTO ? detectThemeColor() : nextTheme)

    setTheme(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }

  const getThemeIcon = () => {
    if (theme === themeEnum.LIGHT) {
      return '☀️'
    }

    if (theme === themeEnum.DARK) {
      return '🌙'
    }

    return '🌓'
  }

  useEffect(() => {
    if (themeColor === themeEnum.DARK) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [themeColor])

  useEffect(() => {
    const listener = (e) => {
      if (localStorage.getItem('theme') !== themeEnum.AUTO) {
        return
      }

      setThemeColor(e.matches ? themeEnum.DARK : themeEnum.LIGHT)
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [])

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme, getThemeIcon }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext
}