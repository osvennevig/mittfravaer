import type { MetaFunction } from "@remix-run/node";
import { ThemeToggle } from "./resources.theme-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "MittFravær" },
    { name: "description", content: "Beregn fraværet ditt på sekunder" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl text-primary-foreground bg-primary font-bold">
        MittFravær
      </h1>
      <ThemeToggle />
    </div>
  );
}
