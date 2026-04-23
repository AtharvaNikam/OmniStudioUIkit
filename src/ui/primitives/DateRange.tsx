import clsx from "clsx";
import { useState } from "react";

export interface DateRangeProps {
  /** Label for each segment. */
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

/**
 * DateRange — ink-filled segmented control dedicated to time windows.
 *
 * Different from Segmented because the active state is the *inked* button, not a white pill.
 * This reads as a harder commitment — we're changing the dataset, not the view.
 */
export function DateRange({ options, defaultValue, value, onChange }: DateRangeProps) {
  const [inner, setInner] = useState(defaultValue ?? options[1] ?? options[0]);
  const active = value ?? inner;
  return (
    <div className="date-range">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={clsx(active === opt && "is-active")}
          onClick={() => {
            setInner(opt);
            onChange?.(opt);
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
