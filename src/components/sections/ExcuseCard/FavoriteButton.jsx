// src/components/sections/ExcuseCard/FavoriteButton.jsx
import { memo } from "react";
import { IconStar } from "../../ui/Icons";

export const FavoriteButton = memo(({ isFavorite, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      title={isFavorite ? "unfavorite" : "save to favorites"}
      className={`flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-md border-2 transition-all active:translate-y-[1px] ${
        isFavorite
          ? "border-ink bg-accent text-accent-ink shadow-hard-sm"
          : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
      }`}
    >
      <IconStar filled={isFavorite} className="h-4 w-4" />
    </button>
  );
});
