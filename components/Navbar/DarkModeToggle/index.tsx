import { useColorMode } from "theme-ui"

import { useViriditasTheme } from "@viriditas/context"
import { iconButton } from "../navbar.css"
import {
  moonMask,
  moonMaskDark,
  moonMaskLight,
  moonOrSun,
  moonOrSunDark,
  moonOrSunLight,
} from "./darkModeToggle.css"

export function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode()
  const { theme, setTheme } = useViriditasTheme()
  const isDark = theme === "dark"

  function toggleColorMode() {
    setColorMode(colorMode === "dark" ? "light" : "dark")
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className={iconButton}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <div
        className={`${moonOrSun} ${isDark ? moonOrSunDark : moonOrSunLight}`}
      />
      <div className={`${moonMask} ${isDark ? moonMaskDark : moonMaskLight}`} />
    </button>
  )
}
