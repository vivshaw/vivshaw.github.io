---
name: basalt
description: Guidelines for developing the Basalt design system. Use when working on files in packages/basalt/, including components, theme tokens, stories, or design system infrastructure.
---

# Basalt Design System Development

Use these guidelines when making changes to the Basalt design system itself (not when using Basalt to build UI—those guidelines are in CLAUDE.md).

## Component Organization

- Each component lives in its own file in `packages/basalt/components/`
- Components are styled with CSS Modules (`.module.css`) and PostCSS mixins
- Stories (`.stories.tsx`) live alongside their components
- All components must be exported through `packages/basalt/index.ts`

## Styling

- Use CSS Modules (`.module.css`) for component styles
- Use `--basalt-*` CSS custom properties for all token values
- Use PostCSS mixins for responsive breakpoints, theming, text presets, and font stacks
- Use `clsx` to concatenate class names
- **Never** use inline styles or `!important`

### PostCSS Mixins

Mixins are defined in `packages/basalt/css/mixins.css` and loaded via `postcss-mixins`. They are designed to work in CSS Modules (class selectors for theming are wrapped in `:global()`).

#### Font stacks

Set font family and OpenType feature settings:

| Mixin                          | Font                           |
| ------------------------------ | ------------------------------ |
| `@mixin font-serif`            | Equity B (serif) + `onum` etc. |
| `@mixin font-sans`             | Concourse (sans) + `onum` etc. |
| `@mixin font-monospace`        | System monospace stack         |
| `@mixin font-serif-small-caps` | Serif + small caps features    |

#### Text sizing

Responsive font size and line height (mobile → desktop):

| Mixin                  | Sizes       |
| ---------------------- | ----------- |
| `@mixin text-small`    | 16px → 18px |
| `@mixin text-body`     | 20px → 24px |
| `@mixin text-heading3` | 20px → 24px |
| `@mixin text-heading2` | 22px → 28px |
| `@mixin text-heading1` | 24px → 32px |

#### Responsive breakpoints

Wrap content in a media query:

| Mixin            | Condition        |
| ---------------- | ---------------- |
| `@mixin tablet`  | min-width: 541px |
| `@mixin desktop` | min-width: 736px |

#### Theme

Scope styles to light or dark theme:

| Mixin               | Mode  |
| ------------------- | ----- |
| `@mixin light-theme` | Light |
| `@mixin dark-theme`  | Dark  |

#### Interaction

| Mixin               | Purpose             |
| ------------------- | ------------------- |
| `@mixin focus-ring` | Standard focus ring |

### CSS Custom Properties

Tokens are defined in `packages/basalt/css/tokens.css` on `:root`. Naming convention:

| Category   | Pattern                 | Example                                                            |
| ---------- | ----------------------- | ------------------------------------------------------------------ |
| Colors     | `--basalt-color-*`      | `--basalt-color-text-default`                                      |
| Palette    | `--basalt-color-base-*` | `--basalt-color-base-500`                                          |
| Fonts      | `--basalt-font-*`       | `--basalt-font-serif`                                              |
| Font sizes | `--basalt-font-size-*`  | `--basalt-font-size-300`                                           |
| Spacing    | `--basalt-sizing-*`     | `--basalt-sizing-4`, `--basalt-sizing-radius-pill`                 |
| Motion     | `--basalt-motion-*`     | `--basalt-motion-transition-theme`, `--basalt-motion-ease-in-quad` |

### Transition workaround

lightningcss strips `var()` from comma-separated `transition` shorthand (parcel-bundler/lightningcss#194). When combining multiple transitions, use longhand properties with the primitive tokens (`--basalt-motion-transition-*-property`, `-duration`, `-timing`). See `Pill.module.css` for an example.

## Key Files

| File                             | Purpose                                   |
| -------------------------------- | ----------------------------------------- |
| `packages/basalt/css/tokens.css` | CSS custom property tokens                |
| `packages/basalt/css/mixins.css` | PostCSS mixin definitions                 |
| `packages/basalt/css/fonts.css`  | @font-face declarations                   |
| `packages/basalt/css/reset.css`  | CSS reset                                 |
| `packages/basalt/index.ts`       | Package entry point (components + config) |

## Storybook

- Run with `yarn storybook` from the basalt package
- Token documentation stories: `packages/basalt/css/stories/*.stories.tsx`
- Component stories: alongside their components
- Custom viewports match Basalt breakpoints (Phone, Tablet, Desktop)
- Theme toggle available for light/dark mode testing

## Adding a New Component

1. Create `packages/basalt/components/MyComponent.tsx`
2. Create `packages/basalt/components/MyComponent.module.css` for styles
3. Export from `packages/basalt/index.ts`
4. Create `packages/basalt/components/MyComponent.stories.tsx`
5. Run `yarn typecheck` and `yarn format:all`

## Checklist

When making changes to Basalt:

- [ ] Use CSS Modules + PostCSS mixins for styling
- [ ] Use `--basalt-*` tokens for all design values
- [ ] Export new components from `index.ts`
- [ ] Add or update stories for documentation
- [ ] Test in both light and dark modes
- [ ] Test at all breakpoints (Phone, Tablet, Desktop)
- [ ] Run `yarn typecheck`
- [ ] Run `yarn format:all`
