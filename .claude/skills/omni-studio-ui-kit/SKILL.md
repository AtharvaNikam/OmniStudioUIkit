---
name: omni-studio-ui-kit
description: Use this skill whenever you are adding or editing UI in the Omni Studio React app (the two-workspace console — Agent Studio and Operations). It explains the design tokens, the UI kit in src/ui/, and the composition patterns for every page type. Invoke this skill before writing JSX, changing styles, or installing a new UI library.
---

# Omni Studio UI Kit — agent skill

This skill is the operating manual for the Omni Studio React app. It tells you how to build and extend UI using **only** the kit in `src/ui/` and the brand tokens in `src/styles/tokens.css`.

If your request involves adding components, pages, or editing visual presentation — read this file first and keep it in context until the change is done.

---

## 0. Before you touch anything

1. **Never install a UI library.** No shadcn, Material, Ant, Tailwind, Chakra, Radix, etc. The kit in `src/ui/` is the entire vocabulary. Extend it by composing — or, if a genuinely new primitive is needed, add a new component in the appropriate folder and update `src/ui/index.ts` and this skill.
2. **Never invent color tokens.** Colors, spacing, radii, and type sizes live in [`src/styles/tokens.css`](../../src/styles/tokens.css). If a value you want isn't there, it doesn't exist. Ask the user before adding a token.
3. **Never use Tailwind utility classes or CSS-in-JS libraries.** All styling is done via (a) existing CSS classes from `components.css`, (b) component props, or (c) inline `style=` for one-offs using `var(--token)` values.
4. **Never use emojis for status.** Use `<Badge tone="...">` or the `FeedItem` dots. Emojis read as noise in this system.
5. **One accent button per page.** `<Button variant="accent">` is amber with a glow. If you need a second action, it's `variant="primary"` (ink) or `variant="ghost"`.

Fail these and the result looks off-brand immediately. The brand is "editorial trust" — warm ivory, deep ink, one spark of amber, mono metadata. Not SaaS-generic.

---

## 1. The tokens you will use

All tokens are CSS custom properties on `:root`. Reference them via `var(--token-name)` in inline styles or use the component prop that wraps them.

### Color

| Role | Token | Use |
|---|---|---|
| Page background | `--ivory` (`#FAF7F0`) | `<main>`, page bodies |
| Card surface | `--paper` (`#FFFFFF`) | Cards, inputs, tables |
| Muted surface | `--bone-50` / `--bone-100` | Sidebar, titlebar, subtle fills, icon tiles |
| Primary text | `--ink-900` (`#0A0E12`) | Body copy, titles |
| Muted text | `--text-mute` (`#4A5A6E`) | Subtitles, descriptions |
| Dim text | `--text-dim` (`#6B7B90`) | Meta labels, captions |
| Brand accent | `--signal` (`#D97706`) | CTAs, "available" state, italic emphasis in `problem__headline` style |
| Live indicator | `--pulse-500` (`#10B981`) | *ONLY* for live/running/cleared states — never body or CTA |
| Danger | `--danger` (`#B91C1C`) | Destructive only |
| Border | `--border` / `--border-strong` | Card borders, inputs |

**Semantic rules you must follow:**
- Amber is never body text. It's a fill or an outline.
- Emerald is a state color, not a brand color. Use it for the pulsing dot on `Badge tone="live"`, the bottom-right dot on `UserPill`, and `FeedItem tone="pulse"`. Nothing else.
- Red (`--danger`) is not used for "unavailable" or "inactive" — that's `Badge tone="paused"` (slate). Red is for actual destruction.

### Typography

- **One family:** Inter Tight for everything (display + body). JetBrains Mono for eyebrows, data, IDs, badges, timestamps.
- **Hierarchy is built with weight and letter-spacing, not size jumps:**
  - Display titles: Inter Tight **500**, `letter-spacing: -0.03em`, with an `<em>` segment that shifts to `--slate-400` weight 400. Use the `<PageHeader title={...}>` prop — pass the italic segment as `<em>…</em>`.
  - Body: Inter Tight 400, line-height 1.5.
  - Mono labels: `.eyebrow` class or `<Eyebrow>` component — 11px uppercase, `letter-spacing: 0.14em`, with a 24px leading rule.
- **Every section opens with an eyebrow.** This is the single most visible pattern. Use `<Eyebrow>` directly or the `eyebrow` prop on `<PageHeader>`.
- **Italic reads as a whisper, not a shout.** `<em>` inside a title is always `--slate-400` weight 400. Don't color italics amber except in the marketing `problem__headline` class — the console uses slate italics only.

### Radius & spacing

