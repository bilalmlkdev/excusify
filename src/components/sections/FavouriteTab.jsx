// src/components/sections/FavouriteTab.jsx
import { useEffect } from "react";

export default function FavoritesTab({ favorites, onClearFavorites, onClose }) {
  useEffect(() => {
    if (!onClose) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
          starred ({favorites.length})
        </p>
        {favorites.length > 0 && (
          <button
            onClick={onClearFavorites}
            className="cursor-pointer rounded-md border-2 border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted transition-all hover:border-signal hover:text-signal"
          >
            clear all
          </button>
        )}
      </div>
      {favorites.length === 0 ? (
        <p className="font-mono text-xs text-muted">
          no favorites yet - star an excuse to save it
        </p>
      ) : (
        <div className="max-h-[60vh] space-y-2 overflow-y-auto pr-1">
          {favorites.map((item, i) => (
            <div
              key={i}
              className="flex gap-2.5 rounded-md border-2 border-line bg-surface p-3"
            >
              <span className="mt-0.5 flex-shrink-0 select-none font-mono text-sm font-bold text-gold">
                ★
              </span>
              <div className="min-w-0">
                <span className="font-serif text-[15px] italic leading-snug text-ink">
                  {item.excuse}
                </span>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                  {item.situation} · {item.tone}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
