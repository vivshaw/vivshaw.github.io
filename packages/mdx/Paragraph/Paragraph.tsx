import { clsx } from "clsx"

import { paragraph } from "./Paragraph.css"
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
    <p {...restProps} className={clsx(paragraph, className)}>
      {wrappedChildren}
    </p>
  )
}
