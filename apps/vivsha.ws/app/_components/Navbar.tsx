"use client"

import clsx from "clsx"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { author } from "#data"

import {
  controls,
  link,
  linkList,
  abbreviated,
  logoLink,
  root,
  rootHidden,
  spacer,
} from "./Navbar.css"
import { SlideoutPanel } from "./SlideoutPanel"

type NavbarProps = {
  variant?: "full" | "abbreviated"
}

export function Navbar({ variant = "abbreviated" }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const scrollThreshold = 10 // minimum scroll before hiding

    // don't hide when near the top of the page
    if (currentScrollY < 50) {
      setIsHidden(false)
      setLastScrollY(currentScrollY)
      return
    }

    // only react to scroll if we've moved more than the threshold
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return
    }

    // scrolling down -> hide, scrolling up -> show
    if (currentScrollY > lastScrollY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <>
      <nav className={clsx(root, isHidden && rootHidden)}>
        <Link className={logoLink} href="/" title="Go to the homepage">
          <em>vivshaw's</em>
        </Link>

        <div className={controls}>
          <ul
            className={clsx(linkList, variant === "abbreviated" && abbreviated)}
          >
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
          <SlideoutPanel />
        </div>
      </nav>
      <div className={spacer} />
    </>
  )
}
