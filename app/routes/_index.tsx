import type { MetaFunction } from "@remix-run/node";
import Calculation from "~/components/calculation";

export const meta: MetaFunction = () => {
  return [
    { title: "MittFravær" },
    { name: "description", content: "Beregn fraværet ditt på sekunder" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="mx-4 mb-4">
        <h1 className="text-3xl font-bold">Beregn fraværet ditt på sekunder</h1>
      </div>
      <Calculation />
      <div className="m-4">
        <p className="text-sm">
          Kalkulatoren tar for seg et helt år (høst + vår). <br />
          Derfor kan prosenten bli lavere enn den ofte vises i skolesystemene.
        </p>
      </div>
    </div>
  );
}
