"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
    { name: "Soroca (Nimereuca)", country: "Moldova", wiki: "https://en.wikipedia.org/wiki/Soroca" },
    { name: "Chișinău", country: "Moldova", wiki: "https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u" },
    { name: "Philadelphia", country: "USA", wiki: "https://en.wikipedia.org/wiki/Philadelphia" },
    { name: "Siegen", country: "Germany", wiki: "https://en.wikipedia.org/wiki/Siegen" },
    { name: "Dublin", country: "Ireland", wiki: "https://en.wikipedia.org/wiki/Dublin" },
    { name: "Seoul", country: "South Korea", wiki: "https://en.wikipedia.org/wiki/Seoul" },
    { name: "Taipei", country: "Taiwan", wiki: "https://en.wikipedia.org/wiki/Taipei" },
    { name: "Hyderabad", country: "India", wiki: "https://en.wikipedia.org/wiki/Hyderabad" },
    { name: "Buenos Aires", country: "Argentina", wiki: "https://en.wikipedia.org/wiki/Buenos_Aires" },
    { name: "London", country: "UK", wiki: "https://en.wikipedia.org/wiki/London" },
    { name: "Berlin", country: "Germany", wiki: "https://en.wikipedia.org/wiki/Berlin" },
    { name: "San Francisco", country: "USA", wiki: "https://en.wikipedia.org/wiki/San_Francisco" },
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
        <section className="relative min-h-[90vh] overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/me.jpeg"
              alt="Liviu Orehovschi presenting at pitch night"
              fill
              className="object-contain object-top"
              priority
            />
            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/70 to-[#0a0a0b]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/80 via-transparent to-[#0a0a0b]/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[90vh] items-end pb-20 sm:pb-24">
            <div className="section-container">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-8">
                  <span className="gradient-text">Liviu Orehovschi</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/about" className="btn-primary">
                    About Me
                  </Link>
                  <Link href="/projects" className="btn-secondary">
                    View Work
                  </Link>
                </div>
              </div>
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

        {/* Editorial Intro Section */}
        <section className="py-20 border-t border-[var(--glass-border)]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="reveal-on-scroll text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              I&apos;m Liviu. I grew up in <span className="highlight-word">Moldova</span> and somehow ended up in the Bay Area. I&apos;m working on <Link href="https://xval.app" target="_blank" className="text-white hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40">xVal</Link>, which started as a way to think more clearly about football and turned into something bigger. I like building things, but I don&apos;t like pretending work explains a whole person. I care about ideas, sports, food, and the small details that make something feel right. I&apos;m curious, opinionated, and I tend to follow problems longer than I probably should.
            </p>
          </div>
        </section>

        {/* The Journey - Cities */}
        <section className="py-24 px-6 border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll mb-16">
              <p className="font-editorial text-2xl md:text-3xl text-white/90 leading-snug">
                I&apos;ve lived in 12 cities across four continents.
              </p>
              <p className="text-lg text-white/60 mt-3 leading-relaxed">
                This sounds impressive on paper. In practice, it mostly means I pack fast and notice patterns.
              </p>
            </div>

            {/* Cities as connected route map */}
            <div className="reveal-on-scroll relative">
              {/* SVG connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {cities.map((city, i) => (
                  <Link
                    key={i}
                    href={city.wiki}
                    target="_blank"
                    className="relative group cursor-pointer"
                  >
                    {/* Connection line to next city */}
                    {i < cities.length - 1 && (
                      <div className="absolute top-3 left-full w-6 h-px bg-gradient-to-r from-white/30 to-white/10 hidden sm:block" style={{ zIndex: 1 }} />
                    )}
                    {/* Dot */}
                    <div className="flex items-start gap-3">
                      <div className="relative mt-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors" />
                        {i < cities.length - 1 && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white/20 to-transparent sm:hidden" />
                        )}
                      </div>
                      <div>
                        <p className="text-white/90 font-medium leading-tight group-hover:text-white transition-colors">{city.name}</p>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{city.country}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Closing line */}
            <div className="reveal-on-scroll mt-16">
              <p className="text-lg text-white/70 leading-relaxed">
                I don&apos;t think any one place explains a person.<br />
                But together, they leave a shape.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
