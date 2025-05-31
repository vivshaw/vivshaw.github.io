import { style } from "@vanilla-extract/css"
import { focusRing } from "@vivshaw/viriditas/helpers"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const centeringWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  /** avoid layout shift when there's a scrollbar */
  paddingLeft: "calc(100vw - 100%)",

  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: 0,
    },
  },
})

export const mainpageContent = style({
  maxWidth: "1440px",
  paddingRight: "80px",
  paddingLeft: "80px",
  paddingBottom: "50px",
  paddingTop: "80px",
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      paddingRight: "24px",
      paddingLeft: "24px",
      paddingTop: "40px",
    },
  },
})

export const mainpageLink = style([
  {
    color: tokens.color.accent,
    opacity: 0.7,
    textDecoration: "underline",
    textDecorationColor: tokens.color.accent,
    textDecorationThickness: "1px",
    textUnderlineOffset: "2px",
    transition: tokens.motion.hoverTransition,

    selectors: {
      "&:hover, &:focus-visible": {
        opacity: 1,
      },
    },
  },
  focusRing,
])

export const mainpageHeading = style({
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
  fontWeight: tokens.fontWeight.normal,
  fontSize: tokens.fontSize["6xl"],
  lineHeight: tokens.lineHeight["6xl"],

  "@media": {
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["4xl"],
      lineHeight: tokens.lineHeight["4xl"],
    },
  },

  selectors: {
    "&:not(:first-of-type)": {
      marginTop: "calc(0.83em + 32px)",
    },
  },
})
