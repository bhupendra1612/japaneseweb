import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase client suitable for use at build time
 * (e.g., in generateStaticParams) where there is no request/cookie context.
 */
export function createStaticClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
