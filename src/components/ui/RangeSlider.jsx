// src/components/ui/RangeSlider.jsx
export function RangeSlider({ value, max, onChange, isDark }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32 h-1 bg-zinc-700 rounded-full appearance-none cursor-pointer focus:outline-none"
        style={{
          background: `linear-gradient(to right, #34d399 ${(value / max) * 100}%, ${isDark ? "#3f3f46" : "#d4d4d8"} ${(value / max) * 100}%)`,
        }}
      />
      <span
        className={`text-xs font-medium ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
      >
        {value}%
      </span>
    </div>
  );
}
