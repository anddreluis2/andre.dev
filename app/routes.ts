import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("scroll", "routes/scroll-animation.tsx"),
  route("projects", "routes/projects.tsx"),
  route("photos", "routes/photos.tsx"),
  route("social", "routes/social.tsx"),
] satisfies RouteConfig;
