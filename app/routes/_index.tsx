import type { MetaFunction } from "@remix-run/node";
import Calculation from "~/components/calculation";
import Campaign from "~/components/campaign";

export const meta: MetaFunction = () => {
  return [
    { title: "Fraværskalkulatoren - MittFravær" },
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
      content: "Fraværskalkulatoren - MittFravær",
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

export default function Index() {
  return (
    <div>
      <div className="mx-4 mt-8 mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-primary">
          Beregn fraværet ditt på sekunder.
        </h1>
        <p className="text-lg">Gjelder for høsten 2023 og våren 2024</p>
      </div>
      <Calculation />
      <div className="m-4 mx-auto max-w-xs">
        <p className="text-sm text-center">
          Kalkulatoren tar for seg et helt år (høst + vår). <br />
          Derfor kan prosenten bli lavere enn den ofte vises i skolesystemene.
        </p>
      </div>
      {/* <Campaign /> */}
    </div>
  );
}
