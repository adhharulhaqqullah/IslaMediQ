/* ============================================================
   IslaMediQ — Supabase Client Configuration
   ============================================================ */
import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan Anon Key proyek Supabase-mu sendiri nanti di Vercel Env atau tulis langsung di sini
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://XYZ_PROYEK_KAMU.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'KEY_ANON_SUPABASE_KAMU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
