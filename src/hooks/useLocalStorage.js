// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";
import { load, save } from "../utils/storage";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => load(key, defaultValue));

  useEffect(() => {
    save(key, value);
  }, [key, value]);

  return [value, setValue];
}
