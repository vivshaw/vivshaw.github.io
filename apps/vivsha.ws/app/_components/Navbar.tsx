"use client"

import clsx from "clsx"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { author } from "#data"

import styles from "./Navbar.module.css"
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
      <nav className={clsx(styles.root, isHidden && styles.rootHidden)}>
        <Link
          className={styles.wordmarkLink}
          href="/"
          title="Go to the homepage"
        >
          <em>vivshaw's</em>
        </Link>

        <div className={styles.controls}>
          <ul
            className={clsx(
              styles.linkList,
              variant === "abbreviated" && styles.abbreviated,
            )}
          >
            <li>
              <Link className={styles.link} href="/blog">
                blog
              </Link>
            </li>
            <li>
              <a className={styles.link} href={author.zettelkasten}>
                zettel
              </a>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                about
              </Link>
            </li>
          </ul>
          <SlideoutPanel />
        </div>
      </nav>
      <div className={styles.spacer} />
    </>
  )
}
