import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { sprinkles } from "../theme/index.css"

export const heading = recipe({
  base: [
    style({
      wordBreak: "keep-all",
    }),
    sprinkles({
      color: "primary",
      font: "serif",
      fontWeight: "normal",
    }),
  ],

  variants: {
    level: {
      "1": sprinkles({ marginBottom: "12", text: "heading1" }),
      "2": sprinkles({ marginBottom: "5", text: "heading2" }),
    },
  },
})
