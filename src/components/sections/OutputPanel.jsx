// src/components/sections/OutputPanel.jsx
import EotdExcuse from "./EotdExcuse";
import ExcuseCard from "./ExcuseCard/index";

function EmptyState() {
  return (
    <div className="flex min-h-[300px] flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-line bg-surface/60 p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-line bg-surface2 font-mono text-xl text-muted">
        ?
      </div>
      <p className="mt-5 font-serif text-2xl italic text-ink2">
        no excuse in the chamber yet
      </p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        press <span className="kbd mx-1">space</span> to fire one out
      </p>
    </div>
  );
}

export function OutputPanel({
  excuse,
  situation,
  tone,
  onCopy,
  copied,
  onRate,
  rated,
  isFavorite,
  onFavorite,
  showEotd,
  onUseEotd,
  showCounter,
  count,
}) {
  return (
    <div className="flex h-full flex-col gap-6">
      {showEotd && <EotdExcuse onUse={onUseEotd} />}
      {excuse ? (
        <div className="flex flex-1 flex-col gap-4">
          <div className="animate-rise">
            <ExcuseCard
              excuse={excuse}
              situation={situation}
              tone={tone}
              onCopy={onCopy}
              copied={copied}
              onRate={onRate}
              rated={rated}
              isFavorite={isFavorite}
              onFavorite={onFavorite}
            />
          </div>
          {showCounter && count > 0 && (
            <div className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span>session count</span>
              <span className="tag">{count}</span>
            </div>
          )}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
