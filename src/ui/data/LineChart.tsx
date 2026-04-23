import type { ReactNode } from "react";

export interface LineChartProps {
  /** Chart title. */
  title: ReactNode;
  /** Supporting sentence under the title. */
  caption?: ReactNode;
  /** Current-period series (0..1 normalized or raw values — will auto-scale). */
  current: number[];
  /** Prior-period series (rendered dashed slate). Must be same length or empty. */
  prior?: number[];
  /** Axis tick labels (3–5 shown). */
  xLabels?: string[];
  /** Extra header content (e.g. a Segmented view switch) on the right side. */
  headerRight?: ReactNode;
}

function scale(values: number[], min: number, max: number, width: number, height: number) {
  const range = max - min || 1;
  const step = width / (values.length - 1 || 1);
  return values.map((v, i) => {
    const x = i * step;
    const y = height - ((v - min) / range) * (height - 20) - 10;
    return [x, y] as [number, number];
  });
}

function toPath(points: [number, number][]) {
  return points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
}

/**
 * LineChart — the amber filled line with a dashed slate baseline.
 *
 * Matches the Dashboard "Revenue · last 30 days" pattern. Axis labels opt-in.
 */
export function LineChart({
  title,
  caption,
  current,
  prior = [],
  xLabels,
  headerRight,
}: LineChartProps) {
  const width = 800;
  const height = 220;
  const all = [...current, ...prior];
  const min = Math.min(...all);
  const max = Math.max(...all);
  const currPts = scale(current, min, max, width, height);
  const priorPts = prior.length ? scale(prior, min, max, width, height) : [];

  const currPath = toPath(currPts);
  const fillPath =
    currPts.length > 0
      ? `${currPath} L ${currPts[currPts.length - 1][0]} ${height} L 0 ${height} Z`
      : "";

  return (
    <div className="chart-box">
      <div className="chart-head">
        <div>
          <h3>{title}</h3>
          {caption ? <p>{caption}</p> : null}
        </div>
        {headerRight ? (
          headerRight
        ) : (
          <div className="chart-legend">
            <span className="chart-legend__item">
              <span className="chart-legend__swatch chart-legend__swatch--amber" /> Current
            </span>
            {prior.length ? (
              <span className="chart-legend__item">
                <span className="chart-legend__swatch chart-legend__swatch--dashed" /> Prior
              </span>
            ) : null}
          </div>
        )}
      </div>
      <svg className="svg-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <line className="grid-line" x1={0} y1={40} x2={width} y2={40} />
        <line className="grid-line" x1={0} y1={90} x2={width} y2={90} />
        <line className="grid-line" x1={0} y1={140} x2={width} y2={140} />
        <line className="grid-line" x1={0} y1={190} x2={width} y2={190} />
        {priorPts.length ? (
          <path
            d={toPath(priorPts)}
            fill="none"
            stroke="#8B9AAE"
            strokeWidth={1.5}
            strokeDasharray="3 5"
          />
        ) : null}
        {fillPath ? <path d={fillPath} className="series-fill" /> : null}
        <path d={currPath} className="series-amber" />
        {xLabels?.map((lbl, i) => {
          const x = (i * width) / (xLabels.length - 1);
          return (
            <text
              key={lbl + i}
              x={Math.max(0, x - 16)}
              y={height - 4}
              className="axis-label"
            >
              {lbl}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
