// import { ThemeToggle } from "~/routes/resources.theme-toggle";
import { Link } from "@remix-run/react";
import { Badge } from "../components/ui/badge";

export default function Header() {
  return (
    <header className="bg-background py-3 px-4 text-foreground mb-4 border-b sticky top-0">
      <div className="flex justify-between gap-4 items-center">
        <div className="sr-only">MittFravær</div>
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-32 sm:w-[10rem] h-auto"
          />
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <div className="hidden sm:block">
            <Badge variant="default" className="hover:bg-unset">
              Oppdatert for 2025 - 2026
            </Badge>
          </div>
          <div className="block sm:hidden">
            <Badge variant="default" className="hover:bg-unset">
              2025 - 2026
            </Badge>
          </div>
          {/* <div>
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </header>
  );
}
