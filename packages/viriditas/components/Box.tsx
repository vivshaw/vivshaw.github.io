import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType } from "react"
import type { ReactElement } from "react"

import { Sprinkles, sprinkles } from "../theme/index.css"

export type BoxProps<T extends ElementType = "div"> = {
  /**
   * the HTML element to render. defaults to "div".
   */
  as?: T

  /**
   * a string of CSS properties to apply to the element.
   */
  sx?: Sprinkles
} & Omit<ComponentPropsWithoutRef<T>, "color">

/**
 * a primitive component that provides access to the design system's tokens.
 * all properties are responsive and accept Viriditas tokens.
 */
export function Box<T extends ElementType = "div">({
  as,
  className,
  sx = {},
  ...other
}: BoxProps<T>): ReactElement {
  const Element = as ?? "div"

  return <Element {...other} className={clsx(sprinkles(sx), className)} />
}
