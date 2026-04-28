import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { content } from "./data/siteContent.js";
import { mockSchools } from "./data/mockData.js";
import { Icons } from "./components/Icons.jsx";
import { FadeIn } from "./components/FadeIn.jsx";
import { LegalPage } from "./components/LegalPage.jsx";
import { WaitlistForm } from "./components/WaitlistForm.jsx";
import { CookieBanner } from "./components/CookieBanner.jsx";
import { Navbar, NAVBAR_TOTAL_H } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

const solutionIcons = [Icons.Compass, Icons.CheckShield, Icons.Briefcase];
const b2bIcons      = [Icons.Target,  Icons.Coin,        Icons.BarChart, Icons.Globe];
const moroccoIcons  = [Icons.DollarSign, Icons.Globe,    Icons.Award,    Icons.Plane];

// Phone mockup shown on the right side of the hero
function HeroVisual() {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%", paddingTop: 20 }}>
      {/* Glow behind phone */}
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,107,80,0.35) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      {/* Phone frame */}
      <div style={{ width: 230, height: 460, borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.12)", overflow: "hidden", backdropFilter: "blur(8px)", flexShrink: 0, position: "relative" }}>
        {/* Status bar */}
        <div style={{ padding: "14px 18px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', monospace" }}>9:41</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 13, color: "#fff" }}>WYN<span style={{ color: "#1B6B50" }}>.</span></span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>●●●</span>
        </div>

        {/* Search bar */}
        <div style={{ margin: "0 14px 14px", background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.3)", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Win temchi?</span>
        </div>

        {/* School cards */}
        <div style={{ padding: "0 14px" }}>
          {[
            { name: "ESCA École de Management", field: "Commerce · Casablanca", accent: "#1B6B50" },
            { name: "EMSI", field: "Ingénierie · Casablanca", accent: "#2654A0" },
            { name: "UIR — Rabat", field: "Multi · Rabat", accent: "#8B1A2B" },
          ].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, overflow: "hidden", marginBottom: 8, border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ height: 3, background: s.accent }} />
              <div style={{ padding: "9px 11px" }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{s.field}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom chips */}
        <div style={{ padding: "8px 14px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          <div style={{ background: "rgba(27,107,80,0.3)", borderRadius: 20, padding: "4px 10px", fontSize: 10, color: "#6ECBA8" }}>130 écoles</div>
          <div style={{ background: "rgba(245,158,11,0.2)", borderRadius: 20, padding: "4px 10px", fontSize: 10, color: "#F59E0B" }}>RIASEC</div>
          <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, padding: "4px 10px", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Salariomètre</div>
        </div>
      </div>

      {/* Floating card: orientation result */}
      <div style={{ position: "absolute", top: 30, right: -10, background: "rgba(10,10,20,0.9)", border: "1px solid rgba(27,107,80,0.5)", borderRadius: 10, padding: "10px 14px", backdropFilter: "blur(10px)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 3, fontFamily: "'DM Mono', monospace" }}>Test RIASEC</div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: "#6ECBA8" }}>Profil Social 🤝</div>
      </div>

      {/* Floating card: salary */}
      <div style={{ position: "absolute", bottom: 50, left: -20, background: "rgba(10,10,20,0.9)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 10, padding: "10px 14px", backdropFilter: "blur(10px)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 3, fontFamily: "'DM Mono', monospace" }}>Salariomètre</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#F59E0B" }}>8K – 15K DH</div>
      </div>
    </div>
  );
}

export default function WYNSite() {
  const [lang, setLang]           = useState("fr");
  const [dark, setDark]           = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [legalPage, setLegalPage] = useState(null);

  const navigate = useNavigate();
  const t = content[lang];
  const isRTL = lang === "ar";

  const C = {
    bg:         dark ? "#0E0E1A" : "#F9F9F6",
    bgSurface:  dark ? "#17172A" : "#ffffff",
    bgMuted:    dark ? "#13132200" : "#F0F0EB",
    bgCard:     dark ? "rgba(255,255,255,0.04)" : "#ffffff",
    bgDark:     dark ? "#0A0A14" : "#1A1A2E",
    bgGreen:    dark ? "#0D2E20" : "#1B6B50",
    text:       dark ? "#F0EFE8" : "#1A1A2E",
    textMuted:  dark ? "rgba(240,239,232,0.55)" : "#6B7280",
    textSub:    dark ? "rgba(240,239,232,0.75)" : "#4A4A5A",
    border:     dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    borderCard: dark ? "rgba(255,255,255,0.07)" : "#E8E8E2",
    green:      "#1B6B50",
    greenLight: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE",
    greenText:  dark ? "#6ECBA8" : "#1B6B50",
    amber:      "#F59E0B",
    navBg:      dark ? "rgba(14,14,26,0.93)" : "rgba(249,249,246,0.93)",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = ["hero", "pain", "solution", "schools", "study", "salaries", "b2b", "about"];
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.25 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: "'Sora', 'DM Sans', 'Helvetica Neue', sans-serif", color: C.text, background: C.bg, minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}
    >
      {legalPage && <LegalPage type={legalPage} lang={lang} dark={dark} C={C} onClose={() => setLegalPage(null)} />}
      <CookieBanner lang={lang} t={t.cookies} C={C} onLearnMore={() => setLegalPage("privacy")} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #1B6B50; color: #fff; }

        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 6px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; transition: all 0.25s; font-family: inherit; letter-spacing: 0.01em; }
        .btn-primary { background: #1B6B50; color: #fff; }
        .btn-primary:hover { background: #145540; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(27,107,80,0.28); }
        .btn-outline { background: transparent; border: 1.5px solid #1B6B50; color: #1B6B50; }
        .btn-outline:hover { background: #1B6B50; color: #fff; }
        .btn-dark { background: #1A1A2E; color: #fff; border: none; }
        .btn-dark:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-amber { background: #F59E0B; color: #1A1A2E; font-weight: 700; }
        .btn-amber:hover { background: #D97706; transform: translateY(-1px); }
        .btn-white { background: #fff; color: #1B6B50; font-weight: 700; }
        .btn-white:hover { background: #f0faf5; }
        .btn-ghost-light { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
        .btn-ghost-light:hover { background: rgba(255,255,255,0.2); }

        .nav-link { color: #4B5563; text-decoration: none; font-size: 13.5px; font-weight: 500; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; letter-spacing: 0.01em; padding: 4px 0; }
        .nav-link:hover, .nav-link.active { color: #1A1A2E; }

        .card { border-radius: 10px; transition: transform 0.25s, box-shadow 0.25s; }
        .card:hover { transform: translateY(-3px); }

        .mono { font-family: 'DM Mono', monospace; }
        .pill { display: inline-block; padding: 3px 11px; border-radius: 4px; font-size: 11.5px; font-weight: 600; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }

        .sp { padding: 96px 24px; max-width: 1160px; margin: 0 auto; }

        .waitlist-input { flex: 1; min-width: 0; padding: 13px 16px; border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); color: #fff; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .waitlist-input::placeholder { color: rgba(255,255,255,0.35); }
        .waitlist-input:focus { border-color: rgba(255,255,255,0.5); }
        .waitlist-select { padding: 13px 14px; border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.4); font-size: 13px; font-family: inherit; cursor: pointer; outline: none; }
        .waitlist-select option { background: #1A1A2E; color: #fff; }

        .hide-mob { display: flex !important; }
        .show-mob { display: none !important; }
        @media (max-width: 767px) {
          .sp { padding: 64px 18px; }
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .g2, .g3, .g4 { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .hero-h1 { font-size: clamp(42px, 12vw, 72px) !important; }
          .hero-stats { gap: 28px !important; flex-wrap: wrap !important; }
          .solution-row { flex-direction: column !important; }
          .mobile-btns { flex-direction: column !important; }
        }
        @media (min-width: 768px) {
          .mobile-overlay { display: none !important; }
        }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .g4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (min-width: 768px) and (max-width: 1024px) {
          .g3 { grid-template-columns: repeat(2, 1fr); }
          .g4 { grid-template-columns: repeat(2, 1fr); }
          .g2-b2b { grid-template-columns: repeat(2, 1fr) !important; }
        }

        [dir="rtl"] .solution-row { flex-direction: row-reverse; }
        [dir="rtl"] .btn { flex-direction: row-reverse; }
        [dir="rtl"] .footer-grid { direction: rtl; }
      `}</style>

      <Navbar
        lang={lang} setLang={setLang}
        dark={dark} setDark={setDark}
        t={t} C={C}
        activeSection={activeSection}
        onSectionClick={scrollTo}
      />

      <main>
      {/* ── HERO ── */}
      <section
        id="hero"
        style={{ paddingTop: NAVBAR_TOTAL_H, background: "linear-gradient(160deg, #0A0A14 0%, #0D1F16 55%, #0A0A14 100%)", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(27,107,80,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27,107,80,0.08) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at 30% 40%, black 30%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "60px 24px", position: "relative", width: "100%" }}>
          {/* 2-column grid */}
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Left: copy + form + stats */}
            <div>
              <FadeIn>
                <div className="mono pill" style={{ background: "rgba(27,107,80,0.25)", color: "#6ECBA8", marginBottom: 20, fontSize: 11, letterSpacing: "0.1em" }}>THE CAREER OS FOR AFRICA</div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="hero-h1" style={{ fontSize: "clamp(46px, 7vw, 84px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-3px", color: "#fff", marginBottom: 18 }}>
                  {t.hero.tagline}
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 300, color: "rgba(255,255,255,0.75)", maxWidth: 480, lineHeight: 1.4, marginBottom: 8 }}>{t.hero.sub}</p>
              </FadeIn>
              <FadeIn delay={0.22}>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.75, marginBottom: 32 }}>{t.hero.desc}</p>
              </FadeIn>

              {/* Waitlist form */}
              <FadeIn delay={0.3}>
                <WaitlistForm lang={lang} t={t.hero} dark={true} />
              </FadeIn>

              {/* Stats — now right below the form, always visible */}
              <FadeIn delay={0.42}>
                <div className="hero-stats" style={{ display: "flex", gap: 36, marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {[[t.hero.stat1, t.hero.stat1Label], [t.hero.stat2, t.hero.stat2Label], [t.hero.stat3, t.hero.stat3Label]].map(([val, label], i) => (
                    <div key={i}>
                      <div className="mono" style={{ fontSize: 24, fontWeight: 500, color: "#6ECBA8" }}>{val}</div>
                      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)", marginTop: 2, letterSpacing: "0.02em" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: phone visual */}
            <div className="hero-visual" style={{ display: "flex", justifyContent: "center" }}>
              <FadeIn delay={0.2}>
                <HeroVisual />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section id="pain" style={{ background: C.bgDark }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 52, letterSpacing: "-1px", color: "#fff" }}>{t.pain.title}</h2>
          </FadeIn>
          <div className="g3">
            {t.pain.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "28px 28px 32px", border: "1px solid rgba(255,255,255,0.07)", height: "100%" }}>
                  <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 4, background: "rgba(245,158,11,0.15)", marginBottom: 20 }}>
                    <span className="mono" style={{ fontSize: 11, color: "#F59E0B", letterSpacing: "0.08em" }}>{card.age}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "#fff" }}>{card.headline}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" style={{ background: C.bg }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 64, letterSpacing: "-1px", color: C.text }}>{t.solution.title}</h2>
          </FadeIn>
          {t.solution.steps.map((step, i) => {
            const Icon = solutionIcons[i];
            const pageLinks = ["/comment-ca-marche", "/etudiants", "/comment-ca-marche"];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="solution-row" style={{ display: "flex", gap: 36, marginBottom: 52, alignItems: "flex-start", paddingBottom: 52, borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                    <div className="mono" style={{ fontSize: 13, color: C.greenText, fontWeight: 500, minWidth: 28 }}>{step.num}</div>
                    <div style={{ width: 46, height: 46, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.greenText, flexShrink: 0 }}><Icon /></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10, color: C.text }}>{step.title}</h3>
                    <p style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.78, marginBottom: 14, maxWidth: 580 }}>{step.desc}</p>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      <span className="pill" style={{ background: C.greenLight, color: C.greenText }}>{step.tag}</span>
                      <button onClick={() => navigate(pageLinks[i])} style={{ background: "none", border: "none", color: C.greenText, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontFamily: "inherit" }}>
                        {step.learnMore} <Icons.ArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section id="schools" style={{ background: dark ? "#111120" : "#F0F0EB" }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: C.text }}>{t.schools.title}</h2>
            <p style={{ fontSize: 15, color: C.textMuted, marginBottom: 28 }}>{t.schools.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
              {t.schools.filters.map((f, i) => (
                <span key={i} className="pill" style={{ padding: "6px 14px", background: i < 3 ? C.text : "transparent", color: i < 3 ? C.bg : C.textSub, border: i < 3 ? "none" : `1.5px solid ${C.border}`, cursor: "pointer", fontSize: 12.5 }}>{f}</span>
              ))}
            </div>
          </FadeIn>
          <div className="g3">
            {mockSchools.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ background: C.bgCard, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.borderCard}` }}>
                  <div style={{ height: 5, background: s.accent }} />
                  <div style={{ padding: "22px 22px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, flex: 1, color: C.text }}>{s.name}</h4>
                      {s.recognized && (
                        <span className="pill" style={{ background: C.greenLight, color: C.greenText, fontSize: 10.5, whiteSpace: "nowrap", flexShrink: 0, padding: "3px 9px" }}>✓ {t.schools.cardLabels.recognition}</span>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 16 }}>
                      <span style={{ color: C.textMuted }}><Icons.MapPin /></span>
                      <span className="mono" style={{ fontSize: 11.5, color: C.textMuted }}>{s.city} · {s.field}</span>
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>{t.schools.cardLabels.price}</div>
                      <div className="mono" style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{s.price}</div>
                    </div>
                    <div style={{ padding: "9px 12px", borderRadius: 6, background: C.greenLight, marginBottom: 14 }}>
                      <span style={{ fontSize: 12, color: C.greenText, fontWeight: 500 }}>🎓 {t.schools.teaser}</span>
                    </div>
                    <button className="btn btn-outline" style={{ width: "100%", justifyContent: "center", padding: "9px 14px", fontSize: 13 }}>{t.schools.cardLabels.compare}</button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <button className={`btn ${dark ? "btn-primary" : "btn-dark"}`} style={{ fontSize: 14 }} onClick={() => navigate("/etudiants")}>{t.schools.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STUDY IN MOROCCO ── */}
      <section id="study" style={{ background: "#1B6B50" }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>INTERNATIONAL STUDENTS</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: "#fff" }}>{t.studyMorocco.title}</h2>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", marginBottom: 4, fontStyle: "italic" }}>{t.studyMorocco.subtitleEn}</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.75, marginBottom: 48 }}>{t.studyMorocco.subtitle}</p>
          </FadeIn>
          <div className="g4">
            {t.studyMorocco.reasons.map((r, i) => {
              const Icon = moroccoIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "24px 22px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.85)", marginBottom: 14 }}><Icon /></div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 7, color: "#fff" }}>{r.title}</h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{r.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ marginTop: 44 }}>
              <button className="btn btn-white" onClick={() => navigate("/etudiants")}>{t.studyMorocco.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SALARIOMÈTRE ── */}
      <section id="salaries" style={{ background: C.bg }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: C.text }}>{t.salaries.title}</h2>
            <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>{t.salaries.subtitle}</p>
          </FadeIn>
          <div className="g3" style={{ marginBottom: 40 }}>
            {t.salaries.examples.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ background: C.bgCard, borderRadius: 10, padding: "26px 24px", border: `1px solid ${C.borderCard}`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: dark ? "rgba(14,14,26,0.7)" : "rgba(249,249,246,0.7)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: C.greenText, background: C.greenLight, padding: "6px 14px", borderRadius: 20 }}>
                      {lang === "fr" ? "Bientôt disponible" : lang === "ar" ? "قريباً" : "Coming soon"}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 10 }}>{s.field}</div>
                  <div className="mono" style={{ fontSize: 22, fontWeight: 500, color: C.text, marginBottom: 12, lineHeight: 1.1 }}>{s.range}</div>
                  <span className="pill" style={{ background: dark ? "rgba(245,158,11,0.15)" : "#FEF3C7", color: dark ? "#F59E0B" : "#92400E" }}>{s.level}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <button className="btn btn-primary" onClick={() => navigate("/salaires")}>{t.salaries.cta} <Icons.ArrowRight /></button>
          </FadeIn>
        </div>
      </section>

      {/* ── B2B ── */}
      <section id="b2b" style={{ background: C.bgDark }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>
              {lang === "fr" ? "POUR LES ÉCOLES" : lang === "ar" ? "للمدارس" : "FOR SCHOOLS"}
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 12, letterSpacing: "-1px", color: "#fff", maxWidth: 640 }}>{t.b2b.title}</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 560, lineHeight: 1.75, marginBottom: 52 }}>{t.b2b.subtitle}</p>
          </FadeIn>
          <div className="g2 g2-b2b" style={{ marginBottom: 44 }}>
            {t.b2b.features.map((f, i) => {
              const Icon = b2bIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "28px 28px 32px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 8, background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F59E0B", marginBottom: 16 }}><Icon /></div>
                    <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#fff" }}>{f.title}</h4>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{f.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <button className="btn btn-amber" style={{ fontSize: 15, padding: "14px 28px" }} onClick={() => navigate("/ecoles")}>{t.b2b.cta} <Icons.ArrowRight /></button>
              <span className="mono" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.3)", maxWidth: 380, lineHeight: 1.5 }}>{t.b2b.proof}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT + JADARA ── */}
      <section id="about" style={{ background: dark ? "#111120" : "#F0F0EB" }}>
        <div className="sp" style={{ textAlign: "center" }}>
          <FadeIn>
            <div className="mono pill" style={{ background: C.greenLight, color: C.greenText, marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>ADITYA · CASABLANCA, MOROCCO</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-1px", color: C.text }}>{t.about.title}</h2>
            <p style={{ fontSize: 15, color: C.textSub, maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.78 }}>{t.about.text}</p>
            <div style={{ display: "inline-block", padding: "16px 30px", background: C.text, borderRadius: 8, color: C.bg, marginBottom: 40 }}>
              <span style={{ fontSize: 17, fontWeight: 600, fontStyle: "italic" }}>{t.about.mission}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, paddingTop: 32, borderTop: `1px solid ${C.border}`, flexWrap: "wrap" }}>
              <img src="/jadara.png" alt="JADARA Foundation" style={{ height: 32, objectFit: "contain", opacity: 0.85 }} />
              <span style={{ fontSize: 13.5, color: C.textMuted }}>{t.about.jadara}</span>
              <button onClick={() => navigate("/presse")} style={{ background: "none", border: "none", color: C.greenText, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", textDecoration: "underline", textDecorationStyle: "dotted" }}>
                {t.about.jadaraLink}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "linear-gradient(130deg, #0D1F16, #1B6B50)", padding: "80px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-1.5px" }}>{t.ctaBand.title}</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>{t.ctaBand.sub}</p>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <WaitlistForm lang={lang} t={t.hero} dark={true} compact={true} />
          </div>
        </FadeIn>
      </section>

      </main>
      <Footer lang={lang} t={t} C={C} onLegalClick={setLegalPage} />
    </div>
  );
}
