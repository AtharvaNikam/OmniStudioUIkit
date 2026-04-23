import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { BrandMark } from "../brand/BrandMark";
import { Wordmark } from "../brand/Wordmark";
import { WorkspaceSwitcher, type Workspace } from "./WorkspaceSwitcher";
import { UserPill } from "./UserPill";

export interface SidebarProps {
  /** Which workspace this sidebar belongs to (drives the switcher highlight). */
  workspace: Workspace;
  /** Path the logo links to (usually the workspace root). */
  homePath: string;
  /** The nav content (NavRow + NavSection composition). */
  children: ReactNode;
  /** User info for the pill at the bottom. */
  user: { initials: string; name: string; status?: string };
}

/**
 * Sidebar — the 264px vertical nav.
 *
 * Children is where you compose NavRow + NavSection. This keeps route config per-workspace
 * and avoids a giant config-driven blob. See studio/nav.tsx and operations/nav.tsx for examples.
 */
export function Sidebar({ workspace, homePath, children, user }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Primary">
      <WorkspaceSwitcher active={workspace} />

      <Link to={homePath} className="sidebar__brand">
        <span className="brand-mark">
          <BrandMark size={28} />
        </span>
        <Wordmark />
      </Link>

      <nav className="nav" aria-label="Main navigation">
        {children}
      </nav>

      <div className="sidebar__spacer" />
      <UserPill initials={user.initials} name={user.name} status={user.status} />
    </aside>
  );
}
