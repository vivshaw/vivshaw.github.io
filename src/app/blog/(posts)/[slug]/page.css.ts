import { globalStyle, style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "#viriditas/theme/theme.css"
import { REMARK_CODE_BLOCK_CLASS } from "#components/MDX/mdx.css"

export const section = style({
  display: "block",
  margin: "0 auto",
  maxWidth: "1220px",
  padding: "0 4rem 40px",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      maxWidth: "850px",
    },
    [breakpoints.tablet]: {
      padding: "0 2rem 40px",
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
  padding: "0 0 35px",

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: "53px",
    },
    [breakpoints.tablet]: {
      gridTemplateColumns: `
      [full-start] 20px 
      [main-start] 1fr [main-end]
      20px [full-end]
    `,
      maxWidth: "100%",
      padding: "70px 0 80px",
    },
    [breakpoints.phablet]: {
      padding: "60px 0",
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
  fontWeight: "400",
  gap: "4px",
  marginBottom: "30px",
  opacity: "0.25",
  position: "relative",

  selectors: {
    "&:after": {
      background: tokens.color.grey,
      content: "",
      height: "1px",
      position: "absolute",
      right: "0",
      top: "11px",
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
  marginBottom: "65px",
})
