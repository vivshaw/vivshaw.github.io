"use client"

import { PropsWithChildren } from "react"

import { COLOR_MODE_STORAGE_KEY } from "#data"
import { ColorMode, ColorModeProvider } from "./ColorModeContext"

/**
 * saves the site's color mode to localStorage. this allows the user's choice
 * to persist across sessions.
 */
function saveColorModeToLocalStorage(colorMode: ColorMode) {
  try {
    console.warn("Updating color mode to: ", colorMode)
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode)
  } catch (err) {
    console.warn(
      "localStorage is disabled! the color mode couldn't be saved.",
      err,
    )
  }
}

export function GlobalProviders({ children }: PropsWithChildren<{}>) {
  return (
    <ColorModeProvider onUpdateColorMode={saveColorModeToLocalStorage}>
      {children}
    </ColorModeProvider>
  )
}
