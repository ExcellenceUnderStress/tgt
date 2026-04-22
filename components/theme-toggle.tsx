"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "tg-color-mode";

function getCurrentMode(): ThemeMode {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.colorMode === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    setMode(getCurrentMode());
  }, []);

  function handleToggle() {
    const nextMode: ThemeMode = mode === "dark" ? "light" : "dark";

    document.documentElement.dataset.colorMode = nextMode;
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    setMode(nextMode);
  }

  return (
    <button
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      className="theme-toggle"
      onClick={handleToggle}
      type="button"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-label">Mode</span>
        <span className="theme-toggle-value">{mode === "dark" ? "Dark" : "Light"}</span>
      </span>
    </button>
  );
}
