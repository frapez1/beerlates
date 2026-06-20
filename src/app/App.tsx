import { useState } from "react";
import { Menu, X, ArrowRight, Star, ChevronDown, Heart, Clock, Smile, Users } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const STEPS = [
  {
    num: "01",
    title: "Gather Your Crew",
    body: "Corporate team, birthday squad, hen party, random Friday — any group of 4 to 50 is welcome. We come to your venue, or help you find one.",
  },
  {
    num: "02",
    title: "BYO Everything",
    body: "Beer, wine, kombucha, sparkling water — whatever you fancy. No judgment here. Just bring enough to last the full hour.",
  },
  {
    num: "03",
    title: "Stretch, Sip & Breathe",
    body: "Your instructor guides you through 60 minutes of gentle pilates moves. Your drink is a prop. Cheers to flexibility.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "HR Manager · Bloom Agency",
    quote: "I've organised a LOT of team events. This was the first one where everyone — including our most anti-social developer — was genuinely present and enjoying themselves.",
  },
  {
    name: "Priya M.",
    role: "Hen party organiser",
    quote: "We did Beerlates as the warm-up before dinner and honestly it was the highlight of the entire weekend. Relaxed, sociable, and genuinely fun. 12/10.",
  },
  {
    name: "Tom R.",
    role: "Operations Director · Stackr Co.",
    quote: "Our team bonded more in 60 minutes of beer pilates than in two years of remote working. I will never book a paint-and-sip again.",
  },
];

