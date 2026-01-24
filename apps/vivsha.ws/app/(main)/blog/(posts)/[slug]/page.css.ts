import { globalStyle, style } from "@vanilla-extract/css"
import { CODE_BLOCK_CONTAINER_CLASS } from "@vivshaw/mdx/CodeBlock/CodeBlock.css"
import { firstThree } from "@vivshaw/mdx/Paragraph/Paragraph.css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const postBody = style({
  display: "grid",
  gridTemplateColumns: `
    [full-start] ${tokens.sizing["5"]} 
    [main-start] 1fr [main-end]
    ${tokens.sizing["5"]} [full-end]
  `,
  position: "relative",
  margin: "0 auto",
  maxWidth: "100%",
  padding: `0 0 ${tokens.sizing["20"]}`,

  "@media": {
    [breakpoints.desktop]: {
      gridTemplateColumns: `
      [full-start] 0px
      [main-start] 1fr [main-end]
      0px [full-end]
    `,
      maxWidth: tokens.sizing["168"],
      padding: `0 0 ${tokens.sizing["9"]}`,
    },
  },
})

/**
 * by default, all MDX items get the main grid column.
 */
globalStyle(`${postBody} > *`, {
  gridColumn: "main",
  minWidth: 0,
})

/**
 * images and code blocks should be fullwidth on mobile
 */
globalStyle(
  `
  ${postBody} > .${CODE_BLOCK_CONTAINER_CLASS},
  ${postBody} > img
  `,
  {
    gridColumn: "full",

    "@media": {
      [breakpoints.desktop]: {
        gridColumn: "main",
      },
    },
  },
)

/**
 * style the first three words of the first paragraph as small caps
 */
globalStyle(`${postBody} > p:first-of-type .${firstThree}`, {
  fontFeatureSettings: tokens.fontFeatureSettings.serifSmallCaps,
  letterSpacing: "0px",
})
