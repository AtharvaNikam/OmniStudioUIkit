import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/**
 * Eyebrow — the signature mono-uppercase label with a 24px horizontal rule before it.
 *
 * Pair with every page-title and section heading. Never skip this — it's the beat that
 * carries the editorial voice across every screen.
 */
export function Eyebrow({ className, children, ...rest }: EyebrowProps) {
  return (
    <span className={clsx("eyebrow", className)} {...rest}>
      {children}
    </span>
  );
}
