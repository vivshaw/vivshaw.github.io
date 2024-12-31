"use client"

import clsx from "clsx"

import { useViriditasTheme } from "#viriditas/context"
import { iconButton } from "./Navbar.css"
import { moonMask, moonOrSun, root } from "./DarkModeToggle.css"

export function DarkModeToggle() {
  const { theme, setTheme } = useViriditasTheme()
  const isDark = theme === "dark"

  function toggleColorMode() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className={clsx(iconButton, root)}
      onClick={toggleColorMode}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <div className={moonOrSun} />
      <div className={moonMask} />
    </button>
  )
}
