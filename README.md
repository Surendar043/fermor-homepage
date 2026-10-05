# Fermor homepage

Next.js (App Router) with plain CSS. No other dependencies.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Needs Node 18.17+. Deploy by importing the repo into Vercel; defaults work.

## Decisions

- **Message first.** Fermor's job is understand, act, grow, so the hero says that and the
  next section breaks it into those three ideas.
- **Show the product, then let people play.** A static dashboard preview sits next to the
  headline, and the savings planner below lets visitors move the numbers themselves.
- **Quiet palette.** Warm off-white, deep green and ink. Colours are CSS variables at the top of
  `app/globals.css`, with a dark theme through `prefers-color-scheme`.
- **Type.** Fraunces for headlines, Inter for reading, loaded with `next/font`.
- **Responsive.** One breakpoint at 860px; the nav collapses and every grid becomes a single column.

## Files

- `app/page.js`: all sections
- `components/Planner.js`: the interactive savings planner (client component)
- `app/globals.css`: all styles

## Notes

Figures in the dashboard preview are illustrative. Product claims should be checked against the
real Fermor site before submitting.
