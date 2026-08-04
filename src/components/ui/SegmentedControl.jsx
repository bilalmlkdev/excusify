// src/components/ui/SegmentedControl.jsx
export function SegmentedControl({ options, value, onChange, isDark }) {
  return (
    <div
      className={`flex rounded-lg p-1 ${isDark ? "bg-zinc-800" : "bg-zinc-100"}`}
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
              isActive
                ? "bg-emerald-500 text-white shadow-sm"
                : isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
