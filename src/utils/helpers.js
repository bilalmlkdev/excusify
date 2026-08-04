// src/utils/helpers.js

/**
 * Format a date as "Mon 12" style (short month, day)
 */
export function formatDate(date = new Date()) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Truncate a string to a certain length with ellipsis
 */
export function truncate(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "…";
}

/**
 * Debounce a function
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
