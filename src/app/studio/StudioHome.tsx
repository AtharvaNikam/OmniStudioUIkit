import { Eyebrow, Composer, Badge, Card } from "@ui";
import { BrandMark } from "@ui";

/**
 * Studio home — the "New Brief" page. Hero composer with 3 suggestion cards.
 *
 * This is how to compose the hero-chat layout: outer <div className="hero-chat">,
 * BrandMark, wordmark, tagline, Composer, then a Suggestions section.
 */
export function StudioHome() {
  return (
    <div className="hero-chat">
      <span className="hero-chat__mark">
        <BrandMark size={56} />
      </span>
      <Eyebrow className="hero-chat__eyebrow">After-hours team · Live</Eyebrow>
      <div className="hero-chat__name">
        Omni<span className="studio">.studio</span>
      </div>
      <p className="hero-chat__tag">
        Brief the team. We'll answer the call, book the job, chase the invoice, and earn the
        five-star review — <em>while you sleep.</em>
      </p>

      <Composer
        placeholder="Ask the studio… (@ to reference jobs, customers, or invoices)"
        contextChip="Phoenix HVAC · ServiceTitan"
        selectors={[
          <span className="composer__select" key="perm">
            Owner access
          </span>,
          <span className="composer__select" key="mode">
            Auto-route
          </span>,
        ]}
      />

      <section
        style={{ marginTop: 40, width: "min(960px, 100%)" }}
        aria-label="Playbook suggestions"
      >
        <header style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <Eyebrow>Pick a playbook</Eyebrow>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          <Card hover style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <Badge tone="live">live</Badge>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Voice &amp; SMS
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.0625rem", letterSpacing: "-0.015em", margin: 0 }}>
              Triage tonight's after-hours calls
            </h3>
            <p style={{ fontSize: "var(--fs-micro)", color: "var(--text-mute)", lineHeight: 1.5, margin: "4px 0 0" }}>
              Answer inbound, classify emergencies, book bookable calls, and text the on-call tech
              when it's real.
            </p>
          </Card>

          <Card hover style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <Badge>Billing</Badge>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Invoice Concierge
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.0625rem", letterSpacing: "-0.015em", margin: 0 }}>
              Recover invoices past 30 days
            </h3>
            <p style={{ fontSize: "var(--fs-micro)", color: "var(--text-mute)", lineHeight: 1.5, margin: "4px 0 0" }}>
              Three-touch reminder sequence, tone escalates at day 45. Stops the moment payment
              clears.
            </p>
          </Card>

          <Card hover style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <Badge>Reputation</Badge>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Review Concierge
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.0625rem", letterSpacing: "-0.015em", margin: 0 }}>
              Ask yesterday's customers for a review
            </h3>
            <p style={{ fontSize: "var(--fs-micro)", color: "var(--text-mute)", lineHeight: 1.5, margin: "4px 0 0" }}>
              Target only 5-star-likely jobs. Route &lt;3★ feedback to you within 15 minutes.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
