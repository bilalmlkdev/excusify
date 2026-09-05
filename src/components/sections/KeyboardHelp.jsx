// src/components/sections/KeyboardHelp.jsx
import { useEffect } from "react";

export default function KeyboardHelp({ onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const rows = [
    ["space", "generate excuse"],
    ["s", "focus situation picker"],
    ["t", "focus tone picker"],
    ["c", "copy current excuse"],
    ["f", "favorite / unfavorite"],
    ["?", "open this help panel"],
  ];

  return (
    <div className="w-full max-w-md rounded-xl border-2 border-ink bg-paper p-6 shadow-hard-lg animate-stamp">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink">
          keyboard shortcuts
        </h3>
        <button
          onClick={() => onClose?.()}
          className="cursor-pointer rounded-md border-2 border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted transition-all hover:border-ink hover:text-ink"
        >
          close
        </button>
      </div>
      <ul className="space-y-2.5">
        {rows.map(([key, desc]) => (
          <li
            key={key}
            className="flex items-center justify-between gap-3 font-mono text-[11px] text-ink2"
          >
            <span className="kbd">{key}</span>
            <span className="flex-1 text-right uppercase tracking-wide">
              {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
