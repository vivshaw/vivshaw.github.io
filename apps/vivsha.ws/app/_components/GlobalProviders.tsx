"use client"

import { ColorMode, BasaltProvider } from "@vivshaw/basalt/client"
import { PropsWithChildren } from "react"

import { COLOR_MODE_STORAGE_KEY } from "#data"

/**
 * Saves the site's color mode to localStorage. This allows the user's choice
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
    <BasaltProvider onUpdateColorMode={saveColorModeToLocalStorage}>
      {children}
    </BasaltProvider>
  )
}
