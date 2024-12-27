import { globalStyle, style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const mdxBody = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
})

/**
 * Heading styles
 */

globalStyle(
  `${mdxBody} h1, ${mdxBody} h2, ${mdxBody} h3, ${mdxBody} h4, ${mdxBody} h5, ${mdxBody} h6`,
  {
    margin: 0,
  },
)

globalStyle(`${mdxBody} h1, ${mdxBody} h1 *, ${mdxBody} h2, ${mdxBody} h2 *`, {
  margin: "25px 0 18px",

  "@media": {
    [breakpoints.tablet]: {
      margin: "30px 0 18px",
    },
  },
})

globalStyle(`${mdxBody} h3, ${mdxBody} h3 *`, {
  margin: "20px 0 10px",
})

/** Prism code block styles */
// TODO: Fix jacked highlight colors
// TODO: Add line numbers

export const PRISM_CODE_CLASS = "prism-code"

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS}`, {
  borderRadius: "5px",
  fontSize: "13px",
  margin: "15px auto 50px",
  overflow: "auto",
  padding: "32px",
  width: "100%",

  "@media": {
    [breakpoints.phablet]: {
      borderRadius: "0",
      float: "left",
      margin: "0 auto 25px",
      minWidth: "100%",
      padding: "25px 20px",
      position: "relative",
      textSizeAdjust: "none",
    },
  },
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .token-line`, {
  borderLeft: "3px solid transparent",
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .token-line.highlight-line`, {
  background: tokens.color.prism.highlight,
  borderLeft: "3px solid transparent",
  margin: "0 -32px",
  padding: "0 32px",

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 -20px",
      padding: "0 20px",
    },
  },
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .number-line`, {
  display: "inline-block",
  opacity: "0.3",
  userSelect: "none",
  width: "32px",

  "@media": {
    [breakpoints.tablet]: {
      opacity: "0",
      width: "0",
    },
  },
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .operator + .maybe-class-name`, {
  color: "#ffcf74 !important",
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .plain ~ .operator`, {
  color: "#ffffff !important",
})

/** Inline code styles */

globalStyle(`${mdxBody} code`, {
  background: tokens.color.prism.highlight,
  borderRadius: "8px",
  fontFamily: tokens.font.monospace,
  padding: "2px 4px",
})

/** Image styles */

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
}

globalStyle(`${mdxBody} img`, {
  borderRadius: "5px",
  display: "inline-block",
  height: "auto",
  margin: "15px auto 50px",
  maxWidth: "100%",
  position: "relative",
  zIndex: 0,

  "@media": {
    [breakpoints.tablet]: {
      margin: "10px auto 45px",
    },
    [breakpoints.phablet]: {
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxBody} .Image__Small`, {
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  margin: "15px auto 50px",
  maxWidth: "100%",
  position: "relative",
  zIndex: 0,

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxBody} .Image__Medium`, {
  margin: "15px auto 50px",
  maxWidth: IMAGE_WIDTHS.large,
  position: "relative",
  width: "100%",

  "@media": {
    [breakpoints.desktopMedium]: {
      left: "-34px",
    },
    [breakpoints.desktop]: {
      left: "-26px",
    },
    [breakpoints.tablet]: {
      borderRadius: "0",
      left: "0",
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxBody} .Image__Medium img`, {
  "@media": {
    [breakpoints.tablet]: {
      borderRadius: "0",
    },
  },
})

globalStyle(`${mdxBody} .Image__Large`, {
  left: "-68px",
  margin: "25px auto 60px",
  pointerEvents: "none",
  position: "relative",
  width: IMAGE_WIDTHS.full,

  "@media": {
    [breakpoints.desktop]: {
      left: "-53px",
    },
    [breakpoints.tablet]: {
      left: "0",
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxBody} .Image__Large img`, {
  borderRadius: "0",
})
