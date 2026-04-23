import clsx from "clsx";
import type { ReactNode } from "react";

export type BarTone = "ink" | "amber" | "slate";

export interface BarRow {
  label: string;
  /** 0..1 — relative fill. */
  percent: number;
  /** Display value on the right (e.g. "$48,210" or "42 · 34%"). */
  value: ReactNode;
  tone?: BarTone;
}

export interface BarChartProps {
  rows: BarRow[];
}

/**
 * BarChart — horizontal ranked bars (label / track / value).
 *
 * Use for service mix, tech leaderboards, attribution splits. Top row typically amber,
 * remainder ink or slate. This is a *ranked* chart — order rows by descending value yourself.
 */
export function BarChart({ rows }: BarChartProps) {
  return (
    <div className="bar-chart">
      {rows.map((r, i) => (
        <div key={r.label + i} className="bar-chart__row">
          <span className="bar-chart__label">{r.label}</span>
          <span className="bar-chart__track">
            <span
              className={clsx(
                "bar-chart__fill",
                r.tone === "amber" && "bar-chart__fill--amber",
                r.tone === "slate" && "bar-chart__fill--slate"
              )}
              style={{ width: `${Math.max(0, Math.min(100, r.percent * 100))}%` }}
            />
          </span>
          <span className="bar-chart__value">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
