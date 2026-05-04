"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Sparkles, Smartphone } from "lucide-react";

export function TechStack() {
  const technologies = [
    { name: "React / Next.js", icon: <Layout className="h-6 w-6" />, category: "Frontend Core" },
    { name: "Tailwind CSS", icon: <Sparkles className="h-6 w-6" />, category: "Styling" },
    { name: "Framer Motion", icon: <Smartphone className="h-6 w-6" />, category: "Animation" },
    { name: "Zustand", icon: <Database className="h-6 w-6" />, category: "State Management" },
    { name: "REST APIs", icon: <Server className="h-6 w-6" />, category: "Integrations" },
    { name: "TypeScript", icon: <Code2 className="h-6 w-6" />, category: "Language" },
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px] translate-x-1/2 -translate-y-1/4" />

      <div className="mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Tech Stack</h2>
          <p className="text-foreground/60 max-w-2xl">
            A comprehensive list of the modern technologies I use to build scalable, high-performance web applications.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              key={tech.name}
              className="flex items-center gap-4 rounded-2xl glass p-6 cursor-pointer group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {tech.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h3>
                <p className="text-sm text-foreground/50">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
