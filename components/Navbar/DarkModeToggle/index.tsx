import { useViriditasTheme } from "@viriditas/context"
import { iconButton } from "../navbar.css"
import { moonMask, moonOrSun } from "./darkModeToggle.css"

export function DarkModeToggle() {
  const { theme, setTheme } = useViriditasTheme()
  const isDark = theme === "dark"

  function toggleColorMode() {
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
      <div className={moonOrSun({ mode: theme })} />
      <div className={moonMask({ mode: theme })} />
    </button>
  )
}
