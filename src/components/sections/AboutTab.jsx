// src/components/sections/AboutTab.jsx
import { useEffect } from "react";
import { Code, Zap, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutTab({ totalCount, onClose }) {
  useEffect(() => {
    if (!onClose) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const stats = [
    { label: "version", value: "0.0.1" },
    {
      label: "status",
      value: "complete",
      accent: "text-accent",
      icon: <CheckCircle className="h-3 w-3" />,
    },
    { label: "situations", value: "6" },
    { label: "tones", value: "4" },
    { label: "excuses", value: "72 built-in" },
    { label: "deployed on", value: "vercel" },
    { label: "license", value: "MIT" },
    {
      label: "all-time",
      value: totalCount?.toLocaleString() ?? "0",
      accent: "text-accent",
    },
  ];

  const author = [
    {
      label: "built by",
      value: "Bilal Malik",
      href: "https://bilalmlkdev.vercel.app/",
      icon: <Code className="h-3 w-3" />,
    },
    {
      label: "github",
      value: "@bilalmlkdev",
      href: "https://github.com/bilalmlkdev",
      icon: <FaGithub className="h-3 w-3" />,
    },
    {
      label: "linkedin",
      value: "Bilal Malik",
      href: "https://linkedin.com/in/bilalmlkdev",
      icon: <FaLinkedin className="h-3 w-3" />,
    },
    {
      label: "twitter",
      value: "bilalmlkdev",
      href: "https://twitter.com/bilalmlkdev",
      icon: <FaXTwitter className="h-3 w-3" />,
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink bg-accent font-mono text-lg font-bold text-accent-ink shadow-hard-sm">
          ?
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">
            excusify
          </h1>
          <p className="font-mono text-[10px] text-muted">
            // because "i don't know" isn't always professional enough
          </p>
        </div>
        <span className="ml-auto rounded border-2 border-line px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink2">
          v0.0.1
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border-2 border-ink bg-surface p-4 shadow-hard-sm">
          <div className="mb-2.5 flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              stats
            </span>
          </div>
          <div className="space-y-2">
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between font-mono text-[11px]"
              >
                <span className="text-muted">{item.label}</span>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-bold ${item.accent || "text-ink2"}`}
                  >
                    {item.value}
                  </span>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border-2 border-ink bg-surface p-4 shadow-hard-sm">
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="text-accent">♥</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              author
            </span>
          </div>
          <div className="space-y-2">
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
                  className={`flex items-center justify-between font-mono text-[11px] transition-colors ${
                    item.href
                      ? "cursor-pointer rounded px-1 -mx-1 hover:bg-surface2"
                      : ""
                  }`}
                >
                  <span className="text-muted">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-ink2">{item.value}</span>
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
