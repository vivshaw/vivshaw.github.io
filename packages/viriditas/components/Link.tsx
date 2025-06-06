import { ComponentPropsWithRef, forwardRef } from "react"
import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { link } from "./Link.css"

export type LinkProps = ComponentPropsWithRef<"a"> & Sprinkles

/**
 * A styled link component that extends Box.
 * Supports all Box props plus standard anchor props.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => {
    return <Box as="a" className={link} ref={ref} {...props} />
  },
)
