import { createVar, globalStyle, style } from "@vanilla-extract/css"
import { CODE_BLOCK_CONTAINER_CLASS } from "@vivshaw/mdx/CodeBlock/CodeBlock.css"
import { firstThree } from "@vivshaw/mdx/Paragraph/Paragraph.css"
import { breakpoints, tokens } from "@vivshaw/basalt"

/** horizontal padding for the post body (used for fullbleed breakout) */
const postPadding = createVar()

export const postBody = style({
  vars: {
    [postPadding]: tokens.sizing["5"],
  },
  position: "relative",
  margin: "0 auto",
  maxWidth: "100%",
  paddingLeft: postPadding,
  paddingRight: postPadding,
  paddingBottom: tokens.sizing["20"],

  "@media": {
    [breakpoints.desktop]: {
      vars: {
        [postPadding]: "0px",
      },
      maxWidth: tokens.sizing["168"],
      paddingBottom: tokens.sizing["9"],
    },
  },
})

/**
 * images and code blocks should be fullbleed on mobile.
 */
globalStyle(
  `
  ${postBody} > .${CODE_BLOCK_CONTAINER_CLASS},
  ${postBody} > img
  `,
  {
    marginLeft: `calc(-1 * ${postPadding})`,
    marginRight: `calc(-1 * ${postPadding})`,
    width: `calc(100% + 2 * ${postPadding})`,
    maxWidth: `calc(100% + 2 * ${postPadding})`,
  },
)

/**
 * style the first three words of the first paragraph as small caps
 */
globalStyle(`${postBody} > p:first-of-type .${firstThree}`, {
  fontFeatureSettings: tokens.fontFeatureSettings.serifSmallCaps,
  letterSpacing: "0px",
})
