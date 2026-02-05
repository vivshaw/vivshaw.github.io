/**
 * Rehype plugin that transforms GFM footnotes into Tufte-style sidenotes.
 *
 * on desktop: sidenotes appear in the margin
 * on mobile: sidenotes are hidden, original footnotes section remains
 *
 * this plugin:
 * 1. finds footnote references (elements with data-footnote-ref)
 * 2. wraps each reference with a sidenote containing the footnote content
 * 3. keeps the original footnotes section for mobile fallback
 *
 * see: https://keith.is/post/tufte-sidenotes-in-astro for inspiration
 */

import { visit, SKIP } from "unist-util-visit"

/**
 * extract the footnote ID from an href like "#user-content-fn-1", if present.
 * otherwise, return null.
 */
function getFootnoteId(href) {
  if (!href) return null
  const match = href.match(/user-content-fn-(.+)$/)
  return match ? match[1] : null
}

/**
 * given the document tree, find the footnotes section, if it's present.
 * otherwise, return null.
 */
function findFootnotesSection(tree) {
  let section = null

  visit(tree, "element", (node) => {
    if (
      node.tagName === "section" &&
      (node.properties?.dataFootnotes !== undefined ||
        node.properties?.className?.includes("footnotes"))
    ) {
      section = node
      return SKIP
    }
  })

  return section
}

/**
 * given the footnotes section, find all the footnote content and return them as a map.
 * this strips out `<p>` elements (preserving their text content) and backref links.
 */
function extractFootnoteContent(footnotesSection) {
  const footnoteContent = new Map()

  visit(footnotesSection, "element", (node) => {
    if (
      // each footnote is a list item
      node.tagName === "li" &&
      // each footnote has an ID in this format
      node.properties?.id?.includes("user-content-fn-")
    ) {
      const nodeId = getFootnoteId(node.properties.id)

      const content = []

      for (const child of node.children) {
        if (child.tagName === "p") {
          // unwrap `<p>` - take its children directly, filtering out backref links.
          // this is necessary 'cause sidenotes are _inside_ the paragraph they connect to,
          // so otherwise the sidenote would be a nested `<p>`!
          for (const c of child.children) {
            if (
              c.type === "element" &&
              c.tagName === "a" &&
              c.properties?.href?.includes("user-content-fnref")
            ) {
              // skip backref links
              continue
            }
            content.push(c)
          }
        } else {
          // keep other content as-is
          content.push(child)
        }
      }

      footnoteContent.set(nodeId, content)
    }
  })

  return footnoteContent
}

/**
 * given the footnote link, footnote number, and content, create the sidenote elements.
 * returns an array: [footnote ref `<sup>` , sidenote `<span>`]
 * these will be inserted as siblings.
 */
function createSidenoteElements(footnoteLink, footnoteNumber, content) {
  // the sup contains both the original <a> (for mobile footnotes)
  // and a plain text <span> (for desktop sidenotes).
  // CSS toggles which one is visible based on breakpoint.
  const sup = {
    type: "element",
    tagName: "sup",
    properties: { dataFootnoteRef: "" },
    children: [
      { ...footnoteLink },
      {
        type: "element",
        tagName: "span",
        properties: { className: ["sidenote-ref"] },
        children: [{ type: "text", value: footnoteNumber }],
      },
    ],
  }

  // create the sidenote span (will be a sibling to the `<sup>`)
  const sidenote = {
    type: "element",
    tagName: "span",
    properties: {
      className: ["sidenote"],
      role: "note",
    },
    children: [
      {
        type: "element",
        tagName: "span",
        properties: { className: ["sidenote-number"] },
        children: [{ type: "text", value: footnoteNumber }],
      },
      ...content,
    ],
  }

  return [sup, sidenote]
}

/**
 * given the document tree and the footnote content map, enhance every footnote reference link with a sidenote.
 */
function enhanceFootnoteRefWithSidenote(tree, footnoteContent) {
  visit(tree, "element", (node, index, parent) => {
    if (
      // the sup is the parent div...
      node.tagName === "sup" &&
      // ...so we have to verify it contains one child, which is the footnote link
      node.children.length === 1 &&
      node.children[0].tagName === "a" &&
      node.children[0].properties?.dataFootnoteRef !== undefined
    ) {
      const footnoteLink = node.children[0]

      // verify that this link points to a footnote ID
      const href = footnoteLink.properties.href
      const footnoteId = getFootnoteId(href)
      if (!footnoteId) return

      // verify that there is footnote content for that ID
      const content = footnoteContent.get(footnoteId)
      if (!content) return

      // get the footnote number from the link text
      const footnoteNumber = footnoteLink.children[0].value

      // create the sidenote elements
      const [sup, sidenote] = createSidenoteElements(
        footnoteLink,
        footnoteNumber,
        content,
      )

      // replace the original sup with the new sup + sidenote as siblings
      parent.children.splice(index, 1, sup, sidenote)

      return SKIP
    }
  })
}

/**
 * plugin entry point: add sidenotes to every footnote reference in the document.
 */
export default function rehypeSidenotes() {
  return (tree) => {
    // first pass: find the footnotes section
    const footnotesSection = findFootnotesSection(tree)
    if (!footnotesSection) return

    // second pass: extract all footnote content
    const footnoteContent = extractFootnoteContent(footnotesSection)

    // third pass: add the sidenote to each footnote ref
    enhanceFootnoteRefWithSidenote(tree, footnoteContent)
  }
}
