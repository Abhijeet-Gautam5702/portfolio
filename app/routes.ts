import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("home", "routes/home.tsx", { id: "home-explicit" }),
  route("projects", "routes/projects.tsx"),
  route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;
