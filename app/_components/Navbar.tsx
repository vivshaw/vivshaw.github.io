import Link from "next/link"

import { DarkModeToggle } from "@app/_components/DarkModeToggle"
import { centeringWrapper } from "@pageStyles/main.css"
import { MobileMenu } from "./MobileMenu"
import { logoLink, container, controls, linkList, link } from "./Navbar.css"

export function Navbar() {
  return (
    <div className={centeringWrapper}>
      <nav className={container}>
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
          <DarkModeToggle />
        </div>

        <MobileMenu />
      </nav>
    </div>
  )
}
