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

-- The server role needs explicit privileges on new tables.
grant usage on schema public to service_role;
grant select, insert, update, delete on public.waitlist to service_role;

-- Added later: where people heard about HealFitMe. Run this once if the table already exists.
-- (first_name now holds the full name people type in.)
alter table public.waitlist add column if not exists heard_from text;
