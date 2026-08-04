// src/hooks/useSettings.js
import { useLocalStorage } from "./useLocalStorage";
import { DEFAULT_SETTINGS, LS_SETTINGS } from "../data/constants";

export function useSettings() {
  const [settings, setSettings] = useLocalStorage(
    LS_SETTINGS,
    DEFAULT_SETTINGS,
  );

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]:
        key === "theme"
          ? prev.theme === "dark"
            ? "light"
            : "dark"
          : !prev[key],
    }));
  };

  const resetSettings = () => setSettings(DEFAULT_SETTINGS);

  return { settings, toggleSetting, resetSettings };
}
