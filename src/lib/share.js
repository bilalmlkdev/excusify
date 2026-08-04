// src/lib/share.js

/**
 * Copy text to clipboard
 */
export function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return;
  }
  return navigator.clipboard.writeText(text);
}

/**
 * Share on Twitter
 */
export function shareToTwitter(excuse, situation, tone) {
  const text = encodeURIComponent(`${excuse} — ${situation} (${tone})`);
  const url = encodeURIComponent("https://excusify.vercel.app");
  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank",
  );
}

/**
 * Share on LinkedIn
 */
export function shareToLinkedIn(excuse, situation) {
  const url = encodeURIComponent("https://excusify.vercel.app");
  const title = encodeURIComponent(`${situation} — Excuse`);
  const summary = encodeURIComponent(excuse);
  window.open(
    `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`,
    "_blank",
  );
}

/**
 * Share on WhatsApp
 */
export function shareToWhatsApp(excuse, situation, tone) {
  const text = encodeURIComponent(
    `*${situation}* (${tone})\n\n${excuse}\n\n_via excusify.vercel.app_`,
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
}

/**
 * Share via Slack deep link
 */
export function shareToSlack(excuse, situation, tone) {
  const text = encodeURIComponent(
    `*Excuse [${situation} · ${tone}]*\n${excuse}\n_via excusify.vercel.app_`,
  );
  window.open(`slack://open?team=&channel=&message=${text}`, "_blank");
}

/**
 * Copy a Slack‑formatted block to clipboard
 */
export function copySlackBlock(excuse, situation, tone) {
  const block = `*Excuse · ${situation} · ${tone}*\n>${excuse}\n_excusify.vercel.app_`;
  return copyToClipboard(block);
}

/**
 * Download an image of the excuse card using html2canvas
 */
export async function downloadCardImage(element) {
  try {
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "excusify.png";
      link.click();
      URL.revokeObjectURL(url);
    });
  } catch (e) {
    console.error("Share image failed:", e);
  }
}
