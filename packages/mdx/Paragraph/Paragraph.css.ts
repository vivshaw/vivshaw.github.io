import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

/**
 * this class wraps the first three words of each paragraph.
 * it can be used to style those words as smallcaps
 */
export const firstThree = style({})

export const paragraphStyle = style({
  marginBottom: tokens.sizing["8"],

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: tokens.sizing["6"],
    },
  },
})
