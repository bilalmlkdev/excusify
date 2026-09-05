// src/components/layout/FooterStats.jsx
import pkg from "../../../package.json";

function parseRepoUrl(url) {
  if (!url) return null;
  const cleaned = url.replace(/^git\+/, "").replace(/\.git$/, "");
  try {
    const u = new URL(cleaned);
    const parts = u.pathname.replace(/^\//, "").split("/");
    if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
  } catch {}
  const m = cleaned.match(/github.com[:/]([^/]+)\/(.+)$/);
  if (m) return { owner: m[1], repo: m[2].replace(/\.git$/, "") };
  return null;
}

export function FooterStats({ totalCount, className = "" }) {
  const repoUrl = pkg.repository?.url || pkg.homepage || null;
  const parsed = parseRepoUrl(repoUrl);
  const repoLink = parsed
    ? `https://github.com/${parsed.owner}/${parsed.repo}`
    : repoUrl;

  return (
    <div
      className={`${className} flex flex-col gap-2 border-t-2 border-line pt-5`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink2">
          Excusify · open source
        </p>
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-ink2 transition-colors hover:text-ink"
          >
            github
            <span aria-hidden className="font-sans leading-none">↗</span>
          </a>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        {totalCount > 0 && (
          <p className="font-serif text-sm italic text-ink2">
            {totalCount.toLocaleString()} excuses generated since inception.
          </p>
        )}
        <span className="font-mono text-[10px] text-muted">
          v{pkg.version || "0.0.1"}
        </span>
      </div>
    </div>
  );
}
