import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <Hero />
      <div className="bg-gradient-to-b from-background to-white/[0.02]">
        <TechStack />
      </div>
      <FeaturedProjects />
    </div>
  );
}
