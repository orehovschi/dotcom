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
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const PrimaryButton = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      target="_blank"
      className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="section-container mb-8 flex items-end justify-between">
        <h1 className="text-3xl font-bold text-white/90 sm:text-4xl">
          Things I&apos;ve built
        </h1>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-3 rounded-full border border-white/10" />
          <button onClick={() => scroll("right")} className="p-3 rounded-full border border-white/10" />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-8 px-6 snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[380px] aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/60 mb-3">{project.subtitle}</p>
              <p className="text-white/70 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-3 items-center">
                {project.live && (
                  <PrimaryButton href={project.live.url}>
                    {project.live.label}
                  </PrimaryButton>
                )}
                {!project.live && project.link && (
                  <PrimaryButton href={project.link}>
                    Visit
                  </PrimaryButton>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    View Code
                  </Link>
                )}
                {project.privateNote && (
                  <span className="text-white/40 text-sm italic">
                    {project.privateNote}
                  </span>
                )}
              </div>

              <button
                onClick={() => setPreviewIndex(index)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40"
              >
                👁
              </button>
            </div>
          </div>
        ))}
      </div>

      {previewIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="bg-[#0a0a0a] rounded-2xl max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-white mb-2">
              {projects[previewIndex].title}
            </h2>
            <p className="text-white/60 mb-4">
              {projects[previewIndex].subtitle}
            </p>

            <ul className="space-y-2 mb-6">
              {projects[previewIndex].details.highlights.map((h, i) => (
                <li key={i} className="text-white/70">
                  • {h}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              {projects[previewIndex].live && (
                <PrimaryButton href={projects[previewIndex].live!.url}>
                  {projects[previewIndex].live!.label}
                </PrimaryButton>
              )}
              {!projects[previewIndex].live &&
                projects[previewIndex].link && (
                  <PrimaryButton href={projects[previewIndex].link}>
                    Visit
                  </PrimaryButton>
                )}
              {projects[previewIndex].github && (
                <Link
                  href={projects[previewIndex].github}
                  target="_blank"
                  className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm hover:bg-white/5 transition-colors"
                >
                  View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
