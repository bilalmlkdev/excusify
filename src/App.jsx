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
import PixelBlast from "./components/backgrounds/PixelBlast";
import HeaderButtons from "./components/layout/HeaderButtons";
import { Loader } from "./components/ui/Loader";

export default function App() {
  const { settings, toggleSetting, resetSettings } = useSettings();
  const isDark = settings.theme === "dark";
  const { toast, showToast } = useToast();

  // ─── Loader state ──────────────────────────────────────────────────
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ─── Core state ────────────────────────────────────────────────────
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
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(true);

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

  // Restore excuse from saved state or URL on first load
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

  // ─── Refined Theme Classes ──────────────────────────────────────────
  const bg = isDark ? "bg-zinc-950" : "bg-zinc-50";
  const cardBg = isDark ? "bg-zinc-900" : "bg-white";
  const cardBorder = isDark ? "border-zinc-800" : "border-zinc-200";
  const textPrimary = isDark ? "text-zinc-100" : "text-zinc-900";
  const textSecondary = isDark ? "text-zinc-400" : "text-zinc-600";
  const btnPrimary = isDark
    ? "bg-zinc-100 text-zinc-900 hover:bg-white"
    : "bg-zinc-900 text-white hover:bg-zinc-800";
  const hintPill = isDark
    ? "border-zinc-700 text-zinc-400"
    : "border-zinc-200 text-zinc-500";

  return (
    <div
      className={`min-h-screen ${bg} transition-colors duration-500 font-sans selection:bg-emerald-500 selection:text-white dark:selection:bg-emerald-400 dark:selection:text-zinc-950`}
    >
      {/* Loader overlay – above everything */}
      {isLoading && <Loader isDark={isDark} />}

      {/* Background – fixed, full screen, behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <PixelBlast
    variant="square"
    pixelSize={4}
    color="#B497CF"
    patternScale={2}
    patternDensity={1}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.5}
    edgeFade={0.25}
    transparent
  />
      </div>

      {/* Main content – above background */}
      <div className="relative z-10 flex justify-center p-6 md:p-12 lg:p-16">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          <Header
            title="Excusify."
            subtitle={`Because "I don't know" isn't always professional enough.`}
            hints={
              settings.showHints
                ? [
                    settings.keyboardShortcut && "Space to Generate",
                    settings.autoCopy && "Auto-Copy On",
                    settings.sound && "Sound On",
                  ].filter(Boolean)
                : null
            }
            isDark={isDark}
            titleClass={textPrimary}
            subtitleClass={textSecondary}
            hintClass={hintPill}
          >
            <HeaderButtons
              isDark={isDark}
              onSettings={() => setPanelOpen(true)}
              onHistory={() => setTabOpen("history")}
              onFavorites={() => setTabOpen("favs")}
              onAbout={() => setTabOpen("about")}
              onKeyboardHelp={() => setShowKeyboardHelp(true)}
              historyCount={history.length}
              favoritesCount={favorites.length}
            />
          </Header>

          <MainGrid
            left={
              <ControlsPanel
                activeSit={activeSit}
                activeTone={activeTone}
                onSitChange={setActiveSit}
                onToneChange={setActiveTone}
                onGenerate={() => generate(activeSit, activeTone)}
                isDark={isDark}
                cardBg={cardBg}
                cardBorder={cardBorder}
                btnPrimary={btnPrimary}
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
                isDark={isDark}
                showEotd={settings.showEotd}
                onUseEotd={handleUseEotd}
                showCounter={settings.showCounter}
                count={count}
                textSecondary={textSecondary}
              />
            }
          />

          <FooterStats totalCount={totalCount} textSecondary={textSecondary} />
        </div>
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
        isDark={isDark}
        favorites={favorites}
        onClearFavorites={() => setFavorites([])}
        history={history}
        onClearHistory={() => setHistory([])}
        totalCount={totalCount}
      />

      <KeyboardHelpModal
        open={showKeyboardHelp}
        onClose={() => setShowKeyboardHelp(false)}
        isDark={isDark}
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
