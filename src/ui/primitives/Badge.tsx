import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "default" | "live" | "signal" | "paused" | "muted";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone — pick based on state, not color. */
  tone?: BadgeTone;
  children?: ReactNode;
}

/**
 * Badge — mono uppercase pill used for status.
 *
 * Tone rules:
 *  - `live`   : something is actively routing/running right now (pulsing emerald dot).
 *               Use this for agents on-call, lines taking traffic, payments clearing.
 *  - `signal` : amber — "available", "recommended", "underperform".
 *  - `paused` : slate — staging / paused / drafts.
 *  - `muted`  : faint gray — neutral tags.
 *  - default  : soft gray fill, all-purpose.
 */
export function Badge({ tone = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={clsx(
        "badge",
        tone === "live" && "badge--live",
        tone === "signal" && "badge--signal",
        tone === "paused" && "badge--paused",
        tone === "muted" && "badge--muted",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
