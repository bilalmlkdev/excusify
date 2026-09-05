// src/components/sections/ExcuseCard/ExcuseShareOptions.jsx
import { memo } from "react";
import { IconDownload, IconTwitter, IconLinkedIn } from "../../ui/Icons";

export const ExcuseShareOptions = memo(
  ({
    onSaveImage,
    onSlackBlock,
    onSlackShare,
    onTwitterShare,
    onLinkedInShare,
    onWhatsAppShare,
  }) => {
    const btn =
      "inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted transition-all hover:border-ink hover:text-ink hover:shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

    return (
      <div className="flex flex-wrap gap-2">
        <button onClick={onSaveImage} className={btn}>
          <IconDownload className="h-3 w-3" /> save image
        </button>
        <button onClick={onSlackBlock} className={btn}>
          slack block
        </button>
        <button onClick={onSlackShare} className={btn}>
          slack
        </button>
        <button onClick={onTwitterShare} className={btn}>
          <IconTwitter className="h-3 w-3" /> twitter
        </button>
        <button onClick={onLinkedInShare} className={btn}>
          <IconLinkedIn className="h-3 w-3" /> linkedin
        </button>
        <button onClick={onWhatsAppShare} className={btn}>
          whatsapp
        </button>
      </div>
    );
  },
);
