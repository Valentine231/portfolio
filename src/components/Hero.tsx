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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 px-6">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20">
            Available for work
          </span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
        >
          Senior Frontend
          <br className="hidden sm:block" />
          <span className="text-primary"> Developer</span> & Designer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-lg text-foreground/60 sm:text-xl"
        >
          I build modern, clean, and interactive user interfaces with a focus on seamless user experiences, minimal aesthetics, and high performance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background sm:w-auto"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-foreground ring-1 ring-foreground/10 transition-all glass-hover sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
