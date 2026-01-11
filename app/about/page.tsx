"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const storyParagraphs = [
    "I was born in Nimereuca, Soroca in northern Moldova. I only lived there for about a year, but it still feels like the true start of the story. My childhood and school years were mostly in Chișinău, the capital, where the world felt bigger and the pace was faster. Even then, I was the kind of kid who wanted to see what was on the other side of the map — not because I was chasing something shiny, but because I was curious and a little restless.",
    "Before university I was already moving around. I travelled, took internships, said yes to chances that sounded slightly uncomfortable and therefore probably worth doing. By the time I started college, I had learned a useful lesson: new places do not just change your scenery — they change your standards. You learn quickly what you miss, what you tolerate, what you value, and what kind of person you become when nobody is watching.",
    "University took that to another level. I lived across more than nine countries and travelled through many more. At some point you stop being impressed by airports and start paying attention to patterns — how teams actually work, how incentives shape behavior, how culture shows up in small things like punctuality, honesty, or who speaks first in a room. I think that is where my obsession with systems comes from.",
    "I ended up graduating in two fields because I could not pick a single lens. I like the precision of technical work and the messiness of real life. I like building things, measuring what happens, and adjusting until the result is solid. Sometimes that looks like software and models. Sometimes it looks like organizing a football community from scratch. Sometimes it looks like a fermentation experiment where the data is bubbles, smell, and whether the bread actually rises.",
    "The common thread is simple: I care about work that holds up in the real world. I do not need everything to be perfect, but I do need it to be honest. I show up, learn fast, and I take pride in being the person you can hand a messy problem to and get back something clearer, tighter, and actually usable.",
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Story paragraphs observer
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const paragraphElements = containerRef.current?.querySelectorAll('.story-paragraph');
    paragraphElements?.forEach((el) => storyObserver.observe(el));

    return () => {
      observerRef.current?.disconnect();
      storyObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-editorial {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-on-scroll:nth-child(2) { transition-delay: 0.1s; }
        .reveal-on-scroll:nth-child(3) { transition-delay: 0.2s; }
        .reveal-on-scroll:nth-child(4) { transition-delay: 0.3s; }
      `}</style>

      <div className="min-h-screen">
        {/* Hero Opening */}
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/40 uppercase mb-8">
              About
            </p>
            <h1 className="reveal-on-scroll font-editorial text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight">
              I build things that work<br />
              <span className="text-white/50">when it matters.</span>
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto">
            <div ref={containerRef} className="space-y-6">
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="story-paragraph text-white/50 leading-relaxed text-lg opacity-0 translate-y-4 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-24 px-6 bg-white/[0.015]">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/40 uppercase mb-12">
              Education
            </p>

            <div className="space-y-16">
              <div className="reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-editorial text-3xl text-white">Minerva University</h3>
                  <p className="text-sm text-white/40">2021 — 2025</p>
                </div>
                <p className="text-white/60 mb-2">Dual B.S. in Computational Sciences & Natural Sciences</p>
                <p className="text-sm text-white/40 mb-6">
                  Concentrations: Computer Science & AI · Cells and Organisms
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-6">
                  A university with no campus—classes happened live across seven countries.
                  I served as Student Body President and founded Minerva FC, convincing
                  strangers in every city to show up for pickup games. Both required
                  building systems that worked without me being there.
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-6">
                  The dual degree wasn&apos;t an accident. I wanted to understand complex systems
                  from both ends—how to model them computationally and how they actually work
                  in nature. Courses like <span className="text-white/60">Theory of Computation</span> and <span className="text-white/60">Statistical Modeling</span> built
                  the foundations for ML work, while <span className="text-white/60">Genes to Organisms</span> and <span className="text-white/60">Evolution Across Multiple Scales</span> taught me how to think about emergent behavior
                  in systems you can&apos;t fully control.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["AI Theory", "Software Engineering", "Statistical Modeling", "Theory of Computation", "Data Structures", "Linear Algebra", "Physics of Life", "Evolution", "Biochemistry"].map((course) => (
                    <span key={course} className="px-3 py-1 text-xs text-white/30 border border-white/[0.06] rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-editorial text-2xl text-white/80">Westtown School</h3>
                  <p className="text-sm text-white/40">2017 — 2018</p>
                </div>
                <p className="text-white/40 text-sm">
                  Boarding school in Pennsylvania. STEM focus. First time living away from home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Work On */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/40 uppercase mb-12">
              What I Work On
            </p>

            <div className="reveal-on-scroll grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 4h16M9 4v3m6-3v3" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Data Engineering</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Pipelines that don&apos;t break at 3am. ETL, streaming, orchestration—building
                  the plumbing that makes everything else possible.
                </p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.591.659H9.061a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.5" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">ML & Embeddings</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Similarity search, recommendations, and models that actually ship.
                  Most of my work involves making unstructured data useful.
                </p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18a2.25 2.25 0 012.25 2.25V8.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 15.75V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Product Building</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  End-to-end. From database schema to deploy button.
                  I like owning the whole stack because that&apos;s how things actually get done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools - Minimal */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/30">
              <span className="text-white/50">Tools:</span>
              {["Python", "TypeScript", "SQL", "React", "PostgreSQL", "TensorFlow", "pandas", "AWS"].map((tool) => (
                <span key={tool} className="hover:text-white/50 transition-colors cursor-default">{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll">
              <p className="font-editorial text-3xl md:text-4xl text-white mb-8">
                Want to work together?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:liviu.orehovschi@gmail.com"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
                >
                  <span>Email me</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/liviuorehovschi"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white/70 border border-white/[0.1] hover:bg-white/[0.03] hover:border-white/[0.15] transition-all"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/liviuorehovschi"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white/70 border border-white/[0.1] hover:bg-white/[0.03] hover:border-white/[0.15] transition-all"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
