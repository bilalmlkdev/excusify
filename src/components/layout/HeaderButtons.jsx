// src/components/layout/HeaderButtons.jsx
import { memo } from "react";

const Icon = ({ d }) => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={d} />
  </svg>
);

const ICONS = {
  settings:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  history: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  favorites:
    "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  info: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
  keyboard:
    "M15 12h.01M9 12h.01M12 9h.01M12 15h.01M5 9a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9z",
};

const HeaderButtons = memo(
  ({
    onSettings,
    onHistory,
    onFavorites,
    onAbout,
    onKeyboardHelp,
    historyCount = 0,
    favoritesCount = 0,
  }) => {
    const buttons = [
      {
        onClick: onSettings,
        title: "Settings",
        aria: "Open settings",
        icon: ICONS.settings,
      },
      {
        onClick: onHistory,
        title: "History",
        aria: "Open history",
        icon: ICONS.history,
        badge: historyCount,
      },
      {
        onClick: onFavorites,
        title: "Favorites",
        aria: "Open favorites",
        icon: ICONS.favorites,
        badge: favoritesCount,
      },
      {
        onClick: onAbout,
        title: "About",
        aria: "Open about",
        icon: ICONS.info,
      },
      {
        onClick: onKeyboardHelp,
        title: "Keyboard shortcuts",
        aria: "Open keyboard help",
        icon: ICONS.keyboard,
      },
    ];

    return (
      <>
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.onClick}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-2 border-line bg-surface text-ink2 transition-all hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            title={btn.title}
            aria-label={btn.aria}
          >
            <Icon d={btn.icon} />
            {btn.badge > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-ink bg-accent px-0.5 font-mono text-[9px] font-bold text-accent-ink">
                {btn.badge}
              </span>
            )}
          </button>
        ))}
      </>
    );
  },
);

export default HeaderButtons;
