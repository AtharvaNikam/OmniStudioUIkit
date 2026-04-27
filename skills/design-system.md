---
name: Omni Studio Design System
description: Design tokens (color, type, spacing, radius, elevation) for the Omni Studio operator console, mirrored from the marketing site's tokens.css.
type: design
---

# Omni Studio — Design System

The operator console (this prototype) shares tokens with the Omni Studio marketing site at `D:\Code\OmniStudio\OmniStudioTheme\omni-studio`. When in doubt, the site is the source of truth.

## Color

| Token | Value | Role |
|-------|-------|------|
| `--ink-900` | `#0A0E12` | Primary text, primary button bg |
| `--ink-800` | `#11161C` | Dark surface variant |
| `--ink-700` | `#1A222B` | Hover on primary button |
| `--slate-500` | `#4A5A6E` | Body mute |
| `--slate-400` | `#6B7B90` | Dim text, secondary labels |
| `--slate-300` | `#8B9AAE` | Wordmark ".studio" color |
| `--slate-100` | `#DCE2E8` | Disabled / tile |
| `--slate-50`  | `#EEF1F4` | Disabled surface |
| `--ivory`     | `#FAF7F0` | Main background (warm cream) |
| `--bone-100`  | `#F5F1E8` | Secondary surface, icon tiles |
| `--bone-50`   | `#FBF8F1` | Sidebar, titlebar, modal tab rail |
| `--paper`     | `#FFFFFF` | Cards, inputs |
| `--signal-500` (`--signal`) | `#D97706` | **Amber — CTA, trust, accent** |
| `--signal-50` | `#FEF3E2` | Soft amber tint for signal badges |
| `--pulse-500` | `#10B981` | **Emerald — live/active indicator only** |
| `--border`    | `rgba(10,14,18,0.08)` | Default border |
| `--border-strong` | `rgba(10,14,18,0.16)` | Input borders, emphasis |

The brand mark is a concentric-circle SVG: outer solid black ring, dashed slate inner ring, dashed ink middle ring, amber dot centre.

**Wordmark:** `Omni` (Inter Tight 500, `--ink`) + `.studio` (Inter Tight 400, `--slate-400`). Never use mint green.

## Typography

- **Primary:** `Inter Tight` (400/500/600/700 + italic). Single family — hierarchy comes from weight and tracking, not typeface contrast.
- **Monospace:** `JetBrains Mono` (400/500) for eyebrows, data, metadata, IDs, badges.
- **Display scale:** `clamp()` pairs tuned in `tokens.css`. On the console, page titles use ~2–3rem with `letter-spacing: -0.03em`.
- **Italic emphasis:** italicized words inside headings shift to `--slate-400` at weight 400 — subtle, not loud. The only time italic pops amber is on the marketing `problem__headline`.

## Eyebrow pattern

Mono uppercase, `letter-spacing: 0.14em`, with a 24px horizontal rule before it. Used above every section headline.

## Spacing & radius

- 8-point scale via `clamp()` where responsive; fixed tokens otherwise.
- Radius: `--r-sm` 8 · `--r-md` 14 · `--r-lg` 20 · `--r-xl` 28 · `--r-full` 999.
- Cards use `--r-lg` (20px). Modals use `--r-xl` (28px). Buttons are fully pill (`--r-full`).

## Elevation

Warm, subtle shadows. Hover lifts are `translateY(-2px)` plus a medium shadow. The amber primary button uses `--shadow-glow-signal` (an amber-tinted glow).

## Layout

- **Sidebar:** 264px wide, `--bone-50` background, separated by mono uppercase section labels ("The Team", "Capabilities", "Inbox", "Team Beta").
- **Main:** `--ivory` background with a faint radial dot-grid fade at the top.
- **Active nav row:** white surface with small shadow + 2px amber rail on the left edge. Primary "New Brief" row uses an inverted dark ink button style.
