import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const image = style({
  borderRadius: "0",
  display: "inline-block",
  height: "auto",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      borderRadius: tokens.sizing["1"],
    },
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["0"]} auto ${tokens.sizing["8"]}`,
    },
  },
})
