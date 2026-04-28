import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icons } from "./Icons.jsx";

const BANNER_H = 36;
const NAV_H    = 62;

export function Navbar({ lang, setLang, dark, setDark, t, C, activeSection = "", onSectionClick }) {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [langDropOpen, setLangDropOpen] = useState(false);
  const langRef                         = useRef(null);
  const navigate                        = useNavigate();
  const location                        = useLocation();
  const isHome                          = location.pathname === "/";
  const isRTL                           = lang === "ar";

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangDropOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavLink = (id) => {
    if (isHome && onSectionClick) { onSectionClick(id); }
    else {
      const routeMap = { solution: "/comment-ca-marche", schools: "/etudiants", b2b: "/ecoles", salaries: "/salaires", about: "/" };
      navigate(routeMap[id] || "/");
    }
    setMenuOpen(false);
  };

  const langLabels = { fr: "FR", ar: "AR", en: "EN" };

  const navLinks = [
    ["solution", t.nav.howItWorks],
    ["schools",  t.nav.students],
    ["b2b",      t.nav.schools],
    ["salaries", t.nav.salaries],
  ];

  return (
    <>
      {/* ── LAUNCH BANNER ── */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 201, height: BANNER_H, background: "#1B6B50", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em", fontFamily: "'DM Mono', monospace" }}>
          {t.hero.launchBanner} ·
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
          {t.hero.launchCountdown}{Math.max(0, Math.ceil((new Date("2026-06-15") - new Date()) / 86400000))}
        </span>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: BANNER_H, left: 0, right: 0, zIndex: 200, background: C.navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.border}`, transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: NAV_H }}>

          {/* Left: logo + nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <span onClick={() => navigate("/")} style={{ cursor: "pointer", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 20, color: C.text, letterSpacing: -0.5, flexShrink: 0 }}>
              WYN<span style={{ color: C.green }}>.</span>
            </span>
            <div className="hide-mob" style={{ display: "flex", gap: 20 }}>
              {navLinks.map(([id, label]) => (
                <button
                  key={id}
                  className={`nav-link ${isHome && activeSection === id ? "active" : ""}`}
                  onClick={() => handleNavLink(id)}
                  style={{ color: C.text }}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Right: lang dropdown + dark mode + école btn + waitlist btn */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

            {/* Language dropdown */}
            <div ref={langRef} style={{ position: "relative" }}>
              <button
                onClick={() => setLangDropOpen(o => !o)}
                aria-label="Sélectionner la langue"
                aria-expanded={langDropOpen}
                className="mono"
                style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", borderRadius: 5, border: `1px solid ${C.border}`, background: "transparent", color: C.text, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Mono', monospace", transition: "all 0.2s" }}
              >
                {langLabels[lang]} <Icons.ChevronDown />
              </button>
              {langDropOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 6px)", [isRTL ? "left" : "right"]: 0, background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: 6, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", zIndex: 999, minWidth: 72 }}>
                  {["fr", "ar", "en"].map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangDropOpen(false); }}
                      className="mono"
                      style={{ display: "block", width: "100%", padding: "9px 14px", textAlign: "left", background: lang === l ? C.greenLight : "transparent", color: lang === l ? C.greenText : C.text, fontSize: 12, fontWeight: lang === l ? 600 : 400, border: "none", cursor: "pointer", fontFamily: "'DM Mono', monospace", transition: "background 0.15s" }}
                    >{langLabels[l]}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
              style={{ width: 34, height: 34, borderRadius: 5, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.text, transition: "all 0.2s", flexShrink: 0 }}
            >
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>

            {/* Vous êtes une école? */}
            <button
              className="hide-mob"
              onClick={() => navigate("/ecoles")}
              style={{ padding: "8px 14px", borderRadius: 5, border: `1.5px solid ${C.green}`, background: "transparent", color: C.greenText, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.greenLight; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              {t.nav.schoolLink}
            </button>

            {/* Rejoindre la waitlist */}
            <button
              className="btn btn-primary hide-mob"
              onClick={() => isHome && onSectionClick ? onSectionClick("hero") : navigate("/")}
              style={{ padding: "9px 18px", fontSize: 13, whiteSpace: "nowrap" }}
            >
              {t.nav.demo}
            </button>

            {/* Hamburger */}
            <button
              className="show-mob"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              style={{ background: "none", border: "none", cursor: "pointer", color: C.text, display: "none", alignItems: "center" }}
            >
              {menuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-overlay" style={{ position: "fixed", top: BANNER_H + NAV_H, left: 0, right: 0, bottom: 0, background: C.bg, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 8, zIndex: 199, overflowY: "auto" }}>
          {navLinks.map(([id, label]) => (
            <button key={id} onClick={() => handleNavLink(id)} style={{ background: "none", border: "none", cursor: "pointer", color: C.text, fontSize: 18, fontWeight: 500, padding: "12px 0", borderBottom: `1px solid ${C.border}`, textAlign: isRTL ? "right" : "left", fontFamily: "inherit" }}>
              {label}
            </button>
          ))}
          <button onClick={() => { navigate("/ecoles"); setMenuOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", color: C.green, fontSize: 18, fontWeight: 600, padding: "12px 0", borderBottom: `1px solid ${C.border}`, textAlign: isRTL ? "right" : "left", fontFamily: "inherit" }}>
            {t.nav.schoolLink}
          </button>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => { isHome && onSectionClick ? onSectionClick("hero") : navigate("/"); setMenuOpen(false); }}>
              {t.nav.demo}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const NAVBAR_TOTAL_H = BANNER_H + NAV_H;
