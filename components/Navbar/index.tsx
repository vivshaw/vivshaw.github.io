import Link from "next/link"

import { DarkModeToggle } from "@components/Navbar/DarkModeToggle"
import { centeringWrapper } from "@pageStyles/main.css"
import { MobileMenu } from "./MobileMenu"
import {
  logoLink,
  navContainer,
  navControls,
  navLinks,
  pageLink,
} from "./navbar.css"

export function Navbar() {
  return (
    <div className={centeringWrapper}>
      <nav className={navContainer}>
        <Link className={logoLink} href="/" title="Go to the homepage">
          <em>vivshaw's</em>
        </Link>

        <div className={navControls}>
          <ul className={navLinks}>
            <li>
              <Link className={pageLink} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a className={pageLink} href="https://zettel.vivsha.ws">
                Zettel
              </a>
            </li>
            <li>
              <Link className={pageLink} href="/about">
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
