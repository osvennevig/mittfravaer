import { useState, useMemo } from "react";
import { Card, CardContent } from "~/components/ui/card";

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
      <div className="pb-16 px-6 m-auto max-w-xl mt-8">
        <Card>
          <CardContent className="p-4">
            <div>
              <label>
                Antall udokumenterte fraværstimer:
                <input
                  type="number"
                  value={udok}
                  min="1"
                  onChange={(e) => setUdok(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Antall timer i uken for gjeldende fag:
                <input
                  type="number"
                  value={fag}
                  min="1"
                  onChange={(e) => setFag(e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
