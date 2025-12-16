import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const tableWrapper = style({
  overflowX: "auto",
  padding: `${tokens.sizing["0"]} ${tokens.sizing["5"]}`,
})

export const table = style({
  background: tokens.color.card,
  border: `1px solid ${tokens.color.horizontalRule}`,
  borderCollapse: "separate",
  borderRadius: tokens.sizing["1"],
  color: tokens.color.grey,
  fontFamily: tokens.font.sans,
  lineHeight: "1.65",
  margin: `${tokens.sizing["6"]} auto ${tokens.sizing["16"]}`,
  maxWidth: "1004px",
  overflow: "hidden",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      maxWidth: "486px",
    },
    [breakpoints.phone]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["14"]}`,
    },
  },
})
