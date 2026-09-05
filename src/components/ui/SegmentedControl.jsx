// src/components/ui/SegmentedControl.jsx
export function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="flex rounded-md border-2 border-line bg-surface2 p-0.5">
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide rounded-[4px] transition-all ${
              isActive
                ? "border-2 border-ink bg-accent text-accent-ink shadow-hard-sm"
                : "border-2 border-transparent text-ink2 hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
