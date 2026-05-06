import { AnimatedSection } from "@/components/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn more about me and my skills.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8 pt-24 sm:pt-28">
      <AnimatedSection>
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          About Me
        </h1>
        <div className="prose prose-base dark:prose-invert text-foreground/80 max-w-none">
          <p className="leading-relaxed text-sm sm:text-base">
            I&apos;m Valentine Ugwu, a frontend developer based in Nigeria, crafting modern web
            applications that are fast, intuitive, and visually refined.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mt-4">
            I specialize in React and Next.js, building interfaces that go beyond
            functionality—focused on performance, seamless user experience, and thoughtful
            interaction. My work includes API integrations, authentication systems, and real-world
            features like payments and dynamic data handling.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mt-4">
            I approach every project with a product mindset, paying close attention to structure,
            scalability, and the subtle details that elevate a good interface into a great one.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mt-4">
            I&apos;m currently open to remote opportunities, collaborating with teams to build
            high-quality digital experiences that make an impact.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-12 sm:mt-16">
        <h2 className="mb-5 text-xl sm:text-2xl font-bold text-foreground">Skills</h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Frontend Skills */}
          <div className="rounded-2xl border border-foreground/10 bg-card p-5 sm:p-6">
            <h3 className="mb-4 text-base sm:text-lg font-semibold text-foreground">Frontend</h3>
            <ul className="space-y-3">
              {[
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "TypeScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" },
              ].map((skill) => (
                <li key={skill.name} className="flex justify-between items-center text-foreground/80">
                  <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full ml-2 shrink-0">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend / Tools Skills */}
          <div className="rounded-2xl border border-foreground/10 bg-card p-5 sm:p-6">
            <h3 className="mb-4 text-base sm:text-lg font-semibold text-foreground">Backend &amp; Tools</h3>
            <ul className="space-y-3">
              {[
                { name: "Supabase", level: "Advanced" },
                { name: "Firebase", level: "Advanced" },
                { name: "RESTful APIs", level: "Expert" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Git / GitHub", level: "Expert" },
              ].map((skill) => (
                <li key={skill.name} className="flex justify-between items-center text-foreground/80">
                  <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full ml-2 shrink-0">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
