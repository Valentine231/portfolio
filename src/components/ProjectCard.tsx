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
    <AnimatedSection delay={idx * 0.08}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="mb-1.5 text-base sm:text-lg font-bold text-foreground leading-snug line-clamp-2">
            {project.title}
          </h3>
          <p className="mb-3 text-xs sm:text-sm text-foreground/70 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
          <span className="sr-only">View {project.title}</span>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
}
