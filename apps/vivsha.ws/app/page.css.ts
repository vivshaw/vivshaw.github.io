import { style } from "@vanilla-extract/css"
import { focusRing } from "@vivshaw/basalt/helpers"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const homeWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "calc(100vh - 60px)", // Account for navbar
  padding: tokens.sizing["6"],
  paddingTop: tokens.sizing["18"],
})

export const profileCard = style({
  backgroundColor: tokens.color.background,
  borderRadius: tokens.sizing["6"],
  display: "flex",
  flexDirection: "column",
  gap: tokens.sizing["4"],
  height: "fit-content",
  maxWidth: "450px",
  padding: tokens.sizing["4"],
  width: "fit-content",

  "@media": {
    [breakpoints.tablet]: {
      padding: tokens.sizing["6"],
    },
  },
})

export const fig = style({
  alignItems: "center",
  columnGap: tokens.sizing["4"],
  display: "grid",
  gridTemplateColumns: "min-content 1fr",
  gridTemplateRows: "auto",
  gridTemplateAreas: `
    "avatar ."
    "avatar name"
    "avatar location"
    "avatar ."
  `,
  rowGap: tokens.sizing["2"],
})

export const figCap = style({
  display: "grid",
  grid: "subgrid / subgrid",
  gridRow: "1 / -1",
  gridColumn: "2",
})

export const avatar = style({
  borderRadius: "40%",
  filter: "grayscale(100%)",
  gridArea: "avatar",
  height: "80px",
  objectFit: "cover",
  width: "80px",
})

export const name = style({
  color: tokens.color.primary,
  fontFamily: tokens.font.sans,
  fontSize: tokens.fontSize["400"],
  fontWeight: tokens.fontWeight.bold,
  gridArea: "name",
})

export const location = style({
  alignItems: "center",
  display: "flex",
  gap: tokens.sizing["1"],
  color: tokens.color.primary,
  fontFamily: tokens.font.sans,
  fontSize: tokens.fontSize["200"],
  fontWeight: tokens.fontWeight.normal,
  gridArea: "location",
})

export const socialLinks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: tokens.sizing["2"],
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const socialPill = style([
  {
    alignItems: "center",
    backgroundColor: tokens.color.background,
    border: `1px solid ${tokens.color.horizontalRule}`,
    borderRadius: "999px",
    color: tokens.color.primary,
    display: "inline-flex",
    fontFamily: tokens.font.sans,
    fontSize: tokens.fontSize["100"],
    gap: tokens.sizing["2"],
    padding: `${tokens.sizing["1"]} ${tokens.sizing["2"]}`,
  },
  focusRing,
])

export const calloutCard = style({
  alignSelf: "center",
  backgroundColor: tokens.color.background,
  borderRadius: tokens.sizing["4"],
  color: tokens.color.primary,
  display: "flex",
  flexDirection: "column",
  fontFamily: tokens.font.sans,
  fontSize: tokens.fontSize["100"],
  gap: tokens.sizing["1"],
  lineHeight: 1.5,
  padding: tokens.sizing["4"],
  width: "240px",

  "@media": {
    [breakpoints.desktop]: {
      alignSelf: "flex-end",
    },
  },
})
