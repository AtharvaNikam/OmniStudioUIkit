import { PageHeader, Segmented, Input, AgentCard, BrandMark } from "@ui";

/**
 * Studio agents page — grid of the 6 AI agents with statuses.
 *
 * Uses PageHeader + AgentCard. The grid uses the global .grid.grid--3 helper.
 */
export function StudioAgents() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title={
          <>
            Your AI <em>roster.</em>
          </>
        }
        subtitle="Six agents working one shop, one voice, one customer history. Toggle them on for the hours you actually need coverage."
        actions={
          <>
            <Segmented
              options={[
                { value: "active", label: "Active", count: 4 },
                { value: "paused", label: "Paused", count: 2 },
                { value: "drafts", label: "Drafts" },
              ]}
              defaultValue="active"
              ariaLabel="Agent view"
            />
            <Input
              placeholder="Search the roster…"
              style={{ minWidth: 260 }}
              leading={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              }
            />
          </>
        }
      />

      <div className="grid grid--3">
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Dispatcher"
          slug="Customer-facing · Voice + SMS"
          description="Answers every call under a second, loads history from ServiceTitan, triages emergencies, and books the first morning slot."
          stat={<><b>94%</b> capture · <b>42</b> calls today</>}
          statusTone="live"
          statusLabel="live"
        />
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Invoice Concierge"
          slug="Accounts receivable"
          description="Three-touch reminders that escalate in tone over 30 days. Closes 38% of past-60 A/R in month one."
          stat={<><b>$12.4k</b> recovered · 30 days</>}
          statusTone="live"
          statusLabel="live"
        />
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Review Concierge"
          slug="Reputation · Reviews"
          description="Sends review requests 24h post-job to five-star-likely customers only. Routes anything under 3★ to you in 15 minutes."
          stat={<><b>4.9★</b> average · +38 reviews</>}
          statusTone="live"
          statusLabel="live"
        />
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Emergency Triage"
          slug="Safety-first routing"
          description="Detects gas leaks, flood, heat-stroke risk. Routes on-call tech in under 60 seconds."
          stat={<><b>&lt;47s</b> avg · <b>3</b> routes this week</>}
          statusTone="live"
          statusLabel="live"
        />
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Estimator"
          slug="Lead nurture · Estimate follow-up"
          description="Five-touch sequence across 10 days for every unsold estimate. Closes 20–30% of otherwise-cold leads."
          stat={<><b>18</b> warm leads · paused 3d</>}
          statusTone="paused"
          statusLabel="paused"
        />
        <AgentCard
          mark={<BrandMark size={22} rings={false} />}
          name="Smart Dispatch"
          slug="Scheduling · Tech matching"
          description="Scores every tech against every job — skills, drive time, schedule fit. Recommends one assignment."
          stat={<><b>Staging</b> · 14 suggestions queued</>}
          statusTone="paused"
          statusLabel="staging"
        />
      </div>
    </>
  );
}
