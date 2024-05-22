import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
export const meta: MetaFunction = () => {
  return [
    { title: "MittFravær" },
    { name: "description", content: "Beregn fraværet ditt på sekunder" },
  ];
};

export default function Index() {
  const percentage = "2.63 😍🤓";
  return (
    <div>
      <div className="mx-4 mb-4">
        <h1 className="text-3xl font-bold">Beregn fraværet ditt på sekunder</h1>
      </div>
      <div className="bg-primary text-primary-foreground">
        <div className="pt-16">
          <p className="text-2xl mx-4 text-center">Din prosent er:</p>
          <p className="text-5xl font-bold mx-4 text-center">{percentage}</p>
        </div>
        <div className="pb-16 mx-4 mt-8">
          <Card>
            <CardContent className="p-4">
              <div>kontroller...</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
