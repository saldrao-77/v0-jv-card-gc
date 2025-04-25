import { createClient } from "@supabase/supabase-js"

// Create a singleton instance for the client-side
let clientInstance: ReturnType<typeof createClient> | null = null

// Create a single supabase client for interacting with your database
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || ""
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  return createClient(supabaseUrl, supabaseKey)
}

// Client-side singleton pattern to prevent multiple instances
export const createClientSupabaseClient = () => {
  if (clientInstance) return clientInstance

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  clientInstance = createClient(supabaseUrl, supabaseKey)
  return clientInstance
}
