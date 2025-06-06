import {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react"
import type { ReactElement } from "react"
import { Sprinkles, sprinkles } from "../theme/index.css"
import clsx from "clsx"

export type BoxProps<T extends ElementType = "div"> = {
  /**
   * The HTML element to render. Defaults to "div".
   */
  as?: T
} & ComponentPropsWithRef<T> &
  Sprinkles

/**
 * A primitive component that provides access to the design system's tokens.
 * All properties are responsive and accept Viriditas tokens.
 *
 * Typography: font, fontSize, lineHeight, fontWeight
 * Spacing: margin/padding (m*, p*), gap, width/height (min/max)
 * Position: inset*, top/right/bottom/left
 */
export const Box = forwardRef(function Box<T extends ElementType = "div">(
  { as: Component = "div", className, ...other }: BoxProps<T>,
  ref: ForwardedRef<Element>,
): ReactElement {
  const sprinklesProps: Record<string, unknown> = {}
  const otherProps: Record<string, unknown> = {}

  Object.entries(other).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = value
    } else {
      otherProps[key] = value
    }
  })

  return (
    <Component
      {...otherProps}
      className={clsx(sprinkles(sprinklesProps), className)}
      ref={ref}
    />
  )
})
