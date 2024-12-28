"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { useState } from "react"

import { CloseIcon } from "#icons/ui/Close"
import { MenuIcon } from "#icons/ui/Menu"
import { tokens } from "#viriditas/theme/theme.css"
import { DarkModeToggle } from "./DarkModeToggle"
import {
  container,
  iconWrapper,
  contents,
  link,
  linkList,
} from "./MobileMenu.css"

export function MobileMenu(): React.ReactElement<any> {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((menuState) => !menuState)

  return (
    <div className={container}>
      <div className={iconWrapper} onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIcon fill={tokens.color.primary} />
        ) : (
          <MenuIcon fill={tokens.color.primary} />
        )}
      </div>

      <div className={clsx(contents, menuOpen && "show")}>
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
