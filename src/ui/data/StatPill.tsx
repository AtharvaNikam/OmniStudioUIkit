import type { ReactNode } from "react";

export interface StatPillProps {
  label: ReactNode;
  value: ReactNode;
}

/**
 * StatPill — bone-tinted pill used in compact KPI strips (3-across on channel/payment cards).
 *
 * Prefer KpiCard when the number is the hero; prefer StatPill when it's a supporting trio.
 */
export function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="stat-pill">
      <span className="stat-pill__label">{label}</span>
      <span className="stat-pill__val">{value}</span>
    </div>
  );
}
