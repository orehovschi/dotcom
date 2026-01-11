import Link from "next/link";
import StoryReveal from "@/components/StoryReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center">
        <div className="section-container text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="gradient-text">Liviu Orehovschi</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/about" className="btn-primary">
              About Me
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid gap-px bg-[var(--glass-border)] rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/about", title: "About", desc: "Background & education" },
              { href: "/experiences", title: "Experience", desc: "Work history" },
              { href: "/projects", title: "Projects", desc: "Things I've built" },
              { href: "/hobbies", title: "Hobbies", desc: "Beyond work" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-[var(--background)] p-6 transition-all duration-300 hover:bg-[var(--glass-hover)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.desc}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 border-t border-[var(--glass-border)]">
        <div className="section-container">
          <div className="max-w-3xl">
            <StoryReveal />
          </div>
        </div>
      </section>
    </div>
  );
}
