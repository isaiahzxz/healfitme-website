# HealFitMe website

Next.js + TypeScript + Tailwind marketing site with a waitlist.

    npm install
    npm run dev        # http://localhost:3000

## Waitlist storage
- Dev: signups append to `.data/waitlist.jsonl` (gitignored).
- Production: create a Supabase project, run `supabase/waitlist.sql`, then set
  `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (see `.env.example`).
  The local file will not persist on serverless hosts like Vercel.

## Before launch
- Replace `/privacy` and `/terms` placeholders with lawyer-reviewed text.
- Set `NEXT_PUBLIC_SITE_URL`.
- Add a real email provider if you want to send a confirmation email.
- Swap the sample app data in the phone mockups for real screenshots when ready.
