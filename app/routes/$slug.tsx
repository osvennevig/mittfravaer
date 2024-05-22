import { type LoaderFunctionArgs, redirect } from "@remix-run/node";
//redirect to '/' for users with this url bookmarked

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect("/");
};
