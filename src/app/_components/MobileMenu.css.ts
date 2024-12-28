import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "#viriditas/theme/theme.css"
import { interactionHover } from "./Navbar.css"

export const container = style({
  display: "none",

  "@media": {
    [breakpoints.tablet]: {
      display: "block",
    },
  },
})

export const iconWrapper = style([
  interactionHover,
  {
    cursor: "pointer",
    height: "40px",
    width: "40px",
    zIndex: 3,
  },
])

export const contents = style({
  backgroundColor: tokens.color.background,
  height: 0,
  left: 0,
  overflow: "hidden",
  position: "fixed",
  transition: `${tokens.motion.colorModeTransition}, height 0.5s ease`,
  top: 0,
  width: "100vw",
  zIndex: -1,

  selectors: {
    "&.show": {
      height: "100vh",
    },
  },
})

export const linkList = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  listStyle: "none",
  marginTop: "80px",
  marginLeft: "32px",
})

export const link = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: "27px",
  },
])
