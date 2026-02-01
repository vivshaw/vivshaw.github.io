# @vivshaw/basalt

this package contains (the bones of) the design system used to style [vivsha.ws](https://vivsha.ws). it uses CSS Modules with PostCSS mixins for component styling, and [Vanilla Extract](https://vanilla-extract.style/) for the theme/sprinkles layer. the library does not use client React and is fully appropriate for React Server Components.

## Components

### Heading

the `<Heading>` component renders semantic heading elements (`h1`–`h6`).

```tsx
<Heading level="1">Page Title</Heading>
<Heading level="2">Section Title</Heading>
```

### Text

the `<Text>` component handles all typography. it supports font selection, size presets, and polymorphic rendering.

```tsx
<Text>Body text in serif</Text>
<Text font="sans" size="small">Small sans-serif text</Text>
<Text as="span">Inline text</Text>
```

### Link

the `<Link>` component renders styled anchor elements with an optional squiggly underline hover effect.

```tsx
<Link href="/about">About</Link>
<Link href="/plain" decoration="none">No underline</Link>
```

### Pill

the `<Pill>` component renders a small, pill-shaped inline element for tags and labels.

```tsx
<Pill href="/tags/react">React</Pill>
```
