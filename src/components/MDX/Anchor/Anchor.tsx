import { clsx } from "clsx"

import { anchor } from "./Anchor.css"

/**
 * A styled `<a>` element, for use in MDX.
 */
export function Anchor({
  className,
  ...restProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={clsx(anchor, className)} {...restProps} />
}
