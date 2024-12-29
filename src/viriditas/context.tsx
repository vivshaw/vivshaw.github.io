"use client"

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"
import { darkTheme, lightTheme } from "./theme/theme.css"

export const VIRIDITAS_THEME_STORAGE_KEY = "viriditas-color-theme"
const PREFERS_DARK_QUERY = "(prefers-color-scheme: dark)"
const PREFERS_LIGHT_QUERY = "(prefers-color-scheme: light)"

type Themes = "light" | "dark"
type ThemeContextValues = {
  theme: Themes
  setTheme: (theme: Themes) => void
}

/**
 * Hack to let us use `useLayoutEffect` without NextJS complaining.
 * See: https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * Storage helpers for the Viriditas theme. Viriditas must store a single value in localStorage:
 * the user-selected color theme.
 */
const storage = {
  get: function (): Themes | undefined {
    try {
      return window.localStorage.getItem(VIRIDITAS_THEME_STORAGE_KEY) as Themes
    } catch (err) {
      console.warn(
        "localStorage is disabled and color mode might not work as expected.",
        err,
      )
    }
  },
  set: function (value: Themes) {
    try {
      window.localStorage.setItem(VIRIDITAS_THEME_STORAGE_KEY, value)
    } catch (err) {
      console.warn(
        "localStorage is disabled and color mode might not work as expected.",
        err,
      )
    }
  },
}

/**
 * Get the user's `prefers-color-scheme` value, if it is "light" or "dark".
 */
function getPrefersColorScheme(): Themes | null {
  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia(PREFERS_DARK_QUERY).matches) {
      return "dark"
    }

    if (window.matchMedia(PREFERS_LIGHT_QUERY).matches) {
      return "light"
    }
  }

  return null
}

/**
 * Context for the Viriditas theme.
 */
const ViriditasContext = createContext<ThemeContextValues>({
  theme: "light",
  setTheme: (theme: Themes) => {},
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
  const [selectedTheme, setSelectedTheme] = useState<Themes>("light")

  // Once on first load, set the theme based on the user's localStorage or `prefers-color-scheme`.
  useIsomorphicLayoutEffect(() => {
    const stored = storage.get()

    if (stored) {
      // If the user has set a theme in localStorage, that'll be our source of truth.
      setSelectedTheme(stored)
    } else {
      const preferredTheme = getPrefersColorScheme()
      if (preferredTheme) {
        // In the absence of a user-set theme, default to the user's `prefers-color-scheme`.
        // Also, store that theme in localStorage so we can use it next time.
        storage.set(preferredTheme)
        setSelectedTheme(preferredTheme)
      }
    }

    // Otherwise do nothing! We'll stick with the default light theme.
  }, [])

  /**
   * Set the Viriditas theme.
   *
   * @param theme - The theme to set.
   */
  function setTheme(theme: Themes) {
    storage.set(theme)
    setSelectedTheme(theme)
  }

  const themeStyles = selectedTheme === "light" ? lightTheme : darkTheme

  return (
    <ViriditasContext.Provider
      value={{
        theme: selectedTheme,
        setTheme,
      }}
    >
      <div className={themeStyles}>{children}</div>
    </ViriditasContext.Provider>
  )
}
