import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Lovable Cloud / Supabase env (client-safe).
 * Prefers NEXT_PUBLIC_* for Next.js; falls back to Lovable Cloud names.
 */
function getSupabaseEnv() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_VITE_SUPABASE_URL ||
    process.env.SUPABASE_URL;

  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY;

  return { url, key };
}

let client: SupabaseClient | null = null;

export function createSupabaseClient(): SupabaseClient | null {
  const { url, key } = getSupabaseEnv();

  if (!url || !key) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[supabase] Missing env. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (or Lovable Cloud SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY)."
      );
    }
    return null;
  }

  if (!client) {
    client = createClient(url, key);
  }

  return client;
}

export const supabase = createSupabaseClient();
