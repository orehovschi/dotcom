"use client";

import Link from "next/link";

export default function Experiences() {
  const experiences = [
    {
      title: "Co-Founder & Technical Lead",
      company: "xVal",
      companyUrl: "https://www.xval.app",
      preview: "/previews/xval.jpg",
      period: "Aug 2025 – Present",
      location: "San Francisco",
      bullets: [
        "Built data pipelines processing 140+ football leagues, 500K+ players, 2M+ matches",
        "Developed ML player valuation models with embeddings and similarity search",
        "Shipped text-to-SQL scouting assistant handling 1000+ natural language queries",
        "Architected full platform: React frontend, Python backend, PostgreSQL, AWS",
      ],
    },
    {
      title: "Research Assistant",
      company: "Children Helping Science (MIT)",
      companyUrl: "https://childrenhelpingscience.com",
      preview: "/previews/childrenhelpingscience.jpg",
      period: "Jan 2025 – May 2025",
      location: "Remote",
      bullets: [
        "Tested 10+ developmental psychology studies before public launch",
        "Documented 50+ UX issues across instruction clarity, layout, and flow",
        "Contributed to platform serving 100K+ child participants globally",
      ],
    },
    {
      title: "Operations & Data Assistant",
      company: "Minerva University",
      companyUrl: "https://www.minerva.edu",
      preview: "/previews/minerva.jpg",
      period: "Sep 2021 – Dec 2024",
      location: "San Francisco",
      bullets: [
        "Automated payroll workflows for 200 student workers, saving 15+ hrs/month",
        "Benchmarked financial aid across 100+ peer institutions",
        "Built searchable dataset from 500+ hours of meeting recordings",
      ],
    },
    {
      title: "Field Manager",
      company: "Fund for the Public Interest",
      companyUrl: "https://www.fundforthepublicinterest.org",
      preview: "/previews/fundpublicinterest.jpg",
      period: "Jun 2024 – Sep 2024",
      location: "Oakland",
      bullets: [
        "Led door-to-door campaigns raising $40K+ for environmental policy",
        "Testified at state hearing for marine protection legislation",
        "Published 2 op-eds in Mercury News and Sacramento Bee (combined 1M+ readers)",
      ],
    },
    {
      title: "Python & ML Instructor",
      company: "iD Tech Camps",
      companyUrl: "https://www.idtech.com",
      preview: "/previews/idtech.jpg",
      period: "May 2024 – Sep 2024",
      location: "Remote",
      bullets: [
        "Taught 30+ students aged 12-17 in Python and intro machine learning",
        "Designed curriculum covering pandas, scikit-learn, TensorFlow basics",
        "Achieved 95%+ positive feedback scores across all cohorts",
      ],
    },
    {
      title: "STEM Mentor",
      company: "Terra Education",
      companyUrl: "https://www.terraeducation.com",
      preview: "/previews/terraeducation.jpg",
      period: "Jun 2023 – Jul 2024",
      location: "San Diego",
      bullets: [
        "Mentored 400+ high school students across 2 summer programs",
        "Led workshops on Figma, HTML/CSS/JS with project-based learning",
        "Guided 50+ teams from concept to deployed websites",
      ],
    },
    {
      title: "Research Intern",
      company: "Mate Marote (UTDT)",
      companyUrl: "https://matemarote.org.ar/MateMarote/",
      preview: "/previews/matemarote.jpg",
      period: "Sep 2023 – Dec 2023",
      location: "Buenos Aires",
      bullets: [
        "Created 20+ level variants for cognitive training games",
        "Tuned difficulty parameters across 5 game mechanics",
        "Documented UX patterns improving child engagement metrics",
      ],
    },
    {
      title: "Research Intern",
      company: "Institute of Chemistry",
      companyUrl: "https://ichem.md/en",
      preview: "/previews/ichem.jpg",
      period: "Aug 2020 – Apr 2021",
      location: "Moldova",
      bullets: [
        "Synthesized metal-organic compounds for water purification",
        "Tested carbon adsorbent efficiency across 10+ contaminant types",
        "Co-authored internal research documentation",
      ],
    },
    {
      title: "Sales Agent",
      company: "ASAP Tickets",
      companyUrl: "https://www.asaptickets.com",
      preview: "/previews/asaptickets.jpg",
      period: "Feb 2019 – Jul 2019",
      location: "Remote",
      bullets: [
        "Generated $20K+ gross profit in 5 months through consultative selling",
        "Maintained 40%+ conversion rate on qualified leads",
        "Optimized complex multi-leg itineraries balancing cost and convenience",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white/90 sm:text-4xl">
            Work history
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-white ring-4 ring-[var(--background)]" />

                {/* Content */}
                <div className="md:w-1/2 md:px-8 pl-8 md:pl-0">
                  <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-500 shadow-[0_4px_40px_rgba(255,255,255,0.07),0_0_80px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_60px_rgba(255,255,255,0.12),0_0_100px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.15)] hover:translate-y-[-2px]">
                    {/* Site Preview */}
                    <Link href={exp.companyUrl} target="_blank" className="block relative h-32 overflow-hidden border-b border-white/[0.06]">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent z-10 opacity-60" />
                      <img
                        src={exp.preview}
                        alt={`${exp.company} preview`}
                        className="w-full h-full object-cover object-top"
                      />
                    </Link>

                    <div className="p-6">
                      {/* Period badge */}
                      <span className="inline-block px-3 py-1 mb-4 text-[10px] font-medium uppercase tracking-wider rounded-full bg-white/5 text-white/50">
                        {exp.period}
                      </span>

                      <h3 className="text-lg font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-4">
                        <Link href={exp.companyUrl} target="_blank" className="hover:text-white transition-colors">{exp.company}</Link> · {exp.location}
                      </p>

                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-base text-white/70 leading-relaxed">
                            <span className="text-white/60 mt-0.5">›</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
