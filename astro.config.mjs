// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Update this once Cloudflare assigns your *.pages.dev domain (or you attach a custom one).
  // It's used for canonical URLs and the RSS feed, not for routing.
  site: 'https://my-blog.pages.dev',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
    },
  },

  adapter: cloudflare()
});