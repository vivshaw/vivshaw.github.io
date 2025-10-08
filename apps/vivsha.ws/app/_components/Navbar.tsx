import Link from "next/link"

import { DarkModeToggle } from "./DarkModeToggle"
import { controls, link, linkList, logoLink, root } from "./Navbar.css"

export function Navbar() {
  return (
    <nav className={root}>
      <Link className={logoLink} href="/" title="Go to the homepage">
        <em>vivshaw's</em>
      </Link>

      <div className={controls}>
        <ul className={linkList}>
          <li>
            <Link className={link} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <a className={link} href="https://zettel.vivsha.ws">
              Zettel
            </a>
          </li>
          <li>
            <Link className={link} href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <DarkModeToggle />
    </nav>
  )
}
