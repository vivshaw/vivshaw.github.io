import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"
import { focusRing } from "@vivshaw/viriditas/helpers"

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
  marginTop: tokens.spacing["24"],
  maxWidth: "1440px",
  paddingLeft: tokens.spacing["20"],
  paddingRight: tokens.spacing["20"],
  position: "relative",
  width: "100%",
  zIndex: 3,

  "@media": {
    [breakpoints.desktopMedium]: {
      marginTop: tokens.spacing["12"],
    },
    [breakpoints.tablet]: {
      paddingLeft: tokens.spacing["6"],
      paddingRight: tokens.spacing["6"],
      marginTop: tokens.spacing["5"],
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
    borderRadius: tokens.spacing["1"],
    display: "flex",
    gridArea: "right-button",
    height: tokens.spacing["6"],
    justifyContent: "center",
    position: "relative",
    width: tokens.spacing["10"],
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
  // By default, the control are in the top row, between the logo and dark mode toggle.
  alignItems: "center",
  display: "flex",
  gridArea: "controls",
  justifyContent: "flex-end",
  position: "relative",

  "@media": {
    [breakpoints.tablet]: {
      // On small screens, the controls go in a second row.
      gridArea: "sub-nav",
      justifyContent: "flex-start",
    },
  },
})

export const linkList = style({
  display: "flex",
  gap: tokens.spacing["6"],
  listStyle: "none",
  marginRight: tokens.spacing["8"],
})

export const link = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: tokens.fontSize["500"],
    lineHeight: tokens.lineHeight.heading,

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["400"],
        lineHeight: tokens.lineHeight.body,
      },
    },
  },
])
