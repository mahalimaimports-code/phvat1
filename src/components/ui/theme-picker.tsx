"use client";

import { useState } from "react";

type Theme = {
  id: string;
  label: string;
  primary: string;
  accent: string;
  bg: string;
};

const themes: Theme[] = [
  { id: "google", label: "Google Blue", primary: "#1a73e8", accent: "#0b57d0", bg: "#f7faff" },
  { id: "emerald", label: "Emerald", primary: "#0f9d58", accent: "#0b7a45", bg: "#f6fffb" },
  { id: "navy", label: "Navy", primary: "#0b3b8a", accent: "#072b66", bg: "#f4f7ff" },
  { id: "slate", label: "Slate", primary: "#475569", accent: "#334155", bg: "#f8fafc" },
];

type ThemePickerProps = {
  onChange: (theme: Theme) => void;
};

export default function ThemePicker({ onChange }: ThemePickerProps) {
  const [active, setActive] = useState<Theme>(themes[0]);

  const handleChange = (theme: Theme) => {
    setActive(theme);
    onChange(theme);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => handleChange(theme)}
          className={
            "flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition " +
            (active.id === theme.id
              ? "border-transparent bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300")
          }
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: theme.primary }}
          />
          {theme.label}
        </button>
      ))}
    </div>
  );
}
