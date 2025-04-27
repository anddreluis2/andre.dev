import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("scroll", "routes/scroll-animation.tsx"),
  route("projects", "routes/projects.tsx"),
  route("articles", "routes/articles.tsx"),
  route("social", "routes/social.tsx"),
] satisfies RouteConfig;
