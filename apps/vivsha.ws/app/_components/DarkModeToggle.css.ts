import { style } from "@vanilla-extract/css"
import {
  tokens,
  DARK_COLOR_MODE_SELECTOR,
  LIGHT_COLOR_MODE_SELECTOR,
  SYSTEM_COLOR_MODE_SELECTOR,
} from "@vivshaw/viriditas/theme"

export const root = style({
  position: "relative",
  top: -1, // for visual centering with the display font

  selectors: {
    // One can only toggle the color mode when JS is active to control the color mode.
    // vivsha.ws's startup snippet applies a color mode class. So, if one is absent and the
    // app is still in system color mode, JS ain't working.
    // So, we shouldn't display a toggle for something we can't toggle!
    [`${SYSTEM_COLOR_MODE_SELECTOR} &`]: {
      display: "none",
    },
  },
})

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

    [`${LIGHT_COLOR_MODE_SELECTOR} &`]: {
      border: `2px solid ${tokens.color.primary}`,
      overflow: "hidden",
      transform: "scale(1)",
    },

    [`${LIGHT_COLOR_MODE_SELECTOR} &:before`]: {
      opacity: 1,
      transform: "translate(0, 0)",
    },

    [`${LIGHT_COLOR_MODE_SELECTOR} &:after`]: {
      transform: "scale(0)",
    },

    [`${DARK_COLOR_MODE_SELECTOR} &`]: {
      border: `4px solid ${tokens.color.primary}`,
      overflow: "visible",
      transform: "scale(0.55)",
    },

    [`${DARK_COLOR_MODE_SELECTOR} &:before`]: {
      opacity: 0,
      transform: "translate(14px, -14px)",
    },

    [`${DARK_COLOR_MODE_SELECTOR} &:after`]: {
      transform: "scale(1)",
    },
  },

  // This is what we'd need to do to make this look correct in system color mode.
  // Luckily, we don't care! We're going to hide this component completely in system mode.
  // "@media": {
  //   "(prefers-color-scheme: light)": {
  //     selectors: {
  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &`]: {
  //         border: `2px solid ${tokens.color.primary}`,
  //         overflow: "hidden",
  //         transform: "scale(1)",
  //       },

  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &:before`]: {
  //         opacity: 1,
  //         transform: "translate(0, 0)",
  //       },

  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &:after`]: {
  //         transform: "scale(0)",
  //       },
  //     },
  //   },

  //   "(prefers-color-scheme: dark)": {
  //     selectors: {
  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &`]: {
  //         border: `4px solid ${tokens.color.primary}`,
  //         overflow: "visible",
  //         transform: "scale(0.55)",
  //       },

  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &:before`]: {
  //         opacity: 0,
  //         transform: "translate(14px, -14px)",
  //       },

  //       [`${SYSTEM_COLOR_MODE_SELECTOR} &:after`]: {
  //         transform: "scale(1)",
  //       },
  //     },
  //   },
  // },
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
    [`${LIGHT_COLOR_MODE_SELECTOR} &`]: {
      transform: "translate(0, 0)",
    },

    [`${DARK_COLOR_MODE_SELECTOR} &`]: {
      transform: "translate(14px, -14px)",
    },
  },
})
