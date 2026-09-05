// src/components/sections/HistoryTab.jsx
import { useEffect, useState } from "react";

export default function HistoryTab({ history, onClearHistory, onClose }) {
  const DEFAULT_SHOW = 10;
  const [showAll, setShowAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (!onClose) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleCopy = (text, index) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const smallBtn =
    "cursor-pointer rounded-md border-2 border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted transition-all hover:border-ink hover:text-ink";

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
            recent
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-muted">
            {history.length} items{" "}
            {history.length > DEFAULT_SHOW &&
              !showAll &&
              `(showing ${Math.min(DEFAULT_SHOW, history.length)})`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {history.length > 0 && (
            <button onClick={onClearHistory} className={smallBtn}>
              clear
            </button>
          )}
          {history.length > DEFAULT_SHOW && (
            <button onClick={() => setShowAll((s) => !s)} className={smallBtn}>
              {showAll ? "show recent" : "show all"}
            </button>
          )}
        </div>
      </div>

      {history.length === 0 ? (
        <div className="py-12 text-center font-mono text-xs text-muted">
          no excuses generated yet
        </div>
      ) : (
        <div className="max-h-[60vh] space-y-2.5 overflow-y-auto pr-1">
          {(showAll ? history : history.slice(0, DEFAULT_SHOW)).map(
            (item, i) => (
              <div
                key={i}
                className="rounded-md border-2 border-line bg-surface p-3"
              >
                <p className="font-serif text-[15px] italic leading-snug text-ink">
                  {item.excuse}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wide text-muted">
                  <span className="truncate">
                    {item.situation} · {item.tone}
                  </span>
                  <button
                    onClick={() => handleCopy(item.excuse, i)}
                    className={`flex-shrink-0 cursor-pointer rounded border-2 border-line bg-surface2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink2 transition-all hover:border-ink hover:text-ink ${
                      copiedIndex === i ? "border-ink bg-accent text-accent-ink" : ""
                    }`}
                  >
                    {copiedIndex === i ? "copied!" : "copy"}
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
