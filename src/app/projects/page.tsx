"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { title } from "process";

const filters = ["All", "React", "API", "Fullstack"];

const projects = [
  {
    id: 1,
    title: "ZenCart Nigerian Market Features",
    description: "E-commerce app adapted for the Nigerian market featuring a Pidgin AI Chatbot, WhatsApp Business API ordering, Voice-to-Text processing, and Visual Proof Verification.",
    category: "Fullstack",
    tags: ["Next.js", "OpenAI", "Paystack", "Supabase", "WhatsApp API"],
    image: "/images/Screenshot from 2026-04-22 22-45-58.png",
    link: "https://zencart-w63q.vercel.app/",
  },
  {
    id: 2,
    title: "Food Dash - Food Delivery",
    description: "A modern, premium food delivery platform built with a focus on user experience and seamless payment integration.",
    category: "Fullstack",
    tags: ["React", "Zustand", "Express", "Supabase", "Paystack"],
    image: "/images/Screenshot from 2026-04-22 23-05-27.png",
    link: "https://food-dash-psi.vercel.app/"
  },
  {
    id: 3,
    title: "MyBox - Full-Stack Movie Application",
    description: "A full-stack movie application to search movies via OMDb API, view details, and manage saved movies with JWT authentication.",
    category: "Fullstack",
    tags: ["React", "Zustand", "Express", "MongoDB"],
    image: "/images/Screenshot from 2026-04-23 00-05-33.png",
    link: "https://my-box-seven.vercel.app/",
  },
   ,
    {
      id: 4,
      title: "50 reuseable UI Component Library",
      description: "A sleek and modern UI component library built with next.js and Tailwind CSS, designed to help developers create beautiful interfaces with ease.",
      tags: ["nextjs", "Zustand", "Tailwind CSS","framer-motion"],
      image: "/images/Screenshot from 2026-05-02 12-27-41.png",
      stack: ["nextjs", "Zustand", "Tailwind CSS","framer-motion"],
      link: "https://reuseable-ui.vercel.app/",
     
    }

];

export default function ProjectsPage() {
  const { activeFilter, setActiveFilter } = useStore();

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Projects
        </h1>
        
        {/* Filter List */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
