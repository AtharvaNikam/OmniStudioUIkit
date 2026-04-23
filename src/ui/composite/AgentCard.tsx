import type { ReactNode } from "react";
import { Card } from "../primitives/Card";
import { Badge, type BadgeTone } from "../primitives/Badge";

export interface AgentCardProps {
  /** Agent name (display type). */
  name: ReactNode;
  /** Sub-label / slug (mono uppercase). */
  slug: ReactNode;
  /** Description — 2–3 lines. */
  description: ReactNode;
  /** Footer left text, often a mono stat. Use <b> for bold highlight. */
  stat?: ReactNode;
  /** Footer right button label — defaults to "Open". */
  actionLabel?: ReactNode;
  onAction?: () => void;
  /** Icon node (SVG) displayed inside the 44px round mark. */
  mark: ReactNode;
  /** Status badge tone. */
  statusTone?: BadgeTone;
  /** Status badge label. */
  statusLabel?: string;
}

/**
 * AgentCard — the square card for one AI agent in a roster.
 *
 * Header row = avatar + name/slug + status badge.
 * Body = description.
 * Footer = stat + "Open" pill.
 */
export function AgentCard({
  name,
  slug,
  description,
  stat,
  actionLabel = "Open",
  onAction,
  mark,
  statusTone = "default",
  statusLabel,
}: AgentCardProps) {
  return (
    <Card hover className="agent-card">
      <div className="agent-card__header">
        <div className="agent-card__headstack">
          <span className="agent-card__mark">{mark}</span>
          <div>
            <h3 className="agent-card__name">{name}</h3>
            <span className="agent-card__slug">{slug}</span>
          </div>
        </div>
        {statusLabel ? <Badge tone={statusTone}>{statusLabel}</Badge> : null}
      </div>
      <p className="agent-card__desc">{description}</p>
      <div className="agent-card__footer">
        {stat ? <span className="agent-card__stat">{stat}</span> : <span />}
        {onAction || actionLabel ? (
          <button type="button" className="agent-card__play" onClick={onAction}>
            {actionLabel}
          </button>
        ) : null}
      </div>
    </Card>
  );
}
