# @vivshaw/basalt

this package contains (the bones of) the design system used to style [vivsha.ws](https://vivsha.ws). component styling uses CSS Modules with PostCSS mixins, backed by design tokens defined as CSS custom properties. the library does not use client React and is fully appropriate for React Server Components.

## scripts

all scripts should be run from the monorepo root.

| command                                          | what it does                   |
| ------------------------------------------------ | ------------------------------ |
| `yarn workspace @vivshaw/basalt storybook`       | launch Storybook on port 6006  |
| `yarn workspace @vivshaw/basalt build-storybook` | build Storybook for deployment |

## setup

import the CSS entry point once in your app's root layout. this brings in fonts, design tokens, and the CSS reset:

```tsx
import "@vivshaw/basalt/css"
```

basalt's PostCSS mixins require `postcss-mixins` in your PostCSS config, pointed at the mixins file:

```js
// postcss.config.mjs
import { join } from "path"

export default {
  plugins: {
    "postcss-mixins": {
      mixinsFiles: [
        join(import.meta.dirname, "packages/basalt/css/mixins.css"),
      ],
    },
  },
}
```

## theme

basalt supports light/dark theme via CSS classes on the `<html>` element. three constants are exported for managing this:

| Export                   | Value         | Purpose                               |
| ------------------------ | ------------- | ------------------------------------- |
| `DARK_COLOR_MODE_CLASS`  | `"basalt-dark"`  | apply to `<html>` to force dark mode  |
| `LIGHT_COLOR_MODE_CLASS` | `"basalt-light"` | apply to `<html>` to force light mode |

it's your responsibility to apply these classes and switch them when desired. when neither class is present, basalt falls back to `prefers-color-scheme`. use `@mixin dark-mode` and `@mixin light-mode` in CSS rather than referencing these classes directly.

## components

components can be imported from the main entry point:

```tsx
import { Heading, Link, Pill, Text } from "@vivshaw/basalt"
```

### heading

renders semantic heading elements (`h1`–`h6`).

```tsx
<Heading level="1">Page Title</Heading>
<Heading level="2">Section Title</Heading>
```

### text

handles all typography. supports font selection, size presets, and polymorphic rendering.

```tsx
<Text>Body text in serif</Text>
<Text font="sans" size="small">Small sans-serif text</Text>
<Text as="span">Inline text</Text>
```

### link

styled anchor with an optional squiggly underline hover effect.

```tsx
<Link href="/about">About</Link>
<Link href="/plain" decoration="none">No underline</Link>
```

### pill

small, pill-shaped inline element for tags and labels.

```tsx
<Pill href="/tags/react">React</Pill>
```

## styling

components are styled with CSS Modules (`.module.css`) and PostCSS mixins. design tokens are available as `--basalt-*` CSS custom properties.

```css
.myComponent {
  @mixin font-serif;
  @mixin text-body;

  color: var(--basalt-color-text-default);
  padding: var(--basalt-sizing-4);

  @mixin desktop {
    padding: var(--basalt-sizing-8);
  }
}
```

### font stacks

set font family and OpenType feature settings:

| Mixin                          | Font                                  |
| ------------------------------ | ------------------------------------- |
| `@mixin font-serif`            | Equity B (serif) + `onum` etc.        |
| `@mixin font-serif-small-caps` | the above serif + small caps features |
| `@mixin font-sans`             | Concourse (sans) + `onum` etc.        |
| `@mixin font-monospace`        | system monospace stack                |

### text sizing

responsive font size and line height (mobile → desktop):

| Mixin                  | Sizes       |
| ---------------------- | ----------- |
| `@mixin text-small`    | 16px → 18px |
| `@mixin text-body`     | 20px → 24px |
| `@mixin text-heading3` | 20px → 24px |
| `@mixin text-heading2` | 22px → 28px |
| `@mixin text-heading1` | 24px → 32px |

### responsive breakpoints

wrap content in a media query:

| Mixin            | Condition        |
| ---------------- | ---------------- |
| `@mixin tablet`  | min-width: 541px |
| `@mixin desktop` | min-width: 736px |

### theme

scope styles to light or dark theme:

| Mixin               | Mode  |
| ------------------- | ----- |
| `@mixin light-mode` | light |
| `@mixin dark-mode`  | dark  |

### interaction

| Mixin               | Purpose             |
| ------------------- | ------------------- |
| `@mixin focus-ring` | standard focus ring |
