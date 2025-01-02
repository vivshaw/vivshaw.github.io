import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas/theme"

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
  marginTop: "100px",
  maxWidth: "1440px",
  paddingLeft: "80px",
  paddingRight: "80px",
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
    gridArea: "right-button",
    height: "25px",
    justifyContent: "center",
    position: "relative",
    width: "40px",
  },
])

export const logoLink = style({
  color: tokens.color.primary,
  fontSize: "27px",
  gridArea: "logo",
  transition: "color 0.3s ease",

  ":hover": {
    color: tokens.color.accent,
  },
})

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
  gap: "24px",
  listStyle: "none",
  marginRight: "30px",
})

export const link = style([
  interactionHover,
  {
    color: tokens.color.primary,
    fontSize: "27px",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: "18px",
      },
    },
  },
])
