import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const root = style({
  backgroundImage: `url("/jb-1610.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
})

export const contentPanel = style({
  backgroundColor: tokens.color.background,
  borderRadius: 0,
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: tokens.sizing["4"],
  transition: tokens.motion.colorModeTransition,
  zIndex: 0,

  "@media": {
    [breakpoints.tablet]: {
      borderRadius: tokens.sizing["4"],
      bottom: tokens.sizing["6"],
      left: tokens.sizing["6"],
      right: tokens.sizing["6"],
      top: tokens.sizing["6"],
    },
  },
})

const borderBase = style({
  backgroundImage: `url("/jb-1610.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  position: "fixed",
  zIndex: 2,
})

export const borderLeft = style([
  borderBase,
  {
    bottom: 0,
    left: 0,
    top: 0,
    width: 0,

    "@media": {
      [breakpoints.tablet]: {
        width: tokens.sizing["6"],
      },
    },
  },
])

export const borderRight = style([
  borderBase,
  {
    bottom: 0,
    right: 0,
    top: 0,
    width: 0,

    "@media": {
      [breakpoints.tablet]: {
        width: tokens.sizing["6"],
      },
    },
  },
])

export const borderTop = style([
  borderBase,
  {
    height: tokens.sizing["4"],
    left: 0,
    right: 0,
    top: 0,

    "@media": {
      [breakpoints.tablet]: {
        height: tokens.sizing["6"],
      },
    },
  },
])

export const borderBottom = style([
  borderBase,
  {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,

    "@media": {
      [breakpoints.tablet]: {
        height: tokens.sizing["6"],
      },
    },
  },
])

export const content = style({
  /**
   * overflow: hidden prevents any marginTop at the top of the page from displaying
   * the default browser dark mode background.
   *
   * Padding matches the frame insets so content stays inside the visible panel.
   */
  overflow: "hidden",
  paddingTop: tokens.sizing["4"],
  position: "relative",
  zIndex: 1,

  "@media": {
    [breakpoints.tablet]: {
      paddingBottom: tokens.sizing["6"],
      paddingLeft: tokens.sizing["6"],
      paddingRight: tokens.sizing["6"],
      paddingTop: tokens.sizing["6"],
    },
  },
})
