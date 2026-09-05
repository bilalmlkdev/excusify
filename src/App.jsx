// src/App.jsx
import { useState, useEffect } from "react";
import { useSettings } from "./hooks/useSettings";
import { useExcuseGenerator } from "./hooks/useExcuseGenerator";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { useToast } from "./hooks/useToast";
import { readUrlParams } from "./utils/url";
import { load } from "./utils/storage";
import { LS_KEY, LS_QUICK_TAB } from "./data/constants";
import { Header, MainGrid, FooterStats } from "./components/layout";
import {
  ControlsPanel,
  OutputPanel,
  SettingsPanel,
} from "./components/sections";
import QuickTabModal from "./components/modals/QuickTabModal";
import KeyboardHelpModal from "./components/modals/KeyboardHelpModal";
import Toast from "./components/sections/Toast";
import HeaderButtons from "./components/layout/HeaderButtons";
import { Loader } from "./components/ui/Loader";

const TICKER = [
  "bug still exists",
  "missed deadline",
  "prod went down",
  "deploy failed",
  "missed standup",
  "pr not reviewed",
  "professional",
  "chaotic",
  "desperate",
  "corporate bs",
];

export default function App() {
  const { settings, toggleSetting, resetSettings } = useSettings();
  const isDark = settings.theme === "dark";
  const { toast, showToast, setToast } = useToast();

  const [isLoading, setIsLoading] = useState(
    () => !new URLSearchParams(window.location.search).has("preview"),
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const [activeSit, setActiveSit] = useState(() => {
    const fromUrl = readUrlParams();
    const saved = settings.localStorage ? load(LS_KEY, null) : null;
    return fromUrl?.situation ?? saved?.activeSit ?? "bug still exists";
  });
  const [activeTone, setActiveTone] = useState(() => {
    const fromUrl = readUrlParams();
    const saved = settings.localStorage ? load(LS_KEY, null) : null;
    return fromUrl?.tone ?? saved?.activeTone ?? "professional";
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(() => load(LS_QUICK_TAB, null));
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);

  const {
    excuse,
    rated,
    copied,
    customTone,
    history,
    favorites,
    count,
    totalCount,
    generate,
    handleFavorite,
    handleCopy,
    handleRate,
    handleUseEotd,
    setHistory,
    setFavorites,
    setExcuse,
    setCustomTone,
    setRated,
    setCount,
  } = useExcuseGenerator(settings, showToast);

  useEffect(() => {
    const fromUrl = readUrlParams();
    const saved = settings.localStorage ? load(LS_KEY, null) : null;

    if (fromUrl) {
      setExcuse(fromUrl.excuse);
      setActiveSit(fromUrl.situation);
      setActiveTone(fromUrl.tone);
      setCustomTone(null);
    } else if (saved) {
      setExcuse(saved.excuse || null);
      setRated(saved.rated || null);
      setCount(saved.count || 0);
      setCustomTone(null);
    }
  }, []);

  const currentSituation = customTone ? customTone.situation : activeSit;
  const currentTone = customTone ? customTone.tone : activeTone;
  const isFavorite = favorites.some((f) => f.excuse === excuse);

  useKeyboardShortcuts({
    onSpace: () => {
      if (!panelOpen && !tabOpen) generate(activeSit, activeTone);
    },
    onQuestion: () => setShowKeyboardHelp(true),
    onS: () =>
      document
        .getElementById("situation-picker")
        ?.querySelector("button")
        ?.focus(),
    onT: () =>
      document.getElementById("tone-picker")?.querySelector("button")?.focus(),
    onC: () => handleCopy(),
    onF: () => handleFavorite(excuse, currentSituation, currentTone),
    enabled: settings.keyboardShortcut,
    panelOpen,
    tabOpen,
  });

  return (
    <div
      className={`h-screen overflow-x-clip lg:overflow-hidden bg-paper font-sans text-ink transition-colors duration-300 ${
        isDark ? "theme-dark" : "theme-light"
      }`}
    >
      {isLoading && <Loader />}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Header
          title="Excusify."
          subtitle={`Because "I don't know" isn't always professional enough.`}
          hints={
            settings.showHints
              ? [
                  settings.keyboardShortcut && "space to generate",
                  settings.autoCopy && "auto-copy on",
                  settings.sound && "sound on",
                ].filter(Boolean)
              : null
          }
        >
          <HeaderButtons
            onSettings={() => setPanelOpen(true)}
            onHistory={() => setTabOpen("history")}
            onFavorites={() => setTabOpen("favs")}
            onAbout={() => setTabOpen("about")}
            onKeyboardHelp={() => setShowKeyboardHelp(true)}
            historyCount={history.length}
            favoritesCount={favorites.length}
          />
        </Header>

        <div
          aria-hidden
          className="relative overflow-hidden rounded-lg border-2 border-ink bg-surface"
        >
          <div className="ticker-track flex w-max items-center py-2">
            {[0, 1].map((key) => (
              <span key={key} className="flex items-center">
                {TICKER.map((word) => (
                  <span
                    key={word + key}
                    className="mx-5 inline-flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink2"
                  >
                    {word}
                    <span className="text-accent">▪</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <MainGrid
          left={
            <ControlsPanel
              activeSit={activeSit}
              activeTone={activeTone}
              onSitChange={setActiveSit}
              onToneChange={setActiveTone}
              onGenerate={() => generate(activeSit, activeTone)}
            />
          }
          right={
            <OutputPanel
              excuse={excuse}
              situation={currentSituation}
              tone={currentTone}
              onCopy={handleCopy}
              copied={copied}
              onRate={handleRate}
              rated={rated}
              isFavorite={isFavorite}
              onFavorite={() =>
                handleFavorite(excuse, currentSituation, currentTone)
              }
              showEotd={settings.showEotd}
              onUseEotd={handleUseEotd}
              showCounter={settings.showCounter}
              count={count}
            />
          }
        />

        <FooterStats totalCount={totalCount} />
      </div>

      <SettingsPanel
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        settings={settings}
        onToggle={toggleSetting}
        onClearData={() => {
          localStorage.removeItem(LS_KEY);
          setExcuse(null);
          setRated(null);
          setCount(0);
          setActiveSit("bug still exists");
          setActiveTone("professional");
          setCustomTone(null);
          window.history.replaceState({}, "", window.location.pathname);
          showToast("All saved data cleared", "warning");
        }}
        onResetSettings={resetSettings}
        onClearHistory={() => setHistory([])}
        onClearFavorites={() => setFavorites([])}
      />

      <QuickTabModal
        open={tabOpen}
        onClose={() => setTabOpen(null)}
        tab={tabOpen}
        favorites={favorites}
        onClearFavorites={() => setFavorites([])}
        history={history}
        onClearHistory={() => setHistory([])}
        totalCount={totalCount}
      />

      <KeyboardHelpModal
        open={showKeyboardHelp}
        onClose={() => setShowKeyboardHelp(false)}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
