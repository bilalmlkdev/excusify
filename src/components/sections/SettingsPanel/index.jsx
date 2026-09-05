// src/components/sections/SettingsPanel/index.jsx
import { useEffect, useRef } from "react";
import { X, Trash2 } from "lucide-react";
import SettingsTab from "./SettingsTab";

export default function SettingsPanel({
  open,
  onClose,
  settings,
  onToggle,
  onClearData,
  onClearHistory,
  onClearFavorites,
  onResetSettings,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleOutsideClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" />
      <div
        ref={panelRef}
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border-2 border-ink bg-paper shadow-hard-lg animate-stamp"
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b-2 border-line px-6 py-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink">
            excusify settings
          </h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-line bg-surface text-ink2 transition-all hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Close settings"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <SettingsTab
            settings={settings}
            onToggle={onToggle}
            onClearData={onClearData}
            onClearHistory={onClearHistory}
            onClearFavorites={onClearFavorites}
            onResetSettings={onResetSettings}
          />
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center justify-between gap-2 border-t-2 border-line px-6 py-4">
          <button
            onClick={onResetSettings}
            className="flex cursor-pointer items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wide text-signal transition-colors hover:text-signal"
          >
            <Trash2 className="h-3.5 w-3.5" />
            reset to defaults
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-md border-2 border-ink bg-accent px-5 py-2 font-mono text-xs font-bold uppercase tracking-wide text-accent-ink shadow-hard-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          >
            close modal
          </button>
        </div>
      </div>
    </div>
  );
}
