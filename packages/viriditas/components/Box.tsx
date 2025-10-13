import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType } from "react"
import type { ReactElement } from "react"

import { Sprinkles, sprinkles } from "../theme/index.css"

export type BoxProps<T extends ElementType = "div"> = {
  /**
   * The HTML element to render. Defaults to "div".
   */
  as?: T

  /**
   * A string of CSS properties to apply to the element.
   */
  sx?: Sprinkles
} & Omit<ComponentPropsWithoutRef<T>, "color">

/**
 * A primitive component that provides access to the design system's tokens.
 * All properties are responsive and accept Viriditas tokens.
 *
 * Typography: font, fontSize, lineHeight, fontWeight
 * Spacing: margin/padding (m*, p*), gap, width/height (min/max)
 * Position: inset*, top/right/bottom/left
 */
export function Box<T extends ElementType = "div">({
  as,
  className,
  sx = {},
  ...other
}: BoxProps<T>): ReactElement {
  const Element = as || "div"

  return <Element {...other} className={clsx(sprinkles(sx), className)} />
}
