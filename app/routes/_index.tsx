import type { MetaFunction } from "@remix-run/node";
import Calculation from "~/components/calculation";
import Campaign from "~/components/campaign";

export const meta: MetaFunction = () => {
  return [
    { title: "MittFravær" },
    { name: "description", content: "Beregn fraværet ditt på sekunder" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="mx-4 mt-8 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Beregn fraværet ditt på sekunder.
        </h1>
        <p className="text-lg">Gjelder for høsten 2023 og våren 2024</p>
      </div>
      <Calculation />
      <div className="m-4">
        <p className="text-sm">
          Kalkulatoren tar for seg et helt år (høst + vår). <br />
          Derfor kan prosenten bli lavere enn den ofte vises i skolesystemene.
        </p>
      </div>
      <Campaign />
    </div>
  );
}
