import { style } from "@vanilla-extract/css"

import { tokens } from "@vivshaw/basalt"
import { focusRing } from "@vivshaw/basalt/helpers"

export const container = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  height: "32px",
  padding: tokens.sizing["half"],
  borderRadius: "9999px",
  border: `1px solid color-mix(in srgb, ${tokens.color.borderMuted} 50%, transparent)`,
})

export const button = style([
  focusRing,
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    padding: 0,
    border: "none",
    borderRadius: "50%",
    background: "transparent",
    color: tokens.color.textMuted,
    cursor: "pointer",
    transition: "color 0.2s ease",
    zIndex: 1,

    selectors: {
      "&:hover": {
        color: tokens.color.textDefault,
      },
    },
  },
])

export const buttonActive = style({
  color: tokens.color.textDefault,
})

export const indicator = style({
  position: "absolute",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  background: tokens.color.backgroundDefault,
  transition: "transform 0.25s ease",
  zIndex: 0,
})

export const indicatorSystem = style({
  transform: "translateX(0)",
})

export const indicatorLight = style({
  transform: "translateX(24px)",
})

export const indicatorDark = style({
  transform: "translateX(48px)",
})
