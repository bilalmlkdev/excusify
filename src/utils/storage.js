// src/utils/storage.js
export function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    if (!v) return fallback;
    try {
      return JSON.parse(v);
    } catch {
      return v;
    }
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}
