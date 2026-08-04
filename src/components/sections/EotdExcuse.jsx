// src/components/sections/EotdExcuse.jsx
import { useMemo } from "react";
import { excuses } from "../../data/excuses";
import { BsArrowUpRight } from "react-icons/bs";
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

export default function EotdExcuse({ isDark, onUse }) {
  const eotd = useMemo(() => getEotd(), []);
  const today = formatDate();

  // Use same colour palette as main card
  const wrap = isDark
    ? "border-zinc-800 bg-zinc-900"
    : "border-zinc-200 bg-white";
  const label = isDark ? "text-yellow-400" : "text-yellow-600";
  const meta = isDark ? "text-zinc-500" : "text-zinc-500";
  const text = isDark ? "text-zinc-200" : "text-zinc-700";
  const badge = isDark
    ? "border-zinc-700 text-zinc-400"
    : "border-zinc-200 text-zinc-500";
  const btn = isDark
    ? "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
    : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700";

  return (
    <div
      className={`w-full border rounded-xl p-5 transition-colors duration-300 ${wrap}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-sans font-semibold ${label}`}>
            ✦ excuse of the day
          </span>
          <span className={`text-[10px] font-sans ${meta}`}>{today}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-sans px-2 py-0.5 rounded border ${badge}`}
          >
            {eotd.situation}
          </span>
          <span
            className={`text-[10px] font-sans px-2 py-0.5 rounded border ${badge}`}
          >
            {eotd.tone}
          </span>
        </div>
      </div>

      <p className={`font-sans text-sm leading-relaxed mb-3 ${text}`}>
        <span className="text-emerald-400 mr-2">$</span>
        {eotd.excuse}
      </p>

      <button
        onClick={() => onUse(eotd)}
        className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${btn} flex items-center gap-1`}
      >
        use this excuse <BsArrowUpRight />
      </button>
    </div>
  );
}
