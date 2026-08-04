// src/components/ui/Dropdown.jsx
import { ChevronDown } from 'lucide-react';

export function Dropdown({ options, value, onChange, isDark }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-md border px-3 py-1.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer min-w-[100px] ${
          isDark
            ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
            : 'bg-zinc-100 border-zinc-200 text-zinc-700'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${
          isDark ? 'text-zinc-500' : 'text-zinc-400'
        }`}
      />
    </div>
  );
}
