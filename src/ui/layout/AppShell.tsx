import type { ReactNode } from "react";
import { TitleBar } from "./TitleBar";

export interface AppShellProps {
  /** The sidebar element (pre-composed). */
  sidebar: ReactNode;
  /** Page content (rendered inside `<main>`). */
  children: ReactNode;
  /** Optional suffix for the title bar (e.g. ` · Operations`). */
  titleSuffix?: string;
}

/**
 * AppShell — the outer frame. TitleBar on top, flex row below with sidebar + main.
 *
 * Main has a faint top-radial dot grid. Every page slots in through `children`.
 */
export function AppShell({ sidebar, children, titleSuffix }: AppShellProps) {
  return (
    <>
      <TitleBar suffix={titleSuffix} />
      <div className="app">
        {sidebar}
        <main className="main">{children}</main>
      </div>
    </>
  );
}