- `--r-sm: 8px` — chips
- `--r-md: 14px` — tiles, internal surfaces
- `--r-lg: 20px` — cards, inputs containers
- `--r-xl: 28px` — modals only
- `--r-full: 999px` — buttons, pills, segmented controls

Cards have `1.75rem` padding. Page padding is `40px 48px 56px`. Grids are `20px` gap.

---

## 2. The kit — what exists and how to use it

Import from the barrel: `import { Button, Card, KpiCard } from "@ui"`.
The path alias `@ui` is set up in `vite.config.ts` and `tsconfig.json`.

### Primitives (`src/ui/primitives/`)

| Component | Purpose | Key props |
|---|---|---|
| `Button` | The one button | `variant: "primary" \| "accent" \| "ghost"`, `size`, `wide`, `trailingArrow` |
| `Badge` | Status pill | `tone: "default" \| "live" \| "signal" \| "paused" \| "muted"` |
| `Card` | Surface | `variant: "paper" \| "bone" \| "dark"`, `hover` |
| `Chip` | Context tag (inside composer, cards) | just `children` |
| `Eyebrow` | Mono-uppercase label with 24px leading rule | required on every section |
| `Input` | Pill-shaped text/search input | `leading` for icon, `placeholder` |
| `Segmented` | View switcher (active = white paper pill) | `options`, `defaultValue`, `onChange` |
| `DateRange` | Time-window switcher (active = ink pill) | `options`, `defaultValue`, `onChange` |

**When to pick one vs. another:**
- `Segmented` vs `DateRange`: if changing the *view*, use Segmented (softer). If changing the *dataset* (time window), use DateRange (harder commitment, inked active).
- `Badge` vs `Chip`: Badge carries state ("live", "paused"). Chip carries context ("Phoenix HVAC · ServiceTitan"). A Badge always answers "what's this thing's status?"; a Chip answers "what's the context?"
- `Button variant="accent"` vs `variant="primary"`: Accent is the page's hero CTA. Only one per page. Primary is every other action.

### Brand (`src/ui/brand/`)

| Component | Purpose |
|---|---|
| `BrandMark` | The concentric-circle mark. Props: `size`, `rings` (show dashed inner rings). Inside tight places (agent card header) pass `rings={false}` for a simpler read. |
| `Wordmark` | `Omni.studio` lockup. Props: `inline`, `suffix` (appends slate `.studio`-weight text, e.g. ` · Operations`). |

### Layout (`src/ui/layout/`)

| Component | Purpose |
|---|---|
| `AppShell` | Top-level frame. Takes `sidebar` prop + `children` + optional `titleSuffix`. |
| `TitleBar` | 32px desktop-window chrome. `suffix` optional. |
| `Sidebar` | 264px vertical nav. Takes `workspace: "studio" \| "operations"`, `homePath`, `user`, and children (NavRows + NavSections). |
| `WorkspaceSwitcher` | Studio ↔ Operations toggle. Rendered by Sidebar — don't use directly. |
| `NavRow` | One nav row. Props: `to`, `primary`, `nested`, `icon`, `end`. Uses React Router `NavLink`. |
| `NavSection` | Mono-uppercase divider label. `badge` prop for things like "Beta". |
| `UserPill` | Bottom of sidebar. `initials`, `name`, `status`. |
| `PageHeader` | Eyebrow + display title + subtitle + actions. Always the first element in a page. |

### Data (`src/ui/data/`)

| Component | Purpose |
|---|---|
| `KpiCard` | One big number. Props: `label`, `value`, `unit`, `delta`, `deltaTone`, `spark`, `sparkDirection`. |
| `KpiGrid` | 4-column wrapper around KpiCards. |
| `SparkLine` | Used inside KpiCard. `values: number[]`, `direction: "ink" \| "amber"`. |
| `LineChart` | The big amber line with dashed slate baseline. `current` + `prior` arrays + `xLabels`. |
| `BarChart` | Horizontal ranked bars. `rows: BarRow[]` — each has `label`, `percent` (0..1), `value`, `tone`. |
| `Funnel` | Stacked funnel bars. `stages: FunnelStage[]`. |
| `DataTable` | Generic table. Props: `columns: DataColumn<Row>[]`, `rows: Row[]`. Use `CustomerCell` for customer columns. |
| `FeedItem` | One row in an activity feed. `icon`, `tone`, `children`, `time`. Wrap children in `<div className="feed">`. |
| `StatPill` | Compact metric pill used in 3-across strips (channel/payment cards). |
| `ChartBox` | Titled surface with `right` slot. Wrap BarChart, Funnel, Feed, or mixed content. LineChart has its own wrapper — don't double-wrap. |

### Composite (`src/ui/composite/`)

