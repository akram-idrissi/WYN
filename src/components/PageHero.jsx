// Shared hero section used across all inner pages.
// Renders a dark full-width hero with decorative grid + radial glow.
export function PageHero({ badge, title, sub, children, accentColor = "#1B6B50" }) {
  const glowColor = accentColor === "#F59E0B"
    ? "rgba(245,158,11,0.18)"
    : "rgba(27,107,80,0.2)";

  return (
    <section style={{ background: "linear-gradient(160deg, #080810 0%, #0D1F16 55%, #080810 100%)", position: "relative", overflow: "hidden", padding: "80px 24px 90px" }}>
      {/* Grid pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(27,107,80,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(27,107,80,0.07) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at 25% 50%, black 20%, transparent 65%)", pointerEvents: "none" }} />
      {/* Radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "35%", transform: "translate(-50%,-50%)", width: 500, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 65%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
        {badge && (
          <div style={{ display: "inline-block", padding: "3px 11px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", background: accentColor === "#F59E0B" ? "rgba(245,158,11,0.15)" : "rgba(27,107,80,0.25)", color: accentColor === "#F59E0B" ? "#F59E0B" : "#6ECBA8", marginBottom: 22 }}>
            {badge}
          </div>
        )}
        <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-2.5px", color: "#fff", marginBottom: 18, maxWidth: 760 }}>
          {title}
        </h1>
        {sub && (
          <p style={{ fontSize: "clamp(15px, 2vw, 19px)", color: "rgba(255,255,255,0.6)", maxWidth: 560, lineHeight: 1.65 }}>
            {sub}
          </p>
        )}
        {children && <div style={{ marginTop: 32 }}>{children}</div>}
      </div>
    </section>
  );
}
