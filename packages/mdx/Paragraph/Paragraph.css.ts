import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas"

/**
 * will be used to style the first the words as smallcaps
 */
export const firstThree = style({})

export const paragraph = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontFeatureSettings: tokens.fontFeatureSettings.serif,
  fontSize: tokens.fontSize["500"],
  hyphens: "auto",
  lineHeight: tokens.lineHeight.body,
  marginBottom: tokens.sizing["8"],
  marginTop: 0,
  textWrap: "pretty",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["300"],
      marginBottom: tokens.sizing["6"],
      marginTop: 0,
    },
  },
})
