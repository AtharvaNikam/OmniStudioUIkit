---
name: Interface Design Patterns
description: Component patterns for the Omni Studio operator console — sidebar, card, composer, modal, chips.
type: design
---

# Interface Patterns

## Sidebar

```
[Mark] Omni.studio
[+ New Brief]                  <- inverted ink pill, primary action
─ THE TEAM
  ⦿ Agents
  ⚯ Pairings
─ CAPABILITIES
  ⏱ Scheduled Tasks
  ⎆ Integrations
  ≣ Playbooks
  🧩 Industry Packs
  ✉ Lines & Channels
─ INBOX
─ TEAM [Beta]
(spacer)
[DC] Dan · Phoenix HVAC · Pilot ▾
```

- Section labels: mono uppercase, `letter-spacing: 0.14em`, with a 16px rule prefix.
- Nav rows: 38px tall, icon 18px, text 15px. Active = white paper + 2px amber left rail.
- Bottom "user pill" is a full pill with status dot on avatar (emerald pulse) and an amber "Pilot" badge.

## Page header

- **Eyebrow** (mono uppercase with rule prefix) → **Title** (`clamp(1.875rem, 3.4vw, 3rem)`, Inter Tight 500, letter-spacing -0.03em, italic segment in `--slate-400`) → **Subtitle** (`--fs-body-lg`, mute).
- Divided from content by a full-width 1px rule in `--border`.
- Right-side actions: segmented control or search input or primary/accent button — all pill-shaped.

## Card

- `--paper` bg, 1px `--border`, radius `--r-lg` (20px), padding `1.75rem`.
- `.card--hover` lifts 2px with a medium shadow.
- `--bone` and `--dark` variants exist for emphasis sections.
- Agent card has: header (mark + name + slug on left / status badge on right), description, footer rule (stats + "Open" pill).
- List card (task / skill / connector): 40px icon tile + title + clamped 2-line description + mono uppercase meta row.
- Connector card uses a 3-column grid so the CTA stays bottom-right regardless of description length.

## Composer

- Full-width rounded rectangle, 1px `--border-strong`, `--paper` bg, radius `--r-lg`.
- Row 1: textarea "Ask the studio… (@ to reference jobs, customers, or invoices)".
- Row 2: attach (+), context chip (`Phoenix HVAC · ServiceTitan`), spacer, permission selector, mode selector, send disk.
- Send disk flips to amber `--signal` with glow when textarea has content.

## Modal (Agent edit)

- 920px wide, centered. Radius `--r-xl` (28px). Shadow-lg + backdrop-blur overlay.
- Header: brand mark circle, agent name + mono ID pill, status badge, ✕.
- Left rail (192px, `--bone-50`): Identity / Tools / Playbooks (with count badge) / Core Files.
- Center (form): mono uppercase labels, inputs with `--border-strong` that shift to `--ink` on focus.
- Right rail (280px, `--bone-50`): **Live preview** — how this agent will appear to the dispatch board. Emerald "live" label with glow dot.
- Footer: warranty note on left (mono), Cancel + amber Save on right.

## Chips / badges

- `.badge` — mono uppercase, pill, muted default.
- `.badge--live` — emerald text + pulsing dot. For agents routing calls right now.
- `.badge--signal` — amber tint. For "available" / "recommended".
- `.badge--paused` — slate. For staging / paused agents.

## Do / Don't

- **Do** pair the eyebrow with a display-weight headline every time — single-family hierarchy depends on it.
- **Do** keep amber for CTAs and "available" state. It's earned; don't dilute.
- **Don't** use emerald except for `live` indicators and the pulsing dot.
- **Don't** use mint green, green gradients, or Accio-Work-era patterns. This is a warm, editorial, ink-on-ivory system.
