import clsx from "clsx";
import { useState, type ReactNode } from "react";

export interface SegmentedOption {
  /** Stable identifier. */
  value: string;
  label: ReactNode;
  /** Optional count chip shown inside the segment. */
  count?: number | string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  /** Uncontrolled default. */
  defaultValue?: string;
  /** Controlled value. */
  value?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
}

/**
 * Segmented — mono-uppercase pill group. Picks one of N. Active gets a white paper surface.
 *
 * Use for view switchers (e.g. "Active / Paused / Drafts"). For date ranges, use DateRange.
 */
export function Segmented({ options, defaultValue, value, onChange, ariaLabel }: SegmentedProps) {
  const [inner, setInner] = useState(defaultValue ?? options[0]?.value);
  const active = value ?? inner;
  return (
    <div className="segmented" role="tablist" aria-label={ariaLabel}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={active === opt.value}
          className={clsx("segmented__option", active === opt.value && "is-active")}
          onClick={() => {
            setInner(opt.value);
            onChange?.(opt.value);
          }}
        >
          {opt.label}
          {opt.count !== undefined && <span className="segmented__count">{opt.count}</span>}
        </button>
      ))}
    </div>
  );
}
