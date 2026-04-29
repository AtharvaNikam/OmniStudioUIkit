import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader, Eyebrow, Card, Button } from "@ui";

const presets = [
  "Today",
  "This week",
  "7 days",
  "30 days",
  "QTD",
  "YTD",
  "Last week",
  "Last month",
  "Last quarter",
  "Custom",
];

const compareOptions = ["Prior period", "Same period last year", "No comparison"];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface DayCell {
  day: number;
  state: "default" | "mute" | "in-range" | "start" | "end" | "today";
}

const days: DayCell[] = [
  { day: 30, state: "mute" },
  { day: 31, state: "mute" },
  ...Array.from({ length: 16 }, (_, i) => ({ day: i + 1, state: "default" as const })),
  { day: 17, state: "start" },
  { day: 18, state: "in-range" },
  { day: 19, state: "in-range" },
  { day: 20, state: "in-range" },
  { day: 21, state: "in-range" },
  { day: 22, state: "in-range" },
  { day: 23, state: "end" },
  ...Array.from({ length: 7 }, (_, i) => ({ day: 24 + i, state: "default" as const })),
  { day: 1, state: "mute" },
  { day: 2, state: "mute" },
  { day: 3, state: "mute" },
];

export function DateFilter() {
  const navigate = useNavigate();
  const [preset, setPreset] = useState("7 days");
  const [compare, setCompare] = useState("Prior period");

  return (
    <>
      <PageHeader
        eyebrow="Filter · 7 days"
        title={
          <>
            Choose a <em>date range.</em>
          </>
        }
        subtitle="Picks the window for KPIs, charts, and the dispatch board across Operations."
        actions={
          <>
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button
              variant="accent"
              size="sm"
              trailingArrow
              onClick={() => navigate(-1)}
            >
              Apply · 7 days
            </Button>
          </>
        }
      />

      <div className="dash-grid">
        <div className="stack stack--lg">
          <div>
            <Eyebrow style={{ marginBottom: 10 }}>Quick</Eyebrow>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setPreset(p)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: preset === p ? "var(--ink)" : "var(--bone-100)",
                    color: preset === p ? "var(--ivory)" : "var(--text-mute)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow style={{ marginBottom: 10 }}>Range</Eyebrow>
            <Card style={{ display: "flex", gap: 12 }}>
              <RangeChip label="Start" date="Apr 17" sub="Wed · 2026" active />
              <RangeChip label="End" date="Apr 23" sub="Tue · 2026" />
            </Card>
          </div>

          <Card>
            <div
              className="row row--between"
              style={{
                paddingBottom: 14,
                borderBottom: "1px solid var(--border)",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                }}
              >
                April 2026
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                <CalNavBtn>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </CalNavBtn>
                <CalNavBtn>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </CalNavBtn>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 2,
                marginBottom: 4,
              }}
            >
              {weekdays.map((d) => (
                <span
                  key={d}
                  className="mono"
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-dim)",
                    textAlign: "center",
                    padding: "6px 0",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 2,
              }}
            >
              {days.map((d, i) => (
                <Day key={i} day={d.day} state={d.state} />
              ))}
            </div>
          </Card>
        </div>

        <div className="stack stack--lg">
          <div>
            <Eyebrow style={{ marginBottom: 10 }}>Compare to</Eyebrow>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {compareOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setCompare(c)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: compare === c ? "var(--ink)" : "var(--bone-100)",
                    color: compare === c ? "var(--ivory)" : "var(--text-mute)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <Card>
            <Eyebrow style={{ marginBottom: 12 }}>Active filters</Eyebrow>
            <SummaryRow label="Range" value="Apr 17 — Apr 23, 2026" sub="7 days" />
            <SummaryRow
              label="Compare"
              value="Apr 10 — Apr 16, 2026"
              sub={compare === "No comparison" ? "off" : "prior"}
              last
            />
          </Card>

          <Card variant="bone">
            <Eyebrow style={{ marginBottom: 8 }}>Where it applies</Eyebrow>
            <p style={{ color: "var(--text-mute)", fontSize: 13, lineHeight: 1.6 }}>
              Dashboard KPIs, the line + bar charts, the live activity feed. Not
              the dispatch board (that's always today).
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

function RangeChip({
  label,
  date,
  sub,
  active,
}: {
  label: string;
  date: string;
  sub: string;
  active?: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        padding: "12px 14px",
        background: active ? "var(--bone-100)" : "var(--paper)",
        border: active ? "1px solid var(--ink)" : "1px solid var(--border)",
        borderRadius: "var(--r-md)",
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 10,
          color: "var(--text-dim)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 500,
          letterSpacing: "-0.015em",
          color: "var(--ink)",
          marginTop: 2,
        }}
      >
        {date}
      </div>
      <div
        className="mono"
        style={{ fontSize: 11, color: "var(--text-mute)", marginTop: 1 }}
      >
        {sub}
      </div>
    </div>
  );
}

function CalNavBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "var(--bone-100)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink)",
      }}
    >
      {children}
    </button>
  );
}

function Day({
  day,
  state,
}: {
  day: number;
  state: DayCell["state"];
}) {
  const styles: React.CSSProperties = {
    aspectRatio: "1",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--ink)",
    fontVariantNumeric: "tabular-nums",
  };
  if (state === "mute") styles.color = "var(--text-dim)";
  if (state === "in-range") {
    styles.background = "var(--bone-100)";
    styles.borderRadius = 0;
  }
  if (state === "start") {
    styles.background = "var(--ink)";
    styles.color = "var(--ivory)";
    styles.borderRadius = "50% 0 0 50%";
  }
  if (state === "end") {
    styles.background = "var(--ink)";
    styles.color = "var(--ivory)";
    styles.borderRadius = "0 50% 50% 0";
  }
  return <span style={styles}>{day}</span>;
}

function SummaryRow({
  label,
  value,
  sub,
  last,
}: {
  label: string;
  value: string;
  sub: string;
  last?: boolean;
}) {
  return (
    <div
      className="row row--between"
      style={{
        padding: "12px 0",
        borderBottom: last ? "none" : "1px solid var(--border)",
      }}
    >
      <div>
        <div
          className="mono"
          style={{
            fontSize: 10,
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
            fontSize: 14,
            marginTop: 2,
          }}
        >
          {value}
        </div>
      </div>
      <span className="mono" style={{ fontSize: 12, color: "var(--text-mute)" }}>
        {sub}
      </span>
    </div>
  );
}
