import clsx from "clsx"
import { ComponentPropsWithRef } from "react"

import { Box } from "./Box"
import { Sprinkles } from "../theme/index.css"
import { link } from "./Link.css"

export type LinkProps = Omit<ComponentPropsWithRef<"a">, "color"> & {
  sx?: Sprinkles
}

/**
 * a styled link component that extends Box.
 * supports all Box props plus standard anchor props.
 */
export function Link({ className, sx, ...props }: LinkProps) {
  return (
    <Box
      as="a"
      className={clsx(link, className)}
      sx={{
        color: "primary",
        text: "body",
        ...sx,
      }}
      {...props}
    />
  )
}
