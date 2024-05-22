import { useState, useMemo } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "./ui/button";

export default function Calculation() {
  const [fag, setFag] = useState(1);
  const [udok, setUdok] = useState(1);

  const calcResult = useMemo(() => {
    const percentageRanges = [
      { max: 3, emoji: "😍🤓" },
      { max: 5, emoji: "😌🥱" },
      { max: 7, emoji: "😫🤨" },
      { max: 9, emoji: "😳🥺" },
      { max: 15, emoji: "😭😭" },
      { max: Infinity, emoji: "🤯 sorry as... Sonans?" },
    ];

    const udokValue = udok * 100;
    const fagValue = fag;
    const percentage = udokValue / (fagValue * 38);
    const result = percentageRanges.find((range) => percentage < range.max);
    return percentage.toFixed(2) + " " + result.emoji;
  }, [fag, udok]);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="pt-16">
        <p className="text-2xl mx-4 mb-1 text-center">Din prosent er:</p>
        <p className="text-5xl font-extrabold mx-4 text-center">{calcResult}</p>
      </div>
      <div className="pb-16 px-6 m-auto max-w-fit mt-8">
        <Card>
          <CardContent className="p-6">
            <div>
              <p className="mb-2">Antall udokumenterte fraværstimer:</p>

              <div className="flex flex-row items-center gap-12 p-2 bg-secondary rounded-full">
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 shrink-0 rounded-full"
                  onClick={() => setUdok((prevUdok) => prevUdok - 1)}
                  disabled={udok <= 1}
                  data-umami-event="setUdok-decrease"
                >
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Trekk fra time</span>
                </Button>
                <span className="w-full text-center text-xl font-bold">
                  {udok}
                </span>
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 shrink-0 rounded-full"
                  onClick={() => setUdok((prevUdok) => prevUdok + 1)}
                  disabled={udok >= 50}
                  data-umami-event="setUdok-increase"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Legg til time</span>
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-2">Antall timer i uken for gjeldende fag:</p>
              <div className="flex flex-row items-center gap-12 p-2 bg-secondary rounded-full">
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 shrink-0 rounded-full"
                  onClick={() => setFag((prevFag) => prevFag - 1)}
                  disabled={fag <= 1}
                  data-umami-event="setFag-decrease"
                >
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Trekk fra time</span>
                </Button>
                <span className="w-full text-center text-xl font-bold">
                  {fag}
                </span>
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 shrink-0 rounded-full"
                  onClick={() => setFag((prevFag) => prevFag + 1)}
                  disabled={fag >= 50}
                  data-umami-event="setFag-increase"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Legg til time</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
