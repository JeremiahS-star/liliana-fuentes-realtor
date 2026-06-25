# DESIGN.md — Liliana Fuentes site

**Direction:** Desert Editorial. Warm, place-rooted, editorial. Premium through
restraint and typographic craft, not gloss.

## Color (OKLCH — committed warm-neutral + clay accent)
- `--paper`   oklch(0.962 0.012 78)  warm bone background
- `--paper-2` oklch(0.928 0.020 75)  raised sand panel
- `--ink`     oklch(0.235 0.018 55)  deep espresso (never #000)
- `--ink-2`   oklch(0.40 0.020 55)   muted brown text
- `--clay`    oklch(0.575 0.115 45)  terracotta accent (primary)
- `--clay-d`  oklch(0.485 0.120 42)  pressed clay
- `--sage`    oklch(0.60 0.038 145)  desert sage (secondary, sparing)
- `--line`    oklch(0.235 0.018 55 / 0.16) hairline
Strategy: Committed. Clay carries identity; espresso + bone dominate surface;
sage is a rare second voice. No pure black/white anywhere.

## Typography
- Display: **Fraunces** (opsz, soft, wght 300–600) — editorial serif with spine.
- Body/UI: **Inter** (wght 300–600) — quiet grotesque.
- Scale ratio ~1.3. Body 65–72ch. Eyebrows = Inter, uppercase, tracked, small.

## Layout & detailing
- Asymmetric editorial sections; vary background + spacing for rhythm.
- Hairline rules and oversized numerals instead of icon cards.
- No emoji, no ✦ sparkles, no side-stripe borders, no gradient text, no glass.
- Full borders or background tints only.

## Motion
- ease-out-expo `cubic-bezier(.16,1,.3,1)`. Reveal via opacity + small translate.
- Never animate layout properties.
