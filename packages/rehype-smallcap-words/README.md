# @vivshaw/rehype-smallcap-words

rehype plugin that wraps the first N words of the first paragraph in a `<span>`, so they can be styled as small caps. this runs at build time, so no runtime word-wrapping is needed.

## usage

```js
import rehypeSmallcapWords from "@vivshaw/rehype-smallcap-words"

// default (first 3 words)
rehypeSmallcapWords

// custom word count
[rehypeSmallcapWords, { wordCount: 5 }]
```

## what it does

given this HTML:

```html
<p>Once upon a time there was a paragraph.</p>
```

the plugin produces:

```html
<p><span class="first-three">Once upon a</span> time there was a paragraph.</p>
```

the span gets the class `first-three`, which you can target in CSS to apply small-caps or any other styling.

## options

| option      | type     | default | description             |
| ----------- | -------- | ------- | ----------------------- |
| `wordCount` | `number` | `3`     | number of words to wrap |

## notes

- only the first `<p>` element in the document is affected.
- if the first paragraph has fewer words than `wordCount`, no wrapping is applied.
