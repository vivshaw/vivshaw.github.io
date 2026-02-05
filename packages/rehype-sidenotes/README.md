# @vivshaw/rehype-sidenotes

rehype plugin that transforms GFM-style footnotes into Tufte-style sidenotes. this will set up the markup, but you're responsible for applying the styling. works with `remark-gfm`.

## usage

```js
import rehypeSidenotes from "@vivshaw/rehype-sidenotes"

rehypePlugins: [rehypeSidenotes]
```

## what it does

given GFM-like footnote markup like this:

```html
<p>
  Some text<sup><a href="#user-content-fn-1" data-footnote-ref>1</a></sup
  >.
</p>
<section data-footnotes class="footnotes">
  <ol>
    <li id="user-content-fn-1">
      <p>Footnote content. <a href="#user-content-fnref-1">↩</a></p>
    </li>
  </ol>
</section>
```

the plugin produces:

```html
<p>
  Some text
  <sup data-footnote-ref>
    <a href="#user-content-fn-1" data-footnote-ref>1</a>
    <span class="sidenote-ref">1</span>
  </sup>
  <span class="sidenote" role="note">
    <span class="sidenote-number">1</span> Footnote content. </span
  >.
</p>
<!-- footnotes section preserved for mobile fallback -->
```

## styling

you'll need to provide your own CSS targeting:

- `.sidenote` — the sidenote container (hidden on mobile, floated to margin on desktop)
- `.sidenote-ref` — the plain-text reference number (hidden on mobile, shown on desktop)
- `.sidenote-number` — the number label inside the sidenote

the original footnote section is preserved. so, for example, you can show footnotes on mobile and sidenotes on larger screens. again, you are responsible for applying this CSS.
