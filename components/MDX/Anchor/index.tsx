import { anchor } from "./anchor.css"
import { clsx } from "clsx"

/**
 * A styled `<a>` element, for use in MDX.
 */
export function Anchor({
  className,
  ...restProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={clsx(anchor, className)} {...restProps} />
}
