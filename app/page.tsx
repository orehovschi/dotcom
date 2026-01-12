"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
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
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center">
          <div className="section-container text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="gradient-text">Liviu Orehovschi</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/about" className="btn-primary">
                About Me
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Work
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid gap-px bg-[var(--glass-border)] rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/about", title: "About", desc: "Background & education" },
                { href: "/experiences", title: "Experience", desc: "Work history" },
                { href: "/projects", title: "Projects", desc: "Things I've built" },
                { href: "/hobbies", title: "Hobbies", desc: "Beyond work" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-[var(--background)] p-6 transition-all duration-300 hover:bg-[var(--glass-hover)]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[var(--foreground)] group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.desc}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
          I&apos;m Liviu. I grew up in <span className="highlight-word">Moldova</span> and somehow ended up in the Bay Area. I&apos;m working on{" "}
          <Link
            href="https://xval.app"
            target="_blank"
            className="text-white hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
          >
            xVal
          </Link>
          , which started as a way to think more clearly about football and turned into something bigger. I like building things, but I don&apos;t like pretending work explains a whole person. I care about ideas, sports, food, and the small details that make something feel right. I&apos;m curious, opinionated, and I tend to follow problems longer than I probably should.
        </p>

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
      </div>
    </>
  );
}
