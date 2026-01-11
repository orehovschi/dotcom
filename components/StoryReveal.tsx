"use client";

import { useEffect, useRef } from "react";

const storyText = `I was born in Nimereuca, Soroca in northern Moldova. I only lived there for about a year, but it still feels like the true start of the story. My childhood and school years were mostly in Chișinău, the capital, where the world felt bigger and the pace was faster. Even then, I was the kind of kid who wanted to see what was on the other side of the map — not because I was chasing something shiny, but because I was curious and a little restless.

Before university I was already moving around. I travelled, took internships, said yes to chances that sounded slightly uncomfortable and therefore probably worth doing. By the time I started college, I had learned a useful lesson: new places do not just change your scenery — they change your standards. You learn quickly what you miss, what you tolerate, what you value, and what kind of person you become when nobody is watching.

University took that to another level. I lived across more than nine countries and travelled through many more. At some point you stop being impressed by airports and start paying attention to patterns — how teams actually work, how incentives shape behavior, how culture shows up in small things like punctuality, honesty, or who speaks first in a room. I think that is where my obsession with systems comes from.

I ended up graduating in two fields because I could not pick a single lens. I like the precision of technical work and the messiness of real life. I like building things, measuring what happens, and adjusting until the result is solid. Sometimes that looks like software and models. Sometimes it looks like organizing a football community from scratch. Sometimes it looks like a fermentation experiment where the data is bubbles, smell, and whether the bread actually rises.

The common thread is simple: I care about work that holds up in the real world. I do not need everything to be perfect, but I do need it to be honest. I show up, learn fast, and I take pride in being the person you can hand a messy problem to and get back something clearer, tighter, and actually usable.`;

export default function StoryReveal() {
  const paragraphs = storyText.split('\n\n');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const paragraphElements = containerRef.current?.querySelectorAll('.story-paragraph');
    paragraphElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="story-paragraph text-[var(--muted)] leading-relaxed text-lg opacity-0 translate-y-4 transition-all duration-700 ease-out"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
