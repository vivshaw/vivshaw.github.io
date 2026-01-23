"use client"

import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

import { ColorMode, useColorMode } from "./ColorModeContext"
import {
  button,
  buttonActive,
  container,
  indicator,
  indicatorDark,
  indicatorLight,
  indicatorSystem,
} from "./ThemeSwitcher.css"

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

export function ThemeSwitcher() {
  const { colorMode, setColorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
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
          onClick={() => setColorMode(key)}
        >
          <FontAwesomeIcon icon={icon} size="sm" />
        </button>
      ))}
    </div>
  )
}
