// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Reemplaza con tu URL de GitHub Pages
  site: 'https://Iberosven.github.io/',
  base: '/',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
});
