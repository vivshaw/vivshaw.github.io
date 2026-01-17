import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"

import { Box } from "./Box"
import { text } from "./Text.css"

export type TextProps<T extends ElementType = "p"> =
  ComponentPropsWithRef<T> & {
    as?: T
    font?: "serif" | "sans"
    size?: "normal" | "small"
  }

/**
 * a polymorphic text component.
 */
export function Text<T extends ElementType = "p">({
  as,
  className,
  font = "serif",
  size = "normal",
  ...props
}: TextProps<T>) {
  const Component = as || "p"
  return (
    <Box
      as={Component}
      className={clsx(text({ font, size }), className)}
      {...props}
    />
  )
}
