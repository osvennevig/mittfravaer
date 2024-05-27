import { ActionFunctionArgs, json, type MetaFunction } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import Calculation from "~/components/calculation";
//import Campaign from "~/components/campaign";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { supabase } from "~/supabase";

export const meta: MetaFunction = () => {
  return [
    { title: "Fraværskalkulatoren - MittFravær" },
    {
      name: "description",
      content:
        "MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten",
    },
    {
      name: "keywords",
      content: "fravær, skole, vgs, kalkulator, udokumentert fravær",
    },
    {
      property: "og:title",
      content: "Fraværskalkulatoren - MittFravær",
    },
    {
      property: "og:description",
      content:
        "MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

// export const loader = async () => {
//   const { data, error } = await supabase.from("messages").select("id");
//   return json({ messages: data, error });
// };

// handle the insertion of a submission on the server
export const action = async ({ request }: ActionFunctionArgs) => {
  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  if (_action === "add") {
    console.log("values:", values);
    const email = values?.email;
    const name = values?.name.toString();

    console.log(formData);
    console.log(values);

    if (email) {
      console.log("Missing email");
      return new Response("Email", { status: 400 });
    }

    const { error } = await supabase.from("messages").insert([{ name }]);

    if (error) {
      console.log("Error", error.message);

      return new Response(error.message, { status: 500 });
    }
    // Return a success response
    console.log("Form submitted");
    //return new Response("Form submitted successfully", { status: 200 });
    return json({ message: `Takk for din signatur`, messageName: name });
  }
};

export default function Index() {
  //const { messages, error } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const isAdding = fetcher.state === "submitting";
  const successMessage = fetcher.data?.message;
  const messageName = fetcher.data?.messageName;
  const isLoading = fetcher.state === "loading";

  const [name, setName] = useState("");

  useEffect(() => {
    if (isLoading) {
      setName("");
      fetcher.formData?.delete("name");
    }
  }, [isLoading, fetcher.formData]);

  return (
    <div>
      {/* {isLoading ? <p>{JSON.stringify(isLoading)}</p> : null} */}
      <div className="mx-4 mt-8 mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-primary">
          Beregn fraværet ditt på sekunder.
        </h1>
        <p className="text-lg">Gjelder for høsten 2023 og våren 2024</p>
      </div>

      <div className="mx-auto max-w-sm mb-6">
        <div className="mx-3">
          <fetcher.Form method="post">
            <div className="bg-primary/20 max-w-sm mx-auto p-6 rounded-lg border border-primary/60">
              <p className="font-bold text-xl mb-2 leading-tight">
                Opprop mot fraværsgrensen!
              </p>

              {/* {messages ? (
              <div className="mx-auto max-w-xl mb-1">
                <p className="text-sm">
                  Antall signaturer: <b>{messages.length}</b>
                </p>
              </div>
            ) : // <div className="mx-auto max-w-xl text-center">
            //   Ingen data fra supabase
            // </div>
            null} */}

              <span className="border-b h-[1px]"></span>
              <p className="text-sm">
                <b>Underskriftskampanje</b> mot fraværsgrensen. Signer med
                navnet ditt her!
              </p>
              {!successMessage ? (
                <>
                  <Input
                    name="name"
                    maxLength={30}
                    required
                    className="bg-secondary mt-4 border-primary/60"
                    placeholder="Fornavn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div className="hidden">
                    <Input
                      name="email"
                      placeholder="e-post"
                      autoComplete="off"
                      tabIndex={-1}
                      type="text"
                    />
                  </div>

                  <Button
                    variant="default"
                    className="w-full mt-3"
                    disabled={isAdding}
                    type="submit"
                    name={"_action"}
                    value={"add"}
                    aria-label="Gi din stemme!"
                    data-umami-event="gi-din-stemme"
                  >
                    {isAdding ? "Signerer..." : "Gi din stemme!"}
                  </Button>
                </>
              ) : null}

              {successMessage ? (
                <div className="text-center text-base mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full w-fit mx-auto">
                  {successMessage}
                  <span className="font-semibold"> {messageName}!</span>
                </div>
              ) : null}
            </div>
          </fetcher.Form>
        </div>
      </div>

      <Calculation />
      <div className="m-4 mx-auto max-w-xs">
        <p className="text-sm text-center">
          Kalkulatoren tar for seg et helt år (høst + vår). <br />
          Derfor kan prosenten bli lavere enn den ofte vises i skolesystemene.
        </p>
      </div>
      {/* <Campaign /> */}
    </div>
  );
}
