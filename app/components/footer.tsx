import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="mx-4 border-t my-8 pt-4 pb-4 flex-row justify-between flex-wrap flex gap-2">
      <p className="text-sm ">
        MittFravær av{" "}
        <a
          className="text-sm underline hover:text-primary"
          href="https://svennevigflaaten.no"
        >
          Svennevig & Flaaten
        </a>
      </p>
      {/* <a
        className="text-sm text-center block underline hover:text-primary"
        href="https://instagram.com/mittfravaer"
      >
        Instagram
      </a> */}
      <Link
        className="text-sm text-center block underline hover:text-primary"
        to="/om-tjenesten"
      >
        Om MittFravær
      </Link>
    </footer>
  );
}
