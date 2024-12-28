"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { useState } from "react"

import { CloseIcon } from "@icons/ui/Close"
import { MenuIcon } from "@icons/ui/Menu"
import { tokens } from "@viriditas/theme/theme.css"
import { DarkModeToggle } from "../DarkModeToggle"
import {
  mobileMenuWrapper,
  iconWrapper,
  mobileMenuContents,
  mobileMenuLink,
  mobileMenuNavLinks,
} from "./mobileMenu.css"

export function MobileMenu(): React.ReactElement<any> {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((menuState) => !menuState)

  return (
    <div className={mobileMenuWrapper}>
      <div className={iconWrapper} onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIcon fill={tokens.color.primary} />
        ) : (
          <MenuIcon fill={tokens.color.primary} />
        )}
      </div>

      <div className={clsx(mobileMenuContents, menuOpen && "show")}>
        <ul className={mobileMenuNavLinks}>
          <li>
            <Link className={mobileMenuLink} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <a className={mobileMenuLink} href="https://zettel.vivsha.ws">
              Zettel
            </a>
          </li>
          <li>
            <Link className={mobileMenuLink} href="/about">
              About
            </Link>
          </li>
          <li
            style={{
              marginLeft: -6,
              marginTop: 5,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </div>
  )
}
