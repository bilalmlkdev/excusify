// src/components/modals/QuickTabModal.jsx
import FavoritesTab from "../sections/FavouriteTab";
import AboutTab from "../sections/AboutTab";
import HistoryTab from "../sections/HistoryTab";

export default function QuickTabModal({
  open,
  onClose,
  tab,
  favorites,
  onClearFavorites,
  history,
  onClearHistory,
  totalCount,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]" />
      <div
        className="relative z-10 w-full max-w-2xl rounded-xl border-2 border-ink bg-paper p-6 shadow-hard-lg animate-stamp sm:p-8"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        autoFocus
      >
        <div className="-mr-2 -mt-2 mb-4 flex items-start justify-end">
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-line bg-surface text-ink2 transition-all hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <svg
              className="h-4 w-4"
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
            onClose={onClose}
          />
        )}
        {tab === "about" && (
          <AboutTab totalCount={totalCount} onClose={onClose} />
        )}
        {tab === "history" && (
          <HistoryTab
            history={history}
            onClearHistory={onClearHistory}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
