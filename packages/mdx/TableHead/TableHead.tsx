import { Box } from "@vivshaw/viriditas/components"
import { clsx } from "clsx"

import { tableHead } from "./TableHead.css"

/**
 * A styled `<thead>` element, for use in MDX.
 */
export function TableHead({
  className,
  ...restProps
}: Omit<React.HTMLAttributes<HTMLTableSectionElement>, "color">) {
  return (
    <Box
      as="thead"
      className={clsx(tableHead, className)}
      color="primary"
      font="serif"
      fontWeight="bold"
      lineHeight="heading"
      {...restProps}
    />
  )
}
