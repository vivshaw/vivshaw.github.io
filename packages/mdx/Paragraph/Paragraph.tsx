import clsx from "clsx"
import { Text } from "@vivshaw/basalt/components"

import { paragraphStyle } from "./Paragraph.css"

/**
 * a styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text {...restProps} className={clsx(paragraphStyle, className)}>
      {children}
    </Text>
  )
}
