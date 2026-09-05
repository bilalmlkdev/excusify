// src/components/sections/SettingsPanel/SettingsTab.jsx
import {
  SectionLabel,
  Card,
  SettingRow,
  Toggle,
  SegmentedControl,
} from "../../ui";
import {
  Sun,
  Moon,
  Zap,
  Copy,
  Volume2,
  Bell,
  Layers,
  Monitor,
  FileText,
  Heart,
  Star,
  Database,
  History,
} from "lucide-react";

export default function SettingsTab({
  settings,
  onToggle,
  onClearData,
  onClearHistory,
  onClearFavorites,
  onResetSettings,
}) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-2">
      {/* Left Column */}
      <div className="flex flex-col gap-1">
        <SettingRow icon={settings.theme === "dark" ? Moon : Sun} label="Theme">
          <SegmentedControl
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ]}
            value={settings.theme}
            onChange={() => onToggle("theme")}
          />
        </SettingRow>
        <SettingRow
          icon={Zap}
          label="Keyboard Shortcut"
          description="Press Space to generate"
        >
          <Toggle
            checked={settings.keyboardShortcut}
            onChange={() => onToggle("keyboardShortcut")}
          />
        </SettingRow>
        <SettingRow
          icon={Copy}
          label="Auto Copy"
          description="Copy to clipboard on generate"
        >
          <Toggle
            checked={settings.autoCopy}
            onChange={() => onToggle("autoCopy")}
          />
        </SettingRow>
        <SettingRow
          icon={Volume2}
          label="Sound Effects"
          description="Subtle audio feedback"
        >
          <Toggle checked={settings.sound} onChange={() => onToggle("sound")} />
        </SettingRow>
        <SettingRow
          icon={Bell}
          label="Excuse of the Day"
          description="Show daily featured excuse"
        >
          <Toggle
            checked={settings.showEotd ?? true}
            onChange={() => onToggle("showEotd")}
          />
        </SettingRow>
        <SettingRow
          icon={Layers}
          label="Active Hints"
          description="Feature pills in header"
        >
          <Toggle
            checked={settings.showHints ?? true}
            onChange={() => onToggle("showHints")}
          />
        </SettingRow>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-1">
        <SettingRow
          icon={Monitor}
          label="Update URL"
          description="Shareable link per excuse"
        >
          <Toggle
            checked={settings.updateUrl ?? true}
            onChange={() => onToggle("updateUrl")}
          />
        </SettingRow>
        <SettingRow
          icon={FileText}
          label="Save History"
          description="Persist excuse history"
        >
          <Toggle
            checked={settings.saveHistory ?? true}
            onChange={() => onToggle("saveHistory")}
          />
        </SettingRow>
        <SettingRow
          icon={Heart}
          label="Save Favorites"
          description="Persist starred excuses"
        >
          <Toggle
            checked={settings.saveFavorites ?? true}
            onChange={() => onToggle("saveFavorites")}
          />
        </SettingRow>
        <SettingRow
          icon={Star}
          label="Tone in Share Card"
          description="Show tone label on export"
        >
          <Toggle
            checked={settings.toneInCard ?? true}
            onChange={() => onToggle("toneInCard")}
          />
        </SettingRow>
        <SettingRow
          icon={Database}
          label="Local Storage"
          description="Persist selections across reloads"
        >
          <Toggle
            checked={settings.localStorage}
            onChange={() => onToggle("localStorage")}
          />
        </SettingRow>
        <SettingRow
          icon={History}
          label="Session Counter"
          description="Show generation count"
        >
          <Toggle
            checked={settings.showCounter ?? true}
            onChange={() => onToggle("showCounter")}
          />
        </SettingRow>
      </div>
    </div>
  );
}
