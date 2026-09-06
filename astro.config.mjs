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
    "/home": "/engineer/home",
    "/blogs/all": "/engineer/blog",
    "/blog": "/engineer/blog",
    "/blog/[...slug]": "/engineer/blog/[...slug]",
    "/projects/all": "/engineer/projects",
    "/projects": "/engineer/projects",
    "/experience": "/engineer/experience",
    "/contributions": "/engineer/contributions",
    "/contributions/[repoName]": "/engineer/contributions/[repoName]",
    "/privacy": "/engineer/privacy",
    "/resume": "/engineer/resume",
    "/work-experience/[slug]": "/engineer/work-experience/[slug]",
  },
});
