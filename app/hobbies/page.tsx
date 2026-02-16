"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Hobbies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const hobbies = [
    {
      title: "Music",
      description:
        "Covers, experiments, and the occasional original.",
      image: "/music.jpeg",
      links: [
        { label: "YouTube", url: "https://www.youtube.com/@liviuorehovschi9629" },
        { label: "SoundCloud", url: "https://soundcloud.com/liviu-orehovschi" },
      ],
      details: {
        background: "I've been making music since high school, started with vocals and eventually moved into production. It's a creative outlet that balances the technical work I do during the day.",
        highlights: [
          "Self-taught in digital music production using Ableton and Logic Pro",
          "Create covers, remixes, and original compositions across various genres",
          "Explored vocal training and performance at Westtown School",
          "Music is how I process ideas that don't fit into code or spreadsheets",
        ],
        whatItMeans: "For me, music is less about being good and more about having a space where precision isn't the point. It's where I can experiment without worrying about whether the output is 'correct.'",
      },
    },
    {
      title: "Real Minerva CF",
      description:
        "Founded a university football club with 100+ members. Weekly matches, watch events, and training sessions.",
      image: "/football.jpeg",
      links: [
        { label: "View Project", url: "https://docs.google.com/presentation/d/1qxuOU49eTxbeTcEZVW7RswxV9vclsTqqyayzY2_0L3s/edit?usp=sharing" },
      ],
      details: {
        background: "I founded Real Minerva CF because Minerva didn't have a football community when I arrived. What started as casual kickabouts became one of the most consistent student organizations across all seven rotation cities.",
        highlights: [
          "Built the club from zero to 100+ active members across multiple continents",
          "Organized weekly matches, training sessions, and watch parties in every rotation city",
          "Created a community that persisted even as the student body rotated globally",
          "Managed logistics, equipment, and coordination across 7 countries",
        ],
        whatItMeans: "This taught me more about building community than any class. Getting people to show up consistently, across time zones, cultures, and busy schedules, requires follow-through and making something people actually want to be part of.",
      },
    },
    {
      title: "The Pickled Tomato Experiment",
      description:
        "pH measurements, salt ratios, temperature tracking, reaction dynamics. A Moldovan staple, approached with near-scientific precision.",
      image: "/tomato.jpeg",
      links: [
        { label: "View Study", url: "https://docs.google.com/presentation/d/1ECuB4Va-G-kjAFkv3wBOxZFCzGv6jmCK5zV9HnUXtx4/edit?usp=sharing" },
      ],
      details: {
        background: "Pickled tomatoes are a staple back home in Moldova, but most people just eyeball the process. I wanted to understand exactly what makes a perfect batch, so I treated it like a research project.",
        highlights: [
          "Tracked pH levels, salt concentrations, and temperature throughout fermentation",
          "Documented reaction dynamics and bacterial growth patterns",
          "Experimented with different variables to optimize flavor and texture",
          "Created detailed documentation of the entire process and results",
        ],
        whatItMeans: "This is what happens when someone who likes systems also likes food. It's not about being fancy, it's about understanding why something works so you can make it work better.",
      },
    },
    {
      title: "Sourdough Starter",
      description:
        "Patience, timing, variables. Each loaf teaches something new.",
      image: "/starter.jpeg",
      links: [
        { label: "View Experiment", url: "https://docs.google.com/presentation/d/1DcVwhZ6pWOuguoKqaqRgnx4Fs1nJjJ7V1Y6alX-dnXc/edit?usp=sharing" },
      ],
      details: {
        background: "Sourdough appealed to me because it's a system with many variables: temperature, hydration, timing, flour type. Small changes produce noticeably different results.",
        highlights: [
          "Maintained and fed a sourdough starter through multiple countries and climates",
          "Documented experiments with different flours, hydration levels, and fermentation times",
          "Learned to read the dough and adjust based on environmental conditions",
          "Each loaf is an iteration. Some succeed, some teach you something",
        ],
        whatItMeans: "Baking sourdough is a good metaphor for a lot of things: you can't rush fermentation, you have to pay attention to feedback, and consistency comes from understanding the process, not just following a recipe.",
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
              Beyond work
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
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-[340px] sm:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden snap-start"
          >
            {/* Image */}
            <Image
              src={hobby.image}
              alt={hobby.title}
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
              {hobby.links && hobby.links.length > 0 ? (
                <Link
                  href={hobby.links[0].url}
                  target="_blank"
                  className="text-2xl font-semibold text-white mb-2 hover:text-white/80 transition-colors"
                >
                  {hobby.title}
                </Link>
              ) : (
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {hobby.title}
                </h3>
              )}
              <p className="text-base text-white/70 leading-relaxed mb-4">
                {hobby.description}
              </p>

              {/* Links */}
              {hobby.links && hobby.links.length > 0 && (
                <div className="flex items-center gap-4">
                  {hobby.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
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
                    src={hobbies[previewIndex].image}
                    alt={hobbies[previewIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {hobbies[previewIndex].title}
                  </h2>
                  <p className="text-white/60 mt-1">{hobbies[previewIndex].description}</p>
                </div>
              </div>

              {/* Background */}
              <div className="mb-6">
                <p className="text-white/70 leading-relaxed">
                  {hobbies[previewIndex].details.background}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
                  Highlights
                </h3>
                <ul className="space-y-3">
                  {hobbies[previewIndex].details.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                      <span className="text-white/40 mt-1">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it means */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/60 italic leading-relaxed">
                  &ldquo;{hobbies[previewIndex].details.whatItMeans}&rdquo;
                </p>
              </div>

              {/* Links */}
              {hobbies[previewIndex].links && hobbies[previewIndex].links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {hobbies[previewIndex].links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      target="_blank"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        i === 0
                          ? "bg-white text-black hover:bg-white/90"
                          : "border border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
