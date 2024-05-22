import { ThemeToggle } from "~/routes/resources.theme-toggle";
import { Badge } from "../components/ui/badge";

export default function Header() {
  return (
    <header className="bg-background py-3 px-4 text-foreground mb-4 border-b sticky top-0">
      <div className="flex justify-between gap-4 items-center">
        <div>MittFravær</div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <Badge variant="default">Oppdatert for 2023 - 2024</Badge>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
