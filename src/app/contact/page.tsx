'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { navItems } from './../lib/constants';
import './globals.css';

export default function ContactPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      {/* top nav */}
      <nav className="flex justify-center space-x-8 mb-8 text-lg">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:underline"
            prefetch={false}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* dark toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={24} color="white" /> : <Moon size={24} color="white" />}
      </button>

      {/* contact info */}
      <section className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold">Contact Me</h1>
        <p className="text-lg">
          I’d love to hear from you! Whether it's feedback, a project idea, or just a friendly hello,
          drop me a line:
        </p>
        <ul className="space-y-2 text-lg">
          <li>
            📧 <a href="mailto:sakacogunet@gmail.com" className="underline">sakacogunet@gmail.com</a>
          </li>
          <li>
            🐙 <a href="https://github.com/sakacogu" target="_blank" rel="noreferrer" className="underline">GitHub</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
