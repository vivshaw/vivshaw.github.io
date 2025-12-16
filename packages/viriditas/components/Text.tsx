import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"

import type { Sprinkles } from "../theme/index.css"
import { Box } from "./Box"
import { text } from "./Text.css"

export type TextProps<T extends ElementType = "p"> =
  ComponentPropsWithRef<T> & {
    as?: T
    size?: "normal" | "small"
    sx?: Sprinkles
  }

/**
 * a text component.
 */
export function Text({
  as = "p",
  size = "normal",
  className,
  ...props
}: TextProps) {
  return <Box as={as} className={clsx(text({ size }), className)} {...props} />
}
