import { Theme } from "../types/theme";

export function detectThemeColor(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function loadTheme(): Theme {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    theme = 'auto';

    localStorage.setItem('theme', theme);
  }

  return theme as Theme;
}