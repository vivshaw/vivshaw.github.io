import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const centeringWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
})

export const mainpageLink = style({
  color: tokens.color.accent,
  opacity: 0.7,
  textDecoration: "underline",
  textDecorationColor: tokens.color.accent,
  textDecorationThickness: "1px",
  textUnderlineOffset: "2px",
  transition: tokens.motion.hoverTransition,

  ":hover": {
    opacity: 1,
  },
})

export const mainpageContent = style({
  maxWidth: "1440px",
  paddingRight: "calc(env(safe-area-inset-right) + 80px)",
  paddingLeft: "calc(env(safe-area-inset-right) + 80px)",
  paddingBottom: "50px",
  paddingTop: "80px",

  "@media": {
    [breakpoints.tablet]: {
      paddingRight: "24px",
      paddingLeft: "24px",
      paddingTop: "0px",
    },
  },
})

export const mainpageHeading = style({
  fontFamily: tokens.font.serif,
  fontWeight: 400,
  lineHeight: "1.4",
  fontSize: "62px",
  color: tokens.color.primary,
  marginTop: "calc(0.83em + 32px)",

  "@media": {
    [breakpoints.tablet]: {
      fontSize: "36px",
    },
  },
})
