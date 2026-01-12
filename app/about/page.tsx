"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const storyParagraphs = [
    
  "I was born in Nimereuca, Soroca in northern Moldova. I only lived there for about a year, but it still feels like the real beginning of my story. Most of my childhood and school years were in Chișinău, the capital, where everything moved faster and the world felt bigger. Even then, I was the kind of kid who wanted to know what was on the other side of the map, not because I was chasing something shiny, but because I was curious and a little restless.",
  "Before university, I was already moving around. I travelled, took internships, and said yes to chances that sounded slightly uncomfortable, which usually meant they were worth doing. By the time I started college, I had learned a simple lesson. New places do not just change what you see. They change what you get used to. You learn what you miss, what you tolerate, what you value, and what kind of person you become when nobody knows you yet.",
  "University took that to another level. I lived in more than nine countries and travelled through many more. After a while you stop being impressed by airports and start noticing patterns. How teams actually work. How incentives shape behavior. How culture shows up in small things like punctuality, honesty, or who speaks first in a room. I think that is where my interest in systems came from.",
  "I graduated in two fields because I could not pick a single lens. I like the precision of technical work and the messiness of real life. I like building things, seeing what happens, and adjusting until it feels solid. Sometimes that looks like software and models. Sometimes it looks like organizing a football community from scratch. Sometimes it looks like a fermentation experiment where the data is bubbles, smell, and whether the bread actually rises.",
  "If there is a common thread, it is that I like doing things properly and I care about clarity. I do not need everything to be perfect, but I do try to be honest about what works and what does not. I learn fast, I follow through, and I like turning messy problems into something simpler and easier to use."
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
          <h1 className="reveal-on-scroll font-editorial text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight">
            I grew up moving a lot,<br />
            <span className="text-white/50">so I pay attention to what lasts.</span>
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
                  className="story-paragraph text-white/60 leading-relaxed text-lg opacity-0 translate-y-4 transition-all duration-700 ease-out"
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
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/60 uppercase mb-12">
              Education
            </p>

            <div className="space-y-16">
              <div className="reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-editorial text-3xl text-white">Minerva University</h3>
                  <p className="text-sm text-white/60">2021 — 2025</p>
                </div>
                <p className="text-lg text-white/70 mb-2">Dual B.S. in Computational Sciences & Natural Sciences</p>
                <p className="text-base text-white/60 mb-6">
                  Concentrations: Computer Science & AI · Cells and Organisms
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                  Minerva is a global university with no single campus. Classes were live and discussion-heavy while we rotated across seven countries. I took two of Minerva&apos;s hardest majors at the same time, worked alongside school, and still leaned into the travel and the community side of it.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                  I served as Student Body President and founded Minerva Football Club. The club became one of the most consistent parts of campus life across rotations, and it taught me a lot about building community, following through, and making something people actually want to keep showing up for.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-6">
                  I started university more pulled toward biology, and computer science became part of the picture along the way. It wasn&apos;t some perfectly planned path. I just kept ending up in situations where being able to build and think technically made the difference, and I liked that.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mt-6">
                  <span className="text-white/70">Coursework that stuck with me:</span>{" "}
                  Software Engineering, AI Theory, Theory of Computation, Statistical Modeling, Data Structures, Linear Algebra, Probability & Stats, Complex Systems, Genes to Organisms, Evolution, Physics of Life.
                </p>
              </div>

              <div className="reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-editorial text-2xl text-white/80">Westtown School</h3>
                  <p className="text-sm text-white/60">2017 — 2018</p>
                </div>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                  Boarding school in Pennsylvania. I mixed a pretty unorthodox set of interests: advanced math and STEM, wrestling and soccer, drawing, vocals and digital music production, plus a part-time job in the school cafeteria. It was intense, but it fit me.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Work On */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/60 uppercase mb-12">
              What I Work On
            </p>

            <div className="reveal-on-scroll grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 4h16M9 4v3m6-3v3" />
                  </svg>
                </div>
                <h3 className="text-lg text-white font-medium mb-2">Building Products</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  I like taking an idea from vague to usable. The whole loop: make a plan, build the thing, iterate fast, and keep polishing until it feels right.
                </p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-lg text-white font-medium mb-2">Applied Analysis</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  I do best when there&apos;s something concrete to understand and improve. Sometimes that involves models or statistics, but I&apos;m not attached to any one method. I just want the result to be clear and defensible.
                </p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
                  <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                  </svg>
                </div>
                <h3 className="text-lg text-white font-medium mb-2">Full Stack Ownership</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  I&apos;m happiest owning work end-to-end, from data shapes and backend logic to the UI and deployment. Less handoff, more momentum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-white/60 text-base leading-relaxed">
              <span className="text-white/70">Day-to-day:</span>{" "}
              Python, TypeScript, SQL, React, Next.js, PostgreSQL, pandas, Git.{" "}
              <span className="text-white/70">When needed:</span>{" "}
              R, Flask, TensorFlow, Docker, AWS.
            </p>
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
