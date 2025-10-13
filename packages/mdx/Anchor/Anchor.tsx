import { clsx } from "clsx"

import { Link } from "@vivshaw/viriditas/components"
import { anchor } from "./Anchor.css"

/**
 * A styled `<a>` element, for use in MDX.
 */
export function Anchor({
  className,
  ...restProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Link className={clsx(anchor, className)} {...restProps} />
}
