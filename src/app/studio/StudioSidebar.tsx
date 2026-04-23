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

/**
 * Studio sidebar — routes under /studio.
 *
 * To add a new page: create it under app/studio/, add a Route in router.tsx,
 * and add a NavRow here with the matching `to`.
 */
export function StudioSidebar() {
  return (
    <Sidebar
      workspace="studio"
      homePath="/studio"
      user={{ initials: "DC", name: "Dan · Phoenix HVAC", status: "Pilot" }}
    >
      <NavRow
        to="/studio"
        end
        primary
        icon={
          <svg {...iconProps}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        }
      >
        New Brief
      </NavRow>

      <NavSection>The Team</NavSection>

      <NavRow
        to="/studio/agents"
        icon={
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        }
      >
        Agents
      </NavRow>
      <NavRow
        to="/studio/pairings"
        icon={
          <svg {...iconProps}>
            <circle cx="8" cy="9" r="3" />
            <circle cx="16" cy="9" r="3" />
            <path d="M3 20a5 5 0 0110 0M11 20a5 5 0 0110 0" />
          </svg>
        }
      >
        Pairings
      </NavRow>

      <NavSection>Capabilities</NavSection>

      <NavRow
        to="/studio/tasks"
        icon={
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        }
      >
        Scheduled Tasks
      </NavRow>
      <NavRow
        to="/studio/integrations"
        icon={
          <svg {...iconProps}>
            <path d="M9 12a3 3 0 100-6M15 6a3 3 0 100 6" />
            <path d="M6 9h3M15 9h3M9 9v6a3 3 0 006 0" />
          </svg>
        }
      >
        Integrations
      </NavRow>
      <NavRow
        to="/studio/playbooks"
        icon={
          <svg {...iconProps}>
            <path d="M4 6h16M4 12h10M4 18h16" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        }
      >
        Playbooks
      </NavRow>
      <NavRow
        to="/studio/channels"
        icon={
          <svg {...iconProps}>
            <path d="M4 6h16v12H4z" />
            <path d="M4 6l8 7 8-7" />
          </svg>
        }
      >
        Lines &amp; Channels
      </NavRow>

      <NavSection>Inbox</NavSection>
      <NavSection badge="Beta">Team</NavSection>
    </Sidebar>
  );
}
