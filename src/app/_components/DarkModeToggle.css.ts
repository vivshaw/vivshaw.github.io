import { style } from "@vanilla-extract/css"

import {
  tokens,
  VIRIDITAS_DARK_THEME_CLASS,
  VIRIDITAS_LIGHT_THEME_CLASS,
} from "#viriditas/theme/theme.css"

// Based off a codepen! Much appreciation to: https://codepen.io/aaroniker/pen/KGpXZo
export const moonOrSun = style({
  borderRadius: "50%",
  background: tokens.color.primary,
  height: "24px",
  position: "relative",
  transition: "all 0.45s ease",
  width: "24px",

  selectors: {
    "&:before": {
      border: `2px solid ${tokens.color.primary}`,
      borderRadius: "50%",
      content: "",
      height: "24px",
      position: "absolute",
      right: "-9px",
      top: "-9px",
      transition: "transform 0.45s ease",
      width: "24px",
    },

    "&:after": {
      borderRadius: "50%",
      boxShadow: `
          0 -23px 0 ${tokens.color.primary},
          0 23px 0 ${tokens.color.primary},
          23px 0 0 ${tokens.color.primary},
          -23px 0 0 ${tokens.color.primary},
          15px 15px 0 ${tokens.color.primary},
          -15px 15px 0 ${tokens.color.primary},
          15px -15px 0 ${tokens.color.primary},
          -15px -15px 0 ${tokens.color.primary}
        `,
      content: "",
      height: "8px",
      left: "50%",
      margin: "-4px 0 0 -4px",
      position: "absolute",
      top: "50%",
      transition: "all 0.35s ease",
      width: "8px",
    },

    [`.${VIRIDITAS_LIGHT_THEME_CLASS} &`]: {
      border: `2px solid ${tokens.color.primary}`,
      overflow: "hidden",
      transform: "scale(1)",
    },

    [`.${VIRIDITAS_LIGHT_THEME_CLASS} &:before`]: {
      opacity: 1,
      transform: "translate(0, 0)",
    },

    [`.${VIRIDITAS_LIGHT_THEME_CLASS} &:after`]: {
      transform: "scale(0)",
    },

    [`.${VIRIDITAS_DARK_THEME_CLASS} &`]: {
      border: `4px solid ${tokens.color.primary}`,
      overflow: "visible",
      transform: "scale(0.55)",
    },

    [`.${VIRIDITAS_DARK_THEME_CLASS} &:before`]: {
      opacity: 0,
      transform: "translate(14px, -14px)",
    },

    [`.${VIRIDITAS_DARK_THEME_CLASS} &:after`]: {
      transform: "scale(1)",
    },
  },
})

export const moonMask = style({
  position: "absolute",
  right: "-1px",
  top: "-8px",
  height: "24px",
  width: "24px",
  borderRadius: "50%",
  border: "0",
  background: tokens.color.background,
  transition: `${tokens.motion.colorModeTransition}, transform 0.45s ease`,

  selectors: {
    [`.${VIRIDITAS_LIGHT_THEME_CLASS} &`]: {
      transform: "translate(0, 0)",
    },

    [`.${VIRIDITAS_DARK_THEME_CLASS} &`]: {
      transform: "translate(14px, -14px)",
    },
  },
})
