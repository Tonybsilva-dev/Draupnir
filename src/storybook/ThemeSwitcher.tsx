import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const ThemeSwitcher = () => {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <button
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 9999,
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
        background: isDark ? "#222" : "#eee",
        color: isDark ? "#fff" : "#222",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onClick={toggleDark}
      aria-label="Alternar tema"
    >
      {isDark ? "🌙 Escuro" : "☀️ Claro"}
    </button>
  );
}; 