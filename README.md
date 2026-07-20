# Speedfoo® Website

Next.js + Tailwind CSS Website für Speedfoo®.

## Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Seiten

- `/` Home
- `/was-ist-speedfoo`
- `/stecksystem`
- `/inklusion`
- `/community`
- `/media`
- `/gruender`
- `/kontakt`
- `/faq`

## Supabase

Client: `src/lib/supabase/client.ts`  
ENV aus Lovable Cloud: `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Fallback: `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY`).
