import { globalStyle, style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/basalt"

/**
 * this class must be applied to whatever element wraps the MDX,
 * in order for the global MDX styles to apply correctly.
 */
export const mdxRoot = style({})

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
    margin: `0 -${tokens.sizing["5"]}`,
    padding: `0 ${tokens.sizing["5"]}`,

    "@media": {
      [breakpoints.desktop]: {
        margin: `0 -${tokens.sizing["8"]}`,
        padding: `0 ${tokens.sizing["8"]}`,
      },
    },
  },
)

globalStyle(`${mdxRoot} .${REMARK_CODE_BLOCK_CLASS} .number-line`, {
  display: "inline-block",
  opacity: "0",
  userSelect: "none",
  width: "0",

  "@media": {
    [breakpoints.desktop]: {
      opacity: "0.3",
      width: tokens.sizing["8"],
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

/** inline code styles */

globalStyle(`${mdxRoot} :not(pre) > code`, {
  background: tokens.color.prism.highlight,
  borderRadius: tokens.sizing["2"],
  fontFamily: tokens.font.monospace,
  padding: `${tokens.sizing["half"]} ${tokens.sizing["1"]}`,
})

/** image styles */

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
}

globalStyle(`${mdxRoot} img`, {
  borderRadius: tokens.sizing["1"],
  display: "inline-block",
  height: "auto",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.sizing["2-half"]} auto ${tokens.sizing["11"]}`,
    },
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

globalStyle(`${mdxRoot} .Image__Small`, {
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

// TODO: why are there necessary? is it just conflict with the `.img` block above?
globalStyle(`${mdxRoot} img.Image__Small`, {
  borderRadius: "0",

  "@media": {
    [breakpoints.tablet]: {
      borderRadius: tokens.sizing["1"],
    },
  },
})

globalStyle(`${mdxRoot} .Image__Medium`, {
  borderRadius: "0",
  left: "0",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: IMAGE_WIDTHS.large,
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Medium`, {
  borderRadius: "0",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
    },
  },
})

globalStyle(`${mdxRoot} .Image__Large`, {
  left: "0",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  width: IMAGE_WIDTHS.full,

  "@media": {
    [breakpoints.desktop]: {
      left: `-${tokens.sizing["16"]}`,
      margin: `${tokens.sizing["6"]} auto ${tokens.sizing["14"]}`,
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Large`, {
  borderRadius: "0",
})
