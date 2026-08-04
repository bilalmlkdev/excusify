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
  const isDark = settings.theme === "dark";

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

  const modalBg = isDark
    ? "bg-zinc-950 border-zinc-800"
    : "bg-white border-zinc-200";
  const textPrimary = isDark ? "text-zinc-100" : "text-zinc-900";
  const divider = isDark ? "border-zinc-800" : "border-zinc-200";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        ref={panelRef}
        className={`relative w-full max-w-3xl ${modalBg} rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
      >
        <div
          className={`flex items-center justify-between px-6 py-5 border-b ${divider} flex-shrink-0`}
        >
          <h2 className={`text-lg font-semibold ${textPrimary}`}>
            Excusify Settings
          </h2>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark
                ? "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
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
            isDark={isDark}
          />
        </div>
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${divider} flex-shrink-0 flex-wrap gap-2`}
        >
          <button
            onClick={onResetSettings}
            className="flex items-center gap-1.5 text-xs font-medium text-red-400 hover:text-red-300 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Reset to Defaults
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-all shadow-sm shadow-emerald-500/20"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
