import { Link, useParams } from "react-router-dom";
import {
  PageHeader,
  Eyebrow,
  Card,
  Badge,
  Button,
  ChartBox,
  FeedItem,
} from "@ui";

type Stage =
  | "booked"
  | "scheduled"
  | "confirmed"
  | "en-route"
  | "on-site"
  | "quoted"
  | "repair"
  | "invoiced"
  | "review";

interface Step {
  key: Stage;
  title: string;
  meta: string;
  detail?: string;
  state: "done" | "active" | "pending";
}

const lifecycle: Step[] = [
  { key: "booked", title: "Booked", meta: "2d · Dispatcher (voice)", state: "done" },
  { key: "scheduled", title: "Scheduled", meta: "2d · Marcus R. assigned · 7–9 AM", state: "done" },
  { key: "confirmed", title: "Confirmed by customer", meta: '1d · SMS reply "yes"', state: "done" },
  {
    key: "en-route",
    title: "En route",
    meta: "Now · ETA 7:12 AM",
    detail: "Marcus left depot at 6:48 AM. SMS sent to Sarah with live ETA.",
    state: "active",
  },
  { key: "on-site", title: "On site & diagnose", meta: "Pending", state: "pending" },
  { key: "quoted", title: "Quote & approval", meta: "Pending", state: "pending" },
  { key: "repair", title: "Repair", meta: "Pending", state: "pending" },
  { key: "invoiced", title: "Invoice & pay", meta: "Pending", state: "pending" },
  { key: "review", title: "Review request", meta: "Pending", state: "pending" },
];

