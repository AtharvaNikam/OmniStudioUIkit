import type { ReactNode } from "react";

export interface UserPillProps {
  /** 2-letter avatar initials. */
  initials: string;
  /** Display name (truncates with ellipsis). */
  name: string;
  /** Right-side chip (e.g. "Pilot"). Renders in amber pill. Omit to hide. */
  status?: string;
  /** Called when the caret is clicked (for opening an account menu). */
  onOpen?: () => void;
  /** Replace the right chip entirely. */
  right?: ReactNode;
}

/**
 * UserPill — the footer of the sidebar. Avatar + name + status chip + caret.
 *
 * Avatar has a pulsing emerald dot in the bottom-right — the visual "I'm online".
 */
export function UserPill({ initials, name, status, onOpen, right }: UserPillProps) {
  return (
    <div className="user-pill">
      <span className="user-pill__avatar">{initials}</span>
      <span className="user-pill__name">{name}</span>
      {right ? right : status ? <span className="upgrade">{status}</span> : null}
      <button
        type="button"
        className="user-pill__caret"
        onClick={onOpen}
        aria-label="Account menu"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
