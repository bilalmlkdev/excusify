// src/components/ui/Toggle.jsx
export function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        e.preventDefault();
        onChange(!checked);
      }}
      className={`relative flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-200 ${
        checked ? "border-ink bg-accent" : "border-line bg-surface2"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full shadow transition-transform duration-200 ${
          checked
            ? "translate-x-[22px] bg-accent-ink"
            : "translate-x-[3px] bg-muted"
        }`}
      />
    </button>
  );
}
