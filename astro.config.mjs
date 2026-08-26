import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://abhijeetgautam.in",
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      defaultColor: false,
      wrap: true,
    },
  },
  redirects: {
    "/blogs/all": "/blog",
    "/projects/all": "/projects",
  },
});
