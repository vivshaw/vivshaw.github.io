import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"

import { Box } from "./Box"
import { pill } from "./Pill.css"

export type PillProps<T extends ElementType = "span"> =
  ComponentPropsWithRef<T> & {
    as?: T
  }

/**
 * a pill-shaped element, typically used for tags or interactive elements like social links.
 * polymorphic - use `as="a"` for links, `as="button"` for actions, etc.
 */
export function Pill<T extends ElementType = "span">({
  as,
  className,
  ...props
}: PillProps<T>) {
  const Component = as || "span"
  return <Box as={Component} className={clsx(pill(), className)} {...props} />
}
