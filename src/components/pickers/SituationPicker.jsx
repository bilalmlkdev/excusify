// src/components/pickers/SituationPicker.jsx
import { situations } from "../../data/situations";

export default function SituationPicker({ active, onChange }) {
  return (
    <div>
      <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
        <span className="flex h-4 w-4 items-center justify-center rounded-sm border-2 border-line bg-surface2 text-[8px] text-ink2">
          01
        </span>
        situation
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {situations.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.label)}
              aria-pressed={isActive}
              className={`flex cursor-pointer items-center gap-2 rounded-md border-2 px-3 py-2.5 font-mono text-[10px] font-medium uppercase tracking-wide transition-all ${
                isActive
                  ? "border-ink bg-accent text-accent-ink shadow-hard-sm"
                  : "border-line bg-surface text-ink2 hover:border-ink hover:text-ink"
              }`}
            >
              <item.icon size={15} strokeWidth={2} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
