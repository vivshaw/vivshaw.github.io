import { clsx } from "clsx"
import { Children, ReactNode } from "react"

import { paragraph, firstThree } from "./Paragraph.css"

/**
 * Wraps the first three words of text content in a span with the firstThree class.
 */
function wrapFirstThreeWords(children: ReactNode): ReactNode {
  // Convert children to array for easier processing
  const childArray = Children.toArray(children)

  // Find the first text node and extract its content
  let firstTextIndex = -1
  let firstText = ""

  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i]
    if (typeof child === "string") {
      firstTextIndex = i
      firstText = child
      break
    }
  }

  // If no text found, return children as-is
  if (firstTextIndex === -1 || !firstText.trim()) {
    return children
  }

  // Split text into words
  const words = firstText.split(/(\s+)/)

  // Count actual words (non-whitespace)
  let wordCount = 0
  let splitIndex = 0

  for (let i = 0; i < words.length && wordCount < 3; i++) {
    if (words[i].trim()) {
      wordCount++
      splitIndex = i + 1
    }
  }

  // If we don't have at least 3 words, return as-is
  if (wordCount < 3) {
    return children
  }

  // Split the text at the third word
  const firstThreeText = words.slice(0, splitIndex).join("")
  const restText = words.slice(splitIndex).join("")

  // Create the wrapped version
  const newFirstChild = (
    <>
      <span className={firstThree}>{firstThreeText}</span>
      {restText}
    </>
  )

  // Replace the first text child with our wrapped version
  const newChildren = [...childArray]
  newChildren[firstTextIndex] = newFirstChild

  return newChildren
}

/**
 * A styled <p> element, for use in MDX.
 */
export function Paragraph({
  className,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const wrappedChildren = wrapFirstThreeWords(children)

  return (
    <p {...restProps} className={clsx(paragraph, className)}>
      {wrappedChildren}
    </p>
  )
}
