---
name: basalt
description: Guidelines for developing the Basalt design system. Use when working on files in packages/basalt/, including components, theme tokens, stories, or design system infrastructure.
---

# Basalt Design System Development

Use these guidelines when making changes to the Basalt design system itself (not when using Basalt to build UI—those guidelines are in CLAUDE.md).

## Component Organization

Components in the Basalt design system follow this structure:

- Each component lives in its own file in `packages/basalt/components/`
- Components are accompanied by their stories (`.stories.tsx`) and styles (`.css.ts`)
- All components must be exported through `components/index.ts`
- Component imports should always come from `@vivshaw/basalt/components` rather than deep imports

## Styling

- Use Vanilla Extract for all styling
- Use Sprinkles for responsive utility styles
- Use Recipes for component variants
- **Never** use inline styles or `!important`

## Theme Tokens

Theme tokens are defined in `packages/basalt/theme/index.css.ts`:

| Export           | Purpose                                                    |
| ---------------- | ---------------------------------------------------------- |
| `tokens`         | Theme contract with colors, fonts, spacing, fontSize       |
| `breakpoints`    | Responsive breakpoints (tablet >= 541px, desktop >= 736px) |
| `sprinkles`      | Utility function for responsive styling                    |
| `lightColorMode` | Light theme values                                         |
| `darkColorMode`  | Dark theme values                                          |

## Key Files

| File                                   | Purpose                                            |
| -------------------------------------- | -------------------------------------------------- |
| `packages/basalt/theme/index.css.ts`   | Theme tokens, sprinkles, color modes               |
| `packages/basalt/components/index.ts`  | Component exports                                  |
| `packages/basalt/config.ts`            | Color mode class names (`vvv-light`, `vvv-dark`)   |
| `packages/basalt/helpers/index.css.ts` | `darkModeStyles()` and `lightModeStyles()` helpers |
| `packages/basalt/reset.css.ts`         | CSS reset styles                                   |

## Storybook

- Run with `yarn storybook` from the basalt package
- Token documentation stories: `packages/basalt/theme/*.stories.tsx`
- Component stories: alongside their components
- Custom viewports match Basalt breakpoints (Phone, Tablet, Desktop)
- Theme toggle available for light/dark mode testing

## Adding a New Component

1. Create `packages/basalt/components/MyComponent.tsx`
2. Create `packages/basalt/components/MyComponent.css.ts` for styles
3. Export from `packages/basalt/components/index.ts`
4. Create `packages/basalt/components/MyComponent.stories.tsx`
5. Run `yarn typecheck` and `yarn format:all`

## Adding Theme Tokens

1. Add to the contract in `createGlobalThemeContract()`
2. Add values in `lightColorMode` and `darkColorMode`
3. Update token documentation stories if needed
4. Run `yarn typecheck` and `yarn format:all`

## Checklist

When making changes to Basalt:

- [ ] Follow the component organization pattern
- [ ] Use Vanilla Extract for all styling
- [ ] Export new components from `components/index.ts`
- [ ] Add or update stories for documentation
- [ ] Test in both light and dark modes
- [ ] Test at all breakpoints (Phone, Tablet, Desktop)
- [ ] Run `yarn typecheck`
- [ ] Run `yarn format:all`
