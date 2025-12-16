import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"
import { darkModeStyles, lightModeStyles } from "@vivshaw/basalt/helpers"

export const horizontalRule = style([
  {
    backgroundPosition: "center",
    backgroundRepeat: "repeat-x",
    border: 0,
    boxSizing: "border-box",
    height: "14.36px",
    margin: `${tokens.sizing["12"]} auto`,
    position: "relative",
    width: "100%",

    "@media": {
      [breakpoints.tablet]: {
        margin: `${tokens.sizing["0"]} auto ${tokens.sizing["12"]}`,
        width: "calc(100vw - 40px)",
      },
      [breakpoints.phone]: {
        padding: `${tokens.sizing["0"]} ${tokens.sizing["5"]}`,
      },
    },
  },
  darkModeStyles({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.432617' y='13.8564' width='16' height='1' transform='rotate(-60 0.432617 13.8564)' fill='%2350525B'/%3E%3C/svg%3E%0A")`,
  }),
  lightModeStyles({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.567383' y='14.1777' width='16' height='1' transform='rotate(-60 0.567383 14.1777)' fill='%232D2E33'/%3E%3C/svg%3E")`,
  }),
])
