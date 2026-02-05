/**
 * Rehype plugin that wraps the first N words of the first paragraph
 * in a span, so they can be styled as small caps.
 *
 * this runs at build time, so the Paragraph component doesn't need to
 * do any runtime word-wrapping.
 *
 * @param {object} [options]
 * @param {number} [options.wordCount=3] — number of words to wrap
 */

import { visit, EXIT } from "unist-util-visit"

const LEADING_WORDS_CLASS = "leading-words"

/**
 * split a string into the first N words and the rest.
 * returns `[headText, tailText]`, or `null` if fewer than N words.
 */
function splitAtWord(text, n) {
  const words = text.split(/(\s+)/)

  let wordCount = 0
  let splitIndex = 0

  for (let i = 0; i < words.length && wordCount < n; i++) {
    if (words[i].trim()) {
      wordCount++
      splitIndex = i + 1
    }
  }

  if (wordCount < n) return null

  return [words.slice(0, splitIndex).join(""), words.slice(splitIndex).join("")]
}

/**
 * plugin entry point: find the first `<p>` and wrap its first N words.
 */
export default function rehypeSmallcapWords({ wordCount = 3 } = {}) {
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

      const split = splitAtWord(node.value, wordCount)
      if (!split) return

      const [headText, tailText] = split

      // replace the text node with a span + remaining text
      const newNodes = [
        {
          type: "element",
          tagName: "span",
          properties: { className: [LEADING_WORDS_CLASS] },
          children: [{ type: "text", value: headText }],
        },
      ]

      if (tailText) {
        newNodes.push({ type: "text", value: tailText })
      }

      parent.children.splice(index, 1, ...newNodes)
      found = true
      return EXIT
    })
  }
}
