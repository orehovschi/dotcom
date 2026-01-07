import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "xVal — Sports Intelligence",
      description:
        "What started as two football addicts arguing about players has turned into xVal, where we use AI to put numbers behind 'this guy is special'. Data pipelines for 140+ leagues, ML-powered player valuations, and a text-to-SQL scouting assistant.",
      tags: ["AI", "Python", "SQL", "Machine Learning", "Data Engineering"],
      link: "https://xval.app",
      github: null,
      featured: true,
    },
    {
      title: "Histomancer — Lung Cancer Classifier",
      description:
        "End-to-end deep learning system for classifying lung histopathology images into adenocarcinoma, squamous cell carcinoma, and benign tissue. EfficientNetB0 fine-tuned to ~98.25% accuracy with Grad-CAM explainability. Deployed as a Flask web app.",
      tags: ["Deep Learning", "TensorFlow", "Flask", "Medical AI"],
      link: null,
      github: "https://github.com/liviuorehovschi",
      featured: true,
    },
    {
      title: "Oob — Video Platform with AI",
      description:
        "Full-stack video sharing and discovery platform with Django REST backend and React frontend. Features user auth, profile management, video posting, likes, and comments. YouTube API integration and experimental AI-assisted recommendations using OpenAI embeddings.",
      tags: ["Django", "React", "PostgreSQL", "OpenAI API"],
      link: null,
      github: "https://github.com/liviuorehovschi",
      featured: false,
    },
    {
      title: "Tonight — Venue Context Assistant",
      description:
        "Flask-based web app that analyzes Google Maps links using OpenAI and Maps APIs. Users can browse venues, see AI-generated summaries, and track past visits with personalized recommendations handled server-side.",
      tags: ["Flask", "OpenAI API", "Google Maps API", "Python"],
      link: null,
      github: "https://github.com/liviuorehovschi",
      featured: false,
    },
    {
      title: "WashBot — Laundry Status Bot",
      description:
        "Telegram bot used by 150+ residents to track washer status and receive time-remaining alerts, reducing idle machine time. A simple utility that solved a real daily annoyance.",
      tags: ["Python", "Telegram API", "Automation"],
      link: null,
      github: "https://github.com/liviuorehovschi",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold gradient-text sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            I want to build tools people trust when the stakes are real — tools that
            make decisions clearer, make work smarter, and quietly become indispensable.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Featured</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group card-gradient hover-lift rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-500/30 via-accent-500/20 to-warm-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 animate-gradient bg-300%" />
                  <span className="text-5xl font-bold gradient-text opacity-60 relative z-10">
                    {project.title.split(" ")[0]}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center gap-4">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1"
                      >
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Site
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group card-gradient hover-lift rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-foreground/70 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
