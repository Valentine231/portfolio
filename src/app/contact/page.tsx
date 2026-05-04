"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mb-12 text-lg text-foreground/70">
          Have a question or want to work together? Leave a message below or connect with me via WhatsApp.
        </p>

        <div className="grid gap-12 sm:grid-cols-2">
          
          {/* FORM */}
          <div className="bg-card border border-foreground/10 rounded-2xl p-6 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 px-4 py-2"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 px-4 py-2"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 px-4 py-2"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2" disabled={loading}>
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>

            <p className="text-foreground/70 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348148458278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-3 font-medium text-white hover:bg-green-600 w-fit"
            >
              Chat on WhatsApp
            </a>

            {/* SOCIAL LINKS */}
            <div className="mt-12 flex gap-4">

              {/* Twitter / X */}
              <a
                href="https://x.com/Val09797539"
                target="_blank"
                className="p-3 bg-foreground/5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition"
              >
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ugwu-valentine-93b4b9329/"
                target="_blank"
                className="p-3 bg-foreground/5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                  <rect width="4" height="12" x="2" y="9" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>

              {/* GitHub */}
             <a
  href="https://github.com/Valentine231"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-foreground/5 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition"
>
  <span className="sr-only">GitHub</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
</a>

            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}