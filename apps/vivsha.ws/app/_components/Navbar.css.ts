import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"
import { focusRing } from "@vivshaw/basalt/helpers"

export const root = style({
  alignItems: "center",
  display: "grid",
  gridTemplateColumns: "min-content 1fr min-content",
  gridTemplateRows: "auto",
  gridTemplateAreas: `
    "logo    controls right-button"
    "sub-nav sub-nav  sub-nav"
  `,
  justifyContent: "space-between",
  paddingTop: tokens.sizing["5"],
  paddingLeft: tokens.sizing["6"],
  paddingRight: tokens.sizing["6"],
  position: "relative",
  width: "100%",
  zIndex: 3,

  "@media": {
    [breakpoints.desktop]: {
      paddingTop: tokens.sizing["6"],
      paddingRight: tokens.sizing["5"],
    },
  },
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

export const iconButton = style([
  interactionHover,
  {
    alignItems: "center",
    borderRadius: tokens.sizing["1"],
    display: "flex",
    gridArea: "right-button",
    height: tokens.sizing["6"],
    justifyContent: "center",
    position: "relative",
    width: tokens.sizing["10"],
  },
])

export const logoLink = style([
  {
    color: tokens.color.primary,
    fontSize: tokens.fontSize["600"],
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
  // On small screens, the controls go in a second row.
  alignItems: "center",
  display: "flex",
  gridArea: "sub-nav",
  justifyContent: "flex-start",
  position: "relative",

  "@media": {
    [breakpoints.desktop]: {
      // On larger screens, the controls are in the top row, between the logo and dark mode toggle.
      gridArea: "controls",
      justifyContent: "flex-end",
    },
  },
})

export const linkList = style({
  display: "flex",
  gap: tokens.sizing["6"],
  listStyle: "none",
  marginRight: tokens.sizing["8"],
})

export const link = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: tokens.fontSize["400"],
    lineHeight: tokens.lineHeight.body,

    "@media": {
      [breakpoints.desktop]: {
        fontSize: tokens.fontSize["500"],
        lineHeight: tokens.lineHeight.heading,
      },
    },
  },
])
