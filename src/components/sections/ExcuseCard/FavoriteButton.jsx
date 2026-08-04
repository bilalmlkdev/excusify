// src/components/sections/ExcuseCard/FavoriteButton.jsx
import { memo } from "react";
import { IconStar } from "../../ui/Icons";

export  const FavoriteButton = memo(({ isFavorite, onToggle, isDark }) => {
  return (
    <button
      onClick={onToggle}
      title={isFavorite ? "unfavorite" : "save to favorites"}
      className={`shrink-0 transition-all cursor-pointer mt-0.5 flex items-center justify-center ${
        isFavorite
          ? "text-yellow-400"
          : isDark
            ? "text-zinc-700 hover:text-yellow-400"
            : "text-zinc-300 hover:text-yellow-500"
      }`}
    >
      <IconStar filled={isFavorite} className="w-5 h-5" />
    </button>
  );
});
