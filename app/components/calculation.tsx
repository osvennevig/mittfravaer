import { useState, useMemo } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "./ui/button";
//import { Label } from "./ui/label";
//import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function Calculation() {
  const [duration, setDuration] = useState(45); // varigheten av en time i minutter
  const [fag, setFag] = useState(1); // antall timer i et fag per uke //3.6842105263
  const [udok, setUdok] = useState(1); // antall timer du har vært borte //14

  const calcResult = useMemo(() => {
    const percentageRanges = [
      { max: 3, emoji: "😍🤓", info: "" },
      { max: 5, emoji: "😌🥱", info: "Ta det heeelt med ro." },
      {
        max: 7,
        emoji: "😫🤨",
        info: "",
      },
      {
        max: 9,
        emoji: "😳🥺",
        info: "Hvis det er fare for at du får mer enn 10 prosent fravær i et fag, skal skolen varsle deg skriftlig.",
      },
      {
        max: 15,
        emoji: "😭😭",
        info: "Rektor kan avgjøre om elever i en vanskelig livssituasjon skal få karakter hvis de har udokumentert fravær på under 15 prosent.",
      },
      {
        max: Infinity,
        emoji: "🤯 sorry. Sonans?",
        info: "Rektor kan ikke godta fravær over 15 prosent. Du kan slutte som elev i faget og gå opp som privatist med en gang.",
      },
    ];

    const currentDurationValue = duration; // Sikrer at verdien er et tall
    //console.log(duration);
    //console.log("currentDu..", currentDurationValue);
    // Omregner fravær fra timer til minutter
    const udokMinutes = udok * currentDurationValue; // Antall minutter du har vært borte
    // Totalt antall timer for faget i løpet av et skoleår omregnet til minutter
    const totalAnnualMinutes = fag * 38 * 56; // Antall timer per uke * antall uker i skoleåret * varigheten av én time
    // vi setter én skoletime litt lavere enn 60min så det blir mest mulig riktig. "safer" litt.

    const percentage = (udokMinutes / totalAnnualMinutes) * 100; // Beregner prosentandelen fravær
    //const udokValue = udok * 100;
    //const fagValue = fag;
    //const percentage = udokValue / (fagValue * 38);
    //const percentage = (udokValue / currentDurationValue) * 100; // Beregner prosentandelen fravær
    const result = percentageRanges.find((range) => percentage < range.max);
    //return percentage.toFixed(2) + " " + result?.emoji + result?.info;
    return {
      percentage: percentage.toFixed(2),
      emoji: result?.emoji,
      info: result?.info,
    };
  }, [fag, udok, duration]);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="pt-16">
        <p className="text-2xl mx-4 mb-1 text-center">Din prosent er:</p>
        <p className="text-5xl font-extrabold mx-4 text-center">
          {calcResult.percentage + " " + calcResult.emoji}
        </p>
        {calcResult?.info ? (
          <p className="text-sm text-center mt-3 mx-auto max-w-sm">
            {calcResult.info}
          </p>
        ) : (
          <p className="h-8"></p>
        )}
      </div>
      <div className="pb-16 px-6 m-auto max-w-fit mt-6">
        <Card>
          <CardContent className="p-6">
            <div>
              <div className="flex flex-col gap-2 mb-6">
                <p>Lengde på undervisningsøkt:</p>
                <div className="flex flex-row gap-4">
                  <label className="flex flex-row gap-2 items-center py-2 px-4 bg-secondary rounded-full font-medium">
                    <input
                      type="radio"
                      value="45"
                      name="duration"
                      checked={duration === 45}
                      onChange={() => setDuration(45)}
                    />
                    <span>45 min</span>
                  </label>
                  <label className="flex flex-row gap-2 items-center py-2 px-4 bg-secondary rounded-full font-medium">
                    <input
                      type="radio"
                      value="60"
                      name="duration"
                      checked={duration === 60}
                      onChange={() => setDuration(60)}
                    />
                    <span>60 min</span>
                  </label>
                </div>
                {/* {duration} */}
                {/* <RadioGroup
                  defaultValue={"45"}
                  //onValueChange={(e) => setDuration(e.target.value)}
                  className="flex flex-row gap-4"
                >
                  <Label className="hover:cursor-pointer text-base flex flex-row gap-2 items-center py-2 px-4 bg-secondary rounded-full">
                    <RadioGroupItem
                      value="45"
                      id="duration_45"
                      // onChange={() => setDuration(45)}
                    />
                    45 min
                  </Label>
                  <Label className="hover:cursor-pointer text-base flex flex-row gap-2 items-center py-2 px-4 bg-secondary rounded-full">
                    <RadioGroupItem
                      value="60"
                      id="duration_60"
                      //onChange={() => setDuration(60)}
                    />
                    60 min
                  </Label>
                </RadioGroup> */}
              </div>
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