| Component | Purpose |
|---|---|
| `AgentCard` | One AI agent tile: mark + name + slug + description + footer (stat + Open button). `statusTone` + `statusLabel` drive the badge. |
| `Composer` | Hero chat input. `placeholder`, `contextChip`, `selectors[]`, `onSubmit`. Send disk flips amber when content exists. |

---

## 3. Composition recipes (how pages are built)

Every page follows one of these shapes. Pick the closest, swap the content, and you're done.

### Recipe A — Dashboard (KPIs + charts + table)

```tsx
import { PageHeader, DateRange, Button, KpiGrid, KpiCard, LineChart, BarChart,
  ChartBox, DataTable, CustomerCell, FeedItem, Badge } from "@ui";

<PageHeader
  eyebrow="Wednesday · April 23, 2026"
  title={<>Revenue &amp; <em>the pulse of the shop.</em></>}
  subtitle="Today's board, this week's revenue, this month's A/R."
  actions={<>
    <DateRange options={["24h","7d","30d","QTD","YTD"]} defaultValue="7d" />
    <Button variant="accent" size="sm" trailingArrow>Export report</Button>
  </>}
/>

<KpiGrid>
  <KpiCard label="Revenue · 7d" value="$148,240" unit=".22"
    delta="▲ 18.4% vs last 7d" deltaTone="up"
    spark={[...]} sparkDirection="amber" />
  {/* ...3 more KpiCards... */}
</KpiGrid>

<div className="dash-grid">
  <div className="stack stack--lg">
    <LineChart title="Revenue · last 30 days" current={[...]} prior={[...]} xLabels={[...]} />
    <ChartBox title="Service mix · last 30 days">
      <BarChart rows={[...]} />
    </ChartBox>
    <ChartBox title="Today's board" right={<Button variant="ghost" size="sm" trailingArrow>Open dispatch</Button>}>
      <DataTable<Job> columns={jobColumns} rows={jobs} />
    </ChartBox>
  </div>
  <div className="stack stack--lg">
    <ChartBox title="Top techs · MTD"><BarChart rows={[...]} /></ChartBox>
    <ChartBox title="Live activity" right={<Badge tone="live">live</Badge>}>
      <div className="feed">
        <FeedItem icon={<span>✓</span>} tone="pulse" time="11s">...</FeedItem>
        {/* ... */}
      </div>
    </ChartBox>
  </div>
</div>
```

**Always:** `<PageHeader>` → `<KpiGrid>` (exactly 4 cards) → `.dash-grid` (2fr/1fr two-column). Main column stacks charts; side column holds a BarChart + Feed.

### Recipe B — Roster (card grid of objects)

```tsx
<PageHeader eyebrow="The team" title={<>Your AI <em>roster.</em></>}
  subtitle="..." actions={<><Segmented .../><Input .../></>} />
<div className="grid grid--3">
  <AgentCard ... />
  {/* ...N more AgentCards... */}
</div>
```

Used for Agents. Grid collapses to 2-col at 1180px and 1-col at 820px automatically.

### Recipe C — Pipeline / Kanban (leads, tasks)

```tsx
<PageHeader .../>
<ChartBox title="April funnel">
  <Funnel stages={[
    { label: "Inbound", value: 248, width: 1.00, pct: "100%", tone: "ink-900" },
    { label: "Contacted", value: 182, width: 0.72, pct: "73%", tone: "ink-800" },
    // ...
  ]} />
</ChartBox>
<div className="kanban">
  {/* 5 <KanbanColumn> with <KanbanCard>s inside. When a Kanban component is added,
       use it instead of manual class names. */}
</div>
```

### Recipe D — Ledger / CRM (searchable table + filters)

```tsx
<PageHeader eyebrow="Customers" title={<>Every home <em>you've ever stood in.</em></>}
  actions={<><Input placeholder="Name, phone…" /><Button variant="accent" size="sm">New customer</Button></>} />

<nav className="subnav">...tabs...</nav>
<div className="filter-row">...filter pills...</div>

<DataTable<Customer> columns={...} rows={...} />
```

### Recipe E — Hero / Chat home (Studio root)

```tsx
<div className="hero-chat">
  <BrandMark size={56} />
  <Eyebrow>After-hours team · Live</Eyebrow>
  <div className="hero-chat__name">Omni<span className="studio">.studio</span></div>
  <p className="hero-chat__tag">...short, warm sentence with one <em>amber italic segment</em>...</p>
  <Composer placeholder="Ask the studio…" contextChip="..." selectors={[...]} />
  {/* optional: task suggestions section */}
</div>
```

---

## 4. Adding a new page

