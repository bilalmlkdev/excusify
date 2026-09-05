// src/components/sections/ExcuseCard/RatingButtons.jsx
import { memo } from "react";
import { IconCheck, IconX } from "../../ui/Icons";

export const RatingButtons = memo(({ rated, onRate }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onRate("believable")}
        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide transition-all ${
          rated === "believable"
            ? "border-ink bg-accent text-accent-ink shadow-hard-sm"
            : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
        }`}
      >
        <IconCheck className="h-3 w-3" />
        believable
      </button>
      <button
        onClick={() => onRate("obvious")}
        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide transition-all ${
          rated === "obvious"
            ? "border-ink bg-signal text-white shadow-hard-sm"
            : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
        }`}
      >
        <IconX className="h-3 w-3" />
        too obvious
      </button>
    </div>
  );
});
