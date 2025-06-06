import { globalStyle, style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

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
  marginBottom: tokens.spacing["4-half"],
  marginTop: tokens.spacing["6"],

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: tokens.spacing["4-half"],
      marginTop: tokens.spacing["8"],
    },
  },
})

globalStyle(`${mdxRoot} h3, ${mdxRoot} h3 *`, {
  marginBottom: tokens.spacing["2-half"],
  marginTop: tokens.spacing["5"],
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
    margin: `0 -${tokens.spacing["8"]}`,
    padding: `0 ${tokens.spacing["8"]}`,

    "@media": {
      [breakpoints.tablet]: {
        margin: `0 -${tokens.spacing["5"]}`,
        padding: `0 ${tokens.spacing["5"]}`,
      },
    },
  },
)

globalStyle(`${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .number-line`, {
  display: "inline-block",
  opacity: "0.3",
  userSelect: "none",
  width: tokens.spacing["8"],

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
  borderRadius: tokens.spacing["2"],
  fontFamily: tokens.font.monospace,
  padding: `${tokens.spacing["half"]} ${tokens.spacing["1"]}`,
})

/** Image styles */

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
}

globalStyle(`${mdxRoot} img`, {
  borderRadius: tokens.spacing["1"],
  display: "inline-block",
  height: "auto",
  margin: `${tokens.spacing["4"]} auto ${tokens.spacing["12"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.spacing["2-half"]} auto ${tokens.spacing["11"]}`,
    },
    [breakpoints.phablet]: {
      margin: `${tokens.spacing["0"]} auto ${tokens.spacing["6"]}`,
    },
  },
})

globalStyle(`${mdxRoot} .Image__Small`, {
  margin: `${tokens.spacing["4"]} auto ${tokens.spacing["12"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.spacing["0"]} auto ${tokens.spacing["6"]}`,
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
  margin: `${tokens.spacing["4"]} auto ${tokens.spacing["12"]}`,
  maxWidth: IMAGE_WIDTHS.large,
  width: "100%",

  "@media": {
    [breakpoints.desktopMedium]: {
      left: `-${tokens.spacing["8-half"]}`,
    },
    [breakpoints.desktop]: {
      left: `-${tokens.spacing["6-half"]}`,
    },
    [breakpoints.tablet]: {
      borderRadius: "0",
      left: "0",
      margin: `${tokens.spacing["0"]} auto ${tokens.spacing["6"]}`,
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
  left: `-${tokens.spacing["16"]}`,
  margin: `${tokens.spacing["6"]} auto ${tokens.spacing["14"]}`,
  width: IMAGE_WIDTHS.full,

  "@media": {
    [breakpoints.desktop]: {
      left: `-${tokens.spacing["13"]}`,
    },
    [breakpoints.tablet]: {
      left: "0",
      margin: `${tokens.spacing["0"]} auto ${tokens.spacing["6"]}`,
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Large`, {
  borderRadius: "0",
})
