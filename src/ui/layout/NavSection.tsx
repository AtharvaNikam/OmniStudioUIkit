import type { ReactNode } from "react";

export interface NavSectionProps {
  /** Mono-uppercase label. */
  children: ReactNode;
  /** Optional right-aligned chip (e.g. "Beta"). */
  badge?: ReactNode;
}

/**
 * NavSection — divider label in the sidebar.
 *
 * Rendered as mono uppercase with a 16px leading rule. Sibling NavRows appear underneath.
 */
export function NavSection({ children, badge }: NavSectionProps) {
  return (
    <div className="nav__section">
      <span>{children}</span>
      {badge ? <span className="badge-chip">{badge}</span> : null}
    </div>
  );
}
