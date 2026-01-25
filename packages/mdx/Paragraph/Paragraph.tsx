import clsx from "clsx"
import { Text } from "@vivshaw/basalt/components"

import { paragraphStyle } from "./Paragraph.css"
import { wrapFirstThreeWords } from "./utils"

/**
 * a styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const wrappedChildren = wrapFirstThreeWords(children)

  return (
    <Text {...restProps} className={clsx(paragraphStyle, className)}>
      {wrappedChildren}
    </Text>
  )
}
