import React from "react";
import { detectThemeColor, loadTheme } from "../../utils";
import { Theme } from "../../types/theme";
import { ThemeIcon } from "../../types/theme-icon";

export const defaultTheme = loadTheme();

export const defaultThemeColor = defaultTheme === 'auto' ? detectThemeColor() : defaultTheme;

export const themeCases: Record<Theme, ThemeIcon> = {
  'light': "☀️",
  'dark': "🌙",
  'auto': "🌓"
}

interface ThemeContextInterface {
  themeColor: Theme;
  toggleTheme: () => void;
  getThemeIcon: () => ThemeIcon;
}

const ThemeContext: React.Context<ThemeContextInterface> = React.createContext({
  themeColor: defaultThemeColor,
  toggleTheme: () => {},
  getThemeIcon: () => themeCases['auto']
});

export default ThemeContext;