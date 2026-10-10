import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://invencible44.github.io",
  base: '/Hotel-Casa-Theo',
  vite: {
    plugins: [tailwindcss()],
  },
});
