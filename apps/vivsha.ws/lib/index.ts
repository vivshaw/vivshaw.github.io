/**
 * copy text to clipboard
 *
 * @param {string} toCopy text to copy
 */
export function copyToClipboard(toCopy: string): void {
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
 * pretty-prints a Date in a nice localized format, like `Sunday, Jul 12, 2017`.
 */
export function prettyPrintDate(date: Date): string {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
