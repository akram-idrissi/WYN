import { useState, useEffect } from "react";

export function WaitlistForm({ lang, t, dark, compact = false }) {
  const [email, setEmail]     = useState("");
  const [bac, setBac]         = useState("");
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [count, setCount]     = useState(null);

  useEffect(() => {
    fetch("/api/waitlist-count")
      .then(r => r.json())
      .then(d => setCount(d.count))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !bac) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, bac, lang }),
      });
      if (res.ok) {
        setStatus("success");
        setCount(c => (c !== null ? c + 1 : null));
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ padding: "18px 22px", borderRadius: 8, background: "rgba(27,107,80,0.25)", border: "1px solid rgba(27,107,80,0.4)", maxWidth: 520 }}>
        <p style={{ color: "#6ECBA8", fontWeight: 600, fontSize: 15, margin: 0 }}>{t.waitlistSuccess}</p>
      </div>
    );
  }

  const inputStyle = {
    flex: 1,
    minWidth: 0,
    padding: compact ? "11px 14px" : "13px 16px",
    borderRadius: 6,
    border: "1.5px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: 14,
    fontFamily: "inherit",
    outline: "none",
  };

  const selectStyle = {
    padding: compact ? "11px 12px" : "13px 14px",
    borderRadius: 6,
    border: "1.5px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: bac ? "#fff" : "rgba(255,255,255,0.4)",
    fontSize: 13,
    fontFamily: "inherit",
    cursor: "pointer",
    outline: "none",
    flexShrink: 0,
  };

  return (
    <div style={{ maxWidth: compact ? 560 : 520 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.waitlistPlaceholder}
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.45)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
          />
          <select
            required
            value={bac}
            onChange={e => setBac(e.target.value)}
            style={selectStyle}
          >
            <option value="" disabled>{t.waitlistBacLabel}</option>
            {t.waitlistBac.map((opt, i) => (
              <option key={i} value={opt} style={{ background: "#1A1A2E", color: "#fff" }}>{opt}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={status === "loading"}
            style={{ padding: compact ? "11px 20px" : "13px 24px", borderRadius: 6, background: "#F59E0B", color: "#1A1A2E", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", opacity: status === "loading" ? 0.7 : 1, transition: "all 0.2s" }}
          >
            {status === "loading" ? "…" : t.waitlistCta}
          </button>
        </div>
        {status === "error" && (
          <p style={{ color: "#F87171", fontSize: 13, marginTop: 8 }}>{t.waitlistError}</p>
        )}
      </form>
      {count !== null && count > 0 && (
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", marginTop: 10, fontFamily: "'DM Mono', monospace" }}>
          {count}+ {t.waitlistCount}
        </p>
      )}
    </div>
  );
}
