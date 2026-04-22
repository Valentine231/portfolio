import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    link: string;
  };
  idx: number;
}

export function ProjectCard({ project, idx }: ProjectCardProps) {
  return (
    <AnimatedSection delay={idx * 0.1}>
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm transition-all hover:shadow-lg"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Link href={project.link} className="absolute inset-0 z-10">
          <span className="sr-only">View Project</span>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
}
