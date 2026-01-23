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
      color: "textDefault",
      fontWeight: "normal",
    }),
  ],

  variants: {
    size: {
      normal: sprinkles({ text: "body" }),
      small: sprinkles({ text: "small" }),
    },
    font: {
      serif: sprinkles({ font: "serif" }),
      sans: sprinkles({ font: "sans" }),
    },
  },

  defaultVariants: {
    size: "normal",
    font: "serif",
  },
})
