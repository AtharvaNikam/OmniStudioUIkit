import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader, Eyebrow, Card, Button, Badge } from "@ui";

const services = [
  "AC repair",
  "Maintenance",
  "Diagnostic",
  "Install",
  "Emergency",
  "Warranty",
];

const windows = ["7–9 AM", "9–11 AM", "12–2 PM", "2–4 PM", "4–6 PM"];

export function JobNew() {
  const navigate = useNavigate();
  const [service, setService] = useState("AC repair");
  const [win, setWin] = useState("9–11 AM");
  const [tech, setTech] = useState("Marcus R.");
  const [brief, setBrief] = useState("");

  return (
    <>
      <PageHeader
        eyebrow="New job · J-24091"
        title={
          <>
            Book a job for <em>Sarah Marks.</em>
          </>
        }
        subtitle="The dispatcher pre-filled what it heard on the call. Confirm and we lock in the slot."
        actions={
          <>
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button
              variant="accent"
              size="sm"
              trailingArrow
              onClick={() => navigate("/operations/jobs/J-24091")}
            >
              Confirm &amp; book
            </Button>
          </>
        }
      />

      <div className="dash-grid">
        <div className="stack stack--lg">
          <Card>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span
                style={{
                  width: 44,
                  height: 44,
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
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 500,
                    color: "var(--ink)",
                    fontSize: 15,
                  }}
                >
                  Sarah Marks
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 12, color: "var(--text-mute)", marginTop: 2 }}
                >
                  1204 E Oak · Phoenix · 5 jobs · VIP
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Change
              </Button>
            </div>
          </Card>

          <div>
            <Eyebrow style={{ marginBottom: 10 }}>Service type</Eyebrow>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: service === s ? "var(--ink)" : "var(--bone-100)",
                    color: service === s ? "var(--ivory)" : "var(--text-mute)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow style={{ marginBottom: 10 }}>What's happening?</Eyebrow>
            <Card style={{ padding: 14 }}>
              <textarea
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="AC stopped cooling around 2 PM. Sounds like the compressor is short-cycling."
                style={{
                  width: "100%",
                  minHeight: 80,
                  border: 0,
                  outline: 0,
                  resize: "none",
                  fontSize: "var(--fs-body)",
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  background: "transparent",
                  fontFamily: "var(--font-sans)",
                }}
              />
            </Card>
          </div>

          <Card>
            <div className="row row--between" style={{ marginBottom: 10 }}>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Wed · Apr 24
              </span>
              <span
                className="mono"
                style={{ fontSize: 12, color: "var(--signal-700)" }}
              >
                Change date →
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {windows.map((w) => (
                <button
                  key={w}
                  onClick={() => setWin(w)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: win === w ? "var(--ink)" : "var(--bone-100)",
                    color: win === w ? "var(--ivory)" : "var(--text-mute)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
            <p
              className="mono"
              style={{
                fontSize: 12,
                color: "var(--text-dim)",
                letterSpacing: "0.04em",
                marginTop: 12,
              }}
            >
              Customer's preferred window:{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                mornings 7–11 AM
              </b>
            </p>
          </Card>
        </div>

        <div className="stack stack--lg">
          <div>
            <Eyebrow style={{ marginBottom: 10 }}>Tech · Smart Dispatch</Eyebrow>
            <Card
              onClick={() => setTech("Marcus R.")}
              style={{
                cursor: "pointer",
                borderColor: tech === "Marcus R." ? "var(--ink)" : undefined,
                background: tech === "Marcus R." ? "var(--bone-50)" : undefined,
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    color: "var(--ivory)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  MR
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontWeight: 500, color: "var(--ink)", fontSize: 14 }}
                  >
                    Marcus R.
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: "var(--text-mute)", marginTop: 2 }}
                  >
                    12 min away · last visit Apr 12
                  </div>
                </div>
                <Badge tone="signal">Best fit</Badge>
              </div>
            </Card>
            <Card
              onClick={() => setTech("Elena C.")}
              style={{
                cursor: "pointer",
                borderColor: tech === "Elena C." ? "var(--ink)" : undefined,
                background: tech === "Elena C." ? "var(--bone-50)" : undefined,
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--slate-500)",
                    color: "var(--ivory)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  EC
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontWeight: 500, color: "var(--ink)", fontSize: 14 }}
                  >
                    Elena C.
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: "var(--text-mute)", marginTop: 2 }}
                  >
                    28 min away · diagnostic specialist
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <Eyebrow style={{ marginBottom: 10 }}>Estimated ticket</Eyebrow>
            <Row label="Diagnostic fee" value="$129" />
            <Row label="Likely repair (avg)" value="$420 – $720" />
            <Row label="Estimated total" value="$549 – $849" emphasis />
            <p
              className="mono"
              style={{
                fontSize: 12,
                color: "var(--text-dim)",
                letterSpacing: "0.04em",
                marginTop: 8,
              }}
            >
              Auto-approved up to $500. Above that goes to Sarah for sign-off.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

function Row({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className="row row--between"
      style={{
        padding: "10px 0",
        borderTop: emphasis ? "1px solid var(--border)" : undefined,
        marginTop: emphasis ? 6 : 0,
      }}
    >
      <span
        style={{
          fontSize: emphasis ? 14 : 13,
          color: emphasis ? "var(--ink)" : "var(--text-mute)",
          fontWeight: emphasis ? 500 : 400,
        }}
      >
        {label}
      </span>
      <span
        className="mono"
        style={{
          fontSize: emphasis ? 15 : 13,
          color: "var(--ink)",
          fontVariantNumeric: "tabular-nums",
          fontWeight: emphasis ? 500 : 400,
        }}
      >
        {value}
      </span>
    </div>
  );
}
