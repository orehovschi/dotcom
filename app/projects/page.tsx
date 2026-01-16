"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "xVal",
      subtitle: "Sports Intelligence Platform",
      description:
        "AI-powered football analytics. Data pipelines for 140+ leagues, ML player valuations, and a text-to-SQL scouting assistant.",
      tags: ["AI", "Python", "SQL", "ML"],
      link: "https://www.xval.app",
      image: "/xval.jpeg",
    },
    {
      title: "Histomancer",
      subtitle: "Lung Cancer Classifier",
      description:
        "Deep learning system for classifying lung histopathology images. EfficientNetB0 fine-tuned to ~98% accuracy with Grad-CAM explainability.",
      tags: ["Deep Learning", "TensorFlow", "Medical AI"],
      github: "https://github.com/liviuorehovschi/capstone",
      image: "/visualhist.jpeg",
    },
    {
      title: "Checkers",
      subtitle: "Game from Scratch",
      description:
        "Built entirely from scratch: custom game engine, custom AI bot with minimax and alpha-beta pruning, and custom frontend design.",
      tags: ["Python", "AI", "Algorithms", "UI"],
      github: "https://github.com/liviuorehovschi/checkerscpu",
      image: "/checkers.jpeg",
    },
    {
      title: "WashBot",
      subtitle: "Laundry Status Bot",
      description:
        "Telegram bot used by 150+ residents to track washer status and receive alerts. Simple utility that solved a daily annoyance.",
      tags: ["Python", "Telegram API"],
      github: "https://github.com/MSaadAsad/WashBot",
      image: "/wash.jpeg",
    },
    {
      title: "Oob",
      subtitle: "Video Platform",
      description:
        "Full-stack video sharing platform with Django REST backend and React frontend. AI-assisted recommendations using OpenAI embeddings.",
      tags: ["Django", "React", "PostgreSQL"],
      privateNote: "Private repository · Team project · Code available on request",
      image: "/oob.jpeg",
    },
    {
      title: "Tonight",
      subtitle: "Venue Assistant",
      description:
        "Analyzes Google Maps links using OpenAI and Maps APIs. AI-generated venue summaries and personalized recommendations.",
      tags: ["Flask", "OpenAI API", "Python"],
      privateNote: "Private repository (Minerva University) · Code available on request",
      image: "/tonight.jpeg",
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
              <div className="flex flex-wrap items-center gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                  >
                    Visit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </div>
  );
}
