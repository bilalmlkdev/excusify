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

  const bgClass =
    {
      info: "bg-zinc-800",
      success: "bg-emerald-600",
      error: "bg-red-600",
      warning: "bg-yellow-600",
    }[type] || "bg-zinc-800";

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-60 px-4 py-2.5 rounded-lg shadow-lg text-white font-sans text-sm ${bgClass}`}
    >
      {message}
    </div>
  );
}
