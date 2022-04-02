import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function ThemeSwitch() {
  const { toggleTheme, getThemeIcon } = useContext(ThemeContext)

  return (
    <div
      className="theme-switch select-none cursor-pointer link-text mx-2"
      title="theme"
      onClick={toggleTheme}
    >
      <span className="text-sm md:hidden inline">
        Theme
      </span>
      {getThemeIcon()}
    </div>
  )
}