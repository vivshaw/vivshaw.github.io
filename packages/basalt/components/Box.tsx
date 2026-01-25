import clsx from "clsx"
import { ComponentPropsWithRef, ElementType, forwardRef, Ref } from "react"

import { Sprinkles, sprinkles } from "../theme/index.css"

/**
 * base props for Box, without the polymorphic element props.
 */
type BoxOwnProps<T extends ElementType> = {
  /**
   * the HTML element or component to render. defaults to "div".
   */
  as?: T

  /**
   * a set of CSS properties to apply to the element.
   */
  sx?: Sprinkles
}

export type BoxProps<T extends ElementType = "div"> = BoxOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof BoxOwnProps<T>>

/**
 * a primitive component that provides access to the design system's tokens.
 * all properties are responsive and accept Basalt tokens.
 */
export const Box = forwardRef(
  <T extends ElementType = "div">(
    { as, className, sx = {}, ...other }: BoxProps<T>,
    ref: Ref<Element>,
  ) => {
    const Element = (as ?? "div") as ElementType

    return (
      <Element
        ref={ref}
        {...other}
        className={clsx(sprinkles(sx), className)}
      />
    )
  },
) as <T extends ElementType = "div">(
  props: BoxProps<T>,
) => React.ReactElement | null
