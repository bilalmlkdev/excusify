// src/hooks/useKeyboardShortcuts.js
import { useEffect } from "react";

export function useKeyboardShortcuts({
  onSpace,
  onQuestion,
  onS,
  onT,
  onC,
  onF,
  enabled = true,
  panelOpen = false,
  tabOpen = false,
}) {
  useEffect(() => {
    if (!enabled) return;
    function handler(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const targetTag = e.target?.tagName?.toLowerCase();
      if (targetTag === "input" || targetTag === "textarea") return;

      if (e.key === "?") {
        e.preventDefault();
        onQuestion?.();
        return;
      }

      if (e.key.toLowerCase() === "s") {
        const el = document
          .getElementById("situation-picker")
          ?.querySelector("button");
        if (el) {
          e.preventDefault();
          el.focus();
        }
        return;
      }

      if (e.key.toLowerCase() === "t") {
        const el = document
          .getElementById("tone-picker")
          ?.querySelector("button");
        if (el) {
          e.preventDefault();
          el.focus();
        }
        return;
      }

      if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        onC?.();
        return;
      }

      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        onF?.();
        return;
      }

      if (
        e.code === "Space" &&
        e.target === document.body &&
        !panelOpen &&
        !tabOpen
      ) {
        e.preventDefault();
        onSpace?.();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [enabled, panelOpen, tabOpen, onSpace, onQuestion, onS, onT, onC, onF]);
}
