import type { ComponentPropsWithRef, ElementType } from "react"

import { Sprinkles } from "../theme/index.css"
import { Box } from "./Box"
import { link } from "./Link.css"

export type LinkProps<T extends ElementType = "a"> = Omit<
  ComponentPropsWithRef<T>,
  "color" | "className"
> & {
  as?: T
  decoration?: "none" | "underline"
  sx?: Sprinkles
}

/**
 * a styled link component that extends Box.
 * supports all Box props plus standard anchor props.
 */
export function Link({
  as = "a",
  decoration = "underline",
  ...props
}: LinkProps) {
  return <Box as={as} className={link({ decoration })} {...props} />
}
