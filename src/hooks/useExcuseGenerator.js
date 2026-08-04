// src/hooks/useExcuseGenerator.js
import { useState, useCallback } from "react";
import { excuses } from "../data/excuses";
import { useLocalStorage } from "./useLocalStorage";
import {
  STORED_HISTORY_LIMIT,
  MAX_FAVORITES,
  LS_HISTORY,
  LS_FAVORITES,
  LS_TOTAL,
} from "../data/constants";
import { playPop } from "../lib/audio";
import { buildShareUrl } from "../utils/url";

export function useExcuseGenerator(settings, showToast) {
  const [history, setHistory] = useLocalStorage(LS_HISTORY, []);
  const [favorites, setFavorites] = useLocalStorage(LS_FAVORITES, []);
  const [totalCount, setTotalCount] = useLocalStorage(LS_TOTAL, 0);
  const [count, setCount] = useState(0);
  const [excuse, setExcuse] = useState(null);
  const [rated, setRated] = useState(null);
  const [copied, setCopied] = useState(false);
  const [customTone, setCustomTone] = useState(null);

  const generate = useCallback(
    (activeSit, activeTone) => {
      const pool = excuses[activeSit][activeTone];
      let next = pool[Math.floor(Math.random() * pool.length)];
      if (pool.length > 1) {
        while (next === excuse)
          next = pool[Math.floor(Math.random() * pool.length)];
      }

      setExcuse(next);
      setCustomTone(null);
      setRated(null);
      setCopied(false);
      setCount((c) => c + 1);
      setTotalCount((c) => c + 1);

      setHistory((prev) => {
        const entry = { excuse: next, situation: activeSit, tone: activeTone };
        return [entry, ...prev.filter((h) => h.excuse !== next)].slice(
          0,
          STORED_HISTORY_LIMIT,
        );
      });

      if (settings.sound) playPop();
      if (settings.autoCopy) {
        navigator.clipboard.writeText(next);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        showToast("Copied to clipboard", "success");
      }
      if (settings.updateUrl) {
        window.history.replaceState(
          {},
          "",
          buildShareUrl(activeSit, activeTone, next),
        );
      }

      return { excuse: next, situation: activeSit, tone: activeTone };
    },
    [excuse, settings, setHistory, setTotalCount, setCount, showToast],
  );

  const handleFavorite = useCallback(
    (excuseText, situation, tone) => {
      const entry = { excuse: excuseText, situation, tone };
      setFavorites((prev) => {
        const already = prev.some((f) => f.excuse === excuseText);
        if (already) {
          showToast("Removed from favorites", "info");
          return prev.filter((f) => f.excuse !== excuseText);
        }
        showToast("Added to favorites", "success");
        return [entry, ...prev].slice(0, MAX_FAVORITES);
      });
    },
    [setFavorites, showToast],
  );

  const handleCopy = useCallback(() => {
    if (!excuse) return;
    navigator.clipboard.writeText(excuse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast("Copied", "success");
  }, [excuse, showToast]);

  const handleRate = useCallback(
    (val) => {
      if (rated) return;
      setRated(val);
    },
    [rated],
  );

  const handleUseEotd = useCallback(
    ({ excuse: e, situation, tone }) => {
      setExcuse(e);
      setCustomTone({ situation, tone });
      setRated(null);
      setCopied(false);
      setCount((c) => c + 1);
      setTotalCount((c) => c + 1);
      setHistory((prev) =>
        [
          { excuse: e, situation, tone },
          ...prev.filter((h) => h.excuse !== e),
        ].slice(0, STORED_HISTORY_LIMIT),
      );
      if (settings.updateUrl) {
        window.history.replaceState({}, "", buildShareUrl(situation, tone, e));
      }
      showToast("Excuse of the Day loaded", "info");
    },
    [settings, setHistory, setTotalCount, setCount, showToast],
  );

  return {
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
    setCopied,
  };
}
