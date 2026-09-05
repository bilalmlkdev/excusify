// src/components/ui/RangeSlider.jsx
export function RangeSlider({ value, max, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-32 cursor-pointer appearance-none rounded-full"
        style={{
          background: `linear-gradient(to right, #c9f24e ${(value / max) * 100}%, #d8ceb6 ${(value / max) * 100}%)`,
        }}
      />
      <span className="font-mono text-xs font-medium text-ink2">{value}%</span>
    </div>
  );
}
