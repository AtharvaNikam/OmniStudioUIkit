import {
  PageHeader,
  DateRange,
  Button,
  KpiGrid,
  KpiCard,
  LineChart,
  ChartBox,
  BarChart,
  FeedItem,
  DataTable,
  CustomerCell,
  Badge,
  type DataColumn,
} from "@ui";

interface Job {
  id: string;
  customer: { initials: string; name: string; sub: string; tone: "ink" | "bone" | "slate" | "signal" };
  tech: string;
  window: string;
  ticket: string;
  status: { tone: "live" | "signal" | "default" | "paused"; label: string };
}

const jobs: Job[] = [
  { id: "J-24081", customer: { initials: "SM", name: "Sarah M.", sub: "1204 E Oak · Phoenix", tone: "ink" }, tech: "Marcus R.", window: "07:00 – 09:00", ticket: "$680", status: { tone: "live", label: "on truck" } },
  { id: "J-24082", customer: { initials: "RP", name: "Ray Patel", sub: "Paradise Valley", tone: "slate" }, tech: "Elena C.", window: "09:30 – 11:30", ticket: "$1,240", status: { tone: "signal", label: "on route" } },
  { id: "J-24083", customer: { initials: "JH", name: "Jon Howe", sub: "Gilbert", tone: "bone" }, tech: "Marcus R.", window: "13:00 – 15:00", ticket: "$420", status: { tone: "default", label: "scheduled" } },
  { id: "J-24084", customer: { initials: "MN", name: "Mia Nguyen", sub: "Scottsdale", tone: "signal" }, tech: "Dylan S.", window: "14:30 – 16:30", ticket: "$3,180", status: { tone: "default", label: "install" } },
  { id: "J-24085", customer: { initials: "AO", name: "Ana Ortiz", sub: "Tempe", tone: "bone" }, tech: "—", window: "16:30 – 18:00", ticket: "$240", status: { tone: "paused", label: "unassigned" } },
];

const jobColumns: DataColumn<Job>[] = [
  { key: "id", header: "Job", render: (r) => r.id, mono: true },
  {
    key: "customer",
    header: "Customer",
    render: (r) => <CustomerCell initials={r.customer.initials} name={r.customer.name} sub={r.customer.sub} avatarTone={r.customer.tone} />,
  },
  { key: "tech", header: "Tech", render: (r) => r.tech },
  { key: "window", header: "Window", render: (r) => r.window, mono: true },
  { key: "ticket", header: "Ticket", render: (r) => r.ticket, align: "right" },
  { key: "status", header: "Status", render: (r) => <Badge tone={r.status.tone}>{r.status.label}</Badge> },
];

/**
 * Operations dashboard — demonstrates the full data kit:
 *  KpiGrid → LineChart → BarChart → DataTable (main column)
 *  BarChart (top techs) + Feed (live activity) (side rail)
 */
