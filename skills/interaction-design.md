---
name: Interaction Design Rules
description: How components respond to hover, focus, press, and state transitions in the Omni Studio console.
type: design
---

# Interaction Design

## Hover

- **Sidebar nav row:** background fades to `rgba(10,14,18,0.04)` over 180ms.
- **Card (`.card--hover`):** border darkens to `--border-strong`, shadow lifts from `--shadow-sm` to `--shadow-md`, `transform: translateY(-2px)`.
- **Primary button:** background shifts `--ink` → `--ink-700`, and the gap between label and arrow grows from 10px to 14px (Omni signature — the arrow "slides out" as you hover).
- **Accent (amber) button:** background `--signal` → `--signal-600`, amber glow intensifies.
- **Ghost button:** inverts to dark-ink-on-ivory on hover.

## Active / Selected

- **Sidebar active row:** white paper background + `--shadow-sm`, plus a 2px amber (`--signal`) indicator on the left edge (top 18% / bottom 18%).
- **Segmented option:** active gets white paper background, shadow-sm, `--ink` text.
- **Tab (modal & tasks-nav):** active has white paper with shadow-sm; inactive is mono-uppercase muted.

## Focus

- 2px solid `--signal` outline at 3px offset. Inputs additionally shift border to `--ink`.

## Press

- Buttons nudge down 1px. 80ms transition.

## Transitions

- `--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1)` for entrances.
- `--ease-in-out: cubic-bezier(0.77, 0, 0.18, 1)` for state toggles.
- `--dur-fast 180ms`, `--dur-med 340ms`, `--dur-slow 620ms`.

## Modal

- Overlay uses `rgba(10,14,18,0.48)` plus `backdrop-filter: blur(4px)`.
- Panel scales from 0.98 → 1 and translates 10px upward in 340ms.
- Close on ESC, overlay click, ✕ button, or Cancel.

## Micro-feedback

- `.badge--live` has a pulsing 6px emerald dot (1.8s loop).
- Composer send button flips from a slate disk to an amber `--signal` disk with glow the moment the textarea has content.
- The arrow in CTAs always slides right `3px` on hover — match this across the console.
