"use client";

import Link from "next/link";

export default function About() {
  const cities = ["San Francisco", "Seoul", "Hyderabad", "Berlin", "Buenos Aires", "London", "Taipei"];
  const skills = ["Python", "SQL", "TypeScript", "React", "PostgreSQL", "TensorFlow", "pandas", "AWS"];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold gradient-text sm:text-6xl tracking-tight">
            About
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

          {/* Main intro - spans 2 cols */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-sm">
            <p className="text-3xl font-light text-white leading-snug tracking-tight">
              I&apos;m Liviu
            </p>
            <p className="mt-6 text-[15px] text-white/50 leading-relaxed">
              Building xVal, a sports intelligence platform, from the Bay Area.
              I like work that holds up when tested — data pipelines, ML models,
              or getting a group of strangers to show up for football every week.
            </p>
          </div>

          {/* Location card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] flex flex-col justify-between min-h-[160px]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Location</p>
            <p className="text-xl font-light text-white tracking-tight">San Francisco</p>
          </div>

          {/* Origin card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] flex flex-col justify-between min-h-[160px]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Origin</p>
            <p className="text-xl font-light text-white tracking-tight">Moldova</p>
          </div>

          {/* Education - spans 2 cols */}
          <div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mb-6">Education</p>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-light text-white tracking-tight">Minerva University</p>
                <p className="text-[13px] text-white/40 mt-1">B.S. Computer Science & Natural Sciences</p>
                <p className="text-[13px] text-white/40">2021 – 2025</p>
                <p className="text-[12px] text-white/30 mt-2">Student Body President · Founded Minerva FC</p>
              </div>
              <div className="pt-6 border-t border-white/[0.04]">
                <p className="text-lg font-light text-white tracking-tight">Westtown School</p>
                <p className="text-[13px] text-white/40 mt-1">High School · STEM Focus · 2017 – 2018</p>
              </div>
            </div>
          </div>

          {/* Cities - spans 2 cols */}
          <div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mb-6">Studied Across</p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-[13px] text-white/60 border border-white/[0.06] hover:border-white/[0.12] hover:text-white/80 transition-all cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mb-6">Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg text-[13px] font-medium text-white/70 bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.08] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Focus areas */}
          <div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mb-6">Focus</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-[14px] text-white/60">Data engineering & ML pipelines</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-[14px] text-white/60">Embeddings & similarity search</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-[14px] text-white/60">End-to-end product building</span>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl p-8 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-lg font-light text-white tracking-tight">Let&apos;s connect</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="mailto:liviu.orehovschi@gmail.com"
                  className="px-6 py-2.5 rounded-full bg-white text-[13px] font-medium text-black hover:bg-white/90 transition-colors"
                >
                  Email
                </Link>
                <Link
                  href="https://linkedin.com/in/liviuorehovschi"
                  target="_blank"
                  className="px-6 py-2.5 rounded-full text-[13px] font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/liviuorehovschi"
                  target="_blank"
                  className="px-6 py-2.5 rounded-full text-[13px] font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
