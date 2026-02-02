/**
 * a styled `<li>` element, for use in MDX lists.
 * works with both ordered and unordered lists.
 */
export function ListItem(props: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li {...props} />
}
