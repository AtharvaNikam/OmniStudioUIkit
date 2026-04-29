import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  PageHeader,
  Eyebrow,
  Card,
  Badge,
  Button,
  KpiGrid,
  KpiCard,
  ChartBox,
  Segmented,
  FeedItem,
  Chip,
} from "@ui";

interface Customer {
  id: string;
  initials: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  since: string;
  jobs: number;
  ltv: string;
  ar: string;
  reviews: { count: number; avg: string };
  property: { type: string; year: string; sqft: string; equipment: string[] };
  preferences: {
    window: string;
    quiet: string;
    autoApprove: string;
    comms: string;
  };
}

const customers: Record<string, Customer> = {
  "sarah-marks": {
    id: "sarah-marks",
    initials: "SM",
    name: "Sarah Marks",
    address: "1204 E Oak St",
    city: "Phoenix, AZ · 85008",
    phone: "(602) 555-0142",
    email: "sarah@example.com",
    since: "2024",
    jobs: 5,
    ltv: "$4,820",
    ar: "$0",
    reviews: { count: 4, avg: "5.0★" },
    property: {
      type: "Single-family",
      year: "1996",
      sqft: "2,200",
      equipment: ["Central AC", "Gas furnace", "Smart thermostat"],
    },
    preferences: {
      window: "Mornings · 7–11 AM",
      quiet: "9 PM — 7 AM",
      autoApprove: "$500",
      comms: "Text · then call",
    },
  },
};

type Tab = "overview" | "jobs" | "pay" | "notes";

export function CustomerProfile() {
  const { id = "sarah-marks" } = useParams();
  const customer = customers[id] ?? customers["sarah-marks"];
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <>
      <PageHeader
        eyebrow={`Customer · since ${customer.since}`}
        title={customer.name}
        subtitle={`${customer.address} · ${customer.city}`}
        actions={
          <>
            <Button variant="ghost" size="sm">
              <a href={`tel:${customer.phone}`} style={{ color: "inherit" }}>
                Call
              </a>
            </Button>
            <Button variant="ghost" size="sm">
              <a href={`sms:${customer.phone}`} style={{ color: "inherit" }}>
                Text
              </a>
            </Button>
            <Link to={`/operations/jobs/new?customer=${customer.id}`}>
              <Button variant="accent" size="sm" trailingArrow>
                Book a job
              </Button>
            </Link>
          </>
        }
      />

      <Card style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <span
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--ink)",
            color: "var(--ivory)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 18,
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
        >
          {customer.initials}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "1.25rem",
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            {customer.name}
          </div>
          <div
            className="mono"
            style={{ fontSize: 12, color: "var(--text-mute)", marginTop: 4 }}
          >
            {customer.phone} · {customer.email}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Badge tone="signal">VIP</Badge>
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                alignSelf: "center",
              }}
            >
              {customer.jobs} jobs · {customer.ltv} LTV
            </span>
          </div>
        </div>
      </Card>

      <div style={{ marginTop: 24, marginBottom: 16 }}>
        <Segmented
          options={[
            { value: "overview", label: "Overview" },
            { value: "jobs", label: "Jobs", count: customer.jobs },
            { value: "pay", label: "Pay" },
            { value: "notes", label: "Notes" },
          ]}
          defaultValue={tab}
          onChange={(v) => setTab(v as Tab)}
          ariaLabel="Customer view"
        />
      </div>

      {tab === "overview" && <Overview customer={customer} />}
      {tab === "jobs" && <Jobs />}
      {tab === "pay" && <Payments />}
      {tab === "notes" && <Notes />}
    </>
  );
}

function Overview({ customer }: { customer: Customer }) {
  return (
    <div className="stack stack--lg">
      <Eyebrow>Lifetime</Eyebrow>
      <KpiGrid>
        <KpiCard
          label="Total billed"
          value={customer.ltv}
          delta={`▲ ${customer.jobs} jobs`}
          deltaTone="up"
        />
        <KpiCard label="Avg ticket" value="$964" delta="2024–26" deltaTone="flat" />
        <KpiCard
          label="A/R open"
          value={customer.ar}
          delta="paid up"
          deltaTone="up"
        />
        <KpiCard
          label="Reviews"
          value={`${customer.reviews.count}`}
          unit={customer.reviews.avg}
          delta='▲ "brilliant"'
          deltaTone="up"
        />
      </KpiGrid>

      <Eyebrow>Property</Eyebrow>
      <Card>
        <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
          <Map height={140} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              House
            </span>
            <div
              style={{
                fontWeight: 500,
                color: "var(--ink)",
                fontSize: 14,
                marginTop: 4,
              }}
            >
              {customer.property.type} · {customer.property.year}
            </div>
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--text-mute)", marginTop: 2 }}
            >
              {customer.property.sqft} sqft
            </div>
            <div
              style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}
            >
              {customer.property.equipment.map((e) => (
                <Chip key={e}>{e}</Chip>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <ChartBox title="Recent activity" right={<Badge tone="live">live</Badge>}>
        <div className="feed">
          <FeedItem icon={<span>✓</span>} tone="pulse" time="11s">
            <strong>Job booked</strong> · J-24081 · 7 AM tomorrow{" "}
            <span>· Marcus R.</span>
          </FeedItem>
          <FeedItem icon={<span>$</span>} tone="signal" time="9:08">
            <strong>INV-9841 cleared</strong> · $680 <span>· Stripe · today</span>
          </FeedItem>
          <FeedItem icon={<span>★</span>} time="2d">
            <strong>5★ review</strong> "Marcus was brilliant." <span>· Google</span>
          </FeedItem>
          <FeedItem icon={<span>●</span>} tone="ink" time="2d">
            <strong>Voice call</strong> · 4 min · Dispatcher booked{" "}
            <span>· J-24081</span>
          </FeedItem>
        </div>
      </ChartBox>

      <Eyebrow>Preferences</Eyebrow>
      <Card>
        <PrefRow label="Best window" value={customer.preferences.window} />
        <PrefRow label="Quiet hours" value={customer.preferences.quiet} />
        <PrefRow
          label="Auto-approve up to"
          value={customer.preferences.autoApprove}
        />
        <PrefRow label="Comms" value={customer.preferences.comms} last />
      </Card>
    </div>
  );
}

function PrefRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className="row row--between"
      style={{
        padding: "10px 0",
        borderBottom: last ? "none" : "1px solid var(--border)",
      }}
    >
      <span style={{ fontSize: 13, color: "var(--text-mute)" }}>{label}</span>
      <span
        className="mono"
        style={{ fontSize: 12, color: "var(--ink)", fontWeight: 500 }}
      >
        {value}
      </span>
    </div>
  );
}

