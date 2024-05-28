import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = import.meta.env.VITE_API_URL_IKO;
const S_URL = "https://onbtfqaeoyzmxwpihyxi.supabase.co"; //`${SUPABASE_URL}`;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;
const S_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uYnRmcWFlb3l6bXh3cGloeXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3OTgxNjgsImV4cCI6MjAzMjM3NDE2OH0.4QFI2prFhpz8AnFPNFoqMTzFNCNVuRFl2YlAa8wbnFE"; //`${SUPABASE_ANON_KEY}`;

/**
 * Initialize a supabase client, used to make API calls.
 */
export const supabase = createBrowserClient(S_URL!, S_ANON_KEY!);

// import { createServerClient, parse, serialize } from "@supabase/ssr";

// export const createSupabaseServerClient = (request: Request) => {
//   const cookies = parse(request.headers.get("Cookie") ?? "");
//   const headers = new Headers();

//   const supabase = createServerClient(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(key) {
//           return cookies[key];
//         },
//         set(key, value, options) {
//           headers.append("Set-Cookie", serialize(key, value, options));
//         },
//         remove(key, options) {
//           headers.append("Set-Cookie", serialize(key, "", options));
//         },
//       },
//     }
//   );

//   return { supabase, headers };
// };