export function OperationsDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Wednesday · April 23, 2026"
        title={
          <>
            Revenue &amp; <em>the pulse of the shop.</em>
          </>
        }
        subtitle="Today's board, this week's revenue, this month's A/R. Every lever you can still pull before close."
        actions={
          <>
            <DateRange options={["24h", "7d", "30d", "QTD", "YTD"]} defaultValue="7d" />
            <Button variant="accent" size="sm" trailingArrow>
              Export report
            </Button>
          </>
        }
      />

      <KpiGrid>
        <KpiCard
          label="Revenue · 7d"
          value="$148,240"
          unit=".22"
          delta="▲ 18.4% vs last 7d"
          deltaTone="up"
          spark={[28, 24, 26, 18, 22, 16, 18, 10, 14, 8, 6]}
          sparkDirection="amber"
        />
        <KpiCard
          label="Booked rate"
          value="82"
          unit="%"
          delta="▲ 3 pts vs target"
          deltaTone="up"
          spark={[20, 22, 18, 18, 14, 16, 12, 14, 10, 12, 8]}
        />
        <KpiCard
          label="Open A/R"
          value="$42,108"
          delta="▼ $6.4k · concierge at work"
          deltaTone="down"
          spark={[8, 10, 12, 14, 14, 18, 18, 22, 24, 26, 28]}
        />
        <KpiCard
          label="Reviews · 30d"
          value="+38"
          unit="4.9★"
          delta="▲ 11 vs last 30d"
          deltaTone="up"
          spark={[30, 28, 22, 20, 20, 18, 14, 10, 12, 8, 4]}
          sparkDirection="amber"
        />
      </KpiGrid>

      <div className="dash-grid">
        <div className="stack stack--lg">
          <LineChart
            title="Revenue · last 30 days"
            caption="Daily booked revenue against the prior 30d baseline."
            current={[30, 36, 42, 40, 48, 44, 52, 58, 60, 56, 64, 68, 70, 66, 74, 72, 78, 82, 80, 84, 88, 86, 92, 96, 94, 98, 102, 104, 108, 112]}
            prior={[30, 32, 34, 32, 34, 36, 38, 36, 38, 40, 40, 42, 44, 42, 46, 44, 46, 48, 50, 48, 52, 50, 54, 56, 54, 58, 56, 60, 62, 60]}
            xLabels={["Mar 24", "Apr 05", "Apr 14", "Apr 22"]}
          />

          <ChartBox title="Service mix · last 30 days" caption="Revenue share by job type.">
            <BarChart
              rows={[
                { label: "AC Repair", percent: 0.82, value: "$48,210" },
                { label: "Maintenance", percent: 0.58, value: "$34,090" },
                { label: "Install", percent: 0.46, value: "$27,430", tone: "amber" },
                { label: "Diagnostic", percent: 0.3, value: "$17,820", tone: "slate" },
                { label: "Emergency", percent: 0.24, value: "$14,140", tone: "slate" },
                { label: "Warranty", percent: 0.12, value: "$6,550", tone: "slate" },
              ]}
            />
          </ChartBox>

          <ChartBox
            title="Today's board"
            caption="Jobs still to close today — tap a row to open dispatch."
            right={
              <Button variant="ghost" size="sm" trailingArrow>
                Open dispatch
              </Button>
            }
          >
            <DataTable<Job> columns={jobColumns} rows={jobs} />
          </ChartBox>
        </div>

        <div className="stack stack--lg">
          <ChartBox title="Top techs · MTD" caption="Hours billed · avg ticket.">
            <BarChart
              rows={[
                { label: "Marcus R.", percent: 0.94, value: "142h · $612" },
                { label: "Elena C.", percent: 0.81, value: "124h · $548" },
                { label: "Dylan S.", percent: 0.68, value: "106h · $492", tone: "amber" },
                { label: "Priya V.", percent: 0.52, value: "84h · $428", tone: "slate" },
              ]}
            />
          </ChartBox>

          <ChartBox
            title="Live activity"
            caption="Every agent event from the last 30 min."
            right={<Badge tone="live">live</Badge>}
          >
            <div className="feed">
              <FeedItem icon={<span>✓</span>} tone="pulse" time="11s">
                <strong>Dispatcher</strong> booked J-24091 · Sarah M. · 7 AM slot{" "}
                <span>· $680 · Marcus</span>
              </FeedItem>
              <FeedItem icon={<span>$</span>} tone="signal" time="2m">
                <strong>Stripe</strong> charge cleared · INV-9842 · $1,120 <span>· R. Patel</span>
              </FeedItem>
              <FeedItem icon={<span>★</span>} time="6m">
                <strong>5★ review</strong> posted · "Marcus was brilliant."{" "}
                <span>· Google Reviews</span>
              </FeedItem>
              <FeedItem icon={<span>!</span>} tone="ink" time="14m">
                <strong>Emergency triage</strong> routed gas-leak call to Elena · ETA 14m{" "}
                <span>· 1821 W Caron</span>
              </FeedItem>
              <FeedItem icon={<span>§</span>} tone="signal" time="22m">
                <strong>Invoice Concierge</strong> day-45 nudge sent · INV-9811 · $2,480{" "}
                <span>· J. Howe</span>
              </FeedItem>
            </div>
          </ChartBox>
        </div>
      </div>
    </>
  );
}