function Jobs() {
  const jobs = [
    { id: "J-24081", date: "Apr 24, 2026", svc: "AC repair · capacitor", tech: "Marcus R.", total: "$358", state: "Booked", tone: "signal" as const },
    { id: "J-23981", date: "Mar 14, 2026", svc: "Maintenance · spring tune", tech: "Marcus R.", total: "$129", state: "Paid", tone: "default" as const },
    { id: "J-23612", date: "Sep 02, 2025", svc: "Diagnostic · refrigerant", tech: "Elena C.", total: "$420", state: "Paid", tone: "default" as const },
    { id: "J-23110", date: "May 18, 2025", svc: "AC install · 3.5-ton split", tech: "Dylan S.", total: "$3,180", state: "Paid", tone: "default" as const },
    { id: "J-22240", date: "Aug 04, 2024", svc: "Emergency · no cool", tech: "Marcus R.", total: "$733", state: "Paid", tone: "default" as const },
  ];
  return (
    <Card>
      <div className="feed" style={{ marginTop: 0 }}>
        {jobs.map((j) => (
          <Link
            key={j.id}
            to={`/operations/jobs/${j.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: 14,
              padding: "14px 0",
              borderBottom: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--bone-100)",
                border: "1px solid var(--border)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-mute)",
              }}
            >
              {j.id.slice(-3)}
            </span>
            <div>
              <div style={{ fontWeight: 500, color: "var(--ink)", fontSize: 14 }}>
                {j.svc}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--text-mute)",
                  marginTop: 2,
                }}
              >
                {j.date} · {j.tech} · {j.id}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                className="mono"
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  fontVariantNumeric: "tabular-nums",
                  fontWeight: 500,
                }}
              >
                {j.total}
              </div>
              <Badge tone={j.tone}>{j.state}</Badge>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

function Payments() {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="row row--between">
          <span style={{ color: "var(--text-mute)", fontSize: 14 }}>
            Lifetime billed
          </span>
          <span
            className="mono"
            style={{
              fontSize: 18,
              color: "var(--ink)",
              fontWeight: 500,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            $4,820.00
          </span>
        </div>
        <div className="row row--between">
          <span style={{ color: "var(--text-mute)", fontSize: 14 }}>
            Open A/R
          </span>
          <span
            className="mono"
            style={{
              fontSize: 18,
              color: "var(--ink)",
              fontWeight: 500,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            $0.00
          </span>
        </div>
        <div className="row row--between">
          <span style={{ color: "var(--text-mute)", fontSize: 14 }}>
            Default payment
          </span>
          <span
            className="mono"
            style={{ fontSize: 13, color: "var(--ink)", letterSpacing: "0.04em" }}
          >
            Apple Pay · ending 8842
          </span>
        </div>
      </div>
    </Card>
  );
}

function Notes() {
  return (
    <Card>
      <Eyebrow style={{ marginBottom: 8 }}>Operator notes</Eyebrow>
      <p style={{ color: "var(--text-mute)", lineHeight: 1.6 }}>
        Big dog in the backyard. Side gate code <b>1204</b>. AC unit on the roof
        — ladder needed. Spouse Mark works from home, prefers we text before
        knocking.
      </p>
    </Card>
  );
}

function Map({ height = 200 }: { height?: number }) {
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        height,
        background: "linear-gradient(180deg, #f5efe1 0%, #e8e2d3 100%)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 200 140"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <path
          d="M0 50 Q 60 60 100 55 T 200 65"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M0 100 Q 60 90 100 95 T 200 105"
          stroke="rgba(10,14,18,0.08)"
          strokeWidth={6}
          fill="none"
        />
        <path
          d="M70 0 L 80 140"
          stroke="rgba(10,14,18,0.04)"
          strokeWidth={3}
          fill="none"
        />
        <rect
          x="20"
          y="70"
          width="50"
          height="20"
          rx="3"
          fill="rgba(255,255,255,0.5)"
          stroke="rgba(10,14,18,0.04)"
        />
        <rect
          x="100"
          y="75"
          width="80"
          height="22"
          rx="3"
          fill="rgba(255,255,255,0.5)"
          stroke="rgba(10,14,18,0.04)"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          left: "calc(50% - 9px)",
          top: "calc(50% - 9px)",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "var(--signal)",
          boxShadow:
            "0 0 0 6px rgba(217,119,6,0.22), 0 4px 12px rgba(217,119,6,0.4)",
        }}
      />
    </div>
  );
}
