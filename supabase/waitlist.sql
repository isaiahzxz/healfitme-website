-- Run once in the Supabase SQL editor.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  goal text,
  source text,
  created_at timestamptz not null default now()
);

-- Only the server (service role key) may touch this table.
alter table public.waitlist enable row level security;
-- No policies on purpose: anon and authenticated roles get no access.
