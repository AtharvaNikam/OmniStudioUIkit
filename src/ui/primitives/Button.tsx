import clsx from "clsx";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "accent" | "ghost";
export type ButtonSize = "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. `accent` is reserved for the single primary CTA of the page. */
  variant?: ButtonVariant;
  /** Compact button. */
  size?: ButtonSize;
  /** Stretch to fill the parent. */
  wide?: boolean;
  /** Shows a `→` that slides 3px right on hover. */
  trailingArrow?: boolean;
  /** Optional leading icon (SVG node). */
  leading?: ReactNode;
  children?: ReactNode;
}

/**
 * Button — the one button in the design system.
 *
 * Variants map to CSS classes from components.css:
 *  - primary: dark ink, ivory text (default for most actions)
 *  - accent : amber with glow shadow (ONE per page — the dominant action)
 *  - ghost  : transparent with dark border, inverts on hover
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", wide, trailingArrow, leading, className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        "btn",
        variant === "primary" && "btn--primary",
        variant === "accent" && "btn--accent",
        variant === "ghost" && "btn--ghost",
        size === "sm" && "btn--small",
        wide && "btn--wide",
        className
      )}
      {...rest}
    >
      {leading}
      {children}
      {trailingArrow && <span className="arrow">→</span>}
    </button>
  );
});
