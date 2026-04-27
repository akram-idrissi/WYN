import { useState, useEffect } from "react";
import { content } from "./data/siteContent.js";
import { mockSchools } from "./data/mockData.js";
import { Icons } from "./components/Icons.jsx";
import { FadeIn } from "./components/FadeIn.jsx";
import { VibeStars } from "./components/VibeStars.jsx";
import { LegalPage } from "./components/LegalPage.jsx";

const solutionIcons = [Icons.Compass, Icons.CheckShield, Icons.Briefcase];
const b2bIcons      = [Icons.Target,  Icons.Coin,        Icons.BarChart, Icons.Globe];
const moroccoIcons  = [Icons.DollarSign, Icons.Globe,    Icons.Award,    Icons.Plane];

export default function WYNSite() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [legalPage, setLegalPage] = useState(null);
  const t = content[lang];

  const C = {
    bg: dark ? "#0E0E1A" : "#F9F9F6",
    bgSurface: dark ? "#17172A" : "#ffffff",
    bgMuted: dark ? "#13132200" : "#F0F0EB",
    bgCard: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
    bgDark: dark ? "#0A0A14" : "#1A1A2E",
    bgGreen: dark ? "#0D2E20" : "#1B6B50",
    text: dark ? "#F0EFE8" : "#1A1A2E",
    textMuted: dark ? "rgba(240,239,232,0.55)" : "#6B7280",
    textSub: dark ? "rgba(240,239,232,0.75)" : "#4A4A5A",
    border: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    borderCard: dark ? "rgba(255,255,255,0.07)" : "#E8E8E2",
    green: "#1B6B50",
    greenLight: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE",
    greenText: dark ? "#6ECBA8" : "#1B6B50",
    amber: "#F59E0B",
    navBg: dark ? "rgba(14,14,26,0.93)" : "rgba(249,249,246,0.93)",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
    <div style={{ fontFamily: "'Sora', 'DM Sans', 'Helvetica Neue', sans-serif", color: C.text, background: C.bg, minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}>

      {legalPage && <LegalPage type={legalPage} lang={lang} dark={dark} C={C} onClose={() => setLegalPage(null)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
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

        .nav-link { color: inherit; opacity: 0.6; text-decoration: none; font-size: 13.5px; font-weight: 500; transition: opacity 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; letter-spacing: 0.01em; padding: 4px 0; }
        .nav-link:hover, .nav-link.active { opacity: 1; }

        .card { border-radius: 10px; transition: transform 0.25s, box-shadow 0.25s; }
        .card:hover { transform: translateY(-3px); }

        .mono { font-family: 'DM Mono', monospace; }
        .pill { display: inline-block; padding: 3px 11px; border-radius: 4px; font-size: 11.5px; font-weight: 600; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }

        .sp { padding: 96px 24px; max-width: 1160px; margin: 0 auto; }
        @media (max-width: 767px) {
          .sp { padding: 64px 18px; }
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .g2, .g3, .g4 { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .hero-h1 { font-size: clamp(42px, 12vw, 72px) !important; }
          .hero-stats { gap: 28px !important; }
          .solution-row { flex-direction: column !important; }
          .mobile-btns { flex-direction: column !important; }
        }
        @media (min-width: 768px) {
          .show-mob { display: none !important; }
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
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: C.navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.border}`, transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <span onClick={() => scrollTo("hero")} style={{ cursor: "pointer", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 20, color: C.text, letterSpacing: -0.5 }}>
              WYN<span style={{ color: C.green }}>.</span>
            </span>
            <div className="hide-mob" style={{ display: "flex", gap: 28 }}>
              {[["solution", t.nav.howItWorks], ["schools", t.nav.students], ["b2b", t.nav.schools], ["salaries", t.nav.salaries]].map(([id, label]) => (
                <button key={id} className={`nav-link ${activeSection === id ? "active" : ""}`} onClick={() => scrollTo(id)} style={{ color: C.text }}>{label}</button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", borderRadius: 5, overflow: "hidden", border: `1px solid ${C.border}` }}>
              {["fr", "en"].map(l => (
                <button key={l} onClick={() => setLang(l)} className="mono" style={{ padding: "5px 12px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Mono', monospace", background: lang === l ? C.text : "transparent", color: lang === l ? C.bg : C.textMuted }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setDark(!dark)} style={{ width: 34, height: 34, borderRadius: 5, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.text, transition: "all 0.2s" }}>
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button className="btn btn-primary hide-mob" onClick={() => scrollTo("b2b")} style={{ padding: "9px 18px", fontSize: 13 }}>{t.nav.demo}</button>
            <button className="show-mob" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: C.text, display: "none", alignItems: "center" }}>
              {menuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-overlay" style={{ position: "fixed", top: 62, left: 0, right: 0, bottom: 0, background: C.bg, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 8, zIndex: 199, overflowY: "auto" }}>
          {[["solution", t.nav.howItWorks], ["schools", t.nav.students], ["b2b", t.nav.schools], ["salaries", t.nav.salaries], ["about", t.nav.about]].map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ color: C.text, fontSize: 18, fontWeight: 500, padding: "12px 0", borderBottom: `1px solid ${C.border}`, textAlign: "left", opacity: 1 }}>
              {label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <button className="btn btn-primary" onClick={() => scrollTo("b2b")} style={{ flex: 1 }}>{t.nav.demo}</button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" style={{ paddingTop: 128, paddingBottom: 80, background: dark ? "linear-gradient(160deg, #0E0E1A 0%, #0D1F16 50%, #0E0E1A 100%)" : "linear-gradient(160deg, #F9F9F6 0%, #EAF5F0 50%, #F9F9F6 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${dark ? "rgba(27,107,80,0.07)" : "rgba(27,107,80,0.05)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(27,107,80,0.07)" : "rgba(27,107,80,0.05)"} 1px, transparent 1px)`, backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at 30% 40%, black 40%, transparent 75%)" }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <FadeIn>
            <div className="mono pill" style={{ background: C.greenLight, color: C.greenText, marginBottom: 20, fontSize: 11, letterSpacing: "0.1em" }}>THE CAREER OS FOR AFRICA</div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="hero-h1" style={{ fontSize: "clamp(52px, 9vw, 92px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-3px", color: C.text, marginBottom: 22 }}>{t.hero.tagline}</h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 300, color: C.textSub, maxWidth: 540, lineHeight: 1.4, marginBottom: 14 }}>{t.hero.sub}</p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 500, lineHeight: 1.75, marginBottom: 40 }}>{t.hero.desc}</p>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="mobile-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72 }}>
              <button className="btn btn-primary" style={{ fontSize: 15, padding: "15px 30px" }} onClick={() => scrollTo("solution")}>{t.hero.ctaStudent} <Icons.ArrowRight /></button>
              <button className="btn btn-outline" style={{ fontSize: 15, padding: "15px 30px" }} onClick={() => scrollTo("b2b")}>{t.hero.ctaSchool}</button>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="hero-stats" style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
              {[[t.hero.stat1, t.hero.stat1Label], [t.hero.stat2, t.hero.stat2Label], [t.hero.stat3, t.hero.stat3Label]].map(([val, label], i) => (
                <div key={i}>
                  <div className="mono" style={{ fontSize: 30, fontWeight: 500, color: C.greenText }}>{val}</div>
                  <div style={{ fontSize: 12.5, color: C.textMuted, marginTop: 3, letterSpacing: "0.02em" }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
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
                    <span className="pill" style={{ background: C.greenLight, color: C.greenText }}>{step.tag}</span>
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
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 18 }}>
                      <span style={{ color: C.textMuted }}><Icons.MapPin /></span>
                      <span className="mono" style={{ fontSize: 11.5, color: C.textMuted }}>{s.city} · {s.field}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>{t.schools.cardLabels.price}</div>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{s.price}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>{t.schools.cardLabels.insertion}</div>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 500, color: C.greenText }}>{s.insertion}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 5 }}>{t.schools.cardLabels.vibe}</div>
                      <VibeStars score={s.vibe} dark={dark} />
                    </div>
                    <button className="btn btn-outline" style={{ width: "100%", justifyContent: "center", padding: "9px 14px", fontSize: 13 }}>{t.schools.cardLabels.compare}</button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <button className={`btn ${dark ? "btn-primary" : "btn-dark"}`} style={{ fontSize: 14 }}>{t.schools.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STUDY IN MOROCCO ── */}
      <section id="study" style={{ background: "#1B6B50" }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>INTERNATIONAL STUDENTS</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 12, letterSpacing: "-1px", color: "#fff" }}>{t.studyMorocco.title}</h2>
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
              <button className="btn btn-white">{t.studyMorocco.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SALARIES ── */}
      <section id="salaries" style={{ background: C.bg }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: C.text }}>{t.salaries.title}</h2>
            <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>{t.salaries.subtitle}</p>
          </FadeIn>
          <div className="g3" style={{ marginBottom: 40 }}>
            {t.salaries.examples.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ background: C.bgCard, borderRadius: 10, padding: "26px 24px", border: `1px solid ${C.borderCard}` }}>
                  <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 10 }}>{s.field}</div>
                  <div className="mono" style={{ fontSize: 22, fontWeight: 500, color: C.text, marginBottom: 12, lineHeight: 1.1 }}>{s.range}</div>
                  <span className="pill" style={{ background: dark ? "rgba(245,158,11,0.15)" : "#FEF3C7", color: dark ? "#F59E0B" : "#92400E" }}>{s.level}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <button className="btn btn-primary">{t.salaries.cta} <Icons.ArrowRight /></button>
          </FadeIn>
        </div>
      </section>

      {/* ── B2B ── */}
      <section id="b2b" style={{ background: C.bgDark }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>{lang === "fr" ? "POUR LES ÉCOLES" : "FOR SCHOOLS"}</div>
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
              <button className="btn btn-amber" style={{ fontSize: 15, padding: "14px 28px" }}>{t.b2b.cta} <Icons.ArrowRight /></button>
              <span className="mono" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.3)", maxWidth: 380, lineHeight: 1.5 }}>{t.b2b.proof}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: dark ? "#111120" : "#F0F0EB" }}>
        <div className="sp" style={{ textAlign: "center" }}>
          <FadeIn>
            <div className="mono pill" style={{ background: C.greenLight, color: C.greenText, marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>ADITYA · CASABLANCA, MOROCCO</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-1px", color: C.text }}>{t.about.title}</h2>
            <p style={{ fontSize: 15, color: C.textSub, maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.78 }}>{t.about.text}</p>
            <div style={{ display: "inline-block", padding: "16px 30px", background: C.text, borderRadius: 8, color: C.bg }}>
              <span style={{ fontSize: 17, fontWeight: 600, fontStyle: "italic" }}>{t.about.mission}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "linear-gradient(130deg, #145540, #1B6B50)", padding: "72px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-1.5px" }}>What's Your Next?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 36, letterSpacing: "0.01em" }}>
            {lang === "fr" ? "Télécharge l'app. Trouve ta voie." : "Download the app. Find your path."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-white" style={{ fontSize: 15, padding: "14px 28px" }}>App Store</button>
            <button className="btn btn-ghost-light" style={{ fontSize: 15, padding: "14px 28px" }}>Google Play</button>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A0A14", color: "rgba(255,255,255,0.45)", padding: "60px 24px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div className="footer-brand">
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 24, color: "#fff", marginBottom: 10 }}>WYN<span style={{ color: "#1B6B50" }}>.</span></div>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, fontStyle: "italic", marginBottom: 14 }}>{t.footer.tagline}</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.6 }}>The Career OS for Africa</p>
            </div>
            {[[t.footer.col1Title, t.footer.col1], [t.footer.col2Title, t.footer.col2], [t.footer.col3Title, t.footer.col3]].map(([title, items], ci) => (
              <div key={ci}>
                <h5 style={{ color: "#fff", fontSize: 11.5, fontWeight: 600, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</h5>
                {items.map((item, i) => (
                  <div key={i} style={{ marginBottom: 11, fontSize: 13.5, cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.8)"}
                    onMouseLeave={e => e.target.style.color = ""}
                  >{item}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <span style={{ fontSize: 12 }}>{t.footer.copy}</span>
            <div style={{ display: "flex", gap: 22 }}>
              {[["legal", t.footer.legal], ["privacy", t.footer.privacy], ["cgu", t.footer.cgu]].map(([key, label]) => (
                <span key={key} style={{ fontSize: 12, cursor: "pointer", transition: "color 0.2s" }}
                  onClick={() => setLegalPage(key)}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = ""}
                >{label}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
