export default function Experiences() {
  const experiences = [
    {
      title: "Co-Founder & Technical Lead (AI/Data)",
      company: "xVal",
      period: "Aug 2025 - Present",
      location: "San Francisco Bay Area",
      description:
        "Lead the technical side of xVal, focusing on AI and data systems for football analytics. Design and maintain data pipelines for match, event, and player data. Prototype ML components like embeddings, similarity search, and lightweight models for player valuation. Implement a text-to-SQL scouting assistant and maintain the xVal website plus an AI assistant backed by a custom knowledge base.",
      tags: ["AI", "Machine Learning", "Data Engineering", "Python", "SQL"],
    },
    {
      title: "Cognitive Science Research Assistant",
      company: "Children Helping Science (MIT/Minerva)",
      period: "Jan 2025 - May 2025",
      location: "Remote",
      description:
        "Worked on Children Helping Science (CHS), an online developmental research platform based at MIT. Tested 10+ in-development online studies as a mock participant, checking clarity, flow, and UX before launch. Wrote structured feedback on every study tested, focusing on instructions, layout, incentives, and UX.",
      tags: ["User Research", "UX", "Research Design"],
    },
    {
      title: "Student Operations & Data Assistant",
      company: "Minerva University",
      period: "Sep 2021 - Dec 2024",
      location: "Remote/San Francisco",
      description:
        "Automated payroll and hours-tracking reports for 180-200 student workers using Excel formulas and YAML-based mail merges. Benchmarked financial-aid processes across 100+ private institutions. Automated alumni-outreach tracking by converting meeting recordings into searchable, reusable datasets.",
      tags: ["Data Analysis", "Automation", "Operations"],
    },
    {
      title: "Canvasser & Field Manager",
      company: "Environment California",
      period: "Jun 2024 - Sep 2024",
      location: "Oakland, CA",
      description:
        "Spent 4 months running door-to-door and street campaigns, talking with residents about environmental issues and raising support for key policy campaigns. Testified in support of expanding marine protections. Wrote two op-eds in The Mercury News and The Sacramento Bee.",
      tags: ["Fundraising", "Community Outreach", "Public Speaking"],
    },
    {
      title: "Python and Machine Learning Instructor",
      company: "iD Tech Camps",
      period: "May 2024 - Sep 2024",
      location: "Oakland, CA (Remote)",
      description:
        "Taught small online cohorts of 1-6 middle- and high-school students in Python and introductory machine learning. Covered Python fundamentals and moved into simple ML projects using TensorFlow and scikit-learn. Helped students understand datasets, train vs. test splits, model evaluation, and overfitting.",
      tags: ["Python", "Machine Learning", "Teaching", "TensorFlow"],
    },
    {
      title: "Mentor",
      company: "Terra Education",
      period: "Jun 2023 - Jul 2024",
      location: "San Diego, CA",
      description:
        "Mentored 400+ high school students in Terra Education's pre-college STEM programs across two summers. Led project-based workshops on user-centered design and web development. Guided small teams as they designed interfaces in Figma and built websites using HTML, CSS, and JavaScript.",
      tags: ["Web Development", "UX Design", "Mentoring", "Figma"],
    },
    {
      title: "Sales Travel Agent",
      company: "ASAP Tickets",
      period: "Feb 2019 - Jul 2019",
      location: "Remote/Chisinau",
      description:
        "Closed deals that produced $20K+ gross profit through consultative selling and disciplined follow-ups. Consistently converted unclear trip requests into optimized itineraries, balancing price, airline rules, and time pressure.",
      tags: ["Sales", "B2C", "Customer Service"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold gradient-text sm:text-5xl md:text-6xl">
            Experiences
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            From fast food to AI — I&apos;ve worked everywhere and learned that real work
            is often unglamorous. In every role, I took responsibility, figured things
            out, and left things better than I found them.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-warm-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ring-4 ring-background" />

                {/* Content */}
                <div className="md:w-1/2 md:px-8 pl-12 md:pl-0">
                  <div className="card-gradient hover-lift rounded-2xl border border-white/10 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-foreground/50">{exp.location}</p>
                      </div>
                      <span className="text-sm text-foreground/50 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
