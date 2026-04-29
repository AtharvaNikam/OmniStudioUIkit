import { Link, useParams } from "react-router-dom";
import {
  PageHeader,
  Card,
  Badge,
  Button,
  ChartBox,
  FeedItem,
} from "@ui";

export function JobRoute() {
  const { id = "J-24081" } = useParams();

  return (
    <>
      <PageHeader
        eyebrow={`${id} · En route · ETA 12 min`}
        title={
          <>
            Marcus → <em>Sarah Marks.</em>
          </>
        }
        subtitle="Sarah shared her location 1 minute ago. Truck 4 is 4.2 miles out."
        actions={
          <>
            <Link to={`/operations/jobs/${id}`}>
              <Button variant="ghost" size="sm">
                Back to job
              </Button>
            </Link>
            <Button variant="accent" size="sm" trailingArrow>
              Mark arrived
            </Button>
          </>
        }
      />

      <div className="dash-grid">
        <div className="stack stack--lg">
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <Map />
          </Card>

          <Card>
            <div className="row row--between">
              <div className="row" style={{ gap: 10 }}>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.08)",
                    color: "#047857",
                    border: "1px solid rgba(16,185,129,0.22)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  📍
                </span>
                <div>
                  <div
                    style={{ fontWeight: 500, color: "var(--ink)", fontSize: 14 }}
                  >
                    1204 E Oak St, Phoenix, AZ
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: "var(--text-mute)",
                      marginTop: 2,
                    }}
                  >
                    Lat 33.4522 · Lng −112.0740 · ±5m
                  </div>
                </div>
              </div>
              <Badge tone="live">live</Badge>
            </div>
            <div
              className="row"
              style={{
                paddingTop: 12,
                borderTop: "1px solid var(--border)",
                marginTop: 12,
                gap: 18,
              }}
            >
              <span
                className="mono"
                style={{ fontSize: 12, color: "var(--text-dim)" }}
              >
                Shared via SMS · 09:24
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  marginLeft: "auto",
                }}
              >
                Refreshed 2s ago
              </span>
            </div>
          </Card>
        </div>

        <div className="stack stack--lg">
          <Card style={{ background: "var(--ink)", color: "var(--ivory)" }}>
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              ETA
            </span>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                marginTop: 8,
              }}
            >
              7:12{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.4em",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: 0,
                }}
              >
                AM
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                paddingTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                marginTop: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.55)" }}>
                Distance{" "}
                <b style={{ color: "var(--ivory)", fontWeight: 500 }}>4.2 mi</b>
              </span>
              <span style={{ color: "rgba(255,255,255,0.55)" }}>
                Speed{" "}
                <b style={{ color: "var(--ivory)", fontWeight: 500 }}>28 mph</b>
              </span>
            </div>
          </Card>

          <ChartBox title="Live updates" right={<Badge tone="live">live</Badge>}>
            <div className="feed">
              <FeedItem icon={<span>→</span>} tone="pulse" time="8s">
                <strong>Marcus</strong> turned on E Indian School Rd{" "}
                <span>· 0.4 mi to go</span>
              </FeedItem>
              <FeedItem icon={<span>📍</span>} tone="signal" time="1m">
                <strong>Sarah</strong> shared her location{" "}
                <span>· accuracy ±5m</span>
              </FeedItem>
              <FeedItem icon={<span>▴</span>} tone="ink" time="14m">
                <strong>Truck 4</strong> left depot <span>· 6:48 AM</span>
              </FeedItem>
              <FeedItem icon={<span>●</span>} time="14m">
                <strong>SMS</strong> sent to Sarah · "Marcus is on the way, ETA
                7:12" <span>· auto</span>
              </FeedItem>
            </div>
          </ChartBox>
        </div>
      </div>
    </>
  );
}

function Map() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 480,
        background: "linear-gradient(180deg, #f5efe1 0%, #e8e2d3 100%)",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 800 480"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <path
          d="M0 100 Q 200 110 400 105 T 800 120"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M0 280 Q 200 275 400 280 T 800 295"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M0 400 Q 200 395 400 400 T 800 390"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M180 0 L 200 480"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M380 0 L 400 480"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M580 0 L 560 480"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M120 80 Q 220 160 320 220 Q 420 280 540 320 Q 600 360 660 380"
          stroke="var(--ink)"
          strokeWidth={3}
          strokeDasharray="8 6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <Pin x={110} y={70} ink />
      <span
        style={{
          position: "absolute",
          top: 14,
          left: 152,
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
      <Pin x={650} y={372} />
      <span
        style={{
          position: "absolute",
          top: 348,
          left: 530,
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
