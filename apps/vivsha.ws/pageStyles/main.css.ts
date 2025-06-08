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
  paddingRight: tokens.sizing["20"],
  paddingLeft: tokens.sizing["20"],
  paddingBottom: tokens.sizing["12"],
  paddingTop: tokens.sizing["20"],
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      paddingRight: tokens.sizing["6"],
      paddingLeft: tokens.sizing["6"],
      paddingTop: tokens.sizing["10"],
    },
  },
})

export const mainpageLink = style([
  {
    color: tokens.color.accent,
    opacity: 0.7,
    textDecoration: "underline",
    textDecorationColor: tokens.color.accent,
    textDecorationThickness: tokens.sizing["0-quarter"],
    textUnderlineOffset: tokens.sizing["0-half"],
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
  fontSize: tokens.fontSize["600"],
  lineHeight: tokens.lineHeight.heading,

  "@media": {
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["600"],
      lineHeight: tokens.lineHeight.heading,
    },
  },

  selectors: {
    "&:not(:first-of-type)": {
      marginTop: `calc(0.83em + ${tokens.sizing["8"]})`,
    },
  },
})
