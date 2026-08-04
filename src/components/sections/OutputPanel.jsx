// src/components/sections/OutputPanel.jsx
import EotdExcuse from "./EotdExcuse";
import ExcuseCard from "./ExcuseCard/index";

function EmptyState({ isDark }) {
  const borderCl = isDark
    ? "border-zinc-700/50 text-zinc-500 bg-zinc-900"
    : "border-zinc-200/50 text-zinc-500 bg-white";
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-dashed ${borderCl} min-h-[260px] transition-colors duration-500`}
    >
      <svg
        className="w-8 h-8 mb-4 opacity-30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-5.834L6.166 6.166M7.73 15.27l-1.591 1.591M12 18.75V21m-5.834-1.591 1.591-1.591"
        />
      </svg>
      <p className="font-serif italic text-lg opacity-80">
        Awaiting your parameters.
        <br />
        <span className="font-sans not-italic text-sm tracking-wide uppercase opacity-60 mt-2 block">
          Press Space to Generate
        </span>
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
  isDark,
  showEotd,
  onUseEotd,
  showCounter,
  count,
}) {
  return (
    <div className="flex flex-col gap-6 h-full">
      {showEotd && <EotdExcuse isDark={isDark} onUse={onUseEotd} />}
      {excuse ? (
        <div className="flex flex-col gap-4 flex-1">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              isDark={isDark}
            />
          </div>
          {showCounter && count > 0 && (
            <div
              className={`flex justify-end items-center text-xs font-sans tracking-wide uppercase ${
                isDark ? "text-zinc-500" : "text-zinc-500"
              }`}
            >
              <span>{count} This Session</span>
            </div>
          )}
        </div>
      ) : (
        <EmptyState isDark={isDark} />
      )}
    </div>
  );
}
