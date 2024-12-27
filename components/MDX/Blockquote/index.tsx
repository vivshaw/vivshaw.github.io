import { blockquote } from "./blockquote.css"
import { clsx } from "clsx"

/**
 * A styled `<blockquote>` element, for use in MDX.
 */
export function Blockquote({
  className,
  ...restProps
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={clsx(blockquote, className)} {...restProps} />
}
