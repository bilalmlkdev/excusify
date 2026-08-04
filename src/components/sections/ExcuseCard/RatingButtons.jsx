// src/components/sections/ExcuseCard/RatingButtons.jsx
import { memo } from "react";
import { IconCheck, IconX } from "../../ui/Icons";

export const RatingButtons = memo(({ rated, onRate, isDark }) => {
  const inactiveBtn = isDark
    ? "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
    : "border-zinc-300 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600";

  return (
    <div className="flex gap-2">
      <button
        onClick={() => onRate("believable")}
        className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer flex items-center gap-2 ${
          rated === "believable"
            ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
            : inactiveBtn
        }`}
      >
        <IconCheck className="w-3.5 h-3.5" />
        believable
      </button>
      <button
        onClick={() => onRate("obvious")}
        className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer flex items-center gap-2 ${
          rated === "obvious"
            ? "border-red-500 bg-red-500/10 text-red-400"
            : inactiveBtn
        }`}
      >
        <IconX className="w-3.5 h-3.5" />
        too obvious
      </button>
    </div>
  );
});
