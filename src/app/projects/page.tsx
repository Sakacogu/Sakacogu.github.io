"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import "./globals.css";
import DarkToggle from './DarkToggle';


type Project = {
  title: string;
  description: string;
  link: string;
  preview?: string;
  category: "websites" | "games";
};

const allProjects: Project[] = [
  {
    title: "The Hungry Llama",
    description: "A professional website for a food catering business.",
    link: "/projects/TheHungryLlama/src/index.html",
    preview: "/projects/TheHungryLlama/src/index.html",
    category: "websites",
  },
  {
    title: "TicTacToe",
    description: "Classic game with an optional twist.",
    link: "/projects/hand-in-2.0/index.html",
    preview: "/projects/hand-in-2.0/index.html",
    category: "games",
  },
  {
    title: "Clothing Website",
    description: "A stylish Flutter-based clothing store UI.",
    link: "/projects/web/index.html",
    preview: "/projects/web/index.html",
    category: "websites",
  },
  {
    title: " Basic Portfolio Website",
    description: "A simple and clean portfolio.",
    link: "/projects/backupOriginal/src/index.html",
    preview: "/projects/backupOriginal/src/index.html",
    category: "websites",
  },
{
  title: "Cat facts API!",
  description: "A fun way to learn new things about cats!",
  link: "/projects/cats",
  preview: "/projects/cats",
  category: "websites",
},

{
  title: "Cocktail API!",
  description: "An easy to use site for cocktail recipies!",
  link: "/projects/cocktails",
  preview: "/projects/cocktails",
  category: "websites",
},

{
  title: "Classic Minesweeper!",
  description: "What a fun game!",
  link: "/projects/minesweeper",
  preview: "/projects/minesweeper",
  category: "games",
},

];

const navItems = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function ProjectsPage() {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState<"websites" | "games">("websites");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const projects = allProjects.filter((p) => p.category === filter);

  return (
    <main className={`relative min-h-screen bg-gradient-to-br
          ${dark ? 'from-red-500 to-black' : 'from-blue-500 to-purple-600'} text-white p-8`}>
      <nav className="flex justify-center space-x-8 mb-4 text-lg">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className="hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center space-x-4 mb-8">
        {(["websites", "games"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-medium transition 
              ${filter === cat
                ? "bg-white/40 text-black dark:text-white"
                : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <DarkToggle dark={dark} toggleDark={() => setDark(d => !d)} />

      <button
        onClick={() => setDark((d) => !d)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="flex flex-col gap-12 items-center">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="w-full max-w-6xl p-4 bg-white/20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="mb-4 text-sm">{proj.description}</p>

            <div className="hidden sm:block w-full aspect-video max-w-6xl mx-auto rounded-lg overflow-hidden mb-4 border border-white/40">              <iframe
                src={proj.preview}
                title={`${proj.title} Preview`}
                className="w-full h-full"
              />
            </div>

              <motion.a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-200"
                whileHover={{ x: 4 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                Open in new tab ↗
              </motion.a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
