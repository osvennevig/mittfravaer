import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import stylesheet from "./assets/globals.css?url";
import Header from "./components/header";
//dark mode
import { getTheme } from "./lib/theme.server";
import {
  ClientHintCheck,
  getHints,
  useNonce,
  useTheme,
} from "./lib/client-hints";
import clsx from "clsx";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: getTheme(request),
      },
    },
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const nonce = useNonce();

  return (
    <html lang="no" className={clsx(theme)}>
      <head>
        <ClientHintCheck nonce={nonce} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="bef96b64-6e03-46bb-bddd-69fb10a5e799"
      ></script>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
