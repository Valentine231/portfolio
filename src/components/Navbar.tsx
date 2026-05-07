"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useStore } from "@/store/useStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const drawerVariants: any = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

const linkVariants: any = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 24 } },
};

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setCommandMenuOpen } = useStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileOpen(false);
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
      transition={{ duration: 0.35, ease: "easeInOut" as const }}
      className="fixed top-0 z-40 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
    >
      {/* ─── Top bar ─── */}
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 group font-bold text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_0_6px_rgba(37,99,235,0.4)] dark:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-110"
          >
            <g transform="translate(50, 75) rotate(35)">
              <path d="M 0 0 Q 8 -40 4 -70" strokeWidth="3.5" className="stroke-gray-400 dark:stroke-gray-300 transition-all duration-300 group-hover:stroke-blue-400" fill="none" strokeLinecap="round" />
              <path d="M 0 0 Q 8 -40 4 -70" strokeWidth="1" stroke="white" fill="none" strokeLinecap="round" opacity="0.6" />
              <line x1="0" y1="0" x2="0" y2="18" strokeWidth="5" className="stroke-gray-800 dark:stroke-gray-200" strokeLinecap="round" />
              <line x1="-2" y1="4" x2="2" y2="8" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-2" y1="10" x2="2" y2="14" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="4" className="stroke-blue-600 dark:stroke-blue-500" strokeLinecap="round" />
            </g>
            <g transform="translate(50, 75) rotate(-35)">
              <path d="M 0 0 Q -8 -40 -4 -70" strokeWidth="3.5" className="stroke-gray-400 dark:stroke-gray-300 transition-all duration-300 group-hover:stroke-blue-400" fill="none" strokeLinecap="round" />
              <path d="M 0 0 Q -8 -40 -4 -70" strokeWidth="1" stroke="white" fill="none" strokeLinecap="round" opacity="0.6" />
              <line x1="0" y1="0" x2="0" y2="18" strokeWidth="5" className="stroke-gray-800 dark:stroke-gray-200" strokeLinecap="round" />
              <line x1="-2" y1="4" x2="2" y2="8" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-2" y1="10" x2="2" y2="14" strokeWidth="1" className="stroke-gray-500" />
              <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="4" className="stroke-blue-600 dark:stroke-blue-500" strokeLinecap="round" />
            </g>
          </svg>
          <span className="text-base sm:text-lg mt-0.5 -ml-0.5 leading-tight">
            Valentine Ugwu<span className="text-blue-600 dark:text-blue-500"> Portfolio</span>
          </span>
        </Link>

        {/* Desktop nav */}
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

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setCommandMenuOpen(true)}
            className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ⌘ K
          </button>
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <motion.button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.88 }}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full mt-1.5"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full mt-1.5"
            />
          </motion.button>
        </div>
      </div>

      {/* ─── Mobile drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/97 dark:bg-gray-950/97 backdrop-blur-md"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {links.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Command palette shortcut */}
              <motion.div variants={linkVariants} className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-1">
                <button
                  onClick={() => { setCommandMenuOpen(true); setMobileOpen(false); }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <span>Search…</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-md">⌘ K</span>
                </button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
