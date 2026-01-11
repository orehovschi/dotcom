"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--glass-border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.jpeg"
              alt="Liviu Orehovschi"
              width={72}
              height={48}
              className="object-contain invert"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href
                    ? "text-foreground after:w-full"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[var(--muted)] hover:text-foreground transition-colors">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
