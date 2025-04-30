'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { navItems } from './../lib/constants';
import './globals.css';

export default function AboutPage() {
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

      {/* content */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hello! I&apos;m Sakacogu, a full-stack developer with a passion for building interactive UIs,
          smooth animations, and delightful user experiences. I love experimenting with new web
          technologies, crafting animations with Framer Motion, and turning design ideas into
          reality.
        </p>
        <p className="text-lg leading-relaxed">
          When I&apos;m not coding, you&apos;ll find me exploring the latest in AI art tools, playing around
          with balls, or dreaming up my next portfolio project. Feel free to reach out on
          my contact page!
        </p>
      </section>
    </main>
);
}
