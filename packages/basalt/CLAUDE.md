# @vivshaw/basalt

This is the Basalt design system package. It provides components, CSS tokens, a reset stylesheet, and PostCSS mixins used across the site.

## Package Structure

- `components/` — React components, each with a co-located CSS Module and Storybook story
- `css/` — global CSS: tokens, reset, fonts, mixins
- `index.ts` — barrel export for all components and config constants

## Rules

- All new components must be exported from `index.ts`.
- See the `/basalt` skill for detailed development guidelines (styling, mixins, tokens, component patterns).
