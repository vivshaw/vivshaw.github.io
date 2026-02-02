import { style } from "@vanilla-extract/css"

import { tokens } from "../theme/index.css"

/**
 * a shared style for themed focus rings.
 */
export const focusRing = style({
  borderRadius: tokens.sizing["1"],

  selectors: {
    "&:focus-visible": {
      outline: `${tokens.sizing["half"]} solid ${tokens.color.accentDefault}`,
      outlineOffset: tokens.sizing["1"],
    },
  },
})
