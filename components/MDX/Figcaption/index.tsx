import { figcaption } from "./figcaption.css"
import { clsx } from "clsx"

/**
 * A styled `<figcaption>` element, for use in MDX.
 */
export function Figcaption({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLElement>) {
  return <figcaption className={clsx(figcaption, className)} {...restProps} />
}
