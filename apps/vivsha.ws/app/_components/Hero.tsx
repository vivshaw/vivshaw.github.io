import { Heading } from "@vivshaw/basalt"

import styles from "./Hero.module.css"

interface HeroProps {
  title: string
  subtitle?: string
}

/**
 * displays the hero section for a given page or post.
 */
export function Hero({ title, subtitle }: HeroProps) {
  return (
    <header className={styles.root}>
      <Heading level="1">
        {title}
        {subtitle && (
          <>
            <br />
            <em>{subtitle}</em>
          </>
        )}
      </Heading>
    </header>
  )
}
