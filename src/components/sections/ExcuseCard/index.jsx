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
}) {
  if (!excuse) return null;
  const shareRef = useRef(null);

  return (
    <>
      <ShareCard
        cardRef={shareRef}
        excuse={excuse}
        situation={situation}
        tone={tone}
      />
      <div className="animate-stamp rounded-xl border-2 border-ink bg-surface p-6 shadow-hard">
        {/* meta row */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">{situation}</span>
            <span className="tag">{tone}</span>
          </div>
          <FavoriteButton isFavorite={isFavorite} onToggle={onFavorite} />
        </div>

        {/* the excuse */}
        <div className="flex items-start gap-3">
          <span className="mt-1 select-none font-mono text-xl font-bold leading-none text-accent">
            $
          </span>
          <p className="flex-1 font-serif text-[26px] leading-snug italic text-ink">
            {excuse}
          </p>
        </div>

        {/* actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-line pt-4">
          <RatingButtons rated={rated} onRate={onRate} />
          <button
            onClick={onCopy}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-md border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide transition-all ${
              copied
                ? "border-ink bg-accent text-accent-ink shadow-hard-sm"
                : "border-line bg-surface text-ink2 hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            }`}
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5" /> copied!
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5" /> copy
              </>
            )}
          </button>
        </div>

        <div className="mt-3">
          <ShareActions
            excuse={excuse}
            situation={situation}
            tone={tone}
            cardRef={shareRef}
          />
        </div>
      </div>
    </>
  );
}

export default memo(ExcuseCard);
