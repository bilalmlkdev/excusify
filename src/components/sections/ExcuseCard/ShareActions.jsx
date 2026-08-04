// src/components/sections/ExcuseCard/ShareActions.jsx
import { memo } from "react";
import {
  shareToTwitter,
  shareToLinkedIn,
  shareToWhatsApp,
  shareToSlack,
  copySlackBlock,
  downloadCardImage,
} from "../../../lib/share";
import { IconDownload, IconTwitter, IconLinkedIn } from "../../ui/Icons";

export const ShareActions = memo(
  ({ excuse, situation, tone, cardRef, isDark }) => {
    const inactiveBtn = isDark
      ? "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
      : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700";

    return (
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => downloadCardImage(cardRef.current)}
          className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${inactiveBtn} flex items-center gap-2`}
        >
          <IconDownload className="w-3.5 h-3.5" /> save image
        </button>
        <button
          onClick={() => copySlackBlock(excuse, situation, tone)}
          className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${inactiveBtn} flex items-center gap-2`}
        >
          slack block
        </button>
        <button
          onClick={() => shareToSlack(excuse, situation, tone)}
          className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${inactiveBtn} flex items-center gap-2`}
        >
          <IconTwitter className="w-3.5 h-3.5" /> twitter
        </button>
        <button
          onClick={() => shareToLinkedIn(excuse, situation)}
          className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${inactiveBtn} flex items-center gap-2`}
        >
          <IconLinkedIn className="w-3.5 h-3.5" /> linkedin
        </button>
        <button
          onClick={() => shareToWhatsApp(excuse, situation, tone)}
          className={`text-xs font-sans px-3 py-1 rounded-md border transition-all cursor-pointer ${inactiveBtn} flex items-center gap-2`}
        >
          <IconDownload className="w-3.5 h-3.5" /> whatsapp
        </button>
      </div>
    );
  },
);
