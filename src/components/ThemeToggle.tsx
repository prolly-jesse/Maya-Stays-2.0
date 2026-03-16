import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("maya-theme") === "light";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (light) {
      root.classList.add("light");
      localStorage.setItem("maya-theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("maya-theme", "dark");
    }
  }, [light]);

  return (
    <button
      onClick={() => setLight((v) => !v)}
      className="p-2 rounded-full glass hover:border-primary/30 transition-all duration-300"
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
    >
      {light ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
