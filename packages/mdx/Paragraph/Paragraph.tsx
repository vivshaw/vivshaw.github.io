import clsx from "clsx"
import { Text, type TextProps } from "@vivshaw/basalt/components"

import { paragraphStyle } from "./Paragraph.css"

/**
 * a styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: TextProps<"p">) {
  return (
    <Text {...restProps} className={clsx(paragraphStyle, className)}>
      {children}
    </Text>
  )
}
