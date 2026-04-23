import type { ReactNode } from "react";

export interface FunnelStage {
  label: string;
  value: ReactNode;
  /** 0..1 — width of the bar. */
  width: number;
  /** Percentage display on the right (e.g. "31%"). */
  pct: string;
  /** Tone — `ink` for upper stages, `amber` for the conversion stages. */
  tone?: "ink-900" | "ink-800" | "ink-700" | "amber-600" | "amber-500";
}

export interface FunnelProps {
  stages: FunnelStage[];
}

const toneBg: Record<NonNullable<FunnelStage["tone"]>, string> = {
  "ink-900": "var(--ink-900)",
  "ink-800": "var(--ink-800)",
  "ink-700": "var(--ink-700)",
  "amber-600": "var(--signal-600)",
  "amber-500": "var(--signal)",
};

/**
 * Funnel — stacked horizontal bars, top-to-bottom narrowing.
 *
 * Give exactly 5 stages for the canonical shape (Inbound → Won). Fewer works; more crowds.
 */
export function Funnel({ stages }: FunnelProps) {
  return (
    <div className="funnel">
      {stages.map((s, i) => (
        <div key={s.label + i} className="funnel__row">
          <span className="funnel__label">{s.label}</span>
          <div
            className="funnel__bar"
            style={{
              width: `${Math.max(0, Math.min(100, s.width * 100))}%`,
              background: toneBg[s.tone ?? (i < 3 ? "ink-800" : "amber-500")],
            }}
          >
            {s.value}
          </div>
          <span className="funnel__pct">{s.pct}</span>
        </div>
      ))}
    </div>
  );
}
