# @vivshaw/vivsha.ws

This is the Next.js app that powers the site. It uses the App Router with static export.

## Key Conventions

- Path alias `#*` maps to the package root (e.g., `#lib/postHelpers`, `#data`). Use this for all internal imports.
- Content lives outside the app: blog posts in `../../posts/[slug]/post.mdx`, standalone pages in `../../pages/[slug]/page.mdx`.
- MDX components are mapped in `mdx-components.tsx` at the package root.
- The MDX pipeline is configured in `next.config.mjs` with remark/rehype plugins.

## Key Directories

- `app/_components/` — shared UI components (layout wrapper, navbar, theme switcher, etc.)
- `data/` — site metadata, author info, Zod schemas for frontmatter
- `lib/` — helpers for date formatting, post/page importing, SEO metadata
