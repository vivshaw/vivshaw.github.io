import { globalStyle, style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"
import { darkModeStyles, lightModeStyles } from "@vivshaw/basalt/helpers"

export const blockquote = style([
  {
    color: tokens.color.textDefault,
    fontFamily: tokens.font.serif,
    fontStyle: "italic",
    margin: `0 auto ${tokens.sizing["6"]}`,
    paddingLeft: tokens.sizing["5"],
    backgroundPosition: "left",
    backgroundRepeat: "repeat-y",
    transition: tokens.motion.colorModeTransition,

    "@media": {
      [breakpoints.desktop]: {
        margin: `0 auto ${tokens.sizing["8"]}`,
      },
    },
  },
  darkModeStyles({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='1.5' transform='rotate(60 0 0)' fill='%2350525B'/%3E%3C/svg%3E")`,
  }),
  lightModeStyles({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='1.5' transform='rotate(60 0 0)' fill='%232D2E33'/%3E%3C/svg%3E")`,
  }),
])

globalStyle(`${blockquote} > :last-child`, {
  marginBottom: 0,
})
