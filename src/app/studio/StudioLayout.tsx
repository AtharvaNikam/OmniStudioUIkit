import { Outlet } from "react-router-dom";
import { AppShell } from "@ui";
import { StudioSidebar } from "./StudioSidebar";

/**
 * Route: /studio/*
 * Wraps every Studio page in the AppShell + sidebar. Child routes render via <Outlet />.
 */
export function StudioLayout() {
  return (
    <AppShell sidebar={<StudioSidebar />}>
      <Outlet />
    </AppShell>
  );
}
