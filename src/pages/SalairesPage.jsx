import { useState } from "react";
import { FadeIn } from "../components/FadeIn.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const sectors = [
  { fr: "Ingénierie & Tech",  en: "Engineering & Tech",  ranges: ["Développeur Web · 6 000–14 000 DH", "Data Scientist · 10 000–20 000 DH", "Chef de projet IT · 12 000–22 000 DH"] },
  { fr: "Finance & Audit",    en: "Finance & Audit",     ranges: ["Analyste financier · 7 000–13 000 DH", "Auditeur · 8 000–15 000 DH", "DAF · 20 000–45 000 DH"] },
  { fr: "Marketing & Com",    en: "Marketing & Comms",   ranges: ["Community Manager · 4 000–8 000 DH", "Responsable Marketing · 8 000–16 000 DH", "Directeur Marketing · 18 000–35 000 DH"] },
  { fr: "Santé & Médecine",   en: "Health & Medicine",   ranges: ["Médecin généraliste · 12 000–25 000 DH", "Pharmacien · 10 000–20 000 DH", "Infirmier · 5 000–10 000 DH"] },
];

const copy = {
  fr: { badge: "SALARIOMÈTRE", title: "Les vrais salaires au Maroc", sub: "Données en cours de collecte. Les fourchettes ci-dessous sont indicatives et seront sourcées (HCP, Rekrute, Mercer) au lancement.", teaser: "Rapport détaillé complet au lancement", emailGate: "Sois notifié(e) à la sortie du rapport complet", emailPlaceholder: "ton.email@exemple.com", emailCta: "Me notifier", successMsg: "Tu seras notifié(e) au lancement !", source: "Sources : HCP, Rekrute, Mercer (à venir)" },
  en: { badge: "SALARY TOOL",  title: "Real salaries in Morocco",   sub: "Data collection in progress. The ranges below are indicative and will be sourced (HCP, Rekrute, Mercer) at launch.",                  teaser: "Full detailed report at launch",           emailGate: "Get notified when the full report is out",      emailPlaceholder: "your.email@example.com", emailCta: "Notify me", successMsg: "You'll be notified at launch!", source: "Sources: HCP, Rekrute, Mercer (upcoming)" },
  ar: { badge: "مقياس الرواتب", title: "الرواتب الحقيقية في المغرب", sub: "البيانات قيد الجمع. الأرقام أدناه استرشادية وستُوثَّق عند الإطلاق.",                                                              teaser: "تقرير كامل عند الإطلاق",                  emailGate: "كن أول من يعلم بصدور التقرير الكامل",           emailPlaceholder: "بريدك@مثال.com",         emailCta: "أخبرني", successMsg: "سيتم إخطارك عند الإطلاق!", source: "المصادر: HCP، Rekrute، Mercer (قريباً)" },
};

function SalairesContent() {
  const { lang, C } = useLayout();
  const c = copy[lang] || copy.fr;
  const isRTL = lang === "ar";
  const [email, setEmail]       = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotify = async (e) => {
    e.preventDefault();
    try { await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, bac: "Salariomètre", lang }) }); } catch {}
    setNotified(true);
  };

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <section style={{ padding: "80px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 16 }}>
          {sectors.map((sector, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: C.bgCard, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}`, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(4px)", background: C.bg + "80", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: C.greenText, background: C.greenLight, padding: "5px 12px", borderRadius: 20 }}>{c.teaser}</span>
                </div>
                <div style={{ padding: "20px 20px 4px" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 14 }}>{lang === "en" ? sector.en : sector.fr}</h3>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <tbody>
                    {sector.ranges.map((row, j) => {
                      const [role, range] = row.split(" · ");
                      return (
                        <tr key={j} style={{ borderTop: `1px solid ${C.border}` }}>
                          <td style={{ padding: "10px 20px", color: C.textMuted }}>{role}</td>
                          <td style={{ padding: "10px 20px", fontFamily: "'DM Mono', monospace", fontWeight: 500, color: C.greenText, textAlign: isRTL ? "left" : "right" }}>{range}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.textMuted, marginBottom: 64 }}>{c.source}</p>

        <FadeIn>
          <div style={{ background: "linear-gradient(130deg, #0D1F16, #1B6B50)", borderRadius: 12, padding: "48px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>{c.emailGate}</h2>
            {notified ? (
              <p style={{ color: "#6ECBA8", fontWeight: 600, fontSize: 15 }}>✓ {c.successMsg}</p>
            ) : (
              <form onSubmit={handleNotify} style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={c.emailPlaceholder}
                  style={{ padding: "13px 16px", borderRadius: 6, border: "1.5px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none", minWidth: 260 }} />
                <button type="submit" style={{ padding: "13px 24px", borderRadius: 6, background: "#F59E0B", color: "#1A1A2E", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {c.emailCta}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default function SalairesPage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><SalairesContent /></Layout>;
}
