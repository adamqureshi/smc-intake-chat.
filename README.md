# SMC Intake Chat (SellMyCybertruck)

Minimal Next.js + Vercel AI SDK chat for SMC intake.

## Local
1) `cp .env.example .env` and set `OPENAI_API_KEY`
2) `npm i`
3) `npm run dev` → http://localhost:3000

## Deploy on Vercel
1) Push to GitHub.
2) Import the repo at https://vercel.com/new
3) Add `OPENAI_API_KEY` in Project Settings → Environment Variables (Production + Preview).
4) Deploy.

## Notes
- API route: `/app/api/chat/route.ts` (Edge runtime, streams responses).
- Prompt is in `lib/prompt.ts`. Edit freely.