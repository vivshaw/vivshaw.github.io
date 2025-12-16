"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { DARK_COLOR_MODE_CLASS, LIGHT_COLOR_MODE_CLASS } from "../config"

export type ColorMode = "light" | "dark" | "system"
type ContextValues = {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
}

/**
 * Context for the Basalt theme.
 */
const BasaltContext = createContext<ContextValues>({
  colorMode: "system",
  setColorMode: () => {},
})

/**
 * Hook for accessing the Basalt theme.
 *
 * @returns {ContextValues} The current theme and a function to set the theme.
 */
export function useBasaltTheme(): ContextValues {
  const { colorMode, setColorMode } = useContext(BasaltContext)

  return { colorMode, setColorMode }
}

type BasaltProviderProps = {
  /**
   * A callback that can be used to respond when the color mode changes.
   * You might use this, for example, to save it in `localStorage` or send it to a backend.
   */
  onUpdateColorMode?: (colorMode: ColorMode) => void
}

/**
 * Provider for the Basalt color mode. It is fully _optional_! You only need this if you
 * wish to interact with Basalt's color mode at runtime.
 */
export function BasaltProvider({
  children,
  onUpdateColorMode,
}: React.PropsWithChildren<BasaltProviderProps>) {
  // Defaults to the system preference
  const [colorMode, setColorMode] = useState<ColorMode>("system")

  // On first load, populate the current color scheme.
  useEffect(() => {
    if (document.documentElement.classList.contains(DARK_COLOR_MODE_CLASS)) {
      setColorMode("dark")
    }
    if (document.documentElement.classList.contains(LIGHT_COLOR_MODE_CLASS))
      setColorMode("light")
  }, [])

  /**
   * Set the Basalt color mode.
   *
   * @param newColorMode - The color mode to set.
   */
  function setColorModeAndUpdateStyles(newColorMode: ColorMode) {
    setColorMode(newColorMode)

    document.documentElement.classList.remove(
      DARK_COLOR_MODE_CLASS,
      LIGHT_COLOR_MODE_CLASS,
    )

    switch (newColorMode) {
      case "dark":
        document.documentElement.classList.add(DARK_COLOR_MODE_CLASS)
        break
      case "light":
        document.documentElement.classList.add(LIGHT_COLOR_MODE_CLASS)
        break
      case "system":
      default:
        break
    }

    onUpdateColorMode?.(newColorMode)
  }

  return (
    <BasaltContext.Provider
      value={{
        colorMode,
        setColorMode: setColorModeAndUpdateStyles,
      }}
    >
      {children}
    </BasaltContext.Provider>
  )
}
