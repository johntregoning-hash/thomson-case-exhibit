import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://johntregoning-hash.github.io',
  base: '/thomson-case-exhibit',
  output: 'static',
  integrations: [
    tailwind(),
    react(),
    mdx()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
        '@styles': '/src/styles'
      }
    }
  }
});
