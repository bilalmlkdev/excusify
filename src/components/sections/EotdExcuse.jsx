// src/components/sections/EotdExcuse.jsx
import { useMemo } from "react";
import { excuses } from "../../data/excuses";
import { formatDate } from "../../utils/helpers";

// random (mulberry32)
function seededRandom(seed) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function getTodaySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function getEotd() {
  const seed = getTodaySeed();
  const sitKeys = Object.keys(excuses);
  const sitIndex = Math.floor(seededRandom(seed) * sitKeys.length);
  const sit = sitKeys[sitIndex];

  const toneKeys = Object.keys(excuses[sit]);
  const toneIndex = Math.floor(seededRandom(seed + 1) * toneKeys.length);
  const tone = toneKeys[toneIndex];

  const pool = excuses[sit][tone];
  const excuseIndex = Math.floor(seededRandom(seed + 2) * pool.length);

  return { excuse: pool[excuseIndex], situation: sit, tone };
}

export default function EotdExcuse({ onUse }) {
  const eotd = useMemo(() => getEotd(), []);
  const today = formatDate();

  return (
    <div className="rounded-xl border-2 border-ink bg-accent p-5 shadow-hard-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-ink">
            ✦ excuse of the day
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-accent-ink/70">
            {today}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded border-2 border-accent-ink/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-accent-ink">
            {eotd.situation}
          </span>
          <span className="rounded border-2 border-accent-ink/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-accent-ink">
            {eotd.tone}
          </span>
        </div>
      </div>

      <p className="flex items-start gap-2 font-serif text-xl italic leading-snug text-accent-ink">
        <span className="select-none font-mono text-sm font-bold not-italic">
          $
        </span>
        {eotd.excuse}
      </p>

      <button
        onClick={() => onUse(eotd)}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 border-accent-ink bg-accent px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-accent-ink shadow-hard-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
      >
        use this excuse <span aria-hidden>↗</span>
      </button>
    </div>
  );
}
