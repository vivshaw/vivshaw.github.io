# What this repo is

This is Hannah Vivian Shaw's personal blog and website.

# How it's structured

## Code

This repo is a Yarn monorepo, split into three separate Yarn packages:

- @vivshaw/vivshaws (`./apps/vivsha.ws`), the blog application itself
- @vivshaw/basalt (`./packages/basalt`), the design system used to build it
- @vivshaw/mdx (`./packages/mdx`), a package of MDX components used to render Markdown in the app

Each of these pacakges has its own `README.md` you can reference.

## Writing

The blog posts themselves live outside the code, in the `./posts/` directory.

## Notes

The `./.notes/` directory is a scratch space for any miscellaneous notes and TODOs.

# How it's built

- This application uses React and Next.js as its foundation. It uses Next's App Router.
- The app is written in Typescript.
- Styling is done with Vanilla Extract. The Sprinkles and Recipes sub-packages are available.

# Rules

- After making changes:
  - you _must_ typecheck the app with `yarn typecheck` to verify your changes were correct.
  - you _must_ format with Prettier using `yarn format:all`

# Code Style

## TypeScript

- For React components, prefer `export function` syntax over `export const`.

## CSS

- _NEVER_ use `!important`.
- _NEVER_ use inline styles.
- Use `clsx` to concatenate classes when applying them to React components.
- Only use global styles when they are absolutely necessary.

## JSX

- Always prefer semantic markup.

# Using Basalt

- Use Basalt style tokens whenever possible. This includes font sizes and weights, colors, spacing, and anything else tokenized in the theme.
- Use the Basalt `<Text>` component for all typography.
- Use the Basalt `<Link>` for all links.

## Spacing

### When to Use Spacing Tokens

- Use `tokens.sizing[...]` for all general spacing values including:
  - Margins and padding
  - Dimensions and sizes
  - Border radius
  - Grid gaps
  - Position offsets

### When to Use Exact Pixel Values

Keep exact pixel/rem values ONLY for:

1. Precise visual effects and animations where the exact value is crucial
2. 1px borders and divider lines

### Examples

```typescript
// ✅ Good
padding: tokens.spacing["4"]
margin: `${tokens.spacing["2"]} 0`
gap: tokens.spacing["1"]

// ❌ Bad (unless specifically needed)
padding: "16px"
margin: "0.5rem 0"
gap: "4px"
```

## Color Mode

Use `darkModeStyles()` and `lightModeStyles()` from `@vivshaw/basalt/helpers` for mode-specific styles. These handle both explicit mode (toggle) and system preference.

```typescript
import { style } from "@vanilla-extract/css"
import { darkModeStyles, lightModeStyles } from "@vivshaw/basalt/helpers"

// ✅ Good
export const myStyle = style([
  {
    // Base styles for both modes
  },
  darkModeStyles({
    backgroundColor: "#111",
  }),
  lightModeStyles({
    backgroundColor: "#fff",
  }),
])
```

Don't manually use `DARK_COLOR_MODE_CLASS`/`LIGHT_COLOR_MODE_CLASS` or raw `prefers-color-scheme` queries.

# Skills

- `/basalt` - Guidelines for developing the Basalt design system (components, theme, stories). Auto-invoked when working on `packages/basalt/`.
