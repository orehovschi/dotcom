import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-accent-900/20" />
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-warm-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="section-container text-center">
          <h1 className="animate-fade-in text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="gradient-text">Liviu Orehovschi</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-lg text-foreground/70 sm:text-xl">
            Co-Founder & Technical Lead (AI/Data) @ xVal
            <br />
            <span className="text-base">Building Applied AI & Decision Systems</span>
          </p>
          <div className="mt-10 flex animate-slide-up flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.2s" }}>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/about", title: "About", desc: "Bio & Education" },
              { href: "/experiences", title: "Experiences", desc: "Professional journey" },
              { href: "/projects", title: "Projects", desc: "Work & creations" },
              { href: "/hobbies", title: "Hobbies", desc: "Passions & interests" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-gradient hover-lift rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary-400">
                  Explore
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Essay Section */}
      <section className="py-20 border-t border-white/10">
        <div className="section-container">
          <h2 className="text-3xl font-bold gradient-text mb-8">My Story</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="card-gradient rounded-2xl border border-white/10 p-8 md:p-12 space-y-6">
              <p className="text-foreground/80 leading-relaxed text-lg">
                I&apos;m not the flashiest coder — I&apos;m the stubborn one.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                One of my first jobs was Burger King. It taught me that real work is
                often unglamorous — and that lesson stuck.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Before graduating with a double major in Computer Science and Natural
                Sciences, I worked everywhere: fast food, hostels, research labs,
                education programs, environmental advocacy, travel sales, and now AI
                and product. In every role, I took responsibility, figured things out,
                and left things better than I found them.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I am happiest when thinking and building come together, when a problem
                actually matters and there is a path to turn it into something people
                can use. Working with everyone from seasoned engineers to researchers
                to people who do not care about tech at all taught me that the core
                job rarely changes: listen carefully, make the complex understandable,
                and keep things moving without leaving people behind. I am not
                precious about titles or ego. If something is not working, I would
                rather fix it than defend it.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Outside of work, I like pursuits that don&apos;t give up their secrets
                easily: sourdough, music, football tactics. I dig in, iterate, and
                keep improving until things click. That rhythm shows up in my work
                too. Know when to slow down, know when to push, and always move
                forward with intention.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Right now, I am drawn to problems where AI, data, and product meet
                real life. I want to build tools people trust when the stakes are
                real, tools that make decisions clearer, make work smarter, and
                quietly become indispensable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
