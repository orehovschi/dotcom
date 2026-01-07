import Link from "next/link";

export default function About() {
  const education = [
    {
      school: "Minerva University",
      degree: "B.S. in Computer Science and B.S. in Natural Sciences",
      focus: "Artificial Intelligence; Cells and Organisms",
      period: "2021 - May 2025",
      gpa: "3.7 / 4.0",
      highlights: [
        "Student Body President",
        "Founder & President, Minerva Football Club",
        "Completed coursework and projects across 7 global campuses",
      ],
      coursework: [
        "Theory & Applications of AI",
        "Statistical Modeling: Prediction and Causal Inference",
        "Data Structures & Algorithms",
        "Theory of Computation",
        "Software Engineering",
        "Research Design in R",
      ],
    },
    {
      school: "Westtown School",
      degree: "High School Diploma",
      focus: "STEM",
      period: "2017 - 2018",
      gpa: null,
      highlights: [],
      coursework: [],
    },
  ];

  const skills = {
    "Analytics & Product": [
      "KPI design",
      "Experimentation",
      "Dashboards",
      "Cohort/funnel analysis",
      "Decision reporting",
    ],
    "Data & Engineering": [
      "SQL",
      "ETL pipelines",
      "Data modeling",
      "Schema design",
      "Data cleaning",
    ],
    Programming: ["Python", "SQL", "JavaScript/TypeScript", "R"],
    "ML / AI": [
      "Model evaluation",
      "Explainability (Grad-CAM)",
      "Embeddings",
      "OpenAI API",
      "LLMs",
    ],
    Tools: [
      "PostgreSQL",
      "pandas",
      "scikit-learn",
      "TensorFlow",
      "Git",
      "Excel/Sheets",
      "AWS/GCP",
    ],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold gradient-text sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            Co-Founder & Technical Lead (AI/Data) at xVal. Building applied AI and
            decision systems in the San Francisco Bay Area.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Bio</h2>
          <div className="card-gradient rounded-2xl border border-white/10 p-8 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I&apos;m not the flashiest coder — I&apos;m the stubborn one.
            </p>
            <p>
              One of my first jobs was Burger King. It taught me that real work is
              often unglamorous — and that lesson stuck.
            </p>
            <p>
              Before graduating with a double major in Computer Science and Natural
              Sciences, I worked everywhere: fast food, hostels, research labs,
              education programs, environmental advocacy, travel sales, and now AI
              and product. In every role, I took responsibility, figured things out,
              and left things better than I found them.
            </p>
            <p>
              I am happiest when thinking and building come together, when a problem
              actually matters and there is a path to turn it into something people
              can use. Working with everyone from seasoned engineers to researchers
              to people who do not care about tech at all taught me that the core
              job rarely changes: listen carefully, make the complex understandable,
              and keep things moving without leaving people behind. I am not
              precious about titles or ego. If something is not working, I would
              rather fix it than defend it.
            </p>
            <p>
              Right now, I am drawn to problems where AI, data, and product meet
              real life. I want to build tools people trust when the stakes are
              real, tools that make decisions clearer, make work smarter, and
              quietly become indispensable.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-gradient hover-lift rounded-2xl border border-white/10 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.school}
                    </h3>
                    <p className="text-primary-400 font-medium">{edu.degree}</p>
                    {edu.focus && (
                      <p className="text-sm text-foreground/60">
                        Focus: {edu.focus}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-foreground/50">{edu.period}</span>
                    {edu.gpa && (
                      <p className="text-sm text-accent-400 font-medium">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>

                {edu.highlights.length > 0 && (
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-foreground/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-primary-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.coursework.length > 0 && (
                  <div>
                    <p className="text-sm text-foreground/50 mb-2">
                      Selected Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIndex) => (
                        <span
                          key={cIndex}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="card-gradient rounded-2xl border border-white/10 p-8">
            <p className="text-foreground/70 mb-6">
              Interested in working together or just want to chat? Feel free to
              reach out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:liviu.orehovschi@gmail.com"
                className="btn-primary"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </Link>
              <Link
                href="https://linkedin.com/in/liviuorehovschi"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://github.com/liviuorehovschi"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
