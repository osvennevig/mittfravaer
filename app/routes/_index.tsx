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
      <footer className="m-4 border-t mt-8 mb-8">
        <p className="text-sm text-center mt-4">
          MittFravær av
          <a
            className="text-sm text-center block underline hover:text-primary"
            href="https://svennevigflaaten.no"
          >
            Svennevig & Flaaten
          </a>
        </p>
        <a
          className="text-sm text-center block underline hover:text-primary"
          href="https://instagram.com/mittfravaer"
        >
          Instagram
        </a>
      </footer>
    </div>
  );
}
