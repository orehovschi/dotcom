"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for Leaflet (requires window)
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded border border-[var(--glass-border)] bg-[var(--background)] flex items-center justify-center">
      <span className="text-[var(--muted)] text-sm">Loading map...</span>
    </div>
  ),
});

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

        .intro-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .intro-card:hover {
          border-color: rgba(255,255,255,0.12);
        }

        .flowing-line {
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          animation: flowDown 2s ease-in-out infinite;
        }

        @keyframes flowDown {
          0%, 100% { opacity: 0.3; transform: translateY(-10px); }
          50% { opacity: 1; transform: translateY(10px); }
        }

        .glow-text {
          text-shadow: 0 0 30px rgba(255,255,255,0.15);
        }
      `}</style>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background image with stagelight vignette */}
          <div className="absolute inset-0">
            <Image
              src="/me.jpeg"
              alt="Liviu Orehovschi presenting at pitch night"
              fill
              className="object-cover object-[center_25%] sm:object-[center_25%] scale-[1] sm:scale-[0.94] brightness-[0.7] sm:brightness-[0.75] contrast-105"
              priority
            />
            {/* Dark tint for text readability - stronger on mobile */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
            {/* Side vignettes - softer on mobile */}
            <div className="absolute inset-0 hidden sm:block" style={{ background: 'linear-gradient(to right, #0a0a0b 0%, #0a0a0b 8%, transparent 30%, transparent 70%, #0a0a0b 92%, #0a0a0b 100%)' }} />
            <div className="absolute inset-0 sm:hidden" style={{ background: 'linear-gradient(to right, #0a0a0b 0%, transparent 15%, transparent 85%, #0a0a0b 100%)' }} />
            {/* Top vignette */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0a0a0b 0%, #0a0a0b 3%, transparent 20%, transparent 100%)' }} />
            {/* Bottom vignette - stronger on mobile for nav readability */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0b 0%, #0a0a0b 8%, transparent 40%, transparent 100%)' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen justify-end pb-[22vh] sm:pb-[18vh]">
            {/* Floating Navigation Links */}
            <div className="section-container">
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-start sm:gap-x-12 sm:gap-y-4">
                {[
                  { href: "/about", title: "About", desc: "Background & education" },
                  { href: "/experiences", title: "Experience", desc: "Work history" },
                  { href: "/projects", title: "Projects", desc: "Things I've built" },
                  { href: "/hobbies", title: "Hobbies", desc: "Beyond work" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative"
                  >
                    <div className="text-left">
                      <h3 className="text-base sm:text-xl font-medium text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_2px_20px_rgba(255,255,255,0.5)] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                    {/* Subtle glow on hover */}
                    <div className="absolute -inset-3 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator at bottom */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <span className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">Scroll</span>
            <div className="flowing-line w-px h-8 sm:h-10" />
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Dynamic Intro Section */}
        <section className="py-16 border-t border-[var(--glass-border)] relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative">
            {/* Main intro cards */}
            <div className="reveal-on-scroll grid md:grid-cols-2 gap-4">
              <div className="intro-card rounded-2xl p-6 transition-all duration-300">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Origin → Present</p>
                <p className="text-white/80 leading-relaxed">
                  Grew up in <span className="text-white glow-text">Moldova</span>, ended up in the Bay. Building{" "}
                  <Link href="https://xval.app" target="_blank" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors">
                    xVal
                  </Link>{" "}
                  because football arguments deserve better than &quot;trust me bro&quot; and a screenshot.
                </p>
              </div>

              <div className="intro-card rounded-2xl p-6 transition-all duration-300">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Off the clock</p>
                <p className="text-white/80 leading-relaxed">
                  I cook, host, and go too far on desserts. I make music and keep a creative streak alive on purpose, because it makes the technical work sharper. Same pattern every time: iterate until it hits.
                </p>
              </div>
            </div>

            {/* Flowing connection to map */}
            <div className="flex flex-col items-center mt-12 mb-4">
              <div className="flowing-line w-px h-16" />
              <svg className="w-5 h-5 text-white/30 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* The Journey - Cities */}
        <section className="pt-8 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll mb-8 text-center">
              <p className="font-editorial text-2xl md:text-3xl text-white/90 leading-snug">
                12 cities. Four continents.
              </p>
              <p className="text-sm text-white/40 mt-2">
                Tap a pin to explore.
              </p>
            </div>

            {/* Interactive World Map */}
            <div className="reveal-on-scroll">
              <WorldMap />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
