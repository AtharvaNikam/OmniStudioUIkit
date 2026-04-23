import clsx from "clsx";
import type { ReactNode } from "react";

export type Align = "left" | "right";

export interface DataColumn<Row> {
  /** Column key — must be unique. */
  key: string;
  /** Header label. */
  header: ReactNode;
  /** Render function for a row. */
  render: (row: Row, index: number) => ReactNode;
  /** Right-align (tabular numbers). Applies `.num` cell class. */
  align?: Align;
  /** Use mono font for the cell content. */
  mono?: boolean;
}

export interface DataTableProps<Row> {
  columns: DataColumn<Row>[];
  rows: Row[];
  /** Optional caption for a11y. */
  caption?: string;
  /** Render row click handler (whole row clickable). */
  onRowClick?: (row: Row) => void;
}

/**
 * DataTable — the one table. Mono-uppercase headers on a bone-50 bar, hover tint on rows.
 *
 * Columns are typed against the row shape — pass a type parameter for end-to-end safety.
 * For customer cells with avatar + name + sublabel, render a `<CustomerCell />` inside the
 * column's `render` function (see composite/CustomerCell.tsx).
 */
export function DataTable<Row>({ columns, rows, caption, onRowClick }: DataTableProps<Row>) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={clsx(col.align === "right" && "num")}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              style={onRowClick ? { cursor: "pointer" } : undefined}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={clsx(
                    col.align === "right" && "num",
                    col.mono && "mono-cell"
                  )}
                >
                  {col.render(row, i)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface CustomerCellProps {
  initials: string;
  name: ReactNode;
  sub?: ReactNode;
  avatarTone?: "ink" | "bone" | "slate" | "signal";
}

/**
 * CustomerCell — paired with DataTable for customer rows. Avatar + stacked name/sub.
 */
export function CustomerCell({ initials, name, sub, avatarTone = "ink" }: CustomerCellProps) {
  const bg =
    avatarTone === "ink"
      ? "var(--ink)"
      : avatarTone === "bone"
        ? "var(--bone-100)"
        : avatarTone === "slate"
          ? "var(--slate-500)"
          : "var(--signal)";
  const color = avatarTone === "bone" ? "var(--ink)" : "var(--ivory)";
  return (
    <div className="cust">
      <span
        className="cust__avatar"
        style={{ background: bg, color, border: avatarTone === "bone" ? "1px solid var(--border)" : undefined }}
      >
        {initials}
      </span>
      <div>
        <strong style={{ fontWeight: 500 }}>{name}</strong>
        {sub ? <span className="cust__sub">{sub}</span> : null}
      </div>
    </div>
  );
}
