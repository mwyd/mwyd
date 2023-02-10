import React, { useEffect, useState } from "react";
import { detectThemeColor } from "../../utils";
import ThemeContext, { defaultTheme, defaultThemeColor, themeCases } from "./theme-context";
import { Theme } from "../../types/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const [themeColor, setThemeColor] = useState(defaultThemeColor);

  const toggleTheme = () => {
    const cases = Object.keys(themeCases) as Theme[];

    const currentIndex = cases.indexOf(theme)

    const nextTheme = cases[currentIndex >= cases.length - 1 ? 0 : currentIndex + 1]

    setThemeColor(nextTheme === 'auto' ? detectThemeColor() : nextTheme)

    setTheme(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }

  const getThemeIcon = () => {
    return themeCases[theme];
  }

  useEffect(() => {
    if (themeColor === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeColor]);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') !== 'auto') {
        return
      }

      setThemeColor(e.matches ? 'dark' : 'light')
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme, getThemeIcon }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;