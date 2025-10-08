import { globalStyle, style } from "@vanilla-extract/css"
import { REMARK_CODE_BLOCK_CLASS } from "@vivshaw/mdx/mdx.css"
import { firstThree } from "@vivshaw/mdx/Paragraph/Paragraph.css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const section = style({
  display: "block",
  margin: "0 auto",
  maxWidth: "1220px",
  padding: `0 ${tokens.sizing["16"]} ${tokens.sizing["10"]}`,
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      maxWidth: "850px",
    },
    [breakpoints.tablet]: {
      padding: `0 ${tokens.sizing["8"]} ${tokens.sizing["10"]}`,
      maxWidth: "527px",
    },
    [breakpoints.phablet]: {
      maxWidth: "100%",
    },
  },
})

export const postBody = style({
  display: "grid",
  gridTemplateColumns: `
    [full-start] 0px 
    [main-start] 1fr [main-end]
    0px [full-end]
  `,
  position: "relative",
  margin: "0 auto",
  maxWidth: "744px",
  padding: `0 0 ${tokens.sizing["9"]}`,

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: tokens.sizing["13"],
    },
    [breakpoints.tablet]: {
      gridTemplateColumns: `
      [full-start] ${tokens.sizing["5"]} 
      [main-start] 1fr [main-end]
      ${tokens.sizing["5"]} [full-end]
    `,
      maxWidth: "100%",
      padding: `0 0 ${tokens.sizing["20"]}`,
    },
    [breakpoints.phablet]: {
      padding: `${tokens.sizing["15"]} 0`,
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
 * By default, all MDX items get the main grid column.
 */
globalStyle(
  `
  ${postBody} > .${REMARK_CODE_BLOCK_CLASS},
  ${postBody} > img
  `,
  {
    "@media": {
      [breakpoints.phablet]: {
        gridColumn: "full",
      },
    },
  },
)

export const footerNext = style({
  alignItems: "center",
  color: tokens.color.primary,
  display: "flex",
  flexDirection: "row",
  fontWeight: tokens.fontWeight.normal,
  gap: tokens.sizing["1"],
  marginBottom: tokens.sizing["8"],
  opacity: "0.25",
  position: "relative",

  selectors: {
    "&:after": {
      background: tokens.color.grey,
      content: "",
      height: "1px",
      position: "absolute",
      right: "0",
      top: tokens.sizing["2-half"],
      width: "calc(750 / 1140 * 100%)",

      "@media": {
        [breakpoints.tablet]: {
          width: "calc(600 / 1140 * 100%)",
        },
        [breakpoints.phablet]: {
          width: "calc(400 / 1140 * 100%)",
        },
        [breakpoints.phone]: {
          width: "90px",
        },
      },
    },
  },
})

export const footerSpacer = style({
  marginBottom: tokens.sizing["16"],
})

/**
 * Style the first three words of the first paragraph green
 */
globalStyle(`${postBody} > p:first-of-type .${firstThree}`, {
  fontFeatureSettings: '"c2sc", "calt", "kern", "liga", "onum", "smcp"',
  letterSpacing: "0px",
})
