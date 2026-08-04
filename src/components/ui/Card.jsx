// src/components/ui/Card.jsx
export function Card({ children, isDark, className = "" }) {
  return (
    <div
      className={`rounded-xl border divide-y mb-5 ${className} ${
        isDark
          ? "border-zinc-800 divide-zinc-800 bg-zinc-800/30"
          : "border-zinc-200 divide-zinc-100 bg-zinc-50"
      }`}
    >
      {children}
    </div>
  );
}
