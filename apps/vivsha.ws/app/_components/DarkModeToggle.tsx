"use client"

import clsx from "clsx"

import { useColorMode } from "./ColorModeContext"
import { moonMask, moonOrSun, root } from "./DarkModeToggle.css"
import { iconButton } from "./Navbar.css"

export function DarkModeToggle() {
  const { colorMode, setColorMode } = useColorMode()

  const isDark = (() => {
    switch (colorMode) {
      case "light":
        return false
      case "dark":
        return true
      case "system":
      default:
        if (typeof window !== "undefined") {
          return window.matchMedia("(prefers-color-scheme: dark)").matches
        }
        return true
    }
  })()

  function toggleColorMode() {
    setColorMode(isDark ? "light" : "dark")
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
