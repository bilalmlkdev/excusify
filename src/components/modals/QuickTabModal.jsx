// src/components/modals/QuickTabModal.jsx
import FavoritesTab from "../sections/FavouriteTab";
import AboutTab from "../sections/AboutTab";
import HistoryTab from "../sections/HistoryTab";

export default function QuickTabModal({
  open,
  onClose,
  tab,
  isDark,
  favorites,
  onClearFavorites,
  history,
  onClearHistory,
  totalCount,
}) {
  if (!open) return null;

  const settBtn = isDark
    ? "border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900/50"
    : "border-zinc-200/80 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-md" />
      <div
        className={`relative z-10 w-full max-w-2xl rounded-2xl p-8 shadow-2xl transition-all ${isDark ? "bg-[#121212] border border-zinc-800" : "bg-white border border-zinc-200"}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        autoFocus
      >
        <div className="flex items-start justify-end -mt-4 -mr-4 mb-4">
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border ${settBtn}`}
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {tab === "favs" && (
          <FavoritesTab
            favorites={favorites}
            onClearFavorites={onClearFavorites}
            isDark={isDark}
            onClose={onClose}
          />
        )}
        {tab === "about" && (
          <AboutTab isDark={isDark} totalCount={totalCount} onClose={onClose} />
        )}
        {tab === "history" && (
          <HistoryTab
            history={history}
            onClearHistory={onClearHistory}
            isDark={isDark}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
