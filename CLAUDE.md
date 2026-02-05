# What this repo is

This is Hannah Vivian Shaw's personal blog and website.

# How it's structured

## Code

This repo is a Yarn monorepo, split into several Yarn packages:

- @vivshaw/vivsha.ws (`./apps/vivsha.ws`), the blog application itself
- @vivshaw/basalt (`./packages/basalt`), the design system used to build it
- @vivshaw/basalt-mdx (`./packages/basalt-mdx`), a package of MDX components used to render Markdown in the app
- @vivshaw/rehype-smallcap-words (`./packages/rehype-smallcap-words`), a rehype plugin for small-caps styling
- @vivshaw/rehype-sidenotes (`./packages/rehype-sidenotes`), a rehype plugin for Tufte-style sidenotes

Each of these packages has its own `README.md` you can reference.

## Writing

The blog posts themselves live outside the code, in the `./posts/` directory.

## Notes

The `./.notes/` directory is a scratch space for any miscellaneous notes and TODOs.

# How it's built

- This application uses React and Next.js as its foundation. It uses Next's App Router.
- The app is written in Typescript.
- Basalt components are styled with CSS Modules and PostCSS mixins, backed by `--basalt-*` CSS custom properties.

# Rules

- All `yarn` commands (including `yarn typecheck`, `yarn format:all`, etc.) _must_ be run from the monorepo root (`/home/vivshaw/dev/vivsha.ws`), not from a subdirectory.
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

- Use `var(--basalt-sizing-*)` in CSS Modules for all general spacing values including:
  - Margins and padding
  - Dimensions and sizes
  - Grid gaps
  - Position offsets

### When to Use Exact Pixel Values

Keep exact pixel/rem values ONLY for:

1. Precise visual effects and animations where the exact value is crucial
2. 1px borders and divider lines

### Examples

```css
/* ✅ Good */
.card {
  padding: var(--basalt-sizing-4);
  margin: var(--basalt-sizing-2) 0;
  gap: var(--basalt-sizing-1);
}

/* ❌ Bad (unless specifically needed) */
.card {
  padding: 16px;
  margin: 0.5rem 0;
  gap: 4px;
}
```

## Theme

Use `@mixin dark-theme` and `@mixin light-theme` from the PostCSS mixins:

```css
.myComponent {
  background-color: #fff;

  @mixin dark-theme {
    background-color: #111;
  }
}
```

Don't manually use `DARK_THEME_CLASS`/`LIGHT_THEME_CLASS` or raw `prefers-color-scheme` queries.

# Skills

- `basalt` - Guidelines for developing the Basalt design system (components, theme, stories). Auto-invoked when working on `packages/basalt/`.
