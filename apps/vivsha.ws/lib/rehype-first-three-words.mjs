/**
 * Rehype plugin that wraps the first three words of the first paragraph
 * in a span, so they can be styled as small caps.
 *
 * this runs at build time, so the Paragraph component doesn't need to
 * do any runtime word-wrapping.
 */

import { visit, EXIT } from "unist-util-visit"

const FIRST_THREE_CLASS = "first-three"

/**
 * split a string into the first three words and the rest.
 * returns `[firstThreeText, restText]`, or `null` if fewer than 3 words.
 */
function splitAtThirdWord(text) {
  const words = text.split(/(\s+)/)

  let wordCount = 0
  let splitIndex = 0

  for (let i = 0; i < words.length && wordCount < 3; i++) {
    if (words[i].trim()) {
      wordCount++
      splitIndex = i + 1
    }
  }

  if (wordCount < 3) return null

  return [words.slice(0, splitIndex).join(""), words.slice(splitIndex).join("")]
}

/**
 * plugin entry point: find the first `<p>` and wrap its first three words.
 */
export default function rehypeFirstThreeWords() {
  return (tree) => {
    let firstP = null

    // find the first `<p>` element in the document
    visit(tree, "element", (node) => {
      if (node.tagName === "p") {
        firstP = node
        return EXIT
      }
    })

    if (!firstP) return

    // find the first text node in the paragraph
    let found = false

    visit(firstP, "text", (node, index, parent) => {
      if (found) return EXIT
      if (!node.value.trim()) return

      const split = splitAtThirdWord(node.value)
      if (!split) return

      const [firstThreeText, restText] = split

      // replace the text node with a span + remaining text
      const newNodes = [
        {
          type: "element",
          tagName: "span",
          properties: { className: [FIRST_THREE_CLASS] },
          children: [{ type: "text", value: firstThreeText }],
        },
      ]

      if (restText) {
        newNodes.push({ type: "text", value: restText })
      }

      parent.children.splice(index, 1, ...newNodes)
      found = true
      return EXIT
    })
  }
}
