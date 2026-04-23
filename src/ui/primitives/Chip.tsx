import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

/**
 * Chip — a small info chip used inside composers and cards.
 *
 * Uses the same visual shape as `.composer__chip` — bone fill with subtle border.
 * Prefer Badge for *status*; Chip for *context tags*.
 */
export function Chip({ className, children, ...rest }: ChipProps) {
  return (
    <span className={clsx("composer__chip", className)} {...rest}>
      {children}
    </span>
  );
}
