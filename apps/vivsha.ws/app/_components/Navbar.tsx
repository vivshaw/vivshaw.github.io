import Link from "next/link"

import { author } from "#data"
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
              blog
            </Link>
          </li>
          <li>
            <a className={link} href={author.zettelkasten}>
              zettel
            </a>
          </li>
          <li>
            <Link className={link} href="/about">
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
