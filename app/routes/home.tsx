import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "André Luis de Oliveira" },
    { name: "description", content: "just my personal website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