export function JobDetail() {
  const { id = "J-24081" } = useParams();

  return (
    <>
      <PageHeader
        eyebrow={`Job · ${id}`}
        title={
          <>
            AC repair · <em>Sarah M.</em>
          </>
        }
        subtitle="On route · ETA 12 minutes · Marcus R. driving Truck 4."
        actions={
          <>
            <Link to={`/operations/jobs/${id}/route`}>
              <Button variant="ghost" size="sm">
                View map
              </Button>
            </Link>
            <Button variant="accent" size="sm" trailingArrow>
              Mark on-site
            </Button>
          </>
        }
      />

      <div className="dash-grid">
        <div className="stack stack--lg">
          <Card>
            <div className="row row--between" style={{ marginBottom: 12 }}>
              <Badge tone="signal">on route · ETA 12m</Badge>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  letterSpacing: "0.06em",
                }}
              >
                Wed · 7:00 AM
              </span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--ink)",
                  color: "var(--ivory)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                SM
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Link
                  to="/operations/customer/sarah-marks"
                  style={{
                    fontWeight: 500,
                    color: "var(--ink)",
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Sarah Marks →
                </Link>
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--text-mute)",
                    marginTop: 2,
                  }}
                >
                  1204 E Oak · Phoenix · 85008
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  borderLeft: "1px solid var(--border)",
                  paddingLeft: 16,
                }}
              >
                <Field label="Tech" value="Marcus R." />
                <Field label="Window" value="07:00 – 09:00" mono />
                <Field label="Ticket" value="$680" mono />
              </div>
            </div>
          </Card>

          <ChartBox
            title="Where"
            right={
              <Link to={`/operations/jobs/${id}/route`}>
                <Button variant="ghost" size="sm" trailingArrow>
                  Open map
                </Button>
              </Link>
            }
          >
            <Map />
          </ChartBox>

          <ChartBox title="Lifecycle">
            <Timeline steps={lifecycle} />
          </ChartBox>
        </div>

        <div className="stack stack--lg">
          <ChartBox title="Live updates" right={<Badge tone="live">live</Badge>}>
            <div className="feed">
              <FeedItem icon={<span>→</span>} tone="pulse" time="8s">
                <strong>Marcus</strong> turned on E Indian School Rd{" "}
                <span>· 0.4 mi to go</span>
              </FeedItem>
              <FeedItem icon={<span>📍</span>} tone="signal" time="1m">
                <strong>Sarah</strong> shared her location <span>· ±5m</span>
              </FeedItem>
              <FeedItem icon={<span>▴</span>} tone="ink" time="14m">
                <strong>Truck 4</strong> left depot <span>· 6:48 AM</span>
              </FeedItem>
              <FeedItem icon={<span>●</span>} time="14m">
                <strong>SMS sent</strong> "Marcus is on the way, ETA 7:12"{" "}
                <span>· auto</span>
              </FeedItem>
            </div>
          </ChartBox>

          <Card>
            <Eyebrow style={{ marginBottom: 8 }}>What's expected</Eyebrow>
            <ul style={{ paddingLeft: 18, color: "var(--text-mute)", lineHeight: 1.6 }}>
              <li>Diagnostic — ~25 min</li>
              <li>Likely capacitor replacement</li>
              <li>Estimated total $549–$849</li>
              <li>Auto-approved up to $500</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div
        className="mono"
        style={{
          fontSize: 11,
          color: "var(--text-dim)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontWeight: 500,
          color: "var(--ink)",
          fontSize: 13,
          marginTop: 2,
          fontFamily: mono ? "var(--font-mono)" : undefined,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const stateStyles =
          step.state === "done"
            ? { dot: "var(--ink)", color: "var(--ivory)", line: "var(--ink)" }
            : step.state === "active"
              ? {
                  dot: "var(--signal)",
                  color: "var(--ivory)",
                  line: "rgba(217,119,6,0.4)",
                }
              : {
                  dot: "var(--bone-100)",
                  color: "var(--text-dim)",
                  line: "var(--bone-100)",
                };
        return (
          <div
            key={step.key}
            style={{
              display: "grid",
              gridTemplateColumns: "28px 1fr",
              gap: 16,
              alignItems: "flex-start",
              position: "relative",
              paddingBottom: isLast ? 0 : 18,
            }}
          >
            {!isLast && (
              <span
                style={{
                  position: "absolute",
                  left: 13,
                  top: 26,
                  bottom: 0,
                  width: 2,
                  background: stateStyles.line,
                }}
              />
            )}
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: stateStyles.dot,
                color: stateStyles.color,
                border:
                  step.state === "pending"
                    ? "2px solid var(--border-strong)"
                    : `2px solid ${stateStyles.dot}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                zIndex: 1,
                ...(step.state === "active"
                  ? { boxShadow: "0 0 0 4px rgba(217,119,6,0.18)" }
                  : {}),
              }}
            >
              {step.state === "done" ? "✓" : step.state === "active" ? "→" : "○"}
            </span>
            <div style={{ paddingTop: 1 }}>
              <div
                style={{
                  fontWeight: step.state === "pending" ? 400 : 500,
                  color:
                    step.state === "pending" ? "var(--text-mute)" : "var(--ink)",
                  fontSize: 14,
                }}
              >
                {step.title}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  marginTop: 2,
                  letterSpacing: "0.04em",
                }}
              >
                {step.meta}
              </div>
              {step.detail && (
                <div
                  style={{
                    color: "var(--text-mute)",
                    fontSize: 12,
                    lineHeight: 1.5,
                    marginTop: 4,
                  }}
                >
                  {step.detail}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Map() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 280,
        background: "linear-gradient(180deg, #f5efe1 0%, #e8e2d3 100%)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 800 280"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <path
          d="M0 80 Q 200 90 400 85 T 800 100"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M0 200 Q 200 195 400 200 T 800 215"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M250 0 L 270 280"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M520 0 L 510 280"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M120 60 Q 220 110 320 160 Q 440 180 540 220 Q 600 240 660 250"
          stroke="var(--ink)"
          strokeWidth={3}
          strokeDasharray="8 6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <Pin x={120} y={50} ink />
      <Pin x={650} y={232} />
      <span
        style={{
          position: "absolute",
          top: 14,
          left: 160,
          background: "var(--paper)",
          border: "1px solid var(--border-strong)",
          borderRadius: 999,
          padding: "5px 12px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--ink)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        Marcus · Truck 4
      </span>
      <span
        style={{
          position: "absolute",
          top: 200,
          left: 540,
          background: "var(--ink)",
          color: "var(--ivory)",
          border: "1px solid var(--ink)",
          borderRadius: 999,
          padding: "5px 12px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          boxShadow: "var(--shadow-md)",
        }}
      >
        1204 E Oak — Sarah
      </span>
    </div>
  );
}

function Pin({ x, y, ink }: { x: number; y: number; ink?: boolean }) {
  return (
    <span
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: ink ? "var(--ink)" : "var(--signal)",
        boxShadow: ink
          ? "0 0 0 6px rgba(10,14,18,0.18), 0 4px 12px rgba(0,0,0,0.3)"
          : "0 0 0 6px rgba(217,119,6,0.22), 0 4px 12px rgba(217,119,6,0.4)",
      }}
    />
  );
}
