import clsx from "clsx";
import type { SVGProps } from "react";

export interface BrandMarkProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  /** Size in pixels (default 28). */
  size?: number;
  /** Include the faint slate dashed outer ring. Default true. */
  rings?: boolean;
}

/**
 * BrandMark — Omni Studio's concentric-circle mark.
 *
 * Source of truth: D:\Code\OmniStudio\OmniStudioTheme\omni-studio\assets\svg\mark.svg
 * Amber center dot, dashed ink middle ring, dashed slate outer ring, solid ink outer.
 */
export function BrandMark({ size = 28, rings = true, className, ...rest }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={clsx("brand-mark-svg", className)}
      aria-hidden="true"
      {...rest}
    >
      <circle cx="24" cy="24" r="23" stroke="#0A0E12" strokeWidth="1.2" />
      {rings && (
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="#8B9AAE"
          strokeWidth="0.6"
          strokeDasharray="1 3"
        />
      )}
      {rings && (
        <circle
          cx="24"
          cy="24"
          r="10"
          stroke="#0A0E12"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      )}
      <circle cx="24" cy="24" r="2.5" fill="#D97706" />
    </svg>
  );
}
