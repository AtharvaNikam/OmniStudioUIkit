import clsx from "clsx";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Surface variant. `bone` for subdued sections, `dark` for the inverted hero card. */
  variant?: "paper" | "bone" | "dark";
  /** Adds the hover lift (`translateY(-2px)` + shadow). Use for clickable cards. */
  hover?: boolean;
  /** Render as another element (e.g. `button`, `article`). Default is `div`. */
  as?: "div" | "article" | "section" | "button" | "a";
  children?: ReactNode;
}

/**
 * Card — the all-purpose surface.
 *
 * 20px radius, 1.75rem padding, 1px border. Use `hover` whenever the whole card is clickable.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "paper", hover, as = "div", className, children, ...rest },
  ref
) {
  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={clsx(
        "card",
        variant === "bone" && "card--bone",
        variant === "dark" && "card--dark",
        hover && "card--hover",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});
