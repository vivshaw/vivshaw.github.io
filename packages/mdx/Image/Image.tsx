import type { StaticImageData } from "next/image"

import styles from "./Image.module.css"

type ImageProps = Omit<React.ComponentPropsWithoutRef<"img">, "src"> & {
  src?: string | StaticImageData
}

/**
 * a styled `<img>` element, for use in MDX.
 * handles both string URLs and Next.js static image imports.
 */
export function Image({ src, alt, ...props }: ImageProps) {
  const imgSrc =
    typeof src === "object" && src !== null && "src" in src ? src.src : src
  return <img src={imgSrc} alt={alt} className={styles.image} {...props} />
}
