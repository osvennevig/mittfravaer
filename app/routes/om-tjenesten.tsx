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
    <div className="mx-4 mt-8 mb-8">
      <About />
    </div>
  );
}
