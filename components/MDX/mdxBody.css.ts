import { globalStyle, style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const mdxBody = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  zIndex: 10,
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

/** Prism code styles */
// TODO: Fix jacked highlight colors
// TODO: Add line numbers

export const PRISM_CODE_CLASS = "prism-code"

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS}`, {
  overflow: "auto",
  width: "100%",
  padding: "32px",
  fontSize: "13px",
  margin: "15px auto 50px",
  borderRadius: "5px",

  "@media": {
    [breakpoints.phablet]: {
      textSizeAdjust: "none",
      borderRadius: "0",
      margin: "0 auto 25px",
      padding: "25px 20px",
      float: "left",
      minWidth: "100%",
      position: "relative",
    },
  },
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .token-line`, {
  borderLeft: "3px solid transparent",
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .token-line.highlight-line`, {
  margin: "0 -32px",
  padding: "0 32px",
  background: tokens.color.prism.highlight,
  borderLeft: "3px solid transparent",

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 -20px",
      padding: "0 20px",
    },
  },
})

globalStyle(`${mdxBody} .${PRISM_CODE_CLASS} .number-line`, {
  display: "inline-block",
  width: "32px",
  userSelect: "none",
  opacity: "0.3",

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

/** Image styles */

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
}

globalStyle(`${mdxBody} img`, {
  display: "inline-block",
  position: "relative",
  maxWidth: "100%",
  height: "auto",
  zIndex: 0,
  margin: "15px auto 50px",
  borderRadius: "5px",

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
  display: "flex",
  flexDirection: "column",
  position: "relative",
  maxWidth: "100%",
  height: "auto",
  zIndex: 0,
  margin: "15px auto 50px",
  borderRadius: "5px",

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxBody} .Image__Medium`, {
  position: "relative",
  margin: "15px auto 50px",
  width: "100%",
  maxWidth: IMAGE_WIDTHS.large,

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
  position: "relative",
  left: "-68px",
  width: IMAGE_WIDTHS.full,
  margin: "25px auto 60px",
  pointerEvents: "none",

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
