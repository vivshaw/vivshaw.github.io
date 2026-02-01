import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"

import styles from "./Pill.module.css"

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
  return <Component className={clsx(styles.pill, className)} {...props} />
}
