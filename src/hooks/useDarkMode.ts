import { useCallback, useEffect, useState } from "react";

export function useDarkMode(initialValue = false): [boolean, () => void] {
  const [isDark, setIsDark] = useState(initialValue);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return [isDark, toggleDark];
} 