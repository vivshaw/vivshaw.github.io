import { globalStyle, style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "#viriditas/theme/theme.css"

/**
 * This class must be applied to whatever element wraps the MDX,
 * in order for the global MDX styles to apply correctly.
 */
export const mdxRoot = style({})

/**
 * Heading styles
 */

// TODO: Remove the need for this!
globalStyle(
  `${mdxRoot} h1, ${mdxRoot} h2, ${mdxRoot} h3, ${mdxRoot} h4, ${mdxRoot} h5, ${mdxRoot} h6`,
  {
    margin: 0,
  },
)

globalStyle(`${mdxRoot} h1, ${mdxRoot} h1 *, ${mdxRoot} h2, ${mdxRoot} h2 *`, {
  marginBottom: 18,
  marginTop: 25,

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: 18,
      marginTop: 30,
    },
  },
})

globalStyle(`${mdxRoot} h3, ${mdxRoot} h3 *`, {
  marginBottom: 10,
  marginTop: 20,
})

/** Prism code block styles */
export const REMARK_CODE_BLOCK_CLASS = "remark-highlight"

globalStyle(`${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .token-line`, {
  borderLeft: "3px solid transparent",
})

globalStyle(
  `${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .token-line.highlight-line`,
  {
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
  },
)

globalStyle(`${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .number-line`, {
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

globalStyle(
  `${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .operator + .maybe-class-name`,
  {
    color: "#ffcf74 !important",
  },
)

globalStyle(`${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .plain ~ .operator`, {
  color: "#ffffff !important",
})

/** Inline code styles */

globalStyle(`${mdxRoot} :not(pre) > code`, {
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

globalStyle(`${mdxRoot} img`, {
  borderRadius: "5px",
  display: "inline-block",
  height: "auto",
  margin: "15px auto 50px",
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: "10px auto 45px",
    },
    [breakpoints.phablet]: {
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxRoot} .Image__Small`, {
  margin: "15px auto 50px",
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 auto 25px",
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Small`, {
  "@media": {
    [breakpoints.phablet]: {
      borderRadius: "0",
    },
  },
})

globalStyle(`${mdxRoot} .Image__Medium`, {
  margin: "15px auto 50px",
  maxWidth: IMAGE_WIDTHS.large,
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

globalStyle(`${mdxRoot} img.Image__Medium`, {
  "@media": {
    [breakpoints.tablet]: {
      borderRadius: "0",
    },
  },
})

globalStyle(`${mdxRoot} .Image__Large`, {
  left: "-68px",
  margin: "25px auto 60px",
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

globalStyle(`${mdxRoot} img.Image__Large`, {
  borderRadius: "0",
})
