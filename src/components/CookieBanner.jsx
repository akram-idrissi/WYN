import { useState, useEffect } from "react";

export function CookieBanner({ lang, t, C, onLearnMore }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("wyn_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handle = (choice) => {
    localStorage.setItem("wyn_cookie_consent", choice);
    setVisible(false);
    if (choice === "accepted" && typeof window !== "undefined") {
      // Fire consent-dependent scripts
      window.dispatchEvent(new CustomEvent("wyn:cookie-consent", { detail: choice }));
    }
  };

  if (!visible) return null;

  const isRTL = lang === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 999,
        background: "#0A0A14",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        maxWidth: 840,
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, flex: 1, margin: 0 }}>
        {t.message}{" "}
        <span
          style={{ color: "#6ECBA8", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => onLearnMore?.()}
        >
          {t.learnMore}
        </span>
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={() => handle("refused")}
          style={{ padding: "8px 16px", borderRadius: 5, background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}
        >
          {t.refuse}
        </button>
        <button
          onClick={() => handle("accepted")}
          style={{ padding: "8px 18px", borderRadius: 5, background: "#1B6B50", color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit" }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
