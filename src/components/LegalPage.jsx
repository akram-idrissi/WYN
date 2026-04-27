import { useEffect, useRef, useState } from "react";
import { legalContent } from "../data/legalContent.js";
import { Icons } from "./Icons.jsx";

function Section({ s, i, total, C }) {
  return (
    <div
      id={"legal-" + s.id}
      style={{
        marginBottom: 44,
        paddingBottom: 44,
        borderBottom: i < total - 1 ? `1px solid ${C.border}` : "none",
      }}
    >
      <h2 style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-block", width: 4, height: 16, background: "#1B6B50", borderRadius: 2, flexShrink: 0 }} />
        {s.heading}
      </h2>
      <div style={{ fontSize: 14, color: C.textSub, lineHeight: 1.9, whiteSpace: "pre-line" }}>
        {s.body}
      </div>
    </div>
  );
}

function CguTocSidebar({ toc, C, onJump }) {
  return (
    <div style={{
      position: "sticky",
      top: 80,
      width: 220,
      flexShrink: 0,
      paddingTop: 48,
      maxHeight: "calc(100vh - 100px)",
      overflowY: "auto",
      scrollbarWidth: "thin",
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
        color: "#1B6B50", textTransform: "uppercase", marginBottom: 14,
        fontFamily: "'DM Mono', monospace",
      }}>
        Table des matières
      </div>
      {toc.map((item) => (
        <button
          key={item.id}
          onClick={() => onJump(item.id)}
          style={{
            display: "block", width: "100%", textAlign: "left",
            background: "none", border: "none", padding: "4px 0",
            fontSize: 12, color: C.textMuted, cursor: "pointer",
            fontFamily: "inherit", lineHeight: 1.55, transition: "color 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#1B6B50"}
          onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function CguTocMobile({ toc, C, dark, onJump }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 36 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", borderRadius: 8, border: `1px solid ${C.border}`,
          background: dark ? "rgba(27,107,80,0.08)" : "#E8F5EE",
          color: "#1B6B50", fontFamily: "inherit", fontWeight: 600, fontSize: 13,
          cursor: "pointer",
        }}
      >
        <span>Table des matières ({toc.length} articles)</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "flex" }}>
          <Icons.ChevronDown />
        </span>
      </button>
      {open && (
        <div style={{
          border: `1px solid ${C.border}`, borderTop: "none", borderRadius: "0 0 8px 8px",
          background: C.bgCard, padding: "8px 0",
        }}>
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => { onJump(item.id); setOpen(false); }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", padding: "8px 16px",
                fontSize: 13, color: C.textSub, cursor: "pointer",
                fontFamily: "inherit", lineHeight: 1.5, transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = dark ? "rgba(27,107,80,0.12)" : "#E8F5EE"; e.currentTarget.style.color = "#1B6B50"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.textSub; }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function LegalPage({ type, lang, dark, C, onClose }) {
  const data = legalContent[lang]?.[type] ?? legalContent.fr[type];
  const scrollRef = useRef(null);
  const isCgu = type === "cgu";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById("legal-" + id);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  const closeLabel = lang === "fr" ? "Fermer" : "Close";
  const backLabel  = lang === "fr" ? "Retour au site" : "Back to site";

  return (
    <div ref={scrollRef} style={{ position: "fixed", inset: 0, zIndex: 300, background: C.bg, overflowY: "auto" }}>

      {/* ── Sticky header ── */}
      <style>{`
        @media (max-width: 767px) {
          .cgu-layout { flex-direction: column !important; }
          .cgu-sidebar { display: none !important; }
          .cgu-content { padding-top: 32px !important; }
        }
        @media (min-width: 768px) {
          .cgu-toc-mobile { display: none !important; }
        }
      `}</style>

      <div style={{
        position: "sticky", top: 0, background: C.navBg,
        backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.border}`, zIndex: 10,
      }}>
        <div style={{
          maxWidth: isCgu ? 1060 : 760, margin: "0 auto", padding: "0 20px",
          height: 62, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 18, color: C.text, letterSpacing: -0.5 }}>
            WYN<span style={{ color: "#1B6B50" }}>.</span>
          </span>
          <button
            onClick={onClose}
            style={{
              display: "flex", alignItems: "center", gap: 8, background: "none",
              border: `1px solid ${C.border}`, borderRadius: 6, padding: "7px 16px",
              cursor: "pointer", color: C.textMuted, fontSize: 13, fontFamily: "inherit", fontWeight: 500,
            }}
          >
            <Icons.X /> {closeLabel}
          </button>
        </div>
      </div>

      {/* ── CGU: two-column on desktop, single-column on mobile ── */}
      {isCgu ? (
        <div
          className="cgu-layout"
          style={{
            maxWidth: 1060, margin: "0 auto", padding: "0 20px 96px",
            display: "flex", gap: 48, alignItems: "flex-start",
          }}
        >
          {/* Desktop sidebar */}
          <div className="cgu-sidebar">
            <CguTocSidebar toc={data.toc} C={C} onJump={scrollToSection} />
          </div>

          {/* Main content */}
          <div className="cgu-content" style={{ flex: 1, minWidth: 0, paddingTop: 48 }}>
            <div
              className="mono pill"
              style={{ background: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE", color: dark ? "#6ECBA8" : "#1B6B50", marginBottom: 16, fontSize: 11, letterSpacing: "0.1em" }}
            >
              ADITYA SARL · CASABLANCA, MAROC
            </div>
            <h1 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-1.2px", color: C.text, marginBottom: 8, lineHeight: 1.1 }}>
              {data.title}
            </h1>
            <div style={{ fontSize: 12.5, color: C.textMuted, marginBottom: 36, fontFamily: "'DM Mono', monospace" }}>
              {data.version}
            </div>

            {/* Mobile TOC (collapsible) */}
            <div className="cgu-toc-mobile">
              <CguTocMobile toc={data.toc} C={C} dark={dark} onJump={scrollToSection} />
            </div>

            {data.sections.map((s, i) => (
              <Section key={s.id} s={s} i={i} total={data.sections.length} C={C} />
            ))}

            <div style={{
              marginTop: 64, padding: "24px", background: C.bgCard,
              borderRadius: 10, border: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>ADITYA SARL</div>
                <div style={{ fontSize: 12.5, color: C.textMuted }}>Casablanca, Maroc · contact@wyn.africa</div>
              </div>
              <button onClick={onClose} className="btn btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
                {backLabel}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ── Mentions légales / Privacy: simple centered layout ── */
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 20px 96px" }}>
          <div
            className="mono pill"
            style={{ background: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE", color: dark ? "#6ECBA8" : "#1B6B50", marginBottom: 20, fontSize: 11, letterSpacing: "0.1em" }}
          >
            {lang === "fr" ? "ADITYA · CASABLANCA, MAROC" : "ADITYA · CASABLANCA, MOROCCO"}
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-1.5px", color: C.text, marginBottom: 48, lineHeight: 1.1 }}>
            {data.title}
          </h1>

          {type === "privacy" && data.intro && (
            <p style={{
              fontSize: 16, color: C.textSub, lineHeight: 1.8, marginBottom: 48,
              padding: "20px 24px", background: dark ? "rgba(27,107,80,0.1)" : "#E8F5EE",
              borderRadius: 8, borderLeft: "3px solid #1B6B50",
            }}>
              {data.intro}
            </p>
          )}

          {data.sections.map((s, i) => (
            <div
              key={i}
              style={{ marginBottom: 44, paddingBottom: 44, borderBottom: i < data.sections.length - 1 ? `1px solid ${C.border}` : "none" }}
            >
              <h2 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "inline-block", width: 4, height: 18, background: "#1B6B50", borderRadius: 2, flexShrink: 0 }} />
                {s.heading}
              </h2>
              <div style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.85, whiteSpace: "pre-line" }}>
                {s.body}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: 64, padding: "24px", background: C.bgCard, borderRadius: 10,
            border: `1px solid ${C.border}`, display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>ADITYA SARL</div>
              <div style={{ fontSize: 12.5, color: C.textMuted }}>Casablanca, Maroc · privacy@wyn.africa</div>
            </div>
            <button onClick={onClose} className="btn btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
              {backLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
