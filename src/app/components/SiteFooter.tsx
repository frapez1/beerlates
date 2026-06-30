import { Link } from "react-router";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div
            className="tracking-tight mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 900 }}
          >
            BEERLATES
          </div>
          <div className="text-background/40 text-xs font-medium">Balance · Breath · Beer · Repeat</div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-background/50">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-background transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/#book" className="hover:text-background transition-colors">
            Book
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 text-xs text-background/50">
            <Link to="/impressum" className="hover:text-background transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-background transition-colors">Datenschutz</Link>
          </div>
          <div className="text-xs text-background/30">© 2026 Beerlates. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
