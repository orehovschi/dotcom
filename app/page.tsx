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
        <section className="relative min-h-screen overflow-hidden">
          {/* Background image with stagelight vignette */}
          <div className="absolute inset-0">
            <Image
              src="/me.jpeg"
              alt="Liviu Orehovschi presenting at pitch night"
              fill
              className="object-cover object-[center_25%] scale-[0.94] brightness-[0.75] contrast-105"
              priority
            />
            {/* Dark tint for text readability */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Heavy side vignettes - more padding */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0a0a0b 0%, #0a0a0b 8%, transparent 30%, transparent 70%, #0a0a0b 92%, #0a0a0b 100%)' }} />
            {/* Heavy top vignette */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0a0a0b 0%, #0a0a0b 3%, transparent 20%, transparent 100%)' }} />
            {/* Heavy bottom vignette */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0b 0%, #0a0a0b 5%, transparent 30%, transparent 100%)' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen justify-end pb-32">
            {/* Floating Navigation Links */}
            <div className="section-container">
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 sm:gap-x-12">
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
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-medium text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_2px_20px_rgba(255,255,255,0.5)] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 transition-colors">
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
        </section>

        {/* Editorial Intro Section */}
        <section className="py-16 border-t border-[var(--glass-border)]">
          <div className="max-w-3xl mx-auto px-6 space-y-4">
            <p className="reveal-on-scroll text-base md:text-lg text-white/70 leading-relaxed">
              I&apos;m Liviu. Grew up in <span className="highlight-word">Moldova</span>, ended up in the Bay. Building <Link href="https://xval.app" target="_blank" className="text-white hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40">xVal</Link> because football arguments deserve better than screenshots and vibes.
            </p>
            <p className="reveal-on-scroll text-base md:text-lg text-white/70 leading-relaxed">
              When I&apos;m not working, I cook. A lot. Fermentation, sourdough, pickles, brines. The kind of food that takes days and teaches patience. I got that from home, where you grow what you eat and &quot;from scratch&quot; is just how things are done.
            </p>
          </div>
        </section>

        {/* The Journey - Cities */}
        <section className="py-24 px-6 border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll mb-12">
              <p className="font-editorial text-2xl md:text-3xl text-white/90 leading-snug">
                I&apos;ve lived in 12 cities across four continents.
              </p>
              <p className="text-base text-white/50 mt-3">
                Sounds glamorous until you realize it mostly means I got good at packing and saying goodbye.
              </p>
            </div>

            {/* Interactive World Map */}
            <div className="reveal-on-scroll">
              <WorldMap />
            </div>

            {/* Closing line */}
            <div className="reveal-on-scroll mt-12">
              <p className="text-base text-white/40">
                One pin, one story.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
