import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/basalt"
import { focusRing } from "@vivshaw/basalt/helpers"

export const hamburgerButton = style([
  focusRing,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "36px",
    height: "36px",
    padding: tokens.sizing["2"],
    marginLeft: tokens.sizing["4"],
    marginRight: `calc(-1 * ${tokens.sizing["2"]})`,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: tokens.color.textDefault,
    opacity: 0.5,
    transition: "opacity 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
])

export const panel = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  background: tokens.color.backgroundSecondary,
  transform: "translateX(100%)",
  transition: `transform 0.3s ease-in-out, ${tokens.motion.colorModeTransition}`,
  zIndex: 11,
  display: "flex",
  flexDirection: "column",
  padding: tokens.sizing["6"],
  paddingTop: tokens.sizing["10"],
  paddingRight: tokens.sizing["5"], // align content with X icon (accounts for button's internal padding)
  overflowY: "auto",
  fontFamily: tokens.font.sans,

  "@media": {
    [breakpoints.tablet]: {
      width: "28rem",
    },
  },
})

export const panelOpen = style({
  transform: "translateX(0)",
})

export const closeButton = style([
  focusRing,
  {
    position: "absolute",
    top: tokens.sizing["3"],
    right: `calc(${tokens.sizing["4"]} - ${tokens.sizing["2"]})`, // align with hamburger
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: tokens.color.textDefault,
    opacity: 0.5,
    transition: "opacity 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
])

export const themeSwitcherPosition = style({
  position: "absolute",
  top: tokens.sizing["3"],
  left: tokens.sizing["6"],
})

export const section = style({
  marginTop: tokens.sizing["4"],
  marginBottom: tokens.sizing["1"],
  borderTop: `1px solid color-mix(in srgb, ${tokens.color.borderMuted} 30%, transparent)`,
  borderBottom: `1px solid color-mix(in srgb, ${tokens.color.borderMuted} 30%, transparent)`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: tokens.sizing["4"],
})

export const sectionLabel = style({
  color: tokens.color.textMuted,
  fontSize: tokens.fontSize["300"],
  paddingTop: tokens.sizing["1"],
})

export const navList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  textAlign: "right",
})

export const navLink = style([
  focusRing,
  {
    color: tokens.color.textDefault,
    fontSize: tokens.fontSize["400"],
    lineHeight: tokens.lineHeight.body,
    opacity: 0.7,
    transition: "opacity 0.3s ease",
    display: "block",
    padding: `${tokens.sizing["1"]} 0`,

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
])

export const socialSection = style({
  paddingTop: tokens.sizing["2"],
})

export const socialList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
})

export const colophonLink = style([
  focusRing,
  {
    marginTop: "auto",
    marginBottom: `calc(-1 * ${tokens.sizing["3"]})`,
    paddingTop: tokens.sizing["6"],
    textAlign: "center",
    fontFamily: tokens.font.sans,
    fontSize: tokens.fontSize["100"],
    color: tokens.color.textMuted,
    opacity: 0.6,
    transition: "opacity 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
])
