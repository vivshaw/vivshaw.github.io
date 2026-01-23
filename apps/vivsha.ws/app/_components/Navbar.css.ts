import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/basalt"
import { focusRing } from "@vivshaw/basalt/helpers"

export const root = style({
  alignItems: "center",
  display: "grid",
  gridTemplateColumns: "min-content 1fr",
  gridTemplateRows: "auto",
  gridTemplateAreas: `"logo controls"`,
  height: `calc(${tokens.sizing["8"]} + ${tokens.sizing["3"]})`, // navbar height + padding
  justifyContent: "space-between",
  paddingTop: tokens.sizing["3"],
  paddingLeft: tokens.sizing["4"],
  paddingRight: tokens.sizing["4"],
  position: "relative",
  width: "100%",
  zIndex: 3,
})

export const interactionHover = style([
  {
    opacity: 0.5,
    transition: "opacity 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
  focusRing,
])

export const logoLink = style([
  {
    color: tokens.color.primary,
    fontSize: tokens.fontSize["500"],
    lineHeight: tokens.lineHeight.heading,
    gridArea: "logo",
    transition: "color 0.3s ease",

    selectors: {
      "&:hover, &:focus-visible": {
        color: tokens.color.accent,
      },
    },
  },
  focusRing,
])

export const controls = style({
  alignItems: "center",
  display: "flex",
  gridArea: "controls",
  justifyContent: "flex-end",
  position: "relative",
})

export const linkList = style({
  position: "absolute",
  top: `calc(${tokens.sizing["8"]} + ${tokens.sizing["3"]})`,
  left: tokens.sizing["4"],
  display: "flex",
  gap: tokens.sizing["4"],
  listStyle: "none",

  "@media": {
    [breakpoints.tablet]: {
      position: "static",
      gap: tokens.sizing["6"],
      gridArea: "controls",
      justifySelf: "end",
      marginRight: tokens.sizing["10"],
    },
  },
})

export const link = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: tokens.fontSize["300"],
    lineHeight: tokens.lineHeight.body,

    "@media": {
      [breakpoints.desktop]: {
        fontSize: tokens.fontSize["400"],
        lineHeight: tokens.lineHeight.heading,
      },
    },
  },
])
