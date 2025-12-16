import clsx from "clsx"
import { ComponentPropsWithRef } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { heading } from "./Heading.css"

export type HeadingProps = ComponentPropsWithRef<"h1" | "h2"> & {
  as?: "h1" | "h2"
  level: "1" | "2"
  sx?: Sprinkles
}

const resolveDefaultElement = {
  "1": "h1",
  "2": "h2",
} as const

/**
 * a text heading component.
 * supports two heading levels: h1 and h2.
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
