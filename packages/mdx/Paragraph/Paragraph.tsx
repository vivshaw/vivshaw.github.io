import { clsx } from "clsx"

import { paragraph } from "./Paragraph.css"

/**
 * A styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...restProps} className={clsx(paragraph, className)} />
}
