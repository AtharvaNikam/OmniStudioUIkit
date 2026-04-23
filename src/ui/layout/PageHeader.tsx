import type { ReactNode } from "react";
import { Eyebrow } from "../primitives/Eyebrow";

export interface PageHeaderProps {
  /** Mono-uppercase eyebrow shown above the title. */
  eyebrow?: ReactNode;
  /** The title itself — you can include `<em>…</em>` for the italic-slate segment. */
  title: ReactNode;
  /** One-line subtitle. */
  subtitle?: ReactNode;
  /** Fine-print note rendered in a dimmer second line below the subtitle. */
  footnote?: ReactNode;
  /** Right-side action cluster (buttons, inputs, segmented controls). */
  actions?: ReactNode;
}

/**
 * PageHeader — eyebrow + display title (with italic-slate `<em>`) + subtitle + actions.
 *
 * The 24px horizontal rule on the eyebrow is the visual beat that opens every page.
 * Always include an eyebrow — the design system treats it as required furniture.
 */
export function PageHeader({ eyebrow, title, subtitle, footnote, actions }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        {eyebrow ? <Eyebrow className="page-eyebrow">{eyebrow}</Eyebrow> : null}
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        {footnote ? (
          <p
            className="page-subtitle"
            style={{
              fontSize: "var(--fs-micro)",
              color: "var(--text-dim)",
              marginTop: 10,
              maxWidth: "76ch",
            }}
          >
            {footnote}
          </p>
        ) : null}
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </header>
  );
}
