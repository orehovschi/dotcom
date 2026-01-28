"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
type Project = {
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
          "Architected end-to-end data infrastructure processing 140+ football leagues, 500K+ players, and 2M+ historical matches",
          "Built ML-powered player valuation models using embeddings and similarity search for talent identification",
          "Developed a natural language scouting assistant that converts plain English queries into complex SQL—handling 1000+ queries",
          "Full-stack ownership: React frontend, Python backend, PostgreSQL database, deployed on AWS",
        ],
        impact: "Turning scattered football data into actionable intelligence for scouts and analysts.",
      },
    },
    {
      title: "Histomancer",
      subtitle: "Lung Cancer Classifier",
      description:
        "Deep learning system for classifying lung histopathology images. EfficientNetB0 fine-tuned to ~98% accuracy with Grad-CAM explainability.",
      tags: ["Deep Learning", "TensorFlow", "Medical AI"],
      github: "https://github.com/liviuorehovschi/capstone",
      image: "/visualhist.jpeg",
      details: {
        role: "Solo Developer",
        highlights: [
          "Fine-tuned EfficientNetB0 on lung histopathology dataset achieving ~98% classification accuracy",
          "Implemented Grad-CAM visualizations for model interpretability—critical for medical AI trust",
          "Built complete pipeline: data preprocessing, augmentation, training, evaluation, and deployment",
          "Designed intuitive interface for pathologists to upload and analyze tissue samples",
        ],
        impact: "Demonstrating how deep learning can assist medical professionals in early cancer detection.",
      },
    },
    {
      title: "Checkers",
      subtitle: "Game from Scratch",
      description:
        "Built entirely from scratch: custom game engine, custom AI bot with minimax and alpha-beta pruning, and custom frontend design.",
      tags: ["Python", "AI", "Algorithms", "UI"],
      github: "https://github.com/liviuorehovschi/checkerscpu",
      image: "/checkers.jpeg",
      details: {
        role: "Solo Developer",
        highlights: [
          "Engineered complete game logic from first principles—no libraries, no shortcuts",
          "Implemented minimax algorithm with alpha-beta pruning for competitive AI gameplay",
          "Developed custom heuristics for board evaluation: piece positioning, king value, and mobility",
          "Designed and built the entire UI/UX from scratch for a polished player experience",
        ],
        impact: "A deep dive into game theory, algorithm optimization, and the satisfaction of building something complete.",
      },
    },
    {
      title: "WashBot",
      subtitle: "Laundry Status Bot",
      description:
        "Telegram bot used by 150+ residents to track washer status and receive alerts. Simple utility that solved a daily annoyance.",
      tags: ["Python", "Telegram API"],
      github: "https://github.com/MSaadAsad/WashBot",
      image: "/wash.jpeg",
      details: {
        role: "Contributor",
        highlights: [
          "Built real-time notification system alerting users when washers become available",
          "Implemented status tracking across multiple machines in the building",
          "Designed conversational interface for easy interaction via Telegram",
          "Adopted by 150+ residents—proof that simple solutions to real problems get used",
        ],
        impact: "Sometimes the best projects are the ones that save people 10 minutes of frustration every day.",
      },
    },
    {
      title: "Oob",
      subtitle: "Video Platform",
      description:
        "Full-stack video sharing platform with Django REST backend and React frontend. AI-assisted recommendations using OpenAI embeddings.",
      tags: ["Django", "React", "PostgreSQL"],
      privateNote: "Private repository · Team project · Code available on request",
      image: "/oob.jpeg",
      details: {
        role: "Full-Stack Developer (Team of 4)",
        highlights: [
          "Built RESTful API with Django handling video uploads, user authentication, and content management",
          "Developed React frontend with responsive video player and intuitive navigation",
          "Integrated OpenAI embeddings for semantic video recommendations based on content similarity",
          "Implemented PostgreSQL database design optimized for video metadata and user interactions",
        ],
        impact: "A complete video platform showcasing full-stack capabilities and AI integration.",
      },
    },
    {
      title: "Tonight",
      subtitle: "Venue Assistant",
      description:
        "Analyzes Google Maps links using OpenAI and Maps APIs. AI-generated venue summaries and personalized recommendations.",
      tags: ["Flask", "OpenAI API", "Python"],
      privateNote: "Private repository (Minerva University) · Code available on request",
      image: "/tonight.jpeg",
      details: {
        role: "Developer (University Project)",
        highlights: [
          "Built Flask backend integrating Google Maps and OpenAI APIs for venue analysis",
          "Developed AI-powered summarization of venue reviews, atmosphere, and practical details",
          "Created personalized recommendation engine based on user preferences and past choices",
          "Designed clean interface for quickly evaluating nightlife options",
        ],
        impact: "Making it easier to answer 'where should we go tonight?' with data-driven suggestions.",
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
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Preview button */}
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
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.github) ? (
                <Link
                  href={project.link || project.github || "#"}
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
            <div className="flex flex-wrap gap-3 mt-6">
              {/* Primary: Live app */}
              {projects[previewIndex].live && (
                <Link
                  href={projects[previewIndex].live.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  {projects[previewIndex].live.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
            
              {/* Fallback */}
              {!projects[previewIndex].live && projects[previewIndex].link && (
                <Link
                  href={projects[previewIndex].link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Visit Project
                </Link>
              )}
            
              {/* Secondary: Code */}
              {projects[previewIndex].github && (
                <Link
                  href={projects[previewIndex].github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
                >
                  View Code
                </Link>
              )}
            </div>
            
                          


            {/* Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Preview Modal */}
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
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {projects[previewIndex].title}
                  </h2>
                  <p className="text-white/60">{projects[previewIndex].subtitle}</p>
                  <p className="text-sm text-white/40 mt-1">{projects[previewIndex].details.role}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[previewIndex].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
                  Key Highlights
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
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary action: Live app */}
                {project.live && (
                  <Link
                    href={project.live.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    {project.live.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                )}
              
                {/* Fallback primary (projects without live app) */}
                {!project.live && project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                  >
                    Visit
                  </Link>
                )}
              
                {/* Secondary action: Code */}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
                  >
                    View Code
                  </Link>
                )}
              
                {project.privateNote && (
                  <span className="text-sm text-white/40 italic">
                    {project.privateNote}
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
