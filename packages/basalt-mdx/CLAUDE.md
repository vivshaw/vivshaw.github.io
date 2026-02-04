# @vivshaw/basalt-mdx

This package provides prebuilt MDX components styled with Basalt. These components are mapped to HTML elements in `mdx-components.tsx` in the app, so that MDX content renders with the design system styles.

## Package Structure

- Each component lives in its own directory: `ComponentName/ComponentName.tsx`, with a co-located CSS Module and Storybook story.
- `MdxBody/` — wrapper component that applies root-level MDX styles (lives under "Layout" in Storybook).
- `index.ts` — barrel export for all components. New components must be exported here.

## Rules

- All new components must be exported from `index.ts`.
- When adding a new component, also add it to `apps/vivsha.ws/mdx-components.tsx` so MDX content picks it up.

## Storybook Notes

- Syntax-highlighted code blocks in stories must use pre-highlighted Shiki HTML with `--shiki-light`/`--shiki-dark` CSS custom properties on spans, since Shiki is a build-time rehype plugin and doesn't run in Storybook.
- Shared test assets (like placeholder images) live in `.storybook/assets/`.
