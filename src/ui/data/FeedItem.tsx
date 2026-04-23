import clsx from "clsx";
import type { ReactNode } from "react";

export type FeedTone = "default" | "signal" | "pulse" | "ink";

export interface FeedItemProps {
  /** The glyph/content inside the 28px circular dot. */
  icon: ReactNode;
  tone?: FeedTone;
  /** Rich body content — include <strong> for the actor and plain text for context. */
  children: ReactNode;
  /** Timestamp, mono-styled, right-aligned. */
  time: ReactNode;
}

/**
 * FeedItem — one row in an activity feed.
 *
 * Compose many inside <div className="feed">…</div>. Use tone to signal event type:
 *  - pulse  : something live / "cleared" (Stripe charge, booked call)
 *  - signal : amber — something amber worth noting (invoice nudge, review posted)
 *  - ink    : a system / emergency event (gas leak routing)
 *  - default: generic
 */
export function FeedItem({ icon, tone = "default", children, time }: FeedItemProps) {
  return (
    <div className="feed__item">
      <span
        className={clsx(
          "feed__dot",
          tone === "signal" && "feed__dot--signal",
          tone === "pulse" && "feed__dot--pulse",
          tone === "ink" && "feed__dot--ink"
        )}
      >
        {icon}
      </span>
      <div className="feed__body">{children}</div>
      <span className="feed__time">{time}</span>
    </div>
  );
}
