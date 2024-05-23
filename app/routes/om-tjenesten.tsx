import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";

export const meta: MetaFunction = () => {
  return [
    { title: "Om MittFravær" },
    {
      name: "description",
      content:
        "MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten",
    },
    {
      name: "keywords",
      content: "fravær, skole, vgs, kalkulator, udokumentert fravær",
    },
    {
      property: "og:title",
      content: "Om MittFravær",
    },
    {
      property: "og:description",
      content:
        "MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function Route() {
  return (
    <div className="mx-4 mt-8 mb-8">
      <About />
    </div>
  );
}
