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
    color: tokens.color.primary,
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
  background: tokens.color.card,
  transform: "translateX(100%)",
  transition: `transform 0.3s ease-in-out, ${tokens.motion.colorModeTransition}`,
  zIndex: 11,
  display: "flex",
  flexDirection: "column",
  padding: tokens.sizing["6"],
  paddingTop: tokens.sizing["10"],
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
    right: tokens.sizing["4"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: tokens.color.primary,
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
  borderTop: `1px solid color-mix(in srgb, ${tokens.color.grey} 30%, transparent)`,
  borderBottom: `1px solid color-mix(in srgb, ${tokens.color.grey} 30%, transparent)`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: tokens.sizing["4"],
})

export const sectionLabel = style({
  color: tokens.color.grey,
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
    color: tokens.color.primary,
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

export const socialButton = style([
  focusRing,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.sizing["1-half"],
    color: tokens.color.primary,
    fontSize: tokens.fontSize["200"],
    padding: `${tokens.sizing["1"]} ${tokens.sizing["2"]}`,
    background: "transparent",
    border: `1px solid color-mix(in srgb, ${tokens.color.grey} 50%, transparent)`,
    borderRadius: tokens.sizing["1"],
    opacity: 0.7,
    transition: "opacity 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
])
