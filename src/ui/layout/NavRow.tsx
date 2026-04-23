import clsx from "clsx";
import { NavLink, type NavLinkProps } from "react-router-dom";
import type { ReactNode } from "react";

export interface NavRowProps {
  /** Route path the row links to. */
  to: string;
  /** Treat this as the "primary action" row (inverted ink pill, like `+ New …`). */
  primary?: boolean;
  /** Nest under a group (adds left padding to align with a section). */
  nested?: boolean;
  /** Leading icon (any ReactNode — typically a 18px SVG). */
  icon?: ReactNode;
  children: ReactNode;
  /** End match for active state (defaults to exact for the index path). */
  end?: NavLinkProps["end"];
}

/**
 * NavRow — one row in the sidebar.
 *
 * Uses `NavLink` so active state is driven by the router, not props. The primary variant
 * renders as an inverted ink pill — reserve it for "+ New …" creation actions.
 */
export function NavRow({ to, primary, nested, icon, children, end }: NavRowProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        clsx(
          "nav__row",
          primary && "nav__row--primary",
          nested && "nav__row--nested",
          isActive && "is-active"
        )
      }
    >
      {icon ? <span className="icon">{icon}</span> : null}
      {children}
    </NavLink>
  );
}
