import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Impressum() {
  return (
    <div className="bg-background text-foreground min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <SiteNav />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-xs font-black tracking-widest text-muted-foreground mb-4">RECHTLICHES</div>
        <h1
          className="leading-none tracking-tight mb-16"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900 }}
        >
          IMPRESSUM
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>
            Josefine Markarian<br />
            Schlieperstr. 33<br />
            13507 Berlin<br />
            Deutschland
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail: <a href="mailto:info@beerlates.com" className="underline hover:text-primary transition-colors">info@beerlates.com</a><br />
            Telefon: 015782577623
          </p>
        </Section>

        <Section title="Online-Streitbeilegung">
          <p>
            Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="mt-3">
            Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil
            und sind dazu auch nicht verpflichtet.
          </p>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 pb-10 border-b border-border last:border-0">
      <h2 className="font-black text-base tracking-tight mb-4 text-primary">{title}</h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
