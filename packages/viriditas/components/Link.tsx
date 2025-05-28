import { link } from "./Link.css"

interface LinkProps {
  children: React.ReactNode
  href: string
}

export function Link({ children, href }: LinkProps) {
  return (
    <a className={link} href={href}>
      {children}
    </a>
  )
}
