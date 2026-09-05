// src/components/ui/SettingRow.jsx
export function SettingRow({ icon: Icon, label, description, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <Icon className="h-4 w-4 flex-shrink-0 text-muted" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-ink">{label}</span>
          {description && (
            <span className="text-xs text-muted">{description}</span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}
