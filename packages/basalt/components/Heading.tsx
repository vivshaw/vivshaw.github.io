import clsx from "clsx"
import { ComponentPropsWithRef, forwardRef, Ref } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { heading } from "./Heading.css"

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

/**
 * base props for Heading, without the polymorphic element props.
 */
type HeadingOwnProps<T extends HeadingElement> = {
  as?: T
  level: "1" | "2" | "3" | "4" | "5" | "6"
  sx?: Sprinkles
}

export type HeadingProps<T extends HeadingElement = "h1"> = HeadingOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof HeadingOwnProps<T>>

const resolveDefaultElement = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
  "5": "h5",
  "6": "h6",
} as const

/**
 * a text heading component.
 * supports all six heading levels: h1 through h6.
 * levels 4-6 use the same visual style as level 3.
 * the 'as' prop can be used to override the semantic heading level without affecting the visual style.
 */
export const Heading = forwardRef(
  <T extends HeadingElement = "h1">(
    { as, level, className, ...props }: HeadingProps<T>,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    const Component = as ?? resolveDefaultElement[level]
    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(heading({ level }), className)}
        {...props}
      />
    )
  },
) as <T extends HeadingElement = "h1">(
  props: HeadingProps<T>,
) => React.ReactElement | null
