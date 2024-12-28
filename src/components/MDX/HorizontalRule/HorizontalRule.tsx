"use client"

import { clsx } from "clsx"

import { useViriditasTheme } from "#viriditas/context"
import { horizontalRule } from "./HorizontalRule.css"

/**
 * A styled `<hr>` element, for use in MDX.
 */
export function HorizontalRule({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHRElement>) {
  const { theme } = useViriditasTheme()

  return (
    <hr
      {...restProps}
      className={clsx(
        horizontalRule({
          mode: theme,
        }),
        className,
      )}
    />
  )
}
