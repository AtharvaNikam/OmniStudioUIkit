import { BrandMark } from "../brand/BrandMark";

export interface TitleBarProps {
  /** Optional suffix after `Omni.studio` (e.g. ` · Operations`). */
  suffix?: string;
}

/**
 * TitleBar — the 32px desktop-window chrome at the top of the viewport.
 *
 * Wordmark + dummy window controls. Cosmetic — communicates "this is a native-feeling app".
 */
export function TitleBar({ suffix }: TitleBarProps) {
  return (
    <div className="titlebar">
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
