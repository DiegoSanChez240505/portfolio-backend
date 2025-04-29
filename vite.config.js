import { defineConfig } from 'vite';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/portfolio-backend/', // ⚡ PON AQUÍ el nombre exacto de tu repo
  plugins: [ghPages()],
});
