import { describe, it } from "node:test"
import assert from "node:assert/strict"
import rehypeSmallcapWords from "./index.mjs"

/** helpers to build a minimal hast tree */
function root(...children) {
  return { type: "root", children }
}

function p(...children) {
  return { type: "element", tagName: "p", properties: {}, children }
}

function text(value) {
  return { type: "text", value }
}

function div(...children) {
  return { type: "element", tagName: "div", properties: {}, children }
}

/** run the plugin transformer on a tree. */
function run(tree, options) {
  const transformer = rehypeSmallcapWords(options)
  transformer(tree)
  return tree
}

describe("rehypeSmallcapWords", () => {
  it("wraps first 3 words by default", () => {
    const tree = run(root(p(text("one two three four five"))))

    const para = tree.children[0]
    assert.equal(para.children.length, 2)

    const span = para.children[0]
    assert.equal(span.type, "element")
    assert.equal(span.tagName, "span")
    assert.deepEqual(span.properties.className, ["first-three"])
    assert.equal(span.children[0].value, "one two three")

    assert.equal(para.children[1].type, "text")
    assert.equal(para.children[1].value, " four five")
  })

  it("respects custom wordCount", () => {
    const tree = run(root(p(text("one two three four five"))), { wordCount: 2 })

    const para = tree.children[0]
    const span = para.children[0]
    assert.equal(span.children[0].value, "one two")
    assert.equal(para.children[1].value, " three four five")
  })

  it("no-op when fewer words than wordCount", () => {
    const tree = root(p(text("hello world")))
    const original = JSON.parse(JSON.stringify(tree))
    run(tree)

    assert.deepEqual(tree, original)
  })

  it("no-op when no <p> element", () => {
    const tree = root(div(text("one two three four five")))
    const original = JSON.parse(JSON.stringify(tree))
    run(tree)

    assert.deepEqual(tree, original)
  })

  it("only affects the first <p>", () => {
    const tree = run(
      root(
        p(text("one two three four five")),
        p(text("six seven eight nine ten")),
      ),
    )

    // First paragraph should be modified
    const firstP = tree.children[0]
    assert.equal(firstP.children[0].tagName, "span")

    // Second paragraph should be untouched
    const secondP = tree.children[1]
    assert.equal(secondP.children.length, 1)
    assert.equal(secondP.children[0].type, "text")
    assert.equal(secondP.children[0].value, "six seven eight nine ten")
  })
})
