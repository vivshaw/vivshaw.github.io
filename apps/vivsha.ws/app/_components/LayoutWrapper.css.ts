import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"
import { focusRing } from "@vivshaw/basalt/helpers"

export const root = style({
  backgroundImage: `url("/jb-1610.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
})

/**
 * Size of the chamfered (angled) corners on the content panel.
 */
const chamferSize = tokens.sizing["6"]
const chamferSizeMobile = tokens.sizing["6"]

export const contentPanel = style({
  backgroundColor: tokens.color.background,
  bottom: tokens.sizing["4"], // Match bottom border height on mobile
  /**
   * On mobile, chamfer the top-left and bottom-right corners.
   */
  clipPath: `polygon(
    ${chamferSizeMobile} 0,
    100% 0,
    100% calc(100% - ${chamferSizeMobile}),
    calc(100% - ${chamferSizeMobile}) 100%,
    0 100%,
    0 ${chamferSizeMobile}
  )`,
  left: 0,
  position: "absolute", // Scrolls with page on mobile
  right: 0,
  top: tokens.sizing["4"], // Match top border height on mobile
  transition: tokens.motion.colorModeTransition,
  zIndex: 0,

  "@media": {
    [breakpoints.tablet]: {
      bottom: tokens.sizing["6"],
      /**
       * On tablet+, chamfer all corners.
       */
      clipPath: `polygon(
        ${chamferSize} 0,
        calc(100% - ${chamferSize}) 0,
        100% ${chamferSize},
        100% calc(100% - ${chamferSize}),
        calc(100% - ${chamferSize}) 100%,
        ${chamferSize} 100%,
        0 calc(100% - ${chamferSize}),
        0 ${chamferSize}
      )`,
      left: tokens.sizing["6"],
      position: "fixed", // Fixed on tablet+
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
  position: "absolute", // Scrolls with page on mobile
  zIndex: 2,

  "@media": {
    [breakpoints.tablet]: {
      position: "fixed", // Fixed on tablet+
    },
  },
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
    height: tokens.sizing["4"],
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
  paddingBottom: tokens.sizing["4"], // Match frame on mobile
  paddingTop: tokens.sizing["4"], // Match frame on mobile
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

export const logoLink = style([
  {
    borderRadius: "50%",
    color: tokens.color.bodyText,
    left: tokens.sizing["2"],
    padding: tokens.sizing["2"],
    position: "absolute", // Scrolls with page on mobile
    top: tokens.sizing["6"],
    transition: `color 0.3s ease, ${tokens.motion.colorModeTransition}`,
    zIndex: 10,

    "@media": {
      [breakpoints.tablet]: {
        left: tokens.sizing["8"],
        position: "fixed", // Fixed on tablet+
        top: tokens.sizing["8"],
      },
    },
  },
  focusRing,
])

export const logoSvg = style({
  height: tokens.sizing["10"],
  width: "auto",

  "@media": {
    [breakpoints.tablet]: {
      height: tokens.sizing["12"],
    },
  },
})
