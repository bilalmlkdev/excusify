// src/components/ui/Loader.jsx
export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-accent font-mono text-2xl font-bold text-accent-ink shadow-hard animate-rise">
          ?
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          loading excuses<span className="blink">…</span>
        </div>
      </div>
    </div>
  );
}
