import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const paragraphStyle = style({
  marginBottom: tokens.sizing["6"],

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: tokens.sizing["8"],
    },
  },
})
