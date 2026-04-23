export type SparkDirection = "ink" | "amber";

export interface SparkLineProps {
  /** The series. */
  values: number[];
  /** `amber` for value-trend metrics (revenue, reviews), `ink` for neutral (booking rate). */
  direction?: SparkDirection;
  /** Chart height. Default 36px to match KpiCard __spark. */
  height?: number;
}

/**
 * SparkLine — tiny SVG line used inside KpiCard.
 *
 * Takes a raw array, scales to the viewbox, draws a polyline. No axis, no labels.
 */
export function SparkLine({ values, direction = "ink", height = 36 }: SparkLineProps) {
  if (values.length === 0) return null;
  const width = 200;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1 || 1);
  const points = values
    .map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" L ");
  return (
    <svg
      className="kpi-card__spark"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M ${points}`}
        fill="none"
        stroke={direction === "amber" ? "#D97706" : "#0A0E12"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
