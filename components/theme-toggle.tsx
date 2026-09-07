"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type IronVaultTheme = "light" | "dark"

const STORAGE_KEY = "iv-theme"

function applyTheme(theme: IronVaultTheme) {
  document.documentElement.dataset.ivTheme = theme
  document.documentElement.style.colorScheme = theme
  document.documentElement.classList.toggle("dark", theme === "dark")
}

function getStoredTheme(): IronVaultTheme {
  if (typeof window === "undefined") {
    return "light"
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "dark" ? "dark" : "light"
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<IronVaultTheme>("light")

  useEffect(() => {
    const storedTheme = getStoredTheme()
    setTheme(storedTheme)
    applyTheme(storedTheme)
  }, [])

  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      className="iv-theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        window.localStorage.setItem(STORAGE_KEY, nextTheme)
        applyTheme(nextTheme)
        setTheme(nextTheme)
      }}
    >
      {theme === "dark" ? <Sun aria-hidden className="h-4 w-4" /> : <Moon aria-hidden className="h-4 w-4" />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  )
}
