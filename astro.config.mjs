import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sujeet.pro",
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), sitemap()],
});
