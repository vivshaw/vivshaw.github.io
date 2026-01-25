import { globalStyle, style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const pageBody = style({
  display: "grid",
  gridTemplateColumns: `
    [full-start] ${tokens.sizing["5"]}
    [main-start] 1fr [main-end]
    ${tokens.sizing["5"]} [full-end]
  `,
  position: "relative",
  margin: "0 auto",
  maxWidth: "100%",
  paddingTop: tokens.sizing["20"],
  paddingBottom: tokens.sizing["20"],

  "@media": {
    [breakpoints.desktop]: {
      gridTemplateColumns: `
      [full-start] 0px
      [main-start] 1fr [main-end]
      0px [full-end]
    `,
      maxWidth: tokens.sizing["168"],
      paddingTop: tokens.sizing["40"],
      paddingBottom: tokens.sizing["9"],
    },
  },
})

/**
 * by default, all MDX items get the main grid column.
 */
globalStyle(`${pageBody} > *`, {
  gridColumn: "main",
  minWidth: 0,
})

/**
 * add spacing below the h1
 */
globalStyle(`${pageBody} > h1`, {
  marginBottom: tokens.sizing["12"],

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: tokens.sizing["20"],
    },
  },
})
