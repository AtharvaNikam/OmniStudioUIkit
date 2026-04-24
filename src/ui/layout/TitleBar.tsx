import { BrandMark } from "../brand/BrandMark";

export interface TitleBarProps {
  /** Optional suffix after `Omni.studio` (e.g. ` · Operations`). */
  suffix?: string;
  /** When provided, a hamburger button is shown on the left (mobile only). */
  onMenuClick?: () => void;
  /** Whether the mobile drawer is currently open — drives the aria state. */
  menuOpen?: boolean;
}

/**
 * TitleBar — the 32px desktop-window chrome at the top of the viewport.
 *
 * Wordmark + dummy window controls. Cosmetic — communicates "this is a native-feeling app".
 * On mobile, the fake window controls are hidden and a hamburger button replaces them on the
 * left (only when `onMenuClick` is provided).
 */
export function TitleBar({ suffix, onMenuClick, menuOpen }: TitleBarProps) {
  return (
    <div className="titlebar">
      {onMenuClick ? (
        <button
          type="button"
          className="titlebar__menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ?? false}
          onClick={onMenuClick}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      ) : null}
      <div className="titlebar__brand">
        <BrandMark size={16} />
        <span>
          Omni<span style={{ color: "var(--slate-400)" }}>.studio{suffix ?? ""}</span>
        </span>
      </div>
      <div className="titlebar__spacer" />
      <div className="titlebar__controls" aria-hidden="true">
        <span>—</span>
        <span>▢</span>
        <span>✕</span>
      </div>
    </div>
  );
}
