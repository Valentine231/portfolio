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
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const inputClass =
    "w-full rounded-xl border border-foreground/20 bg-background text-foreground px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition placeholder:text-foreground/40";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8 pt-24 sm:pt-28">
      <AnimatedSection>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="mb-10 text-sm sm:text-base text-foreground/70 max-w-xl">
          Have a question or want to work together? Leave a message below or connect with me via
          WhatsApp.
        </p>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          {/* ─── Form ─── */}
          <div className="bg-card border border-foreground/10 rounded-2xl p-5 sm:p-6 shadow-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message here..."
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2 py-3" disabled={loading}>
                <Send size={16} />
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </div>

          {/* ─── Right side ─── */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base text-foreground/70">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to
                be part of your vision.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348148458278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors w-full sm:w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Social links */}
            <div className="flex gap-3">
              {/* Twitter */}
              <a
                href="https://x.com/Val09797539"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition"
              >
                <span className="sr-only">Twitter</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ugwu-valentine-93b4b9329/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect width="4" height="12" x="2" y="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
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
                  width="18"
                  height="18"
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