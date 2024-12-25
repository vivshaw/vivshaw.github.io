/**
 * Copy text to clipboard
 *
 * @param {string} toCopy Text to copy
 */
export function copyToClipboard(toCopy: string) {
  const el = document.createElement(`textarea`)
  el.value = toCopy
  el.setAttribute(`readonly`, ``)
  el.style.position = `absolute`
  el.style.left = `-9999px`
  document.body.appendChild(el)
  el.select()
  document.execCommand(`copy`)
  document.body.removeChild(el)
}

/**
 * Pretty-prints a Date in a nice localized format, like `Sunday, Jul 12, 2017`.
 */
export const prettyPrintDate = (date: Date) =>
  date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
