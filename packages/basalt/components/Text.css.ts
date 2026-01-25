import { globalStyle, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { sprinkles, tokens } from "../theme/index.css"

const textBase = style({
  hyphens: "auto",
  textWrap: "pretty",
  transition: tokens.motion.colorModeTransition,
  wordBreak: "keep-all",
})

export const text = recipe({
  base: [
    textBase,
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

globalStyle(`${textBase} strong, ${textBase} b`, {
  fontWeight: "bold",
})

globalStyle(`${textBase} em, ${textBase} i`, {
  fontStyle: "italic",
})
