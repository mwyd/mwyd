import { ThemeColor, ThemeMode } from "../types/theme";

export function detectThemeColor(): ThemeColor {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function loadThemeMode(): ThemeMode {
  let theme = localStorage.getItem('theme');

  if (theme === null) {
    theme = 'auto';
  }

  return theme as ThemeMode;
}