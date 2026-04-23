import clsx from "clsx";
import { Link } from "react-router-dom";

export type Workspace = "studio" | "operations";

export interface WorkspaceSwitcherProps {
  /** Which workspace is active — dictates which option is non-linked + inked. */
  active: Workspace;
}

/**
 * WorkspaceSwitcher — pinned to the top of every sidebar.
 *
 * Two options: `Studio` (agent console) and `Operations` (business app).
 * Active side is a plain `<a>` (no navigation), inactive is a real router Link.
 *
 * Paths:
 *   studio      → /studio
 *   operations  → /operations
 */
export function WorkspaceSwitcher({ active }: WorkspaceSwitcherProps) {
  return (
    <div className="workspace-switch">
      <span className="workspace-switch__label">Workspace</span>
      <div className="workspace-switch__track">
        {active === "studio" ? (
          <span className={clsx("workspace-switch__opt", "is-active")}>Studio</span>
        ) : (
          <Link to="/studio" className="workspace-switch__opt">
            Studio
          </Link>
        )}
        {active === "operations" ? (
          <span className={clsx("workspace-switch__opt", "is-active")}>Operations</span>
        ) : (
          <Link to="/operations" className="workspace-switch__opt">
            Operations
          </Link>
        )}
      </div>
    </div>
  );
}
