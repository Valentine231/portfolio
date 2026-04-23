import { AnimatedSection } from "@/components/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn more about me and my skills.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
          <p className="leading-relaxed">
            I’m Valentine Ugwu, a frontend developer based in Nigeria, crafting modern web applications that are fast, intuitive, and visually refined.

I specialize in React and Next.js, building interfaces that go beyond functionality—focused on performance, seamless user experience, and thoughtful interaction. My work includes API integrations, authentication systems, and real-world features like payments and dynamic data handling.

I approach every project with a product mindset, paying close attention to structure, scalability, and the subtle details that elevate a good interface into a great one.

I’m currently open to remote opportunities, collaborating with teams to build high-quality digital experiences that make an impact.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Frontend Skills */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Frontend</h3>
            <ul className="space-y-3">
              {[
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "TypeScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" },
              ].map((skill) => (
                <li key={skill.name} className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend / Tools Skills */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Backend & Tools</h3>
            <ul className="space-y-3">
              {[
                { name: "Supabase", level: "Advanced" },
                { name: "Firebase", level: "Advanced" },
                { name: "RESTful APIs", level: "Expert" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Git / GitHub", level: "Expert" },
              ].map((skill) => (
                <li key={skill.name} className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
