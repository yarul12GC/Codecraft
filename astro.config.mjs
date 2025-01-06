import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});