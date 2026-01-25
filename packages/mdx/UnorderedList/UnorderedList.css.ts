import { globalStyle, style } from "@vanilla-extract/css"
import { sprinkles, tokens } from "@vivshaw/basalt"

export const unorderedList = style([
  sprinkles({ text: "body" }),
  {
    color: tokens.color.textDefault,
    marginBottom: tokens.sizing["6"],
    paddingLeft: tokens.sizing["8"],
  },
])

/* Remove bottom margin from nested lists */
globalStyle(`${unorderedList} ul, ${unorderedList} ol`, {
  marginBottom: 0,
})
