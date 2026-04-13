"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  const handleDark = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  if (!mounted) return;

  return (
    <div className="fixed top-5 right-5 cursor-pointer" onClick={handleDark}>
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </div>
  );
}
