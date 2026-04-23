// Omni Studio UI kit — barrel exports.
// Prefer importing from this file: `import { Button, KpiCard } from "@ui"`

// primitives
export { Button } from "./primitives/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./primitives/Button";
export { Badge } from "./primitives/Badge";
export type { BadgeProps, BadgeTone } from "./primitives/Badge";
export { Card } from "./primitives/Card";
export type { CardProps } from "./primitives/Card";
export { Chip } from "./primitives/Chip";
export { Eyebrow } from "./primitives/Eyebrow";
export { Input } from "./primitives/Input";
export { Segmented } from "./primitives/Segmented";
export type { SegmentedOption, SegmentedProps } from "./primitives/Segmented";
export { DateRange } from "./primitives/DateRange";

// brand
export { BrandMark } from "./brand/BrandMark";
export { Wordmark } from "./brand/Wordmark";

// layout
export { AppShell } from "./layout/AppShell";
export { TitleBar } from "./layout/TitleBar";
export { Sidebar } from "./layout/Sidebar";
export { WorkspaceSwitcher } from "./layout/WorkspaceSwitcher";
export type { Workspace } from "./layout/WorkspaceSwitcher";
export { NavRow } from "./layout/NavRow";
export { NavSection } from "./layout/NavSection";
export { UserPill } from "./layout/UserPill";
export { PageHeader } from "./layout/PageHeader";

// data
export { KpiCard } from "./data/KpiCard";
export type { KpiCardProps, DeltaTone } from "./data/KpiCard";
export { KpiGrid } from "./data/KpiGrid";
export { SparkLine } from "./data/SparkLine";
export type { SparkDirection } from "./data/SparkLine";
export { LineChart } from "./data/LineChart";
export { BarChart } from "./data/BarChart";
export type { BarRow, BarTone } from "./data/BarChart";
export { Funnel } from "./data/Funnel";
export type { FunnelStage } from "./data/Funnel";
export { DataTable, CustomerCell } from "./data/DataTable";
export type { DataColumn, DataTableProps } from "./data/DataTable";
export { FeedItem } from "./data/FeedItem";
export type { FeedTone } from "./data/FeedItem";
export { StatPill } from "./data/StatPill";
export { ChartBox } from "./data/ChartBox";

// composite
export { AgentCard } from "./composite/AgentCard";
export type { AgentCardProps } from "./composite/AgentCard";
export { Composer } from "./composite/Composer";
