// src/components/sections/ControlsPanel.jsx
import SituationPicker from "../pickers/SituationPicker";
import TonePicker from "../pickers/TonePicker";

export function ControlsPanel({
  activeSit,
  activeTone,
  onSitChange,
  onToneChange,
  onGenerate,
}) {
  return (
    <div className="space-y-7 rounded-xl border-2 border-ink bg-surface p-6 shadow-hard lg:p-8">
      <div id="situation-picker" className="outline-none">
        <SituationPicker active={activeSit} onChange={onSitChange} />
      </div>
      <div id="tone-picker" className="outline-none">
        <TonePicker active={activeTone} onChange={onToneChange} />
      </div>
      <button
        onClick={onGenerate}
        className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-ink bg-accent px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-accent-ink shadow-hard transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-accent-ink/80 transition-transform group-hover:scale-125" />
        Generate excuse
        <span aria-hidden className="font-sans text-base leading-none">
          →
        </span>
      </button>
    </div>
  );
}
