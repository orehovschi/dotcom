"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [courseworkExpanded, setCourseworkExpanded] = useState(false);

  const storyParagraphs = [
    "I was born in Nimereuca, near Soroca. I do not remember it, but it still feels like the start. I grew up in Chișinău, which is where I learned two things: how to move fast, and how to have opinions.",
    "I started leaving early. Internships, odd jobs, trips that looked unnecessary until they were not. By university, moving countries became normal. The glamorous part wears off quickly. Then you start noticing the real stuff: who shows up, who flakes, who performs confidence, who actually does the work. Different places, same human bugs.",
    "I did two majors because they did not let me do three. I like clean logic, and I like real life, even when it refuses to be clean. I am drawn to ambitious problems, sharp teams, and situations where you have to figure it out as you go.",
    "I am not chill. I am just professional about it."
  ];

  const courseworkByType = {
    CS: {
      label: "Computational Sciences",
      courses: [
        "CS162 Software Engineering: Building Powerful Applications",
        "CS152 Theory and Applications of Artificial Intelligence",
        "CS142 Theory of Computation",
        "CS130 Statistical Modeling: Prediction and Causation",
        "CS114 Probability and Statistics and the Structure of Randomness",
        "CS113 Theory and Applications of Linear Algebra",
        "CS111 Single and Multivariable Calculus",
        "CS110 Problem Solving with Data Structures and Algorithms",
        "CS51B Programming",
        "CS51 Formal Analyses",
        "CS50 Formal Analyses",
      ],
    },
    NS: {
      label: "Natural Sciences",
      courses: [
        "NS164 Solutions From and For Life",
        "NS154 Life's Chemistry",
        "NS144 Genes to Organisms",
        "NS125 Research Methods",
        "NS113 Chemical Structure and Reactivity",
        "NS112 Evolution Across Multiple Scales",
        "NS111 Implications of Earth's Cycles",
        "NS110L Physics of Life",
        "NS51 Empirical Analyses",
        "NS50 Empirical Analyses",
      ],
    },
    SS: {
      label: "Social Sciences",
      courses: [
        "SS51 Complex Systems",
        "SS50 Complex Systems",
      ],
    },
    AH: {
      label: "Arts & Humanities",
      courses: [
        "AH51 Multimodal Communications",
        "AH50 Multimodal Communications",
      ],
    },
    IL: {
      label: "Intercultural Learning",
      courses: [
        "IL94 Integrated Learning IV: Managing Complexity",
        "IL93 Integrated Learning III: Managing Complexity",
        "IL92 Integrated Learning II: Managing Complexity",
        "IL91 Integrated Learning I: Managing Complexity",
      ],
    },
    GL: {
      label: "Global Learning",
      courses: [
        "GL98 Global Learning VIII",
        "GL97 Global Learning VII",
        "GL96 Global Learning VI",
        "GL95 Global Learning V",
      ],
    },
    CP: {
      label: "Capstone Projects",
      courses: [
        "CP196 Manifest",
        "CP194 Capstone Directed Study II",
        "CP193 Capstone Directed Study I",
        "CP192 Capstone Seminar",
        "CP191 Capstone Seminar",
        "CCP50 Cornerstone Civic Project",
      ],
    },
  };

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
          <h1 className="reveal-on-scroll font-editorial text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.15] tracking-tight">
            I did the global thing for real.<br />
            <span className="text-white/50">I learned what reliable sounds like in ten different accents.</span>
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
                  <Link href="https://www.minerva.edu" target="_blank" className="font-editorial text-3xl text-white hover:text-white/80 transition-colors">Minerva University</Link>
                  <p className="text-sm text-white/60">Class of &apos;25</p>
                </div>
                <p className="text-lg text-white/70 mb-2">Dual B.S. in Computational Sciences & Natural Sciences</p>
                <p className="text-base text-white/60 mb-6">
                  Concentrations: Computer Science & AI · Cells and Organisms
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                  <Link href="https://www.wuri.world/wuri-ranking-2025" target="_blank" className="text-white/80 underline underline-offset-2 decoration-white/30 hover:decoration-white/60 transition-colors">Ranked #1 in the world for innovation</Link> by WURI in 2025. No campus. Seven countries. Live seminars, heavy on discussion. Small, selective, and a little weird in the best way.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                  Student Body President. Founded Minerva Football Club and the Breakfast Club, a roaming food and discussion group that met in Taiwan and India to explore local spots and talk through university life. Member of Google Developer Student Club.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                  Started in biology, added CS along the way. Not planned. Just kept finding myself in situations where technical skill mattered, and I liked that.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-6">
                  Got lucky with professors. Special thanks to{" "}
                  <Link href="https://www.minerva.edu/people/rena-levitt-ph-d/" target="_blank" className="text-white/80 hover:text-white transition-colors">Rena Levitt</Link>,{" "}
                  <Link href="https://www.minerva.edu/people/john-levitt-ph-d/" target="_blank" className="text-white/80 hover:text-white transition-colors">John Levitt</Link>, and{" "}
                  <Link href="https://www.minerva.edu/people/katie-donnelly/" target="_blank" className="text-white/80 hover:text-white transition-colors">Katie Donnelly</Link>. And especially{" "}
                  <Link href="https://www.minerva.edu/people/jon-wilkins/" target="_blank" className="text-white/80 hover:text-white transition-colors">Jon Wilkins</Link>, my capstone advisor and favorite professor.
                </p>

                {/* Expandable Coursework */}
                <div className="mt-6">
                  <button
                    onClick={() => setCourseworkExpanded(!courseworkExpanded)}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors"
                  >
                    <span>Coursework</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${courseworkExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      courseworkExpanded ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-3">
                      {Object.entries(courseworkByType).map(([key, { label, courses }]) => (
                        <div key={key}>
                          <span className="text-xs text-white/40 uppercase tracking-wider">{label}</span>
                          <p className="text-sm text-white/50 leading-relaxed mt-1">
                            {courses.join(", ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <Link href="https://www.westtown.edu" target="_blank" className="font-editorial text-2xl text-white/80 hover:text-white transition-colors">Westtown School</Link>
                  <p className="text-sm text-white/60">Class of &apos;19</p>
                </div>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-3">
                  Boarding school in Pennsylvania. I mixed a pretty unorthodox set of interests: advanced math and STEM, wrestling and soccer, drawing, vocals and digital music production, plus a part-time job in the school cafeteria. It was intense, but it fit me.
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                  <Link href="https://www.assistscholars.org" target="_blank" className="text-white/80 hover:text-white transition-colors">ASSIST scholarship award</Link>. <Link href="https://nationalspanishexam.org/" target="_blank" className="text-white/80 hover:text-white transition-colors">National Spanish Exam</Link> medalist. Academic distinction.
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
          <div className="max-w-4xl mx-auto space-y-2">
            <p className="reveal-on-scroll text-white/60 text-base leading-relaxed">
              <span className="text-white/70">Day-to-day:</span>{" "}
              Python, TypeScript, SQL, React, Next.js, PostgreSQL, pandas, Git.
            </p>
            <p className="reveal-on-scroll text-white/60 text-base leading-relaxed">
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
                  href="https://linkedin.com/in/orehovschi"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white/70 border border-white/[0.1] hover:bg-white/[0.03] hover:border-white/[0.15] transition-all"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/orehovschi"
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
