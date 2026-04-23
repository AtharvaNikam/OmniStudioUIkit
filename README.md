# Omni Studio — React app

Single React app housing both Omni Studio workspaces:

- **`/studio`** — the AI agent console (Dispatcher, Invoice Concierge, …)
- **`/operations`** — the ServiceTitan-style business app (Dashboard, CRM, Dispatch, …)

Both draw from one UI kit in [`src/ui/`](src/ui/) and one design-token file in [`src/styles/tokens.css`](src/styles/tokens.css).

## Run

```bash
cd react-app
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production bundle
npm run preview      # serve the built bundle locally
```

Node 18+ required. pnpm / yarn work equivalently.

## Structure

```
react-app/
├── .claude/skills/omni-studio-ui-kit/SKILL.md    ← read this before editing UI
├── public/mark.svg                               ← concentric-circle brand mark
├── index.html                                    ← Inter Tight + JetBrains Mono via Google Fonts
├── src/
│   ├── main.tsx                                  ← mounts <RouterProvider>
│   ├── router.tsx                                ← /studio/* and /operations/* routes
│   ├── styles/
│   │   ├── tokens.css                            ← CSS custom properties (ivory, ink, amber…)
│   │   ├── components.css                        ← class styles for every UI kit component
│   │   └── globals.css                           ← imports both
│   ├── ui/                                       ← the UI kit
│   │   ├── primitives/     Button, Badge, Card, Chip, Eyebrow, Input, Segmented, DateRange
│   │   ├── brand/          BrandMark, Wordmark
│   │   ├── layout/         AppShell, TitleBar, Sidebar, WorkspaceSwitcher, NavRow, NavSection, UserPill, PageHeader
│   │   ├── data/           KpiCard, KpiGrid, SparkLine, LineChart, BarChart, Funnel, DataTable, FeedItem, StatPill, ChartBox
│   │   ├── composite/      AgentCard, Composer
│   │   └── index.ts        barrel export — import via `import { ... } from "@ui"`
│   └── app/
│       ├── studio/         StudioLayout, StudioSidebar, StudioHome, StudioAgents
│       └── operations/     OperationsLayout, OperationsSidebar, Dashboard
└── package.json
```

The path alias `@ui` → `src/ui` is defined in both `vite.config.ts` and `tsconfig.json`.

## What's implemented vs. what's a placeholder

Every route from the HTML prototypes (`../prototype/` and `../operations/`) has a React route and a sidebar entry so no link is dead. Three are **real** demo pages that use the full kit:

- `/studio` — New Brief (Composer hero + suggestion cards)
- `/studio/agents` — AgentCard roster with Segmented + Input
- `/operations` — Dashboard with KpiGrid + LineChart + BarChart + DataTable + Feed

The other routes render a `Placeholder` page pointing at the SKILL file. To port one:

1. Read the skill: [`.claude/skills/omni-studio-ui-kit/SKILL.md`](.claude/skills/omni-studio-ui-kit/SKILL.md)
2. Pick a recipe from §3 (Dashboard / Roster / Pipeline / Ledger / Hero).
3. Replace the `Placeholder` element in `src/router.tsx` with your new page.

## Using the skill

The file at `.claude/skills/omni-studio-ui-kit/SKILL.md` is a proper Claude Code skill (frontmatter + a `description` telling Claude when to invoke it). If you open this project in Claude Code, the agent will auto-discover it and pull it into context the moment you ask for UI changes.

If you use a different Claude setup, the file is also useful as plain documentation — it covers tokens, every component, composition recipes, and do/don't rules.

## Brand source of truth

Tokens mirror `D:\Code\OmniStudio\OmniStudioTheme\omni-studio\assets\css\tokens.css`. When that file changes, update [`src/styles/tokens.css`](src/styles/tokens.css) here and the rest of the kit follows automatically.

The brand mark SVG comes from `D:\Code\OmniStudio\OmniStudioTheme\omni-studio\assets\svg\mark.svg`.
