import { describe, it } from "node:test"
import assert from "node:assert/strict"
import rehypeSidenotes from "./index.mjs"

/** helpers to build hast nodes */
function root(...children) {
  return { type: "root", children }
}

function element(tagName, properties, children = []) {
  return { type: "element", tagName, properties, children }
}

function text(value) {
  return { type: "text", value }
}

/** build a footnote reference: <sup><a href="#user-content-fn-{id}" data-footnote-ref>{num}</a></sup> */
function footnoteRef(id, num) {
  return element("sup", {}, [
    element(
      "a",
      {
        href: `#user-content-fn-${id}`,
        dataFootnoteRef: "",
      },
      [text(String(num))],
    ),
  ])
}

/** build a footnotes section with given footnote items */
function footnotesSection(items) {
  return element("section", { dataFootnotes: "", className: ["footnotes"] }, [
    element(
      "ol",
      {},
      items.map(({ id, content }) =>
        element("li", { id: `user-content-fn-${id}` }, [
          element("p", {}, [
            ...content,
            element(
              "a",
              { href: `#user-content-fnref-${id}`, dataFootnoteBackref: "" },
              [text("↩")],
            ),
          ]),
        ]),
      ),
    ),
  ])
}

/** run the plugin transformer on a tree */
function run(tree) {
  const transformer = rehypeSidenotes()
  transformer(tree)
  return tree
}

describe("rehypeSidenotes", () => {
  it("transforms a footnote ref into a sidenote", () => {
    const tree = run(
      root(
        element("p", {}, [
          text("Some text"),
          footnoteRef("1", 1),
          text(" more text."),
        ]),
        footnotesSection([{ id: "1", content: [text("Footnote content.")] }]),
      ),
    )

    const para = tree.children[0]

    // should have: text, sup, sidenote span, text
    assert.equal(para.children.length, 4)

    // the sup should now contain both the link and a sidenote-ref span
    const sup = para.children[1]
    assert.equal(sup.tagName, "sup")
    assert.equal(sup.children.length, 2)
    assert.equal(sup.children[0].tagName, "a") // original link
    assert.equal(sup.children[1].tagName, "span") // sidenote-ref
    assert.deepEqual(sup.children[1].properties.className, ["sidenote-ref"])

    // the sidenote span should be a sibling
    const sidenote = para.children[2]
    assert.equal(sidenote.tagName, "span")
    assert.deepEqual(sidenote.properties.className, ["sidenote"])
    assert.equal(sidenote.properties.role, "note")

    // sidenote should contain: sidenote-number span + content
    assert.equal(sidenote.children[0].tagName, "span")
    assert.deepEqual(sidenote.children[0].properties.className, [
      "sidenote-number",
    ])
    assert.equal(sidenote.children[1].value, "Footnote content.")
  })

  it("handles multiple footnotes", () => {
    const tree = run(
      root(
        element("p", {}, [
          text("First"),
          footnoteRef("1", 1),
          text(" and second"),
          footnoteRef("2", 2),
          text("."),
        ]),
        footnotesSection([
          { id: "1", content: [text("First note.")] },
          { id: "2", content: [text("Second note.")] },
        ]),
      ),
    )

    const para = tree.children[0]

    // count sidenote spans
    const sidenotes = para.children.filter(
      (c) =>
        c.tagName === "span" && c.properties?.className?.includes("sidenote"),
    )
    assert.equal(sidenotes.length, 2)

    // verify content
    assert.equal(sidenotes[0].children[1].value, "First note.")
    assert.equal(sidenotes[1].children[1].value, "Second note.")
  })

  it("no-op when no footnotes section", () => {
    const tree = root(
      element("p", {}, [text("Some text"), footnoteRef("1", 1)]),
    )
    const original = JSON.parse(JSON.stringify(tree))
    run(tree)

    assert.deepEqual(tree, original)
  })

  it("preserves the footnotes section for mobile fallback", () => {
    const tree = run(
      root(
        element("p", {}, [text("Text"), footnoteRef("1", 1)]),
        footnotesSection([{ id: "1", content: [text("Note.")] }]),
      ),
    )

    // footnotes section should still exist
    const section = tree.children.find(
      (c) =>
        c.tagName === "section" && c.properties?.dataFootnotes !== undefined,
    )
    assert.ok(section, "footnotes section should be preserved")
  })

  it("strips backref links from sidenote content", () => {
    const tree = run(
      root(
        element("p", {}, [text("Text"), footnoteRef("1", 1)]),
        footnotesSection([{ id: "1", content: [text("Note content.")] }]),
      ),
    )

    const para = tree.children[0]
    const sidenote = para.children.find(
      (c) =>
        c.tagName === "span" && c.properties?.className?.includes("sidenote"),
    )

    // sidenote content should not contain any backref links
    const hasBackref = sidenote.children.some(
      (c) => c.tagName === "a" && c.properties?.href?.includes("fnref"),
    )
    assert.equal(hasBackref, false)
  })
})
