import clsx from "clsx"
import { ComponentPropsWithRef } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { heading } from "./Heading.css"

export type HeadingProps = ComponentPropsWithRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  level: "1" | "2" | "3" | "4" | "5" | "6"
  sx?: Sprinkles
}

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
export function Heading({ as, level, className, ...props }: HeadingProps) {
  return (
    <Box
      as={as ?? resolveDefaultElement[level]}
      className={clsx(heading({ level }), className)}
      {...props}
    />
  )
}
