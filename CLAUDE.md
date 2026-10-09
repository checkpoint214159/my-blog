# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command           | Action                                                        |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Install dependencies                                          |
| `npm run dev`     | Local dev server at `localhost:4321`                          |
| `npm run build`   | Production build to `./dist/`                                 |
| `npm run preview` | Build, then run the Cloudflare Worker locally via `wrangler dev` |
| `npm run deploy`  | Build, then `wrangler deploy`                                  |
| `npm run cf-typegen` | Regenerate `worker-configuration.d.ts` from `wrangler.jsonc` bindings |

There is no lint script, no test framework, and no `astro check` script configured. Type-checking comes only from `astro build`/editor tooling against `tsconfig.json` (extends `astro/tsconfigs/strict`).

## Architecture

Personal blog: Astro 5 with the Cloudflare adapter (`@astrojs/cloudflare`), deployed as a Worker (static assets binding, not Pages Functions). Cloudflare's git integration builds and deploys on push (see README); `npm run deploy` is for manual pushes.

### Content pipeline

Posts are plain markdown in `src/content/posts/*.md`. The filename is the slug (`my-post.md` → `/posts/my-post/`). Data flows through three layers — when changing frontmatter fields, all three need to agree:

1. **`src/content.config.ts`** — the Zod schema (source of truth for what frontmatter is *valid*). The glob loader pattern `**/[^_]*.md` skips any file whose basename starts with `_`, so underscore-prefixed files can be used as drafts/partials that never become routes.
2. **`src/pages/posts/[...slug].astro`** — `getStaticPaths` generates one page per non-draft post, then explicitly picks which fields of `post.data` get passed down as props.
3. **`src/layouts/PostLayout.astro`** — declares its own `Props` interface and renders what it's given.

**Important gap:** the schema currently accepts more fields than actually render anywhere. `title`, `date`, `description`, `tags`, `difficulty`, and `citations` flow all the way through to `PostLayout.astro` and appear in the HTML. `author`, `category`, `domains`, and `prerequisites` are validated by the Zod schema but are dropped at step 2 — `[...slug].astro` never passes them to `PostLayout`, so they're inert metadata with no UI surface today. Adding a new frontmatter key requires touching all three files (schema → prop-passing in `[...slug].astro` → rendering in `PostLayout.astro`) or it will silently have no effect.

Draft filtering (`({ data }) => !data.draft`) is duplicated in three independent places: `src/pages/index.astro`, `src/pages/posts/[...slug].astro`, and `src/pages/rss.xml.js`. There's no shared helper — all three need updating together if draft logic changes.

### Rendering details

- Math: `remark-math` + `rehype-katex`, configured in `astro.config.mjs`. `$inline$` and `$$display$$` render at build time; `katex/dist/katex.min.css` is imported globally in `BaseLayout.astro`.
- Code blocks: Shiki with a single `github-light` theme (inline styles). There is no dark mode and no JS on the site.
- Styling is intentionally Berkshire-Hathaway-barebones: browser-default Times, blue/purple underlined links, `global.css` is ~20 lines. Prefer plain HTML elements over classes; only add CSS when a default is actually broken.
- `astro.config.mjs`'s `site` is a placeholder (`https://my-blog.pages.dev`) used for canonical URLs and RSS — needs updating once a real domain/Pages URL exists.

### Layout structure

`BaseLayout.astro` is the HTML shell (head, `Home | About | RSS` text nav, footer) used by every page. `PostLayout.astro` wraps it for individual posts (h1, italic date + comma-joined difficulty/tags, content via `<slot />`, optional References section from `citations`). `src/pages/index.astro` lists posts directly against `BaseLayout` without going through `PostLayout`.
