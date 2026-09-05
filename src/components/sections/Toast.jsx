// src/components/sections/Toast.jsx
import { useEffect } from "react";

export default function Toast({
  message,
  type = "info",
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const cls = {
    info: "bg-ink text-paper",
    success: "bg-accent text-accent-ink",
    error: "bg-signal text-white",
    warning: "bg-orange text-ink",
  }[type] || "bg-ink text-paper";

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-md border-2 border-ink px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wide shadow-hard ${cls}`}
    >
      {message}
    </div>
  );
}
