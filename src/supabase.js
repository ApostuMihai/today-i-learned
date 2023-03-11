import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbG5xeWR2a2hmaWZza2JiZ29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMjIzMDcsImV4cCI6MTk5Mzc5ODMwN30.KtcaJdQQwKlWJSsPnEdgQyJfeTHf4RscD3IyD0nzJlA";

const SUPABASE_URL = "https://galnqydvkhfifskbbgom.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
