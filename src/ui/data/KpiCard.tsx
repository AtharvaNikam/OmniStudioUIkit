import clsx from "clsx";
import type { ReactNode } from "react";
import { SparkLine, type SparkDirection } from "./SparkLine";

export type DeltaTone = "up" | "down" | "flat";

export interface KpiCardProps {
  /** Mono-uppercase label rendered above the number. */
  label: ReactNode;
  /** The primary number. Use tabular figures (the CSS already sets `tabular-nums`). */
  value: ReactNode;
  /** Optional unit suffix (rendered smaller, mono, dim). */
  unit?: string;
  /** Delta line, e.g. "▲ 18.4% vs last 7d". Tone sets the color. */
  delta?: ReactNode;
  deltaTone?: DeltaTone;
  /** Optional spark line series (array of numbers). Auto-scaled to the card width. */
  spark?: number[];
  /** Spark color. Default is amber for value deltas, ink otherwise. */
  sparkDirection?: SparkDirection;
}

/**
 * KpiCard — one of the four big numbers at the top of a page.
 *
 * Always use in groups of 4 inside <KpiGrid />. If you have more than 4, split into sections.
 */
export function KpiCard({
  label,
  value,
  unit,
  delta,
  deltaTone = "flat",
  spark,
  sparkDirection = "ink",
}: KpiCardProps) {
  return (
    <div className="kpi-card">
      <span className="kpi-card__label">{label}</span>
      <div className="kpi-card__num">
        {value}
        {unit ? <span className="unit">{unit}</span> : null}
      </div>
      {delta ? (
        <span
          className={clsx(
            "kpi-card__delta",
            deltaTone === "up" && "kpi-card__delta--up",
            deltaTone === "down" && "kpi-card__delta--down",
            deltaTone === "flat" && "kpi-card__delta--flat"
          )}
        >
          {delta}
        </span>
      ) : null}
      {spark ? <SparkLine values={spark} direction={sparkDirection} /> : null}
    </div>
  );
}
