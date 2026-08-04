// src/components/sections/ExcuseCard/index.jsx
import { useRef, memo } from "react";
import ShareCard from "./ShareCard";
import { FavoriteButton } from "./FavoriteButton";
import { RatingButtons } from "./RatingButtons";
import { ShareActions } from "./ShareActions";
import { IconCopy, IconCheck } from "../../ui/Icons";

function ExcuseCard({
  excuse,
  situation,
  tone,
  onCopy,
  copied,
  onRate,
  rated,
  isFavorite,
  onFavorite,
  isDark,
}) {
  if (!excuse) return null;

  // Solid backgrounds
  const cardClass = isDark
    ? "border-zinc-700 bg-zinc-900"
    : "border-zinc-200 bg-white";
  const divider = isDark ? "border-zinc-700" : "border-zinc-200";
  const textClass = isDark ? "text-zinc-100" : "text-zinc-900";
  const inactiveBtn = isDark
    ? "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
    : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700";
  const shareRef = useRef(null);

  return (
    <>
      <ShareCard
        cardRef={shareRef}
        excuse={excuse}
        situation={situation}
        tone={tone}
      />
      <div className={`border rounded-xl p-5 space-y-4 ${cardClass}`}>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 font-sans text-sm mt-0.5 select-none">
            $
          </span>
          <p
            className={`font-sans text-sm leading-relaxed flex-1 ${textClass}`}
          >
            {excuse}
          </p>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={onFavorite}
            isDark={isDark}
          />
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-sans px-2 py-0.5 rounded border ${
              isDark
                ? "border-zinc-700 text-zinc-500"
                : "border-zinc-200 text-zinc-500"
            }`}
          >
            {situation}
          </span>
          <span
            className={`text-[10px] font-sans px-2 py-0.5 rounded border ${
              isDark
                ? "border-zinc-700 text-zinc-500"
                : "border-zinc-200 text-zinc-500"
            }`}
          >
            {tone}
          </span>
        </div>

        <div className={`border-t ${divider} pt-3 space-y-2`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <RatingButtons rated={rated} onRate={onRate} isDark={isDark} />
            <button
              onClick={onCopy}
              className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer flex items-center gap-2 ${
                copied
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : inactiveBtn
              }`}
            >
              {copied ? (
                <>
                  <IconCheck className="w-3.5 h-3.5" /> copied!
                </>
              ) : (
                <>
                  <IconCopy className="w-3.5 h-3.5" /> copy
                </>
              )}
            </button>
          </div>

          <ShareActions
            excuse={excuse}
            situation={situation}
            tone={tone}
            cardRef={shareRef}
            isDark={isDark}
          />
        </div>
      </div>
    </>
  );
}

export default memo(ExcuseCard);
