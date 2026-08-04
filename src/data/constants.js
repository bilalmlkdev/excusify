// src/data/constants.js
export const MAX_FAVORITES = 20;
export const STORED_HISTORY_LIMIT = 1000;
export const DISPLAY_HISTORY = 10;
export const LS_KEY = "excusify_state";
export const LS_SETTINGS = "excusify_settings";
export const LS_SETTINGS_TAB = "excusify_settings_tab";
export const LS_QUICK_TAB = "excusify_quick_tab";
export const LS_HISTORY = "excusify_history";
export const LS_FAVORITES = "excusify_favorites";
export const LS_TOTAL = "excusify_total";

export const DEFAULT_SETTINGS = {
  localStorage: true,
  autoCopy: false,
  keyboardShortcut: true,
  sound: true,
  theme: "light",
  showEotd: true,
  showHints: true,
  showCounter: true,
  updateUrl: true,
  toneInCard: true,
  saveHistory: true,
  saveFavorites: true,
  saveCounter: true,
};
