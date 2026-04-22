"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useStore } from "@/store/useStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { setCommandMenuOpen } = useStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-40 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1 group font-bold text-xl tracking-tight text-gray-900 dark:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            className="w-10 h-10 drop-shadow-[0_0_6px_rgba(37,99,235,0.4)] dark:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-110"
          >
            {/* Right Sword */}
            <g transform="translate(50, 75) rotate(35)">
              <path d="M 0 0 Q 8 -40 4 -70" strokeWidth="3.5" className="stroke-gray-400 dark:stroke-gray-300 transition-all duration-300 group-hover:stroke-blue-400" fill="none" strokeLinecap="round" />
              <path d="M 0 0 Q 8 -40 4 -70" strokeWidth="1" stroke="white" fill="none" strokeLinecap="round" opacity="0.6" />
              <line x1="0" y1="0" x2="0" y2="18" strokeWidth="5" className="stroke-gray-800 dark:stroke-gray-200" strokeLinecap="round" />
              <line x1="-2" y1="4" x2="2" y2="8" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-2" y1="10" x2="2" y2="14" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="4" className="stroke-blue-600 dark:stroke-blue-500" strokeLinecap="round" />
            </g>
            
            {/* Left Sword */}
            <g transform="translate(50, 75) rotate(-35)">
              <path d="M 0 0 Q -8 -40 -4 -70" strokeWidth="3.5" className="stroke-gray-400 dark:stroke-gray-300 transition-all duration-300 group-hover:stroke-blue-400" fill="none" strokeLinecap="round" />
              <path d="M 0 0 Q -8 -40 -4 -70" strokeWidth="1" stroke="white" fill="none" strokeLinecap="round" opacity="0.6" />
              <line x1="0" y1="0" x2="0" y2="18" strokeWidth="5" className="stroke-gray-800 dark:stroke-gray-200" strokeLinecap="round" />
              <line x1="-2" y1="4" x2="2" y2="8" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-2" y1="10" x2="2" y2="14" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="4" className="stroke-blue-600 dark:stroke-blue-500" strokeLinecap="round" />
            </g>
          </svg>
          <span className="text-2xl mt-1 -ml-1">al-tino<span className="text-blue-600 dark:text-blue-500">.</span></span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                pathname === link.href
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCommandMenuOpen(true)}
            className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ⌘ K
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
