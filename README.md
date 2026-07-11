# ben's blog

Personal blog built with [Astro](https://astro.build). Posts live in
`src/content/posts/` as plain markdown with KaTeX math support.

## Writing a post

Create `src/content/posts/my-post-title.md` — the filename becomes the URL
(`/posts/my-post-title/`). Front matter:

```yaml
---
title: 'My Post Title'
date: 2026-07-12
description: 'one-liner shown on the index and in RSS' # optional
tags: [some, tags] # optional
draft: true # optional — hides the post from the site
---
```

Technical/explainer posts can additionally use `difficulty`, `category`,
`domains`, `prerequisites`, and `citations` (rendered as a References section —
see the Bayes post for an example).

Math: `$inline$` and `$$display$$` (KaTeX, rendered at build time).
Code blocks get Shiki syntax highlighting automatically.
Raw HTML works inside markdown. Images go in `public/images/` and are
referenced as `/images/foo.png`.

For interactive posts, drop an Astro component (or add a framework via
`npx astro add react|svelte|...`) into `src/components/` and switch the post
to `.mdx` with `npx astro add mdx`.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Local dev server at `localhost:4321`         |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Preview the production build                 |

## Deploying (Cloudflare)

Connected via Cloudflare's git integration (Workers & Pages → Create →
connect this repo). Build command `npm run build`, output directory `dist`.
Every push to the production branch deploys; other branches get preview URLs.

After the first deploy, update `site` in `astro.config.mjs` to the real URL
(used for canonical links and RSS).
