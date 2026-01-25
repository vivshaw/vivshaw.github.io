import { ComponentPropsWithRef, ElementType, forwardRef, Ref } from "react"

import { Sprinkles } from "../theme/index.css"
import { Box } from "./Box"
import { link } from "./Link.css"

/**
 * base props for Link, without the polymorphic element props.
 */
type LinkOwnProps<T extends ElementType> = {
  as?: T
  decoration?: "none" | "underline"
  sx?: Sprinkles
}

export type LinkProps<T extends ElementType = "a"> = LinkOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof LinkOwnProps<T>>

/**
 * a styled link component that extends Box.
 * supports all Box props plus standard anchor props.
 */
export const Link = forwardRef(
  <T extends ElementType = "a">(
    { as, decoration = "underline", ...props }: LinkProps<T>,
    ref: Ref<Element>,
  ) => {
    const Component = (as ?? "a") as ElementType
    return (
      <Box
        as={Component}
        ref={ref}
        className={link({ decoration })}
        {...props}
      />
    )
  },
) as <T extends ElementType = "a">(
  props: LinkProps<T>,
) => React.ReactElement | null
