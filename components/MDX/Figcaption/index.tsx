import { clsx } from "clsx"

import { figcaption } from "./figcaption.css"
/**
 * A styled `<figcaption>` element, for use in MDX.
 */
export function Figcaption({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLElement>) {
  return <figcaption className={clsx(figcaption, className)} {...restProps} />
}
