export default function Hobbies() {
  const hobbies = [
    {
      title: "Sourdough",
      description:
        "There's something meditative about working with dough — the patience, the timing, the variables. Each loaf teaches me something new. It's a pursuit that doesn't give up its secrets easily, and that's exactly what makes it rewarding.",
      icon: "bread",
    },
    {
      title: "Music",
      description:
        "Whether listening or playing, music has always been a way to decompress and explore. I dig in, iterate, and keep improving until things click — the same rhythm that shows up in my work.",
      icon: "music",
    },
    {
      title: "Football Tactics",
      description:
        "Not just watching the game, but understanding it. Formations, pressing triggers, transition play. It's where my passion for data and patterns meets something I genuinely love. It's also what led to building xVal.",
      icon: "football",
    },
  ];

  const iconMap: { [key: string]: JSX.Element } = {
    bread: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546V7.75A2.75 2.75 0 015.75 5h12.5A2.75 2.75 0 0121 7.75v7.796z" />
      </svg>
    ),
    music: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    football: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold gradient-text sm:text-5xl md:text-6xl">
            Hobbies & Passions
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            Beyond work, these are the things that spark joy and keep me grounded.
            I like pursuits that don&apos;t give up their secrets easily.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group card-gradient hover-lift rounded-2xl border border-white/10 p-8"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-warm-500/20 to-primary-500/20 text-warm-400 group-hover:scale-110 transition-transform duration-300">
                {iconMap[hobby.icon]}
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                {hobby.title}
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-xl italic text-foreground/60 max-w-2xl mx-auto">
            &ldquo;Know when to slow down, know when to push, and always move forward with intention.&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
