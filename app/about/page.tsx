"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

    return () => observerRef.current?.disconnect();
  }, []);

  const cities = [
    { name: "Chișinău", country: "Moldova", note: "where it started" },
    { name: "Philadelphia", country: "USA", note: "high school" },
    { name: "Siegen", country: "Germany", note: "covid times" },
    { name: "San Francisco", country: "USA", note: "home base" },
    { name: "Seoul", country: "South Korea", note: "" },
    { name: "Hyderabad", country: "India", note: "" },
    { name: "Berlin", country: "Germany", note: "" },
    { name: "Buenos Aires", country: "Argentina", note: "" },
    { name: "London", country: "UK", note: "" },
    { name: "Taipei", country: "Taiwan", note: "" },
    { name: "Dublin", country: "Ireland", note: "" },
  ];

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

        .city-line {
          position: relative;
        }

        .city-line::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 20px;
          bottom: -20px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
        }

        .city-line:last-child::before {
          display: none;
        }

        .highlight-word {
          position: relative;
          white-space: nowrap;
        }

        .highlight-word::after {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: 2px;
          height: 8px;
          background: rgba(255, 200, 150, 0.15);
          z-index: -1;
          border-radius: 2px;
        }
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

        {/* Intro Paragraph */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll grid md:grid-cols-[1fr,2fr] gap-12 items-start">
              <div>
                <p className="text-sm text-white/30 uppercase tracking-wider">Currently</p>
                <p className="text-white/70 mt-2">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                  I&apos;m Liviu—originally from <span className="highlight-word">Moldova</span>,
                  now building <Link href="https://xval.ai" target="_blank" className="text-white hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40">xVal</Link>,
                  a sports intelligence platform, from the Bay Area. My work sits at the
                  intersection of data engineering, machine learning, and whatever needs
                  building next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* The Journey - Cities */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll mb-16">
              <p className="font-editorial text-3xl md:text-4xl text-white/90 leading-snug">
                I&apos;ve studied and lived across <span className="text-white">eleven cities</span> on four continents—
                each one teaching something the last one couldn&apos;t.
              </p>
            </div>

            <div className="reveal-on-scroll grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
              {cities.map((city, i) => (
                <div key={i} className="city-line group pl-6 py-2">
                  <div className="absolute left-0 top-3 w-3 h-3 rounded-full border border-white/20 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300" />
                  <p className="text-white/90 font-medium">{city.name}</p>
                  <p className="text-sm text-white/40">{city.country}</p>
                  {city.note && (
                    <p className="text-xs text-white/25 italic mt-1">{city.note}</p>
                  )}
                </div>
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
