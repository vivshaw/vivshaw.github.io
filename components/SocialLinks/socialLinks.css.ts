import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const socialIconContainer = style({
  position: "relative",
  marginLeft: "3.2rem",
  textDecoration: "none",
  maxWidth: "16px",

  selectors: {
    "&:hover svg": {
      fill: tokens.color.primary,
      transition: "fill 0.25s var(--ease-in-out-quad)",
    },

    "&:first-of-type": {
      marginLeft: "0",
    },

    "&:last-child": {
      marginRight: "0",
    },

    "&[data-a11y='true']:focus::after": {
      content: "",
      position: "absolute",
      left: "-50%",
      top: "-20%",
      width: "200%",
      height: "160%",
      border: "2px solid #6166DC",
      background: "rgba(255, 255, 255, 0.01)",
      borderRadius: "5px",
    },

    "@media": {
      [breakpoints.tablet]: {
        margin: "0 2.2rem",
      },
    },
  },
})

export const hidden = style({
  width: "0px",
  height: "0px",
  visibility: "hidden",
  opacity: "0",
  overflow: "hidden",
  display: "inline-block",
})
