import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Icon rendered on the leading edge (typically a search glyph). */
  leading?: ReactNode;
  /** Width style — use `wide` to stretch, else a min-width is applied via inline style. */
  style?: InputHTMLAttributes<HTMLInputElement>["style"];
  wrapClassName?: string;
}

/**
 * Input — pill-shaped text/search input with an optional leading icon.
 *
 * The wrapper `.input` shifts its border to `--ink` and focus-visible lights up on focus-within.
 */
export function Input({ leading, wrapClassName, style, className, ...rest }: InputProps) {
  return (
    <label className={clsx("input", wrapClassName)} style={style}>
      {leading && <span className="icon">{leading}</span>}
      <input className={className} {...rest} />
    </label>
  );
}
