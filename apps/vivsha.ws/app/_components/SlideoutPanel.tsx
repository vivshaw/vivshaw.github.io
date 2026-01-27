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
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { author } from "#data"
import {
  closeButton,
  colophonLink,
  hamburgerButton,
  navLink,
  navList,
  panel,
  panelOpen,
  section,
  sectionLabel,
  socialList,
  socialSection,
  themeSwitcherPosition,
} from "./SlideoutPanel.css"
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
      className={`${panel} ${isOpen ? panelOpen : ""}`}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      role="dialog"
      aria-label="Navigation menu"
    >
      <div className={themeSwitcherPosition}>
        <ThemeSwitcher />
      </div>

      <button
        ref={closeButtonRef}
        className={closeButton}
        onClick={close}
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div className={section}>
        <span className={sectionLabel}>pages</span>
        <ul className={navList}>
          <li>
            <Link className={navLink} href="/blog" onClick={close}>
              blog
            </Link>
          </li>
          <li>
            <a className={navLink} href={author.zettelkasten} onClick={close}>
              zettel
            </a>
          </li>
          <li>
            <Link className={navLink} href="/about" onClick={close}>
              about
            </Link>
          </li>
        </ul>
      </div>

      <div className={socialSection}>
        <ul className={socialList}>
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

      <Link className={colophonLink} href="/colophon" onClick={close}>
        colophon
      </Link>
    </div>
  )

  return (
    <>
      <button
        ref={hamburgerRef}
        className={hamburgerButton}
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
