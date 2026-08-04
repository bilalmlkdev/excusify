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
  isDark,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
      {/* Left Column */}
      <div className="flex flex-col gap-1">
        <SettingRow icon={isDark ? Moon : Sun} label="Theme" isDark={isDark}>
          <SegmentedControl
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ]}
            value={settings.theme}
            onChange={() => onToggle("theme")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Zap}
          label="Keyboard Shortcut"
          description="Press Space to generate"
          isDark={isDark}
        >
          <Toggle
            checked={settings.keyboardShortcut}
            onChange={() => onToggle("keyboardShortcut")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Copy}
          label="Auto Copy"
          description="Copy to clipboard on generate"
          isDark={isDark}
        >
          <Toggle
            checked={settings.autoCopy}
            onChange={() => onToggle("autoCopy")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Volume2}
          label="Sound Effects"
          description="Subtle audio feedback"
          isDark={isDark}
        >
          <Toggle
            checked={settings.sound}
            onChange={() => onToggle("sound")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Bell}
          label="Excuse of the Day"
          description="Show daily featured excuse"
          isDark={isDark}
        >
          <Toggle
            checked={settings.showEotd ?? true}
            onChange={() => onToggle("showEotd")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Layers}
          label="Active Hints"
          description="Feature pills in header"
          isDark={isDark}
        >
          <Toggle
            checked={settings.showHints ?? true}
            onChange={() => onToggle("showHints")}
            isDark={isDark}
          />
        </SettingRow>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-1">
        <SettingRow
          icon={Monitor}
          label="Update URL"
          description="Shareable link per excuse"
          isDark={isDark}
        >
          <Toggle
            checked={settings.updateUrl ?? true}
            onChange={() => onToggle("updateUrl")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={FileText}
          label="Save History"
          description="Persist last 10 excuses"
          isDark={isDark}
        >
          <Toggle
            checked={settings.saveHistory ?? true}
            onChange={() => onToggle("saveHistory")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Heart}
          label="Save Favorites"
          description="Persist starred excuses"
          isDark={isDark}
        >
          <Toggle
            checked={settings.saveFavorites ?? true}
            onChange={() => onToggle("saveFavorites")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Star}
          label="Tone in Share Card"
          description="Show tone label on export"
          isDark={isDark}
        >
          <Toggle
            checked={settings.toneInCard ?? true}
            onChange={() => onToggle("toneInCard")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={Database}
          label="Local Storage"
          description="Persist selections across reloads"
          isDark={isDark}
        >
          <Toggle
            checked={settings.localStorage}
            onChange={() => onToggle("localStorage")}
            isDark={isDark}
          />
        </SettingRow>
        <SettingRow
          icon={History}
          label="Session Counter"
          description="Show generation count"
          isDark={isDark}
        >
          <Toggle
            checked={settings.showCounter ?? true}
            onChange={() => onToggle("showCounter")}
            isDark={isDark}
          />
        </SettingRow>
      </div>
    </div>
  );
}
