import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://uqtcbixqasezhiiuifnw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_xnZzFQMP2VRMriEgz2gV9Q_2QpbFNVr';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);