---
name: Web Design Guidelines
description: Accessibility, responsiveness, and quality bars for the Omni Studio operator console.
type: design
---

# Web Design Guidelines

## Accessibility

- Keyboard reachable, visible focus ring: 2px amber at 3px offset.
- Contrast: body text ≥ 4.5:1, UI elements ≥ 3:1. Amber `--signal` is reserved for fills and active indicators — never for body text on ivory (it fails).
- `.badge--live` pairs emerald with a pulsing dot so the state reads even at reduced-motion or for colorblind users.
- Icon-only buttons carry `aria-label`. Form labels use mono uppercase (`<label>` element, not just placeholder).
- Modal is a proper dialog with `role="dialog" aria-modal="true"` and `aria-labelledby`.

## Responsive

- Target: 1280–1440px desktop (console primary). Secondary: 1100–1280px, where the modal's live-preview rail collapses.
- Under 1100px: the modal drops the live-preview aside and goes to a two-column layout.
- Under 1180px: 3-column grids collapse to 2.
- Under 820px: grids collapse to 1. (A dedicated mobile console is out of scope — this is an operator dashboard, not a driver-seat app.)

## Motion

- All durations respect `prefers-reduced-motion` — transitions drop to 60ms and card hover-lifts are disabled.
- The emerald pulse on `.badge--live` animates `box-shadow` only; it's safe on most GPUs.

## Tone & voice

- Editorial-direct. Short sentences, often one-sentence paragraphs. Use numerals and tabular figures (`font-variant-numeric: tabular-nums`).
- Italics are a whisper, not a shout — they shift to slate to add texture without shouting for attention.
- Never marketing-speak like "revolutionary" or "game-changing". Use earned numbers: `97%`, `<1s`, `$74k/yr`, `14 days payback`.
- Warm trust over corporate polish: "90-day money-back", "no contract", "we only publish what the pilot data actually proved".

## Code quality

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<header>`, `<article>`, `<dialog>`-equivalent overlay.
- Single stylesheet (`styles.css`) owns all tokens. Page-specific tweaks stay inline with semantic class names.
- Inter Tight + JetBrains Mono are loaded from Google Fonts. Variable fonts, `font-display: swap`.
- Vanilla JS is enough. No frameworks in this prototype.

## Browser target

- Latest Chrome, Edge, Firefox, Safari. Uses `backdrop-filter`, `clamp()`, CSS custom properties, `color-mix` only if necessary.