const FAQS = [
  {
    q: "Do I need any fitness experience?",
    a: "Absolutely not. Beerlates is designed to be accessible to everyone, regardless of fitness level. If you can hold a bottle, you can do Beerlates.",
  },
  {
    q: "What drinks can I bring?",
    a: "Anything you like! Beer is in the name but we're 100% inclusive. Wine, cider, mocktails, kombucha, plain water — whatever makes you happy. BYO in the truest sense.",
  },
  {
    q: "How long is a session?",
    a: "Standard sessions run 60 minutes. We also offer extended 90-minute slots for larger groups who want a bit more time (and more sips).",
  },
  {
    q: "Where do sessions take place?",
    a: "We're fully mobile. Offices, gardens, pub function rooms, studios, parks — if there's enough flat floor space and willing participants, we're good.",
  },
  {
    q: "Is it safe to drink during exercise?",
    a: "The intensity is very low — gentle stretches, balance holds, and fun poses. Drinking is built into the routine but never mandatory. The goal is enjoyment, not a workout PR.",
  },
  {
    q: "How do I book?",
    a: "Fill in the enquiry form below. We'll come back to you within 24 hours with availability and a tailored quote for your group size and event type.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleEnquiry(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    const res = await fetch("https://formspree.io/f/xeewynwq", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setFormStatus("success");
      e.currentTarget.reset();
    } else {
      setFormStatus("error");
    }
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="text-2xl font-black tracking-tight text-accent">BEER</span>
            <span className="text-2xl font-black tracking-tight text-primary-foreground/80">LATES</span>
          </a>

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
              href="#book"
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
              href="#book"
              className="bg-accent text-accent-foreground px-5 py-3 text-xs font-black tracking-widest text-center"
              onClick={() => setMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-primary pt-16 min-h-screen flex flex-col" id="about">
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-block bg-accent text-accent-foreground text-xs font-black tracking-widest px-3 py-1.5 mb-8"
            >
              BALANCE · BREATH · BEER · REPEAT
            </div>
            <h1
              className="text-primary-foreground leading-none tracking-tight mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight: 900,
                lineHeight: 0.92,
              }}
            >
              BALANCE<br />
              <span className="text-accent">BREATH</span><br />
              BEER<br />
              <span style={{ opacity: 0.35 }}>REPEAT</span>
            </h1>
            <p className="text-primary-foreground/65 text-lg leading-relaxed max-w-md mb-10">
              Low impact. Good company. Your instructor guides you through playful pilates moves — using your drink as a prop. No fitness required. Just show up and sip.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="bg-accent text-accent-foreground px-8 py-4 text-xs font-black tracking-widest hover:bg-accent/85 transition-colors flex items-center gap-2"
              >
                BOOK YOUR SESSION <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="border border-primary-foreground/25 text-primary-foreground px-8 py-4 text-xs font-black tracking-widest hover:border-primary-foreground/60 transition-colors"
              >
                HOW IT WORKS
              </a>
            </div>
          </div>

          {/* Image block */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-accent/15" />
            <div className="relative bg-primary/50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1731325632687-51e90609e700?w=700&h=560&fit=crop&auto=format"
                alt="Group of people doing pilates together and having a great time"
                className="w-full h-[400px] md:h-[520px] object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-accent text-accent-foreground p-5 md:p-7">
                <div
                  className="leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 900 }}
                >
                  BYO
                </div>
                <div className="text-xs font-black tracking-widest mt-1 opacity-70">DRINKS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-accent py-3 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "ticker 25s linear infinite" }}>
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="text-accent-foreground font-black text-xs tracking-widest pr-12">
                  🏢 CORPORATE EVENTS &nbsp;·&nbsp; 🎉 PRIVATE PARTIES &nbsp;·&nbsp; 🍻 BYO DRINKS &nbsp;·&nbsp; 🧘 ALL FITNESS LEVELS &nbsp;·&nbsp; 🚐 MOBILE SESSIONS &nbsp;·&nbsp; 👥 GROUPS 4–50 
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=620&h=720&fit=crop&auto=format"
              alt="Person holding beer bottles at golden hour"
              className="w-full h-[480px] md:h-[560px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8">
              <div
                className="text-accent leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3.5rem", fontWeight: 900 }}
              >
                60
              </div>
              <div className="text-xs font-black tracking-widest mt-2 opacity-60">MINUTES OF PURE JOY</div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:pl-8">
            <div className="text-xs font-black tracking-widest text-muted-foreground mb-5">WHAT IS BEERLATES?</div>
            <h2
              className="leading-none tracking-tight mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 900,
              }}
            >
              WELLNESS<br />
              <span className="text-primary">MEETS</span><br />
              HAPPY HOUR
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Beerlates is a pilates experience where your drink bottle becomes your workout prop. Designed to be genuinely accessible — the kind of session where your mum, your marathon-running colleague, and your friend who &quot;doesn&apos;t do exercise&quot; all feel equally at home.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Think guided stretches, gentle core moves, and balance poses — with your drink woven naturally into the flow. Sipping is part of the sequence, never forced.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { icon: <Heart size={18} />, label: "LOW IMPACT" },
                { icon: <Smile size={18} />, label: "HIGH FUN" },
                { icon: <Clock size={18} />, label: "60 MINUTES" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <div className="text-primary">{icon}</div>
                  <div className="text-xs font-black tracking-widest text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-primary text-primary-foreground py-24 px-6" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-black tracking-widest text-accent mb-5">THE FORMULA</div>
          <h2
            className="leading-none tracking-tight mb-16"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              fontWeight: 900,
            }}
          >
            HOW IT<br />WORKS
          </h2>
          <div className="grid md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`p-8 md:p-12 ${i < STEPS.length - 1 ? "border-b border-primary-foreground/10 md:border-b-0 md:border-r" : ""}`}
              >
                <div
                  className="text-accent/30 leading-none mb-8"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "5rem", fontWeight: 900 }}
                >
                  {step.num}
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem", fontWeight: 800 }}
                >
                  {step.title}
                </h3>
                <p className="text-primary-foreground/55 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section id="events">
        {/* Corporate */}
        <div className="grid md:grid-cols-2 bg-primary text-primary-foreground">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="text-xs font-black tracking-widest text-accent mb-6">TEAM BUILDING</div>
            <h2
              className="leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
              }}
            >
              Turn the work crowd<br />into a crew.
            </h2>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-8">
              Forget trust falls and awkward icebreakers. Beerlates is the team-building your colleagues will actually look forward to — and talk about for months. We handle everything so HR doesn&apos;t have to.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Fully accessible to all fitness levels",
                "Private instructor for your group",
                "Certificate of participation (yes, really)",
                "Can be hosted at your office or a venue of your choice",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="text-accent font-black mt-0.5 leading-none">→</span>
                  <span className="text-primary-foreground/70">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="self-start bg-accent text-accent-foreground px-8 py-4 text-xs font-black tracking-widest hover:bg-accent/85 transition-colors flex items-center gap-2"
            >
              ENQUIRE NOW <ArrowRight size={14} />
            </a>
          </div>
          <div className="relative min-h-[380px] md:min-h-0 bg-primary/50">
            <img
              src="https://images.unsplash.com/photo-1758520144658-c87be518b87e?w=800&h=700&fit=crop&auto=format"
              alt="People in party hats celebrating in an office event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Private */}
        <div className="grid md:grid-cols-2 bg-accent text-accent-foreground">
          <div className="relative min-h-[380px] md:min-h-0 bg-muted">
            <img
              src="https://images.unsplash.com/photo-1725543229267-8cfcb580ed07?w=800&h=700&fit=crop&auto=format"
              alt="Two people cheersing beer bottles by a window"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="text-xs font-black tracking-widest text-foreground/50 mb-6">PRIVATE EVENTS</div>
            <h2
              className="leading-tight tracking-tight mb-6 text-foreground"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
              }}
            >
              The warm-up<br />before the party.
            </h2>
            <p className="text-foreground/65 text-base leading-relaxed mb-8">
              Hen dos, birthdays, reunions, &quot;just because it&apos;s Friday&quot; — Beerlates works for any excuse to get your friends together and get a little ridiculous. Low effort, maximum fun.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Groups from 4 people",
                "Flexible venues: garden, studio, pub function room",
                "Themed session options available",
                "Great photos guaranteed",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="text-foreground font-black mt-0.5 leading-none">→</span>
                  <span className="text-foreground/65">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="self-start bg-primary text-primary-foreground px-8 py-4 text-xs font-black tracking-widest hover:bg-primary/85 transition-colors flex items-center gap-2"
            >
              ENQUIRE NOW <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* <section className="bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-black tracking-widest text-muted-foreground mb-5">REAL PEOPLE. REAL LAUGHS.</div>
          <h2
            className="leading-none tracking-tight mb-16"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 900,
            }}
          >
            WHAT THEY<br />SAID AFTER
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-card p-8 md:p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-8 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-black text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section className="bg-background py-24 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-black tracking-widest text-muted-foreground mb-5">GOT QUESTIONS?</div>
          <h2
            className="leading-none tracking-tight mb-16"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
              fontWeight: 900,
            }}
          >
            THE BASICS
          </h2>
          <div className="divide-y divide-border">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-6 hover:text-primary transition-colors group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-base md:text-lg">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                >
                  <p className="pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK NOW ── */}
      <section className="bg-primary text-primary-foreground py-24 px-6" id="book">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="text-xs font-black tracking-widest text-accent mb-5">READY TO ROLL?</div>
            <h2
              className="leading-none tracking-tight mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                fontWeight: 900,
              }}
            >
              LET&apos;S<br />BOOK<br />
              <span className="text-accent">YOURS</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-md mb-10">
              Fill in the form and we&apos;ll come back to you within 24 hours with availability and a tailored quote. Groups of 4 to 50+ welcome.
            </p>
            <div className="space-y-3">
              {[
                "Minimum 4 people",
                "We come to your venue",
                "Weekday & weekend slots available",
                "Corporate invoicing available",
              ].map((d) => (
                <div key={d} className="flex items-center gap-3 text-sm text-primary-foreground/65">
                  <span className="text-accent font-black">✓</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          {formStatus === "success" ? (
            <div className="flex flex-col items-start justify-center gap-4 py-12">
              <div className="text-accent font-black text-xs tracking-widest">ENQUIRY SENT</div>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                Thanks! We&apos;ll come back to you within 24 hours with availability and a quote.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="text-xs font-black tracking-widest text-primary-foreground/40 hover:text-primary-foreground transition-colors underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleEnquiry}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Alex"
                    required
                    className="w-full bg-primary-foreground/8 border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary-foreground/25"
                  />
                </div>
                <div>
                  <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    className="w-full bg-primary-foreground/8 border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary-foreground/25"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  required
                  className="w-full bg-primary-foreground/8 border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary-foreground/25"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                    EVENT TYPE
                  </label>
                  <select name="event_type" className="w-full bg-primary border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors">
                    <option value="">Select type</option>
                    <option value="corporate">Corporate</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                    GROUP SIZE
                  </label>
                  <select name="group_size" className="w-full bg-primary border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors">
                    <option value="">Select size</option>
                    <option value="8-15">8–15 people</option>
                    <option value="16-30">16–30 people</option>
                    <option value="31-50">31–50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-black tracking-widest text-primary-foreground/45 block mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your event, preferred dates, venue ideas..."
                  className="w-full bg-primary-foreground/8 border border-primary-foreground/20 text-primary-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-primary-foreground/25"
                />
              </div>
              {formStatus === "error" && (
                <p className="text-red-400 text-xs font-black tracking-widest">
                  Something went wrong — please try again or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-accent text-accent-foreground py-4 text-xs font-black tracking-widest hover:bg-accent/85 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "SENDING…" : <> SEND ENQUIRY <ArrowRight size={15} /> </>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
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
            <a href="#book" className="hover:text-background transition-colors">
              Book
            </a>
          </div>
          <div className="text-xs text-background/30">© 2026 Beerlates. All rights reserved.</div>
        </div>
      </footer>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
