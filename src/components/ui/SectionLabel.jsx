// src/components/ui/SectionLabel.jsx
export function SectionLabel({ children, isDark }) {
  return (
    <p
      className={`text-[10px] font-sans font-semibold uppercase tracking-widest mb-3 ${
        isDark ? "text-zinc-600" : "text-zinc-400"
      }`}
    >
      {children}
    </p>
  );
}
