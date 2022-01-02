const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY } = process.env

const ENV = {
  SUPABASE_URL: NEXT_PUBLIC_SUPABASE_URL as string,
  SUPABASE_KEY: NEXT_PUBLIC_SUPABASE_KEY as string,
}

export default ENV