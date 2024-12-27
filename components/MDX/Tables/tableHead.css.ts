import { style } from "@vanilla-extract/css"

import { tokens } from "@viriditas/theme/theme.css"

export const tableHead = style({
  borderCollapse: "collapse",
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
  fontWeight: 600,
  lineHeight: "1.756",
  position: "relative",
  textAlign: "left",
  transition: tokens.motion.colorModeTransition,
})
