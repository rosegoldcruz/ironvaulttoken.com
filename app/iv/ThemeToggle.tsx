"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getTheme(): Theme {
  const saved = window.localStorage.getItem("iv-theme");
  if (saved === "light" || saved === "dark") return saved;
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.ivTheme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = getTheme();
    setTheme(current);
    applyTheme(current);
  }, []);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="iv-theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem("iv-theme", nextTheme);
      }}
    >
      <span className="iv-theme-icon" aria-hidden="true" />
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
