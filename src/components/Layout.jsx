import { useState } from "react";
import { Navbar, NAVBAR_TOTAL_H } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { CookieBanner } from "./CookieBanner.jsx";
import { LegalPage } from "./LegalPage.jsx";
import { content } from "../data/siteContent.js";
import { LayoutContext } from "./LayoutContext.jsx";

// Shared color palette — mirrors wyn-site.jsx
function getColors(dark) {
  return {
    bg:         dark ? "#0E0E1A" : "#F9F9F6",
    bgSurface:  dark ? "#17172A" : "#ffffff",
    bgMuted:    dark ? "#13132200" : "#F0F0EB",
    bgCard:     dark ? "rgba(255,255,255,0.04)" : "#ffffff",
    bgDark:     dark ? "#0A0A14" : "#1A1A2E",
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
}

export function Layout({ children, lang: initLang, dark: initDark, setLang: externalSetLang, setDark: externalSetDark }) {
  const [lang, _setLang] = useState(initLang || "fr");
  const [dark, _setDark] = useState(initDark || false);
  const [legalPage, setLegalPage] = useState(null);

  const setLang = (l) => { _setLang(l); externalSetLang?.(l); };
  const setDark = (d) => { _setDark(d); externalSetDark?.(d); };

  const t  = content[lang];
  const C  = getColors(dark);
  const isRTL = lang === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: "'Sora', 'DM Sans', 'Helvetica Neue', sans-serif", color: C.text, background: C.bg, minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #1B6B50; color: #fff; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 6px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; transition: all 0.25s; font-family: inherit; }
        .btn-primary { background: #1B6B50; color: #fff; }
        .btn-primary:hover { background: #145540; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(27,107,80,0.28); }
        .btn-amber { background: #F59E0B; color: #1A1A2E; font-weight: 700; }
        .btn-amber:hover { background: #D97706; transform: translateY(-1px); }
        .mono { font-family: 'DM Mono', monospace; }
        .pill { display: inline-block; padding: 3px 11px; border-radius: 4px; font-size: 11.5px; font-weight: 600; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }
        .nav-link { color: #4B5563; text-decoration: none; font-size: 13.5px; font-weight: 500; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; }
        .nav-link:hover { color: #1A1A2E; }
        .hide-mob { display: flex !important; }
        .show-mob { display: none !important; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 40px; }
        @media (max-width: 767px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .mobile-overlay { display: flex; flex-direction: column; }
        }
        @media (min-width: 768px) {
          .mobile-overlay { display: none !important; }
        }
      `}</style>

      {legalPage && <LegalPage type={legalPage} lang={lang} dark={dark} C={C} onClose={() => setLegalPage(null)} />}
      <CookieBanner lang={lang} t={t.cookies} C={C} onLearnMore={() => setLegalPage("privacy")} />

      <Navbar
        lang={lang} setLang={setLang}
        dark={dark} setDark={setDark}
        t={t} C={C}
      />

      <LayoutContext.Provider value={{ lang, dark, C, t, setLang, setDark }}>
        <main style={{ paddingTop: NAVBAR_TOTAL_H }}>
          {children}
        </main>
      </LayoutContext.Provider>

      <Footer lang={lang} t={t} C={C} onLegalClick={setLegalPage} />
    </div>
  );
}
