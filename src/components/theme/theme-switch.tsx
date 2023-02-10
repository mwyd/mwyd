import React from "react";
import { useContext } from "react";
import ThemeContext from "./theme-context";

const ThemeSwitch: React.FC = () => {
  const { toggleTheme, getThemeIcon } = useContext(ThemeContext);

  return (
    <button
      className="theme-switch select-none cursor-pointer link-text mx-2"
      title="theme-switch"
      type="button"
      onClick={toggleTheme}
    >
      <span className="text-sm md:hidden inline">
        Theme
      </span>
      {getThemeIcon()}
    </button>
  );
}

export default ThemeSwitch;