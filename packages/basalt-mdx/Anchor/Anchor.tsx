import { Link } from "@vivshaw/basalt"

/**
 * a styled `<a>` element, for use in MDX.
 */
export function Anchor({
  ...anchorProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Link {...anchorProps} />
}
