// src/components/pickers/TonePicker.jsx
import { tones } from "../../data/tones";

const TONE_COLOR = {
  professional: { bg: "bg-sky", text: "text-ink" },
  chaotic: { bg: "bg-orange", text: "text-ink" },
  desperate: { bg: "bg-signal", text: "text-white" },
  corporate: { bg: "bg-violet", text: "text-white" },
};

export default function TonePicker({ active, onChange }) {
  return (
    <div>
      <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
        <span className="flex h-4 w-4 items-center justify-center rounded-sm border-2 border-line bg-surface2 text-[8px] text-ink2">
          02
        </span>
        tone
      </p>
      <div className="flex flex-wrap gap-2">
        {tones.map((tone) => {
          const isActive = active === tone.id;
          const c = TONE_COLOR[tone.id];
          return (
            <button
              key={tone.id}
              onClick={() => onChange(tone.id)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-lg border-2 px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-wide transition-all ${
                isActive
                  ? `${c.bg} ${c.text} border-ink shadow-hard-sm`
                  : "border-line bg-surface text-ink2 hover:border-ink hover:text-ink"
              }`}
            >
              {tone.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
