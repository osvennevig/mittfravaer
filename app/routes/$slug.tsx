import { redirect } from "@remix-run/node";
//redirect to '/' for users with this url bookmarked

export const loader = async () => {
  return redirect("/");
};
