"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [courseworkExpanded, setCourseworkExpanded] = useState(false);

  const storyParagraphs = [
    "I was born in Nimereuca, near Soroca. I do not remember it, but it still feels like the start. I grew up in Chișinău, which is where I learned two things: how to move fast, and how to have opinions.",
    "Left early. Kept moving. By university, new countries stopped feeling new. You learn to spot patterns: who delivers, who talks.",
    "Two majors. Would have done three. I like hard problems and people who finish what they start.",
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

        .flowing-line {
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          animation: flowDown 2s ease-in-out infinite;
        }

        @keyframes flowDown {
          0%, 100% { opacity: 0.3; transform: translateY(-8px); }
          50% { opacity: 1; transform: translateY(8px); }
        }

        .skill-row {
          position: relative;
          padding-left: 1rem;
          border-left: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .skill-row:hover {
          border-left-color: rgba(255,255,255,0.2);
          padding-left: 1.25rem;
        }

        .skill-row::before {
          content: '';
          position: absolute;
          left: -3px;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .skill-row:hover::before {
          background: rgba(255,255,255,0.6);
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .skill-pill {
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-1px);
        }
      `}</style>

     <div className="min-h-screen">
      {/* Hero Opening - Full viewport, centered */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="reveal-on-scroll font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight">
            I did the global thing for real.
          </h1>
          <p className="reveal-on-scroll font-editorial text-2xl sm:text-3xl md:text-4xl text-white/40 mt-4 leading-snug">
            I learned what reliable sounds like in ten different accents.
          </p>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/30 text-xs uppercase tracking-widest mb-3">Scroll</span>
          <div className="flowing-line w-px h-10" />
          <svg className="w-4 h-4 text-white/30 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

        {/* Story Section */}
        <section className="py-24 px-6">
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

            {/* Flow indicator */}
            <div className="flex flex-col items-center mt-16">
              <div className="flowing-line w-px h-12" />
              <svg className="w-4 h-4 text-white/20 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* How I Build */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="reveal-on-scroll text-sm tracking-[0.3em] text-white/40 uppercase mb-10">
              How I Build
            </p>

            <div className="reveal-on-scroll space-y-6">
              {[
                { label: "I write", tools: ["Python", "SQL", "TypeScript"] },
                { label: "I build with", tools: ["React", "FastAPI", "Flask", "Django", "SQLAlchemy"] },
                { label: "I model with", tools: ["pandas", "scikit-learn", "TensorFlow", "OpenAI API"] },
                { label: "I deploy on", tools: ["PostgreSQL", "AWS", "Docker", "Vercel", "Cloudflare"] },
                { label: "I ship with", tools: ["Git", "Hugging Face"] },
              ].map((row, i) => (
                <div key={i} className="skill-row py-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <span className="text-white/50 text-sm font-medium w-28 shrink-0">{row.label}</span>
                    <div className="flex flex-wrap gap-2">
                      {row.tools.map((tool) => (
                        <span
                          key={tool}
                          className="skill-pill px-3 py-1.5 text-sm text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-lg cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flow indicator */}
            <div className="flex flex-col items-center mt-16">
              <div className="flowing-line w-px h-12" />
              <svg className="w-4 h-4 text-white/20 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
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
                <p className="text-lg text-white/70 mb-6">B.S. Computer Science & AI · B.S. Biology (Cells & Organisms)</p>
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

            {/* Flow indicator */}
            <div className="flex flex-col items-center mt-16">
              <div className="flowing-line w-px h-12" />
              <svg className="w-4 h-4 text-white/20 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6">
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
