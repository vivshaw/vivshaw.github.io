import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { focusRing } from "../helpers/index.css"
import { tokens } from "../theme/index.css"

export const pill = recipe({
  base: [
    focusRing,
    style({
      alignItems: "center",
      background: "transparent",
      border: `1px solid color-mix(in srgb, ${tokens.color.borderMuted} 50%, transparent)`,
      borderRadius: tokens.sizing["1"],
      color: tokens.color.textDefault,
      display: "inline-flex",
      fontFamily: tokens.font.sans,
      fontSize: tokens.fontSize["200"],
      gap: tokens.sizing["1-half"],
      opacity: 0.7,
      padding: `${tokens.sizing["1"]} ${tokens.sizing["2"]}`,
      transition: `opacity 0.3s ease, ${tokens.motion.colorModeTransition}`,

      selectors: {
        "&:hover, &:focus-visible": {
          opacity: 1,
        },
      },
    }),
  ],
})
