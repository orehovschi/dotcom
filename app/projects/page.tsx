"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  details: {
    role: string;
    highlights: string[];
    impact: string;
  };
  link?: string;
  github?: string;
  privateNote?: string;
  live?: {
    url: string;
    label: string;
  };
};

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "xVal",
      subtitle: "Sports Intelligence Platform",
      description:
        "AI-powered football analytics. Data pipelines for 140+ leagues, ML player valuations, and a text-to-SQL scouting assistant.",
      tags: ["AI", "Python", "SQL", "ML"],
      link: "https://www.xval.app",
      image: "/xval.jpeg",
      details: {
        role: "Co-Founder & Technical Lead",
        highlights: [
          "End-to-end data infrastructure across 140+ leagues",
          "ML-based player valuation and similarity search",
          "Natural language scouting assistant",
          "Full-stack ownership and AWS deployment",
        ],
        impact:
          "Turning fragmented football data into decision-grade intelligence.",
      },
    },
    {
      title: "Histomancer",
      subtitle: "Lung Cancer Classifier",
      description:
        "Deep learning system for lung histopathology with Grad-CAM explainability.",
      tags: ["Deep Learning", "TensorFlow", "Medical AI"],
      github: "https://github.com/orehovschi/capstone",
      live: {
        url: "https://histomancer.lol",
        label: "Open App",
      },
      image: "/visualhist.jpeg",
      details: {
        role: "Solo Developer",
        highlights: [
          "EfficientNetB0 fine-tuned to ~98% accuracy",
          "Grad-CAM interpretability",
          "End-to-end ML pipeline",
          "Clinician-oriented UI",
        ],
        impact:
          "Demonstrating how AI can assist early cancer detection.",
      },
    },
    {
      title: "Checkers",
      subtitle: "Game from Scratch",
      description:
        "Custom game engine and AI using minimax with alpha-beta pruning.",
      tags: ["Python", "AI", "Algorithms", "UI"],
      github: "https://github.com/orehovschi/checkerscpu",
      live: {
        url: "https://checkproj.vercel.app/",
        label: "Play Game",
      },
      image: "/checkers.jpeg",
      details: {
        role: "Solo Developer",
        highlights: [
          "Game engine built from first principles",
          "Minimax + alpha-beta pruning AI",
          "Custom board heuristics",
          "Polished UI",
        ],
        impact:
          "A deep dive into game theory and algorithmic decision-making.",
      },
    },
    {
      title: "WashBot",
      subtitle: "Laundry Status Bot",
      description:
        "Telegram bot used by 150+ residents to track washer availability.",
      tags: ["Python", "Telegram API"],
      github: "https://github.com/MSaadAsad/WashBot",
      image: "/wash.jpeg",
      details: {
        role: "Contributor",
        highlights: [
          "Real-time notifications",
          "Multi-machine tracking",
          "Conversational interface",
        ],
        impact:
          "Saving people time on a daily annoyance.",
      },
    },
    {
      title: "Oob",
      subtitle: "Video Platform",
      description:
        "Full-stack video platform with AI-assisted recommendations.",
      tags: ["Django", "React", "PostgreSQL"],
      privateNote: "Private repository · Code available on request",
      image: "/oob.jpeg",
      details: {
        role: "Full-Stack Developer",
        highlights: [
          "Django REST API",
          "React frontend",
          "Embedding-based recommendations",
        ],
        impact:
          "A complete full-stack system with AI integration.",
      },
    },
    {
      title: "Tonight",
      subtitle: "Venue Assistant",
      description:
        "AI-generated venue summaries using Maps and OpenAI APIs.",
      tags: ["Flask", "OpenAI API", "Python"],
      privateNote: "Private repository · University project",
      image: "/tonight.jpeg",
      details: {
        role: "Developer",
        highlights: [
          "Maps + OpenAI integration",
          "AI summarization",
          "Personalized recommendations",
        ],
        impact:
          "Helping decide where to go, faster.",
      },
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white/90 sm:text-4xl">
              Things I&apos;ve built
            </h1>
          </div>

          {/* Scroll controls */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-8 px-6 lg:px-[calc((100vw-64rem)/2+2rem)] snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-[340px] sm:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden snap-start"
          >
            {/* Image - object-top to show logos */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay - stronger for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

            {/* Preview button - minimalistic eye icon like hobbies */}
            <button
              onClick={() => setPreviewIndex(index)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/60 hover:border-white/20 transition-all group/btn"
              title="Preview details"
            >
              <svg className="w-4 h-4 text-white/70 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              {(project.link || project.live) ? (
                <Link
                  href={project.live?.url || project.link || "#"}
                  target="_blank"
                  className="text-2xl font-semibold text-white mb-1 hover:text-white/80 transition-colors"
                >
                  {project.title}
                </Link>
              ) : (
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
              )}
              <p className="text-sm text-white/60 mb-3">{project.subtitle}</p>
              <p className="text-base text-white/70 leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {project.live.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {!project.live && project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    Visit
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    View Code
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {project.privateNote && (
                  <span className="text-sm text-white/40 italic">
                    {project.privateNote}
                  </span>
                )}
              </div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Preview Modal - matching hobbies style */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setPreviewIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={projects[previewIndex].image}
                    alt={projects[previewIndex].title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {projects[previewIndex].title}
                  </h2>
                  <p className="text-white/60 mt-1">{projects[previewIndex].subtitle}</p>
                  <p className="text-sm text-white/40 mt-1">{projects[previewIndex].details.role}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-white/70 leading-relaxed">
                  {projects[previewIndex].description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
                  Highlights
                </h3>
                <ul className="space-y-3">
                  {projects[previewIndex].details.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                      <span className="text-white/40 mt-1">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/60 italic leading-relaxed">
                  &ldquo;{projects[previewIndex].details.impact}&rdquo;
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-6">
                {projects[previewIndex].live && (
                  <Link
                    href={projects[previewIndex].live.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    {projects[previewIndex].live.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {!projects[previewIndex].live && projects[previewIndex].link && (
                  <Link
                    href={projects[previewIndex].link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    Visit Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {projects[previewIndex].github && (
                  <Link
                    href={projects[previewIndex].github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
                  >
                    View Code
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
