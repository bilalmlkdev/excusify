// src/components/ui/Loader.jsx
export function Loader({ isDark }) {
  const bg = isDark ? "bg-zinc-950" : "bg-zinc-50";
  const spinnerCl = isDark
    ? "border-zinc-700 border-t-emerald-400"
    : "border-zinc-300 border-t-emerald-500";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${bg} transition-colors duration-500 pointer-events-auto`}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className={`w-10 h-10 border-4 rounded-full animate-spin ${spinnerCl}`}
        />
      </div>
    </div>
  );
}
