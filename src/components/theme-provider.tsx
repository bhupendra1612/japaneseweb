"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeCtx = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "light",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeCtx);
}

/**
 * Lightweight ThemeProvider — replaces next-themes.
 * Reads from localStorage, applies class to <html>, works with React 19.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  // On mount: read saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
      setThemeState(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
      setThemeState("dark");
    }
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", t);
  }

  function setTheme(t: Theme) {
    applyTheme(t);
    setThemeState(t);
  }

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}
