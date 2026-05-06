"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 px-4 sm:px-6">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[240px] w-[240px] xs:h-[340px] xs:w-[340px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[60px] sm:blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary ring-1 ring-primary/20">
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-5 text-[2.4rem] leading-[1.15] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
        >
          Senior Frontend
          <br />
          <span className="text-primary">Developer</span> & Designer
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-xl px-2 text-[0.95rem] leading-relaxed text-foreground/60 sm:text-lg sm:max-w-2xl sm:px-0"
        >
          I build modern, clean, and interactive user interfaces with a focus on
          seamless user experiences, minimal aesthetics, and high performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-foreground ring-1 ring-foreground/10 transition-all glass-hover"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
