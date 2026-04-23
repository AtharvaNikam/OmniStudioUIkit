import type { ReactNode } from "react";

export interface KpiGridProps {
  children: ReactNode;
  /** Bottom margin — pages usually follow KpiGrid with a 24px gap to the next section. */
  gap?: number;
}

/**
 * KpiGrid — 4-column CSS grid that collapses to 2 at 1180px and 1 at 640px.
 *
 * Pass exactly 4 <KpiCard /> children for the canonical layout.
 */
export function KpiGrid({ children, gap = 24 }: KpiGridProps) {
  return (
    <div className="kpi-grid" style={{ marginBottom: gap }}>
      {children}
    </div>
  );
}
