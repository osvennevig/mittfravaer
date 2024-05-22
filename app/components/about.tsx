export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-3 text-primary">
        Om MittFravær
      </h1>
      <div className="mb-4">
        MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har
        i det enkelte faget. I tillegg til å beregne hvor mye fravær man kan ha
        før man når 10 prosenten.
        <br />
        <br /> Tjenesten er gratis å bruke, og ble laget av kvitér UB ved
        Dahlske videregående skole i 2018-2019. Den driftes nå av selskapet
        Svennevig & Flaaten AS.
        <br /> <br /> NB! På grunn av endringer i fraværsgrensen under Covid var
        tjenesten utilgjengelig i en periode fra 2020-2022.
      </div>
      <div className="mb-4 bg-secondary p-4 rounded-lg">
        <p className="mb-3">
          “Vinneren har en svært brukervennlig og forståelig nettside. De viser
          en overlegen teknisk kompetanse og har et lekkert design. Vinneren får
          full score på samtlige kriterier, og vi legger spesielt merke til at
          det er blitt gjort en utrolig god jobb på søkemotoroptimalisering”
        </p>
        <p className="text-sm mb-3">
          Denne prisen ble delt ut av administrerende direktør Grete I. Nykkelmo
          i Ungt Entreprenørskap Norge.
        </p>
        <a
          className="block underline hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.gat.no/nyheter/i/OrLv6w/sikret-seg-to-foerste-og-to-tredjeplasser-under-nm"
        >
          Les hele artikkelen hos Grimstad Adressetidende
        </a>
      </div>
      <div className="mb-4 mt-8">
        <h2 className="text-xl font-bold mb-2">Andre lenker</h2>
        <a
          className="block underline hover:text-primary"
          href="https://www.nrk.no/sorlandet/vil-gi-bedre-fravaerskontroll-1.14305223"
        >
          NRK Sørlandet - TV reportasje
        </a>
        <a
          className="block underline hover:text-primary"
          href="https://radio.nrk.no/serie/marius/MYNF47010618/21-11-2018#t=1h59m42.36s"
        >
          NRK P3 - Radio P3nyheter 16:00
        </a>
      </div>
    </div>
  );
}
