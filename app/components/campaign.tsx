import { Button } from "./ui/button";

export default function Campaign() {
  return (
    <div className="bg-primary/20 max-w-sm mx-auto p-4 rounded-lg">
      <p className="font-bold text-lg">Kast fraværsgrensen!</p>
      <p className="text-sm">130 til nå</p>
      <span className="border-b h-[1px]"></span>
      <p className="text-sm">
        Vi vil ha en skole som er til for oss, ikke for politikerne!
        Underskriftskampanje mot fraværsgrensen. Trykk for å gi din stemme!
      </p>
      <Button variant="default">Gi din stemme!</Button>
    </div>
  );
}

// Takk for din stemme!
