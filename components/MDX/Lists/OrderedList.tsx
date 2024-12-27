import { clsx } from "clsx"
import { orderedList } from "./orderedList.css"

/**
 * A styled `<ol>` element, for use in MDX.
 */
export function OrderedList({
  className,
  ...restProps
}: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol {...restProps} className={clsx(orderedList, className)} />
}
