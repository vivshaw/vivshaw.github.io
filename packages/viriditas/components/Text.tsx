import { ComponentPropsWithRef } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { text } from "./Text.css"

export type TextProps = Omit<
  ComponentPropsWithRef<"p" | "span">,
  "className"
> & {
  as?: "p" | "span"
  size?: "normal"
  sx?: Sprinkles
}

/**
 * a text component.
 */
export function Text({ as, size = "normal", ...props }: TextProps) {
  return <Box as={as ?? "p"} className={text({ size })} {...props} />
}
