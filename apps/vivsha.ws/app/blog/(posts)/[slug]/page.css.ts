import { globalStyle, style } from "@vanilla-extract/css"
import { REMARK_CODE_BLOCK_CLASS } from "@vivshaw/mdx/mdx.css"
import { firstThree } from "@vivshaw/mdx/Paragraph/Paragraph.css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const postBody = style({
  display: "grid",
  gridTemplateColumns: `
    [full-start] 0px
    [main-start] 1fr [main-end]
    0px [full-end]
  `,
  position: "relative",
  margin: "0 auto",
  maxWidth: tokens.sizing["168"],
  padding: `0 0 ${tokens.sizing["9"]}`,

  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: `
      [full-start] ${tokens.sizing["5"]} 
      [main-start] 1fr [main-end]
      ${tokens.sizing["5"]} [full-end]
    `,
      maxWidth: "100%",
      padding: `0 0 ${tokens.sizing["20"]}`,
    },
  },
})

/**
 * By default, all MDX items get the main grid column.
 */
globalStyle(`${postBody} > *`, {
  gridColumn: "main",
  minWidth: 0,
})

/**
 * Images and code blocks should be fullwidth on mobile
 */
globalStyle(
  `
  ${postBody} > .${REMARK_CODE_BLOCK_CLASS},
  ${postBody} > img
  `,
  {
    "@media": {
      [breakpoints.phone]: {
        gridColumn: "full",
      },
    },
  },
)

/**
 * Style the first three words of the first paragraph as small caps
 */
globalStyle(`${postBody} > p:first-of-type .${firstThree}`, {
  fontFeatureSettings: tokens.fontFeatureSettings.serifSmallCaps,
  letterSpacing: "0px",
})
