"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label={SITE_NAME}>
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-sm">O₃</span>
            </div>
            <span className="font-display font-bold text-charcoal text-lg tracking-tight">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium transition-colors border-b-2 pb-0.5 ${
                    active
                      ? "text-teal font-semibold border-teal"
                      : "text-muted-text hover:text-teal border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-4 py-2 bg-teal text-white text-sm font-body font-semibold rounded-lg hover:bg-teal-dark transition-colors"
            >
              Inquire Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-charcoal hover:text-teal transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-md border-b border-gray-100 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    active
                      ? "text-teal bg-teal-light font-semibold"
                      : "text-muted-text hover:text-teal hover:bg-teal-light/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 px-4 py-2.5 bg-teal text-white text-sm font-body font-semibold rounded-lg hover:bg-teal-dark transition-colors text-center"
            >
              Inquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