1. Create `src/app/<workspace>/<PageName>.tsx`.
2. Start with `<PageHeader eyebrow=... title={<>… <em>…</em></>} subtitle="…" actions={…} />`.
3. Pick a Recipe (A–E above) or compose from the kit.
4. Add the route in `src/router.tsx` under the workspace's `children`.
5. Add a `<NavRow to="/<workspace>/<path>">` in `src/app/<workspace>/<Workspace>Sidebar.tsx`.
6. If the placeholder route already existed, just replace its `element`.

---

## 5. Adding a new component

Most asks can be solved with composition — think hard before adding. If you genuinely need a new primitive:

1. Put it in the right folder (`primitives`, `layout`, `data`, `composite`).
2. Export a TypeScript interface for props, with JSDoc comments on every prop.
3. Include a top-level JSDoc on the component itself explaining *when* to use it vs. alternatives.
4. Style it via an existing class in `components.css` — or add a new class using the token variables. Never hardcode a hex value.
5. Re-export from `src/ui/index.ts`.
6. **Update this SKILL.md** — add a row to the table in §2 and, if the pattern is new, a Recipe in §3.

---

## 6. Sidebar + routing

- Both sidebars share `Sidebar`, `NavRow`, `NavSection`, `UserPill`, `WorkspaceSwitcher` — they only differ in the content you compose inside them.
- Active state on `NavRow` is driven by React Router's `NavLink`. Don't pass an `isActive` prop manually.
- The top of every sidebar shows the WorkspaceSwitcher. Studio sidebar has `workspace="studio"`, Operations has `workspace="operations"`. The inactive side becomes a real `<Link>`.
- Cross-workspace navigation: use React Router `<Link to="/studio" />` or `<Link to="/operations" />`. Don't use `<a href>` — it causes a full-page reload.

---

## 7. Accessibility guardrails

- Every `Button` with only an icon must have `aria-label`.
- Inputs use a real `<label>` (the `Input` component wraps its input in one).
- Modal (when added) must set `role="dialog"`, `aria-modal="true"`, `aria-labelledby="..."` and restore focus on close.
- The focus ring is 2px amber at 3px offset — already set globally. Don't override with `outline: none`.
- Always pair color with shape or text: the live badge has both a pulsing dot AND the word "live" — don't rely on color alone.

---

## 8. Do / Don't cheat sheet

| ✅ Do | ❌ Don't |
|---|---|
| Use `<Eyebrow>` above every section heading | Skip the eyebrow "to save space" — it's required furniture |
| One `variant="accent"` button per page | Pepper the page with amber CTAs |
| Pass italics via `<em>` in title props | Put brand-italic text in body copy |
| Use `tabular-nums` (already on data cells) for every number | Mix mono + proportional figures in the same column |
| Keep emerald for live-only states | Use emerald as a brand / CTA color |
| Compose new cards from `<Card>` + `<Badge>` + utilities | Write fresh CSS for a card that's 90% the same as an existing one |
| Import from `@ui` (barrel) | Import from deep paths like `@ui/primitives/Button.tsx` |
| Wrap chart content in `<ChartBox>` | Build a new titled surface from scratch |

---

## 9. Canonical reference files

If you want to see a pattern in action before writing new code, read these first:

- [`src/app/studio/StudioHome.tsx`](../../src/app/studio/StudioHome.tsx) — Recipe E (hero / chat home)
- [`src/app/studio/StudioAgents.tsx`](../../src/app/studio/StudioAgents.tsx) — Recipe B (roster)
- [`src/app/operations/Dashboard.tsx`](../../src/app/operations/Dashboard.tsx) — Recipe A (dashboard)
- [`src/app/studio/StudioSidebar.tsx`](../../src/app/studio/StudioSidebar.tsx) — sidebar composition

The HTML reference (source of the design) lives at:
- `d:\Code\Omni Studio Ref\prototype\` — Studio pages as plain HTML/CSS
- `d:\Code\Omni Studio Ref\operations\` — Operations pages as plain HTML/CSS

When porting a page from HTML to React: read the HTML file, match it against the recipes above, then compose with `@ui`. The visual result should be pixel-indistinguishable.

---

## 10. Voice & microcopy

- Numbers first. "14 days payback", "<1s voice latency", "$74k/yr recovered".
- Short italic punches. "Your AI *roster*." not "Your revolutionary AI-powered roster!"
- No marketing inflation. If the feature doesn't ship, don't promise it; label it `Badge tone="paused"` with "staging".
- Use mono for timestamps, IDs, keyboard labels, anything tabular. Use Inter Tight everywhere else.

---

Pull this skill into context any time you touch `src/ui/`, `src/app/`, `src/styles/`, or the router. If the user asks to "add a page for X", read it first, pick a recipe, and compose — you'll almost never need to write CSS.
