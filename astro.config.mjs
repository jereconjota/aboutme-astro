import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image()],
  output: "server",
  adapter: vercel()
});