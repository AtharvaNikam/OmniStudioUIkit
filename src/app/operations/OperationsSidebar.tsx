import { Sidebar, NavRow, NavSection } from "@ui";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function OperationsSidebar() {
  return (
    <Sidebar
      workspace="operations"
      homePath="/operations"
      user={{ initials: "DC", name: "Dan · Phoenix HVAC", status: "Pilot" }}
    >
      <NavRow
        to="/operations"
        end
        primary
        icon={
          <svg {...iconProps}>
            <rect x="3" y="3" width="8" height="9" rx="1" />
            <rect x="13" y="3" width="8" height="5" rx="1" />
            <rect x="13" y="10" width="8" height="11" rx="1" />
            <rect x="3" y="14" width="8" height="7" rx="1" />
          </svg>
        }
      >
        Dashboard
      </NavRow>

      <NavSection>The Shop</NavSection>

      <NavRow
        to="/operations/dispatch"
        icon={
          <svg {...iconProps}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18M9 5v14" />
          </svg>
        }
      >
        Dispatch
      </NavRow>
      <NavRow
        to="/operations/field"
        icon={
          <svg {...iconProps}>
            <rect x="7" y="3" width="10" height="18" rx="2" />
            <path d="M11 18h2" />
          </svg>
        }
      >
        Field App
      </NavRow>
      <NavRow
        to="/operations/crm"
        icon={
          <svg {...iconProps}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0116 0" />
          </svg>
        }
      >
        Customers
      </NavRow>
      <NavRow
        to="/operations/leads"
        icon={
          <svg {...iconProps}>
            <path d="M3 12l6 6L21 6" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        }
      >
        Leads
      </NavRow>

      <NavSection>Money</NavSection>

      <NavRow
        to="/operations/payments"
        icon={
          <svg {...iconProps}>
            <rect x="3" y="6" width="18" height="13" rx="2" />
            <path d="M3 10h18M7 16h3" />
          </svg>
        }
      >
        Payments
      </NavRow>
      <NavRow
        to="/operations/accounting"
        icon={
          <svg {...iconProps}>
            <path d="M4 21V7l8-4 8 4v14" />
            <path d="M9 21v-6h6v6" />
          </svg>
        }
      >
        Accounting
      </NavRow>

      <NavSection>Go-to-market</NavSection>

      <NavRow
        to="/operations/marketing"
        icon={
          <svg {...iconProps}>
            <path d="M3 11v5a2 2 0 002 2h2l3-3h7a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v5z" />
            <path d="M17 14l4 4v-9l-4 4" />
          </svg>
        }
      >
        Marketing
      </NavRow>
      <NavRow
        to="/operations/inventory"
        icon={
          <svg {...iconProps}>
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
          </svg>
        }
      >
        Inventory
      </NavRow>
    </Sidebar>
  );
}
