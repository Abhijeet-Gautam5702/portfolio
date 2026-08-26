# Abhijeet Gautam — Portfolio and Blog

A static, content-first personal website built with Astro 6, TypeScript, Tailwind CSS 4, and Markdown/MDX Content Collections.

## Commands

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

## Publish an article

Create a directory under `src/content/blog` containing an `index.md` or `index.mdx` file. Images can live beside the article and be referenced with relative Markdown paths.

```text
src/content/blog/my-article/
├── index.md
├── cover.svg
└── diagram.png
```

The required frontmatter is validated by `src/content.config.ts`. Set `draft: false`, run `pnpm check` and `pnpm build`, then push to the production branch.

## Configuration

- `SITE_URL` overrides the canonical site URL during the build.
- `PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics when provided.
- Vercel build command: `pnpm build`
- Vercel output directory: `dist`
