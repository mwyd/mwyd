import themeEnum from '../enums/themeEnum'

const detectThemeColor = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? themeEnum.DARK : themeEnum.LIGHT

const loadTheme = () => {
  let theme = localStorage.getItem('theme')

  if (!theme) {
    theme = themeEnum.AUTO

    localStorage.setItem('theme', theme)
  }

  return theme
}

export {
  detectThemeColor,
  loadTheme
}