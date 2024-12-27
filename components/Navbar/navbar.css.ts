import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const interactionHover = style({
  opacity: 0.5,
  transition: "opacity 0.3s ease",

  ":hover": {
    opacity: 1,
  },
})

export const iconButton = style([
  interactionHover,
  {
    alignItems: "center",
    borderRadius: "5px",
    display: "flex",
    height: "25px",
    justifyContent: "center",
    position: "relative",
    width: "40px",
  },
])

export const navContainer = style({
  display: "flex",
  height: "40px",
  justifyContent: "space-between",
  marginTop: "100px",
  maxWidth: "1440px",
  paddingLeft: `calc(env(safe-area-inset-right) + 80px)`,
  paddingRight: `calc(env(safe-area-inset-right) + 80px)`,
  position: "relative",
  width: "100%",
  zIndex: 3,

  "@media": {
    [breakpoints.desktopMedium]: {
      marginTop: "50px",
    },
    [breakpoints.tablet]: {
      paddingLeft: "24px",
      paddingRight: "24px",
      marginTop: "20px",
    },
  },
})

export const logoLink = style({
  color: tokens.color.primary,
  fontSize: "27px",
  transition: "color 0.3s ease",

  ":hover": {
    color: tokens.color.accent,
  },
})

export const navControls = style({
  alignItems: "center",
  display: "flex",
  position: "relative",

  "@media": {
    [breakpoints.tablet]: {
      display: "none",
    },
  },
})

export const navLinks = style({
  display: "flex",
  gap: "24px",
  listStyle: "none",
  marginRight: "30px",
})

export const pageLink = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: "27px",
  },
])
