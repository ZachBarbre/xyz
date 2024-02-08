import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [react(), mdx()],
});
