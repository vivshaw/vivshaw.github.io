import { Link, Text } from "@vivshaw/basalt"

import { LayoutWrapper } from "./_components/LayoutWrapper"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <LayoutWrapper showImageBackground navbarVariant="full">
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.heading}>404</h1>

          <Text as="p" className={styles.haiku}>
            this world of dew
            <br />
            is only a world of dew—
            <br />
            and yet… and yet…
          </Text>

          <Text as="p" className={styles.haiku}>
            —Kobayashi Issa
          </Text>

          <Link href="/" className={styles.homeLink}>
            Return home &gt;
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  )
}
