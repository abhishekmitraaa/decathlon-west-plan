-- Editable pages for the West plan site (kolkata2027.html first). Apply once in the Supabase project hybrid-flow.
-- Anyone can read; writes only through save_west_plan_doc with the edit PIN (stored as a bcrypt hash, never readable by the site).
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.west_plan_docs (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  version int not null default 1
);
create table if not exists public.west_plan_doc_history (
  hid bigint generated always as identity primary key,
  id text not null,
  data jsonb not null,
  saved_at timestamptz not null default now()
);
create table if not exists public.west_plan_editors (
  id int primary key default 1 check (id = 1),
  pin_hash text not null
);

alter table public.west_plan_docs enable row level security;
alter table public.west_plan_doc_history enable row level security;
alter table public.west_plan_editors enable row level security;
drop policy if exists "west plan docs are public to read" on public.west_plan_docs;
create policy "west plan docs are public to read" on public.west_plan_docs for select to anon, authenticated using (true);
-- no policies on history or editors: not reachable from the site

create or replace function public.save_west_plan_doc(p_id text, p_pin text, p_data jsonb)
returns timestamptz
language plpgsql
security definer
set search_path = public, extensions
as $$
declare ok boolean; t timestamptz;
begin
  if p_id !~ '^[a-z0-9_-]{1,40}$' then raise exception 'bad id'; end if;
  if p_data is null or jsonb_typeof(p_data) <> 'object' then raise exception 'bad data'; end if;
  if pg_column_size(p_data) > 300000 then raise exception 'too large'; end if;
  select e.pin_hash = extensions.crypt(coalesce(p_pin, ''), e.pin_hash) into ok from public.west_plan_editors e where e.id = 1;
  if not coalesce(ok, false) then
    perform pg_sleep(1); -- slows down guessing
    raise exception 'wrong PIN' using errcode = '28000';
  end if;
  insert into public.west_plan_doc_history (id, data) select d.id, d.data from public.west_plan_docs d where d.id = p_id;
  insert into public.west_plan_docs (id, data, updated_at) values (p_id, p_data, now())
  on conflict (id) do update set data = excluded.data, updated_at = now(), version = public.west_plan_docs.version + 1
  returning updated_at into t;
  return t;
end $$;
revoke all on function public.save_west_plan_doc(text, text, jsonb) from public;
grant execute on function public.save_west_plan_doc(text, text, jsonb) to anon, authenticated;

-- set or change the PIN (run with the service role / SQL editor, never from the site):
-- insert into public.west_plan_editors (id, pin_hash) values (1, extensions.crypt('NEW-PIN', extensions.gen_salt('bf')))
--   on conflict (id) do update set pin_hash = excluded.pin_hash;
