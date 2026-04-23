import type { ReactNode } from "react";

export interface ChartBoxProps {
  title: ReactNode;
  caption?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
}

/**
 * ChartBox — wrapper around a data visualization that's NOT a LineChart.
 *
 * Use when you want a titled surface containing a BarChart, Funnel, Feed, or mixed content.
 * LineChart has its own wrapper built in; don't double-wrap.
 */
export function ChartBox({ title, caption, right, children }: ChartBoxProps) {
  return (
    <div className="chart-box">
      <div className="chart-head">
        <div>
          <h3>{title}</h3>
          {caption ? <p>{caption}</p> : null}
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}
