// src/components/ui/Dropdown.jsx
import { ChevronDown } from "lucide-react";

export function Dropdown({ options, value, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`min-w-[100px] cursor-pointer appearance-none rounded-md border-2 border-line bg-surface px-3 py-1.5 font-mono text-[11px] font-medium text-ink2 transition-colors hover:border-ink focus:outline-none`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted`}
      />
    </div>
  );
}
