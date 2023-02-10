import React from "react";
import useTheme, { toggleTheme } from "../hooks/use-theme";

export default function ThemeSwitch() {
  const { icon: themeIcon } = useTheme();

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
      {themeIcon}
    </button>
  );
}