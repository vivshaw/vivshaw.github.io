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
      "3": sprinkles({ text: "heading3" }),
      "4": sprinkles({ text: "heading3" }),
      "5": sprinkles({ text: "heading3" }),
      "6": sprinkles({ text: "heading3" }),
    },
  },
})
