import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { sprinkles, tokens } from "../theme/index.css"

export const heading = recipe({
  base: [
    style({
      transition: tokens.motion.colorModeTransition,
      wordBreak: "keep-all",
    }),
    sprinkles({
      color: "textDefault",
      font: "serif",
      fontWeight: "normal",
    }),
  ],

  variants: {
    level: {
      "1": sprinkles({ text: "heading1" }),
      "2": sprinkles({ text: "heading2" }),
    },
  },
})
