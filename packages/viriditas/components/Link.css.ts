import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { darkModeStyles, lightModeStyles } from "@vivshaw/viriditas/helpers"
import { sprinkles, tokens } from "../theme/index.css"

export const link = recipe({
  base: [
    style({
      transition: tokens.motion.colorModeTransition,
    }),
    sprinkles({
      color: "primary",
      focusRing: "default",
    }),
  ],

  variants: {
    decoration: {
      none: [],
      underline: style([
        {
          backgroundImage: `linear-gradient(to bottom, ${tokens.color.accent} 0%, ${tokens.color.accent} 100%)`,
          backgroundPosition: "0 100%",
          backgroundRepeat: "repeat-x",
          backgroundSize: "2px 2px",
        },
        lightModeStyles({
          selectors: {
            "&:hover": {
              backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{stroke:%2328282B;animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-15px);}}%3C/style%3E%3Cpath fill='none' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");`,
              backgroundSize: "auto 4px",
            },
          },
        }),
        darkModeStyles({
          selectors: {
            "&:hover": {
              backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{stroke:%23b7bcb5;animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-15px);}}%3C/style%3E%3Cpath fill='none' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");`,
              backgroundSize: "auto 4px",
            },
          },
        }),
      ]),
    },
  },

  defaultVariants: {
    decoration: "underline",
  },
})
