// src/components/layout/Header.jsx
import { memo } from "react";

export const Header = memo(({ title, subtitle, hints, isDark, children }) => {
  const hintCl = isDark
    ? "border-emerald-500/30 bg-emerald-500 text-white"
    : "border-emerald-500/20 bg-emerald-500 text-white";
  const titleCl = isDark ? "text-white" : "text-black";
  const subCl = isDark ? "text-white" : "text-black";

  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1
          className={`text-4xl lg:text-5xl font-serif tracking-tight ${titleCl}`}
        >
          {title}
        </h1>
        <div className="flex items-center gap-2">{children}</div>
      </div>
      <p className={`font-serif italic text-lg ${subCl}`}>{subtitle}</p>
      {hints && (
        <div className="flex gap-2 flex-wrap pt-1">
          {hints.map((hint, i) => (
            <span
              key={i}
              className={`text-[10px] font-sans tracking-wide uppercase px-2 py-1 rounded-md border flex items-center gap-1.5 ${hintCl}`}
            >
              <span className="text-[10px]">⚙</span>
              {hint}
            </span>
          ))}
        </div>
      )}
    </header>
  );
});
