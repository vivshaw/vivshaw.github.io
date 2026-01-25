import clsx from "clsx"
import { ComponentPropsWithRef, ElementType, forwardRef, Ref } from "react"

import { Box } from "./Box"
import { text } from "./Text.css"

/**
 * base props for Text, without the polymorphic element props.
 */
type TextOwnProps<T extends ElementType> = {
  as?: T
  font?: "serif" | "sans"
  size?: "normal" | "small"
}

export type TextProps<T extends ElementType = "p"> = TextOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof TextOwnProps<T>>

/**
 * a polymorphic text component.
 */
export const Text = forwardRef(
  <T extends ElementType = "p">(
    { as, className, font = "serif", size = "normal", ...props }: TextProps<T>,
    ref: Ref<Element>,
  ) => {
    const Component = (as ?? "p") as ElementType
    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(text({ font, size }), className)}
        {...props}
      />
    )
  },
) as <T extends ElementType = "p">(
  props: TextProps<T>,
) => React.ReactElement | null
