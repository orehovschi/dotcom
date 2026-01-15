"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hobbies() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    },
    {
      title: "Real Minerva CF",
      description:
        "Founded a university football club with 100+ members. Weekly matches, watch events, and training sessions.",
      image: "/football.jpeg",
      links: [
        { label: "View Project", url: "https://docs.google.com/presentation/d/1qxuOU49eTxbeTcEZVW7RswxV9vclsTqqyayzY2_0L3s/edit?usp=sharing" },
      ],
    },
    {
      title: "The Green Tomato Experiment",
      description:
        "pH measurements, salt ratios, temperature tracking, reaction dynamics. Pickling taken to near-scientific precision.",
      image: "/tomato.jpeg",
      links: [
        { label: "View Study", url: "https://docs.google.com/presentation/d/1ECuB4Va-G-kjAFkv3wBOxZFCzGv6jmCK5zV9HnUXtx4/edit?usp=sharing" },
      ],
    },
    {
      title: "Sourdough Starter",
      description:
        "Patience, timing, variables. Each loaf teaches something new.",
      image: "/starter.jpeg",
      links: [
        { label: "View Experiment", url: "https://docs.google.com/presentation/d/1DcVwhZ6pWOuguoKqaqRgnx4Fs1nJjJ7V1Y6alX-dnXc/edit?usp=sharing" },
      ],
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {hobby.title}
              </h3>
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
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
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
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
