"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function FeaturedProjects() {
  const projects = [
    {
    title: "ZenCart Nigerian Market Features",
    description: "E-commerce app adapted for the Nigerian market featuring a Pidgin AI Chatbot, WhatsApp Business API ordering, Voice-to-Text processing, and Visual Proof Verification.",
    category: "Fullstack",
    stack: ["Next.js", "OpenAI", "Paystack", "Supabase", "WhatsApp API"],
    image: "/images/Screenshot from 2026-04-22 22-45-58.png",
    liveUrl: "https://zencart-w63q.vercel.app/",
    githubUrl:"https://github.com/Valentine231/Zencart"
    },
    {
      title: "Food Dash - Food Delivery",
      description: "A modern, premium food delivery platform built with a focus on user experience and seamless payment integration.",
      image: "/images/Screenshot from 2026-04-22 23-05-27.png",
      stack: ["React", "Zustand", "Express", "Supabase", "Paystack"],
      liveUrl: "https://food-dash-psi.vercel.app/",
      githubUrl: "https://github.com/Valentine231/Food-Dash"
    },
    {
      title: "MyBox - Full-Stack Movie Application",
      description: "A full-stack movie application to search movies via OMDb API, view details, and manage saved movies with JWT authentication.",
      image: "/images/Screenshot from 2026-04-23 00-05-33.png",
      stack: ["React", "Zustand", "Express", "MongoDB"],
      liveUrl: "https://mybox-1uup.onrender.com",
      githubUrl: "https://github.com/Valentine231"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">Featured Projects</h2>
          <p className="text-white/60 max-w-2xl">
            A selection of some of my most recent and ambitious projects.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              key={project.title}
              className="group relative grid gap-6 md:grid-cols-2 items-center rounded-3xl glass p-6 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl glass border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center space-y-4 md:px-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack?.map(tech => (
                    <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
