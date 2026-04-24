import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
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
 * On mobile, the sidebar becomes a slide-in drawer opened by a hamburger in the titlebar.
 * The drawer auto-closes whenever the route changes.
 */
export function AppShell({ sidebar, children, titleSuffix }: AppShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <TitleBar
        suffix={titleSuffix}
        onMenuClick={() => setMenuOpen((v) => !v)}
        menuOpen={menuOpen}
      />
      <div className={`app${menuOpen ? " is-menu-open" : ""}`}>
        {sidebar}
        {menuOpen ? (
          <button
            type="button"
            className="app__backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
        <main className="main">{children}</main>
      </div>
    </>
  );
}
