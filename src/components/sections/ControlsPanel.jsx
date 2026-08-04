// src/components/sections/ControlsPanel.jsx
import SituationPicker from "../pickers/SituationPicker";
import TonePicker from "../pickers/TonePicker";

export function ControlsPanel({
  activeSit,
  activeTone,
  onSitChange,
  onToneChange,
  onGenerate,
  isDark,
}) {
  // Refined theme classes (same as in App.jsx)
  const cardBg = isDark ? "bg-zinc-900" : "bg-white";
  const cardBorder = isDark ? "border-zinc-800" : "border-zinc-200";
  const btnPrimary = isDark
    ? "bg-zinc-100 text-zinc-900 hover:bg-white"
    : "bg-zinc-900 text-white hover:bg-zinc-800";

  return (
    <div
      className={`border ${cardBorder} rounded-2xl ${cardBg} p-6 lg:p-8 space-y-6 shadow-sm transition-colors duration-500`}
    >
      <div id="situation-picker" className="focus:outline-none">
        <SituationPicker
          active={activeSit}
          onChange={onSitChange}
          isDark={isDark}
        />
      </div>
      <div id="tone-picker" className="focus:outline-none">
        <TonePicker
          active={activeTone}
          onChange={onToneChange}
          isDark={isDark}
        />
      </div>
      <button
        onClick={onGenerate}
        className={`w-full mt-4 py-4 rounded-xl font-sans tracking-wide font-medium uppercase text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] ${btnPrimary}`}
      >
        Generate Excuse
      </button>
    </div>
  );
}
