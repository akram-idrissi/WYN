import { useState } from "react";
import { FadeIn } from "../components/FadeIn.jsx";
import { Icons } from "../components/Icons.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const copy = {
  fr: { badge: "POUR LES ÉCOLES", formNote: "Remplissez le formulaire ci-dessous et nous vous recontactons sous 24h.", successMsg: "Demande reçue ! Nous vous contactons sous 24h.", schoolPlaceholder: "Nom de l'école", emailPlaceholder: "Email professionnel" },
  en: { badge: "FOR SCHOOLS",     formNote: "Fill in the form below and we'll get back to you within 24h.",           successMsg: "Request received! We'll contact you within 24h.",      schoolPlaceholder: "School name",    emailPlaceholder: "Professional email" },
  ar: { badge: "للمدارس",         formNote: "املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة.",                         successMsg: "تم استلام الطلب! سنتواصل معك خلال 24 ساعة.",           schoolPlaceholder: "اسم المدرسة",    emailPlaceholder: "البريد المهني" },
};

function EcolesContent() {
  const { lang, C, t } = useLayout();
  const c = copy[lang] || copy.fr;
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail]       = useState("");
  const [school, setSchool]     = useState("");

  const handleDemo = async (e) => {
    e.preventDefault();
    try { await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, bac: `École: ${school}`, lang }) }); } catch {}
    setFormSent(true);
  };

  return (
    <div>
      <PageHero badge={c.badge} title={t.b2b.title} sub={t.b2b.subtitle} accentColor="#F59E0B" />

      <section style={{ padding: "80px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 72 }}>
          {t.b2b.features.map((f, i) => {
            const Icon = [Icons.Target, Icons.Coin, Icons.BarChart, Icons.Globe][i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.bgCard, borderRadius: 10, padding: "28px 24px", border: `1px solid ${C.border}` }}>
                  <div style={{ width: 42, height: 42, borderRadius: 9, background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, marginBottom: 16 }}><Icon /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: C.text }}>{f.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.7 }}>{f.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <div style={{ background: C.bgDark, borderRadius: 12, padding: "48px 40px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{t.b2b.cta}</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>{c.formNote}</p>
            {formSent ? (
              <p style={{ color: "#6ECBA8", fontWeight: 600, fontSize: 15 }}>✓ {c.successMsg}</p>
            ) : (
              <form onSubmit={handleDemo} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input type="text" required value={school} onChange={e => setSchool(e.target.value)} placeholder={c.schoolPlaceholder}
                  style={{ padding: "13px 16px", borderRadius: 6, border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={c.emailPlaceholder}
                  style={{ padding: "13px 16px", borderRadius: 6, border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                <button type="submit" style={{ padding: "14px", borderRadius: 6, background: "#F59E0B", color: "#1A1A2E", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {t.b2b.cta} →
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default function EcolesPage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><EcolesContent /></Layout>;
}
