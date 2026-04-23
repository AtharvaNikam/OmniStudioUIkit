import { PageHeader, Eyebrow, Card } from "@ui";

export interface PlaceholderProps {
  eyebrow: string;
  title: string;
  note?: string;
}

/**
 * Placeholder — used for routes that haven't been ported to React yet.
 *
 * Directs the reader to the SKILL.md + the HTML reference in ../prototype/ or ../operations/.
 */
export function Placeholder({ eyebrow, title, note }: PlaceholderProps) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={<>{title} <em>— coming up next.</em></>}
        subtitle="This page hasn't been ported to React yet. The composition recipe is in the UI kit skill."
      />
      <Card style={{ padding: 28, maxWidth: 720 }}>
        <Eyebrow style={{ marginBottom: 12, display: "inline-flex" }}>Where to look</Eyebrow>
        <p style={{ color: "var(--text-mute)", lineHeight: 1.6, margin: 0 }}>
          The HTML reference for this page lives under <code>prototype/</code> or{" "}
          <code>operations/</code> in the workspace root. The React components that implement every
          pattern on that page are already available from <code>@ui</code>. See the skill file for
          the exact composition.
        </p>
        {note ? (
          <p style={{ marginTop: 12, color: "var(--text-mute)", fontSize: "var(--fs-micro)" }}>
            {note}
          </p>
        ) : null}
      </Card>
    </>
  );
}
