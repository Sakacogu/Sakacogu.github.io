'use client';

import React, { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface DarkToggleProps {
  dark: boolean;
  toggleDark: () => void;
}

export default function DarkToggle({ dark, toggleDark }: DarkToggleProps) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={toggleDark}
      className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun size={24} color="white" /> : <Moon size={24} color="white" />}
    </button>
  );
}
