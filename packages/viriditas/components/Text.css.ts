import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { sprinkles, tokens } from "../theme/index.css"

export const text = recipe({
  base: [
    style({
      hyphens: "auto",
      textWrap: "pretty",
      transition: tokens.motion.colorModeTransition,
      wordBreak: "keep-all",
    }),
    sprinkles({
      color: "primary",
      font: "serif",
      fontWeight: "normal",
    }),
  ],

  variants: {
    size: {
      normal: sprinkles({ text: "body" }),
    },
  },

  defaultVariants: {
    size: "normal",
  },
})
