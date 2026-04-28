import { useNavigate } from "react-router-dom";

export function Footer({ lang, t, C, onLegalClick }) {
  const navigate = useNavigate();
  const isRTL    = lang === "ar";

  const col1Links = [
    { label: t.footer.col1[0], action: () => navigate("/comment-ca-marche") },
    { label: t.footer.col1[1], action: () => navigate("/etudiants") },
    { label: t.footer.col1[2], action: () => navigate("/salaires") },
    { label: t.footer.col1[3], action: () => navigate("/test-orientation") },
  ];

  const col2Links = [
    { label: t.footer.col2[0], action: () => navigate("/ecoles") },
    { label: t.footer.col2[1], action: () => navigate("/ecoles") },
    { label: t.footer.col2[2], action: () => navigate("/ecoles") },
    { label: t.footer.col2[3], action: () => navigate("/ecoles") },
  ];

  const col3Links = [
    { label: t.footer.col3[0], action: () => navigate("/") },
    { label: t.footer.col3[1], action: () => navigate("/presse") },
    { label: t.footer.col3[2], action: () => {} },
    { label: t.footer.col3[3], action: () => window.location.href = "mailto:contact@wyn.africa" },
  ];

  const legalLinks = [
    { label: t.footer.legal,   action: () => onLegalClick("legal") },
    { label: t.footer.privacy, action: () => onLegalClick("privacy") },
    { label: t.footer.cgu,     action: () => onLegalClick("cgu") },
    { label: t.footer.cookies, action: () => onLegalClick("legal") },
  ];

  const columns = [
    [t.footer.col1Title, col1Links],
    [t.footer.col2Title, col2Links],
    [t.footer.col3Title, col3Links],
    [t.footer.legalTitle, legalLinks],
  ];

  return (
    <footer dir={isRTL ? "rtl" : "ltr"} style={{ background: "#0A0A14", color: "rgba(255,255,255,0.45)", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}
        >
          {/* Brand column */}
          <div className="footer-brand">
            <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 24, color: "#fff", marginBottom: 10 }}>
              WYN<span style={{ color: "#1B6B50" }}>.</span>
            </div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, fontStyle: "italic", marginBottom: 10 }}>{t.footer.tagline}</p>
            <p style={{ fontSize: 12.5, lineHeight: 1.6 }}>The Career OS for Africa</p>
          </div>

          {/* Link columns */}
          {columns.map(([title, links], ci) => (
            <div key={ci}>
              <h5 style={{ color: "#fff", fontSize: 11.5, fontWeight: 600, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</h5>
              {links.map(({ label, action }, i) => (
                <div
                  key={i}
                  onClick={action}
                  style={{ marginBottom: 11, fontSize: 13.5, cursor: "pointer", color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <span style={{ fontSize: 12 }}>{t.footer.copy}</span>
          <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.25)", fontFamily: "'DM Mono', monospace" }}>RC 581907 · ICE 003255253000063</span>
        </div>
      </div>
    </footer>
  );
}
