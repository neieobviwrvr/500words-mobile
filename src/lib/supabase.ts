import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_ANON_KEY fehlen. Siehe .env.example.',
  );
}

// AsyncStorage als Session-Speicher (2026-08-07, fuer Google/E-Mail-Login) -
// ohne das wuerde eine Anmeldung jeden App-Neustart verlieren. detectSessionInUrl
// ist ein reines Web-Feature (liest Tokens aus der Browser-URL) und muss in
// RN aus sein, sonst versucht supabase-js beim Start auf `window.location`
// zuzugreifen, das es in RN nicht gibt.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
