import clsx from "clsx";
import { useState, type ReactNode } from "react";

export interface ComposerProps {
  /** Placeholder for the textarea. */
  placeholder?: string;
  /** Left-aligned context chip content (e.g. "Phoenix HVAC · ServiceTitan"). */
  contextChip?: ReactNode;
  /** Array of mono-pill selectors rendered between chip and send button. */
  selectors?: ReactNode[];
  /** Called when the user submits (Enter or clicks send). */
  onSubmit?: (text: string) => void;
  /** Controlled value. */
  value?: string;
  onChange?: (v: string) => void;
}

/**
 * Composer — the hero chat input.
 *
 * Behaviour: as soon as the textarea has trimmed content, the send button flips from a
 * slate disk to an amber disk with `--shadow-glow-signal`. This is the main signal the
 * product is "ready" to take the brief.
 */
export function Composer({
  placeholder = "Ask the studio…",
  contextChip,
  selectors,
  onSubmit,
  value,
  onChange,
}: ComposerProps) {
  const [inner, setInner] = useState("");
  const v = value ?? inner;
  const ready = v.trim().length > 0;

  function handleChange(next: string) {
    setInner(next);
    onChange?.(next);
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!ready) return;
    onSubmit?.(v);
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea
        value={v}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        rows={1}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) handleSubmit();
        }}
      />
      <div className="composer__toolbar">
        <button
          type="button"
          aria-label="Attach"
          className="composer__send"
          style={{ width: 28, height: 28 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
        {contextChip ? <span className="composer__chip">{contextChip}</span> : null}
        <span className="spacer" />
        {selectors?.map((node, i) => <span key={i}>{node}</span>)}
        <button
          type="submit"
          className={clsx("composer__send", ready && "is-ready")}
          aria-label="Send"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
