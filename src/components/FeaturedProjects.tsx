"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 18 },
  },
};

export function FeaturedProjects() {
  const projects = [
    {
      title: "ZenCart Nigerian Market Features",
      description:
        "E-commerce app adapted for the Nigerian market featuring a Pidgin AI Chatbot, WhatsApp Business API ordering, Voice-to-Text processing, and Visual Proof Verification.",
      category: "Fullstack",
      stack: ["Next.js", "OpenAI", "Paystack", "Supabase", "WhatsApp API"],
      image: "/images/Screenshot from 2026-04-22 22-45-58.png",
      liveUrl: "https://zencart-w63q.vercel.app/",
      githubUrl: "https://github.com/Valentine231/Zencart",
    },
    {
      title: "Food Dash - Food Delivery",
      description:
        "A modern, premium food delivery platform built with a focus on user experience and seamless payment integration.",
      image: "/images/Screenshot from 2026-04-22 23-05-27.png",
      stack: ["React", "Zustand", "Express", "Supabase", "Paystack"],
      liveUrl: "https://food-dash-psi.vercel.app/",
      githubUrl: "https://github.com/Valentine231/Food-Dash",
    },
    {
      title: "MyBox - Full-Stack Movie Application",
      description:
        "A full-stack movie application to search movies via OMDb API, view details, and manage saved movies with JWT authentication.",
      image: "/images/Screenshot from 2026-04-23 00-05-33.png",
      stack: ["React", "Zustand", "Express", "MongoDB"],
      liveUrl: "https://mybox-1uup.onrender.com",
      githubUrl: "https://github.com/Valentine231",
    },
    {
      title: "50 Reusable UI Component Library",
      description:
        "A sleek and modern UI component library built with Next.js and Tailwind CSS, designed to help developers create beautiful interfaces with ease.",
      image: "/images/Screenshot from 2026-05-02 12-27-41.png",
      stack: ["Next.js", "Zustand", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://reuseable-ui.vercel.app/",
      githubUrl: "https://github.com/Valentine231/reuseable-ui",
    },
    {
      title: "Real-Time Chat Application (weCHAT App)",
      description:
        "A real-time messaging application featuring low-latency communication via WebRTC, secure authentication, and robust session management.",
      image: "/images/Screenshot from 2026-04-22 23-05-27.png",
      stack: ["React", "Supabase", "WebRTC", "Material UI"],
      liveUrl: "https://github.com/Valentine231",
      githubUrl: "https://github.com/Valentine231",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base max-w-2xl">
            A selection of some of my most recent and ambitious projects.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative grid gap-0 md:grid-cols-2 items-stretch rounded-2xl sm:rounded-3xl glass overflow-hidden border border-foreground/10"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] md:aspect-auto md:min-h-[220px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center gap-3 p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
