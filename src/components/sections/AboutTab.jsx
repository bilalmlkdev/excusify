// src/components/sections/AboutTab.jsx
import { useEffect } from "react";
import {
  Code,
  Heart,
  Zap,
  CheckCircle,
  Box,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutTab({ isDark, totalCount, onClose }) {
  useEffect(() => {
    if (!onClose) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Theme-aware classes – compact & crisp
  const textPrimary = isDark ? "text-white" : "text-zinc-900";
  const textSecondary = isDark ? "text-zinc-400" : "text-zinc-600";
  const textMuted = isDark ? "text-zinc-600" : "text-zinc-400";
  const cardBg = isDark ? "bg-zinc-900/60" : "bg-white/60";
  const borderCl = isDark ? "border-zinc-800" : "border-zinc-200";
  // const divider = isDark ? "divide-zinc-800" : "divide-zinc-200";

  const stats = [
    { label: "Version", value: "0.0.1" },
    {
      label: "Status",
      value: "Complete",
      accent: "text-emerald-500",
      icon: <CheckCircle className="w-3 h-3" />,
    },
    { label: "Situations", value: "6" },
    { label: "Tones", value: "4" },
    { label: "Excuses", value: "72 built-in" },
    { label: "Deployed on", value: "Vercel" },
    { label: "License", value: "MIT" },
    {
      label: "All-time",
      value: totalCount?.toLocaleString() ?? "0",
      accent: "text-emerald-500",
    },
  ];

  const author = [
    {
      label: "Built by",
      value: "Bilal Malik",
      href: "https://bilalmlkdev.verce.app/",
      icon: <Code className="w-3 h-3" />,
    },
    {
      label: "GitHub",
      value: "@byllzz",
      href: "https://github.com/byllzz",
      accent: "text-emerald-500",
      icon: <FaGithub className="w-3 h-3" />,
    },
    {
      label: "LinkedIn",
      value: "Bilal Malik",
      href: "https://linkedin.com/in/bilalmlkdev",
      accent: "text-emerald-500",
      icon: <FaLinkedin className="w-3 h-3" />,
    },
    {
      label: "Twitter",
      value: "bilalmlkdev",
      href: "https://twitter.com/bilalmlkdev",
      accent: "text-emerald-500",
      icon: <FaXTwitter className="w-3 h-3" />,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Compact header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Box
            className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
          />
          <h1 className={`text-2xl font-bold tracking-tight ${textPrimary}`}>
            excusify
          </h1>
        </div>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${isDark ? "border-zinc-700 text-zinc-400" : "border-zinc-300 text-zinc-500"}`}
        >
          v0.0.1
        </span>
      </div>
      <p className={`text-xs font-mono ${textSecondary} -mt-1`}>
        // because "i don't know" isn't always professional enough
      </p>

      {/* Stats grid – 2 columns on larger screens, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className={`rounded-xl border ${borderCl} ${cardBg} backdrop-blur-sm p-3 shadow-sm`}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Zap className={`w-3.5 h-3.5 ${textMuted}`} />
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider ${textMuted}`}
            >
              Stats
            </span>
          </div>
          <div className="space-y-1.5">
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-[11px]"
              >
                <span className={isDark ? "text-zinc-500" : "text-zinc-500"}>
                  {item.label}
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-medium ${item.accent || (isDark ? "text-zinc-200" : "text-zinc-700")}`}
                  >
                    {item.value}
                  </span>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-xl border ${borderCl} ${cardBg} backdrop-blur-sm p-3 shadow-sm`}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Heart className={`w-3.5 h-3.5 ${textMuted}`} />
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider ${textMuted}`}
            >
              Author
            </span>
          </div>
          <div className="space-y-1.5">
            {author.map((item, i) => {
              const Row = item.href ? "a" : "div";
              const rowProps = item.href
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};
              return (
                <Row
                  key={i}
                  {...rowProps}
                  className={`flex items-center justify-between text-[11px] transition-colors ${
                    item.href
                      ? `cursor-pointer hover:bg-zinc-800/20 dark:hover:bg-zinc-800/40 rounded px-1 -mx-1`
                      : ""
                  }`}
                >
                  <span className={isDark ? "text-zinc-500" : "text-zinc-500"}>
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`font-medium ${item.accent || (isDark ? "text-zinc-200" : "text-zinc-700")}`}
                    >
                      {item.value}
                    </span>
                    {item.icon}
                  </div>
                </Row>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
