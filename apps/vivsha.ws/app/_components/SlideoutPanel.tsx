"use client"

import { faBluesky, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faEnvelope,
  faRss,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Pill } from "@vivshaw/basalt/components"
import clsx from "clsx"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { author } from "#data"
import styles from "./SlideoutPanel.module.css"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function SlideoutPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // track mount state for portal (SSR safety)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  // handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        close()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, close])

  // handle click outside
  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        close()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, close])

  // focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return

    const panel = panelRef.current
    const focusableElements = panel.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    function handleTabKey(event: KeyboardEvent) {
      if (event.key !== "Tab") return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    // focus first element when opened
    closeButtonRef.current?.focus()

    document.addEventListener("keydown", handleTabKey)
    return () => document.removeEventListener("keydown", handleTabKey)
  }, [isOpen])

  // prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const panelContent = (
    <div
      ref={panelRef}
      id="slideout-panel"
      className={clsx(styles.panel, isOpen && styles.panelOpen)}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      role="dialog"
      aria-label="Navigation menu"
    >
      <div className={styles.themeSwitcherPosition}>
        <ThemeSwitcher />
      </div>

      <button
        ref={closeButtonRef}
        className={styles.closeButton}
        onClick={close}
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>pages</span>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href="/blog" onClick={close}>
              blog
            </Link>
          </li>
          <li>
            <a
              className={styles.navLink}
              href={author.zettelkasten}
              onClick={close}
            >
              zettel
            </a>
          </li>
          <li>
            <Link className={styles.navLink} href="/about" onClick={close}>
              about
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.socialSection}>
        <ul className={styles.socialList}>
          <li>
            <Pill as="a" href={author.mailto}>
              <FontAwesomeIcon icon={faEnvelope} />
              email
            </Pill>
          </li>
          <li>
            <Pill
              as="a"
              href={author.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              github
            </Pill>
          </li>
          <li>
            <Pill
              as="a"
              href={author.socials.bluesky}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBluesky} />
              bluesky
            </Pill>
          </li>
          <li>
            <Pill as="a" href="/feed.xml">
              <FontAwesomeIcon icon={faRss} />
              rss
            </Pill>
          </li>
        </ul>
      </div>

      <Link className={styles.colophonLink} href="/colophon" onClick={close}>
        colophon
      </Link>
    </div>
  )

  return (
    <>
      <button
        ref={hamburgerRef}
        className={styles.hamburgerButton}
        onClick={open}
        aria-expanded={isOpen}
        aria-label="Open menu"
        aria-controls="slideout-panel"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {isMounted && createPortal(panelContent, document.body)}
    </>
  )
}
