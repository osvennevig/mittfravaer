import { createBrowserClient } from "@supabase/ssr";

/**
 * Initialize a supabase client, used to make API calls.
 */
export const supabase = createBrowserClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
