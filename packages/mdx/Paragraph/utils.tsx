import { Children, ReactNode } from "react"

import { firstThree } from "./Paragraph.css"

/**
 * wraps the first three words of text content in a span with the firstThree class.
 */
export function wrapFirstThreeWords(children: ReactNode): ReactNode {
  // convert children to array for easier processing
  const childArray = Children.toArray(children)

  // find the first text node and extract its content
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

  // if no text found, return children as-is
  if (firstTextIndex === -1 || !firstText.trim()) {
    return children
  }

  // split text into words
  const words = firstText.split(/(\s+)/)

  // count actual words (non-whitespace)
  let wordCount = 0
  let splitIndex = 0

  for (let i = 0; i < words.length && wordCount < 3; i++) {
    if (words[i].trim()) {
      wordCount++
      splitIndex = i + 1
    }
  }

  // if we don't have at least 3 words, return as-is
  if (wordCount < 3) {
    return children
  }

  // split the text at the third word
  const firstThreeText = words.slice(0, splitIndex).join("")
  const restText = words.slice(splitIndex).join("")

  // create the wrapped version
  const newFirstChild = (
    <>
      <span className={firstThree}>{firstThreeText}</span>
      {restText}
    </>
  )

  // replace the first text child with our wrapped version
  const newChildren = [...childArray]
  newChildren[firstTextIndex] = newFirstChild

  return newChildren
}
