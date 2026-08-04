// src/components/layout/FooterStats.jsx
import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import pkg from "../../../package.json";
import { FaGithub } from "react-icons/fa";

function parseRepoUrl(url) {
  if (!url) return null;
  const cleaned = url.replace(/^git\+/, "").replace(/\.git$/, "");
  try {
    const u = new URL(cleaned);
    const parts = u.pathname.replace(/^\//, "").split("/");
    if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
  } catch {}
  const m = cleaned.match(/github.com[:\/]([^/]+)\/(.+)$/);
  if (m) return { owner: m[1], repo: m[2].replace(/\.git$/, "") };
  return null;
}

export function FooterStats({ totalCount, isDark, className = "" }) {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(false);

  const repoUrl = pkg.repository?.url || pkg.homepage || null;
  const parsed = parseRepoUrl(repoUrl);
  const repoLink = parsed
    ? `https://github.com/${parsed.owner}/${parsed.repo}`
    : repoUrl;

  useEffect(() => {
    if (!parsed) return;
    let mounted = true;
    setLoading(true);
    fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (mounted) setStars(data.stargazers_count);
      })
      .catch(() => {
        if (mounted) setStars(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [parsed]);

  // Force color with !important to override any inheritance
  const textCl = isDark ? "text-white!" : "text-black!";
  const hoverCl = isDark
    ? "hover:text-zinc-200 hover:border-zinc-500"
    : "hover:text-zinc-900 hover:border-zinc-300";

  return (
    <div
      className={`${className} pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-2`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p
          className={`font-sans text-[11px] uppercase tracking-tight font-semibold ${textCl}`}
        >
          Excusify · Open Source
        </p>
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors ${textCl} ${hoverCl}`}
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-1.5">
        {totalCount > 0 && (
          <p className={`font-serif italic text-sm opacity-80 ${textCl}`}>
            {totalCount.toLocaleString()} excuses generated since inception.
          </p>
        )}
        {stars !== null && (
          <div className={`flex items-center gap-1 text-[11px] ${textCl}`}>
            <Star
              className={`w-3.5 h-3.5 ${isDark ? "text-yellow-400/70" : "text-yellow-500/70"}`}
            />
            <span>{stars.toLocaleString()}</span>
          </div>
        )}
        {loading && (
          <span className={`text-[10px] ${textCl}`}>Loading stars…</span>
        )}
      </div>
    </div>
  );
}
