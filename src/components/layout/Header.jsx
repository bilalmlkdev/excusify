// src/components/layout/Header.jsx
import { memo } from "react";

export const Header = memo(({ title, subtitle, hints, children }) => {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* logo mark */}
          <div className="flex h-14 w-14 flex-shrink-0 select-none items-center justify-center rounded-xl border-2 border-ink bg-accent font-mono text-2xl font-bold text-accent-ink shadow-hard">
            ?
          </div>
          <div className="mt-1">
            <h1 className="text-4xl font-bold tracking-tight text-ink lg:text-5xl">
              {title}
            </h1>
            <p className="mt-1 font-serif text-lg italic text-ink2">{subtitle}</p>
            {hints && (
              <div className="mt-3 flex flex-wrap gap-2">
                {hints.map((hint, i) => (
                  <span key={i} className="tag">
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    {hint}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </header>
  );
});
