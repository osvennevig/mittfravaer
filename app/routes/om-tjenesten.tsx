import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";

export const meta: MetaFunction = () => {
  return [
    { title: "MittFravær" },
    { name: "description", content: "Om MittFravær" },
  ];
};

export default function Route() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl text-blue-700 font-bold">MittFravær</h1>
      <About />
    </div>
  );
}
