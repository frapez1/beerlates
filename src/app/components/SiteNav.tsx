import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <img src="/logo.svg" alt="Beerlates logo" className="h-8 w-8" />
          <span className="flex items-baseline gap-0">
            <span className="text-2xl font-black tracking-tight text-accent">BEER</span>
            <span className="text-2xl font-black tracking-tight text-primary-foreground/80">LATES</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#book"
            className="bg-accent text-accent-foreground px-5 py-2 text-xs font-black tracking-widest hover:bg-accent/85 transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 pb-6 flex flex-col gap-5 pt-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/70"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#book"
            className="bg-accent text-accent-foreground px-5 py-3 text-xs font-black tracking-widest text-center"
            onClick={() => setMenuOpen(false)}
          >
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  );
}
