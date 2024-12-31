"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  COLOR_MODE_STORAGE_KEY,
} from "./theme/theme.css"

type Themes = "light" | "dark"
type ThemeContextValues = {
  theme: Themes | null
  setTheme: (theme: Themes) => void
}

/**
 * Context for the Viriditas theme.
 */
const ViriditasContext = createContext<ThemeContextValues>({
  theme: null,
  setTheme: () => {},
})

/**
 * Hook for accessing the Viriditas theme.
 *
 * @returns {ThemeContextValues} The current theme and a function to set the theme.
 */
export function useViriditasTheme(): ThemeContextValues {
  const { theme, setTheme } = useContext(ViriditasContext)

  return { theme, setTheme }
}

/**
 * Provider for the Viriditas theme. Viriditas components must be wrapped in this.
 */
export function ViriditasProvider({ children }: React.PropsWithChildren<{}>) {
  // Default to light theme.
  // TODO: Could this be set in global CSS? using `prefers-color-scheme`? That might avoid the FOUC.
  const [selectedTheme, setSelectedTheme] = useState<Themes | null>(null)

  // On first load, populate the current color scheme.
  useEffect(() => {
    setSelectedTheme(
      document.documentElement.classList.contains(DARK_COLOR_MODE_CLASS)
        ? "dark"
        : "light",
    )
  }, [])
  /**
   * Set the Viriditas theme.
   *
   * @param theme - The theme to set.
   */
  function setTheme(theme: Themes) {
    setSelectedTheme(theme)

    const newClass =
      theme === "dark" ? DARK_COLOR_MODE_CLASS : LIGHT_COLOR_MODE_CLASS

    document.documentElement.classList.remove(
      DARK_COLOR_MODE_CLASS,
      LIGHT_COLOR_MODE_CLASS,
    )
    document.documentElement.classList.add(newClass)

    try {
      localStorage.setItem(COLOR_MODE_STORAGE_KEY, theme)
    } catch (err) {
      console.warn(
        "localStorage is disabled! the color mode couldn't be saved.",
        err,
      )
    }
  }

  return (
    <ViriditasContext.Provider
      value={{
        theme: selectedTheme,
        setTheme,
      }}
    >
      {children}
    </ViriditasContext.Provider>
  )
}
