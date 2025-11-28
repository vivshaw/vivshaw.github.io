import { ComponentPropsWithRef } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"

export type LinkProps = Omit<
  ComponentPropsWithRef<"a">,
  "color" | "className"
> & {
  sx?: Sprinkles
}

/**
 * a styled link component that extends Box.
 * supports all Box props plus standard anchor props.
 */
export function Link({ sx, ...props }: LinkProps) {
  return (
    <Box
      as="a"
      sx={{
        color: "primary",
        focusRing: "default",
        ...sx,
      }}
      {...props}
    />
  )
}
