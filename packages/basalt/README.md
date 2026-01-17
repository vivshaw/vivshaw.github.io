# @vivshaw/basalt

this package contains (the bones of) the design system used to style [vivsha.ws](https://vivsha.ws). it's built with [Vanilla Extract](https://vanilla-extract.style/), and uses no runtime stylesheets. the library does not use client React and is fully appropriate for React Server Components.

## Components

### Box

the `<Box>` component is the foundation of the Basalt layout system. It provides access to all Basalt design tokens through a prop-based API.

```tsx
// basic usage
<Box
  sx={{
    m: "4",
    p: "2"
  }}
>
  Content
</Box>

// with responsive props
<Box
  sx={{
    m: {
      phone: "2",
      tablet: "4",
      desktop: "8"
    }
  }}
>
  Content
</Box>

// as another element
<Box
  sx={{
    m: "4"
  }}
  as="section"
>
  Content
</Box>
```

#### Available Props

`<Box>` supports all standard spacing properties:

- Margin: `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`
- Padding: `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`
- Gap: `gap`, `columnGap`, `rowGap`
- Width/Height: `width`, `minWidth`, `maxWidth`, `height`, `minHeight`, `maxHeight`
- Position: `inset`, `top`, `right`, `bottom`, `left`

all spacing props accept Basalt standard spacing tokens, which follow a scale where 1 unit = 0.25rem (4px).

`<Box>` also provides access to typography tokens through props:

- `font`: Font family (`serif`, `sans`, `monospace`)
- `fontSize`: Font size tokens
- `lineHeight`: Line height tokens
- `fontWeight`: Font weight tokens
