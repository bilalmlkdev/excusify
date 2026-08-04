// src/components/ui/SettingRow.jsx
export function SettingRow({
  icon: Icon,
  label,
  description,
  children,
  isDark,
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Icon
          className={`w-4 h-4 flex-shrink-0 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        />
        <div className="flex flex-col">
          <span
            className={`text-sm font-medium ${isDark ? "text-zinc-200" : "text-zinc-800"}`}
          >
            {label}
          </span>
          {description && (
            <span
              className={`text-xs ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
            >
              {description}
            </span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}
