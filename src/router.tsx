import { createBrowserRouter, Navigate } from "react-router-dom";
import { StudioLayout } from "./app/studio/StudioLayout";
import { StudioHome } from "./app/studio/StudioHome";
import { StudioAgents } from "./app/studio/StudioAgents";
import { OperationsLayout } from "./app/operations/OperationsLayout";
import { OperationsDashboard } from "./app/operations/Dashboard";
import { CustomerProfile } from "./app/operations/CustomerProfile";
import { JobDetail } from "./app/operations/JobDetail";
import { JobNew } from "./app/operations/JobNew";
import { JobRoute } from "./app/operations/JobRoute";
import { DateFilter } from "./app/operations/DateFilter";
import { Placeholder } from "./app/Placeholder";

/**
 * Router — two workspaces mounted under /studio and /operations.
 *
 * Placeholder routes exist for every page in the HTML prototype so the sidebar never
 * hits a dead link. Port them over by replacing the element with a real page.
 */
export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/studio" replace /> },

  {
    path: "/studio",
    element: <StudioLayout />,
    children: [
      { index: true, element: <StudioHome /> },
      { path: "agents", element: <StudioAgents /> },
      { path: "pairings", element: <Placeholder eyebrow="The team" title="Pairings" /> },
      { path: "tasks", element: <Placeholder eyebrow="Capabilities" title="Scheduled Tasks" /> },
      { path: "integrations", element: <Placeholder eyebrow="Capabilities" title="Integrations" /> },
      { path: "playbooks", element: <Placeholder eyebrow="Capabilities" title="Playbooks" /> },
      { path: "channels", element: <Placeholder eyebrow="Capabilities" title="Lines & Channels" /> },
    ],
  },

  {
    path: "/operations",
    element: <OperationsLayout />,
    children: [
      { index: true, element: <OperationsDashboard /> },
      { path: "dispatch", element: <Placeholder eyebrow="Dispatch" title="Dispatch board" /> },
      { path: "field", element: <Placeholder eyebrow="Field App" title="Field app preview" /> },
      { path: "crm", element: <Placeholder eyebrow="Customers" title="CRM" /> },
      { path: "customer/:id", element: <CustomerProfile /> },
      { path: "jobs/new", element: <JobNew /> },
      { path: "jobs/:id", element: <JobDetail /> },
      { path: "jobs/:id/route", element: <JobRoute /> },
      { path: "date-filter", element: <DateFilter /> },
      { path: "leads", element: <Placeholder eyebrow="Leads pipeline" title="Leads" /> },
      { path: "payments", element: <Placeholder eyebrow="Payments" title="Ledger" /> },
      { path: "accounting", element: <Placeholder eyebrow="Accounting" title="P&L + A/R" /> },
      { path: "marketing", element: <Placeholder eyebrow="Marketing" title="Attribution" /> },
      { path: "inventory", element: <Placeholder eyebrow="Inventory" title="Parts & trucks" /> },
    ],
  },
]);
