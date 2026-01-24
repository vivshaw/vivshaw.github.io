import { style } from "@vanilla-extract/css"
import { sprinkles, tokens } from "@vivshaw/basalt"

export const unorderedList = style([
  sprinkles({ text: "body" }),
  {
    color: tokens.color.textDefault,
    marginBottom: tokens.sizing["6"],
    paddingLeft: tokens.sizing["8"],
  },
])
