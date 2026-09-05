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

const btn =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted transition-all hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export const ShareActions = memo(({ excuse, situation, tone, cardRef }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => downloadCardImage(cardRef.current)}
        className={btn}
      >
        <IconDownload className="h-3 w-3" /> save image
      </button>
      <button
        onClick={() => copySlackBlock(excuse, situation, tone)}
        className={btn}
      >
        slack block
      </button>
      <button
        onClick={() => shareToSlack(excuse, situation, tone)}
        className={btn}
      >
        slack
      </button>
      <button
        onClick={() => shareToTwitter(excuse, situation, tone)}
        className={btn}
      >
        <IconTwitter className="h-3 w-3" /> twitter
      </button>
      <button
        onClick={() => shareToLinkedIn(excuse, situation)}
        className={btn}
      >
        <IconLinkedIn className="h-3 w-3" /> linkedin
      </button>
      <button
        onClick={() => shareToWhatsApp(excuse, situation, tone)}
        className={btn}
      >
        whatsapp
      </button>
    </div>
  );
});
