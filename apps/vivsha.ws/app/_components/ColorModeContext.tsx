"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { DARK_COLOR_MODE_CLASS, LIGHT_COLOR_MODE_CLASS } from "@vivshaw/basalt"

export type ColorMode = "light" | "dark" | "system"

type ContextValues = {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
}

const ColorModeContext = createContext<ContextValues>({
  colorMode: "system",
  setColorMode: () => {},
})

/**
 * Hook for accessing the current color mode.
 */
export function useColorMode(): ContextValues {
  const { colorMode, setColorMode } = useContext(ColorModeContext)
  return { colorMode, setColorMode }
}

type ColorModeProviderProps = {
  /**
   * A callback that fires when the color mode changes.
   * Use this to persist the preference (e.g., to localStorage).
   */
  onUpdateColorMode?: (colorMode: ColorMode) => void
}

/**
 * Provider for managing the site's color mode.
 */
export function ColorModeProvider({
  children,
  onUpdateColorMode,
}: React.PropsWithChildren<ColorModeProviderProps>) {
  const [colorMode, setColorMode] = useState<ColorMode>("system")

  // On first load, detect the current color scheme from the DOM.
  useEffect(() => {
    if (document.documentElement.classList.contains(DARK_COLOR_MODE_CLASS)) {
      setColorMode("dark")
    }
    if (document.documentElement.classList.contains(LIGHT_COLOR_MODE_CLASS)) {
      setColorMode("light")
    }
  }, [])

  /**
   * Set the color mode and update the document classes.
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
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setColorModeAndUpdateStyles,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
