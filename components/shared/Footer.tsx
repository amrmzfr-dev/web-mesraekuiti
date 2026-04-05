import Link from "next/link";
import { Globe, Share2, ExternalLink } from "lucide-react";
import {
  SITE_NAME,
  NAV_LINKS,
  FOOTER_TAGLINE,
  FOOTER_COPYRIGHT,
  COMPANY_NAME,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-sm">O₃</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional ozone sanitization for car interiors. Chemical-free, residue-free, and
              effective against bacteria, mold, and odor.
            </p>
            <p className="text-xs text-gray-500 italic">{FOOTER_TAGLINE}</p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                aria-label="Website"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Globe size={14} />
              </a>
              <a
                href="#"
                aria-label="Social"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Share2 size={14} />
              </a>
              <a
                href="#"
                aria-label="Link"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">
              Pages
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Promise */}
          <div>
            <p className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">
              Our Promise
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                "Zero chemical residue",
                "Safe for all car materials",
                "Quick, non-invasive process",
                "Eco-friendly — O₃ reverts to O₂",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                  <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-xs text-gray-500">{FOOTER_COPYRIGHT}</p>
            <span className="hidden sm:inline text-gray-700">·</span>
            <p className="text-xs text-gray-600 font-medium">
              A product of {COMPANY_NAME}
            </p>
          </div>
          <p className="text-xs text-gray-600">
            Ozone sanitization — no chemicals, no residue, no compromise.
          </p>
        </div>
      </div>
    </footer>
  );
}
