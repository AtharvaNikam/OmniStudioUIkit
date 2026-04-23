import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** When true, renders as a small inline wordmark (used inside headings). */
  inline?: boolean;
  /** Optional suffix segment rendered after `.studio` (e.g. ` · Operations`). */
  suffix?: string;
}

/**
 * Wordmark — `Omni.studio` lockup.
 *
 * "Omni" is Inter Tight 500 ink; ".studio" is Inter Tight 400 slate.
 * Suffix is rendered in slate 400 to echo the ".studio" weight.
 */
export function Wordmark({ inline, suffix, className, ...rest }: WordmarkProps) {
  return (
    <span
      className={clsx(
        inline ? "sidebar__wordmark" : "sidebar__wordmark",
        className
      )}
      style={inline ? { fontSize: "1rem" } : undefined}
      {...rest}
    >
      Omni<span className="studio">.studio</span>
      {suffix ? <span className="studio">{suffix}</span> : null}
    </span>
  );
}
