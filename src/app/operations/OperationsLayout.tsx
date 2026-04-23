import { Outlet } from "react-router-dom";
import { AppShell } from "@ui";
import { OperationsSidebar } from "./OperationsSidebar";

/**
 * Route: /operations/*
 * Adds the ` · Operations` suffix to the title bar.
 */
export function OperationsLayout() {
  return (
    <AppShell sidebar={<OperationsSidebar />} titleSuffix=" · Operations">
      <Outlet />
    </AppShell>
  );
}
