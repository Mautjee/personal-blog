// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://heartfelt-shortbread-b44859.netlify.app",
  integrations: [preact()],
});