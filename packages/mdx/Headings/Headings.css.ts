import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas"

const commonStyles = style({
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
  fontFeatureSettings: tokens.fontFeatureSettings.serif,
  fontWeight: tokens.fontWeight.normal,
  lineHeight: tokens.lineHeight.heading,
  wordBreak: "keep-all",
})

export const heading1 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize["700"],

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["500"],
      },
    },
  },
])

export const heading2 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize["600"],
    marginBottom: tokens.sizing["5"],

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["400"],
      },
    },
  },
])
