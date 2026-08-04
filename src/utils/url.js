// src/utils/url.js
export function buildShareUrl(situation, tone, excuse) {
  try {
    const base = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      s: situation,
      t: tone,
      e: encodeURIComponent(excuse),
    });
    return `${base}?${params.toString()}`;
  } catch {
    return window.location.href;
  }
}

export function readUrlParams() {
  try {
    const p = new URLSearchParams(window.location.search);
    if (!p.has("s") || !p.has("t") || !p.has("e")) return null;
    return {
      situation: p.get("s"),
      tone: p.get("t"),
      excuse: decodeURIComponent(p.get("e")),
    };
  } catch {
    return null;
  }
}
