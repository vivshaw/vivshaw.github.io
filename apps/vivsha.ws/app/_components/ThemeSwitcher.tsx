"use client"

import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DARK_COLOR_MODE_CLASS, LIGHT_COLOR_MODE_CLASS } from "@vivshaw/basalt"
import { useEffect, useState } from "react"

import { COLOR_MODE_STORAGE_KEY } from "#data"
import {
  button,
  buttonActive,
  container,
  indicator,
  indicatorDark,
  indicatorLight,
  indicatorSystem,
} from "./ThemeSwitcher.css"

type ColorMode = "light" | "dark" | "system"

const themes: { key: ColorMode; icon: typeof faDesktop; label: string }[] = [
  { key: "system", icon: faDesktop, label: "System theme" },
  { key: "light", icon: faSun, label: "Light theme" },
  { key: "dark", icon: faMoon, label: "Dark theme" },
]

const indicatorPositions: Record<ColorMode, string> = {
  system: indicatorSystem,
  light: indicatorLight,
  dark: indicatorDark,
}

/**
 * reads the user's color mode preference from localStorage.
 */
function getStoredColorMode(): ColorMode {
  try {
    const stored = localStorage.getItem(COLOR_MODE_STORAGE_KEY)
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored
    }
  } catch {
    // localStorage unavailable
  }
  return "system"
}

/**
 * applies a color mode by updating DOM classes and persisting to localStorage.
 */
function applyStoredColorMode(mode: ColorMode) {
  document.documentElement.classList.remove(
    DARK_COLOR_MODE_CLASS,
    LIGHT_COLOR_MODE_CLASS,
  )

  if (mode === "dark") {
    document.documentElement.classList.add(DARK_COLOR_MODE_CLASS)
  } else if (mode === "light") {
    document.documentElement.classList.add(LIGHT_COLOR_MODE_CLASS)
  }
  // "system" means no explicit class - CSS handles via prefers-color-scheme

  try {
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, mode)
  } catch {
    // localStorage unavailable
  }
}

export function ThemeSwitcher() {
  const [colorMode, setColorMode] = useState<ColorMode>(getStoredColorMode())

  function handleSetColorMode(mode: ColorMode) {
    setColorMode(mode)
    applyStoredColorMode(mode)
  }

  return (
    <div className={container}>
      <div className={`${indicator} ${indicatorPositions[colorMode]}`} />
      {themes.map(({ key, icon, label }) => (
        <button
          key={key}
          type="button"
          aria-label={label}
          aria-pressed={colorMode === key}
          className={`${button} ${colorMode === key ? buttonActive : ""}`}
          onClick={() => handleSetColorMode(key)}
        >
          <FontAwesomeIcon icon={icon} size="sm" />
        </button>
      ))}
    </div>
  )
}
