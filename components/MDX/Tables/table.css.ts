import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const tableWrapper = style({
  overflowX: "auto",
  padding: "0 20px",
})

export const table = style({
  background: tokens.color.card,
  border: `1px solid ${tokens.color.horizontalRule}`,
  borderCollapse: "separate",
  borderRadius: "5px",
  color: tokens.color.grey,
  fontFamily: tokens.font.sansSerif,
  lineHeight: "1.65",
  margin: "45px auto 85px",
  maxWidth: "1004px",
  overflow: "hidden",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      margin: "25px auto 65px",
    },
    [breakpoints.tablet]: {
      maxWidth: "486px",
    },
    [breakpoints.phablet]: {
      margin: "15px auto 55px",
    },
  },
})
