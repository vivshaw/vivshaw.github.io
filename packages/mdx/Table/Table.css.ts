import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableWrapper = style({
  overflowX: "auto",
  padding: `${tokens.spacing["0"]} ${tokens.spacing["5"]}`,
})

export const table = style({
  background: tokens.color.card,
  border: `1px solid ${tokens.color.horizontalRule}`,
  borderCollapse: "separate",
  borderRadius: tokens.spacing["1"],
  color: tokens.color.grey,
  fontFamily: tokens.font.sans,
  lineHeight: "1.65",
  margin: `${tokens.spacing["11"]} auto ${tokens.spacing["20"]}`,
  maxWidth: "1004px",
  overflow: "hidden",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      margin: `${tokens.spacing["6"]} auto ${tokens.spacing["16"]}`,
    },
    [breakpoints.tablet]: {
      maxWidth: "486px",
    },
    [breakpoints.phablet]: {
      margin: `${tokens.spacing["4"]} auto ${tokens.spacing["14"]}`,
    },
  },
})
