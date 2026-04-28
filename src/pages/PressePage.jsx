import { FadeIn } from "../components/FadeIn.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const copy = {
  fr: {
    badge: "PRESSE & MÉDIAS",
    title: "Salle de presse WYN",
    sub: "Journalistes, investisseurs, écoles partenaires — toutes les ressources officielles en un seul endroit.",
    jadara: {
      label: "COMMUNIQUÉ OFFICIEL",
      title: "WYN et JADARA Foundation — Un partenariat stratégique pour l'éducation africaine",
      date: "Avril 2026",
      body: [
        "WYN, la plateforme Career OS développée par ADITYA SARL (Casablanca), annonce un partenariat stratégique avec JADARA Foundation, acteur institutionnel majeur de l'éducation et de l'insertion professionnelle en Afrique.",
        "Ce partenariat confère à WYN un accès privilégié à un réseau de 1 600+ étudiants ambassadeurs actifs sur l'ensemble du continent africain, constituant la principale source de données terrain pour la vérification des informations écoles et des indicateurs de marché.",
        "JADARA Foundation apporte à WYN sa légitimité institutionnelle, son réseau de partenaires académiques et son expertise en développement de carrière. WYN apporte la technologie, la donnée et l'interface numérique.",
        "« Notre ambition commune est de doter chaque jeune africain d'une boussole fiable pour son orientation et son insertion professionnelle », déclare la direction d'ADITYA.",
      ],
      contact: "Contact presse : presse@wyn.africa",
    },
    kit: { title: "Kit média", items: ["Logo WYN (SVG, PNG)", "Charte graphique", "Photos produit", "One-pager investisseurs"], note: "Kit complet disponible sur demande à presse@wyn.africa" },
    facts: { title: "Chiffres clés", items: [{ val: "380 000", label: "bacheliers / an au Maroc" }, { val: "1 600+", label: "étudiants ambassadeurs (JADARA)" }, { val: "130", label: "écoles cartographiées V1" }, { val: "Mi-2026", label: "lancement application" }] },
    contact: "Contact",
    pressEmail: "presse@wyn.africa",
    schoolsEmail: "ecoles@wyn.africa",
    pitchTeaser: "Vous êtes investisseur ou journaliste ? Demandez notre pitch deck complet.",
    pitchCta: "Demander le pitch deck",
  },
  en: {
    badge: "PRESS & MEDIA",
    title: "WYN Press Room",
    sub: "Journalists, investors, partner schools — all official resources in one place.",
    jadara: {
      label: "OFFICIAL PRESS RELEASE",
      title: "WYN and JADARA Foundation — A strategic partnership for African education",
      date: "April 2026",
      body: [
        "WYN, the Career OS platform developed by ADITYA SARL (Casablanca), announces a strategic partnership with JADARA Foundation, a major institutional player in education and professional integration across Africa.",
        "This partnership gives WYN privileged access to a network of 1,600+ student ambassadors active across the African continent, forming the primary source of field data for school verification and market indicators.",
        "JADARA Foundation brings institutional credibility, an academic partner network, and career development expertise. WYN brings the technology, data, and digital interface.",
        "\"Our shared ambition is to equip every young African with a reliable compass for their education and career path,\" says ADITYA management.",
      ],
      contact: "Press contact: presse@wyn.africa",
    },
    kit: { title: "Media kit", items: ["WYN logo (SVG, PNG)", "Brand guidelines", "Product screenshots", "Investor one-pager"], note: "Full kit available on request at presse@wyn.africa" },
    facts: { title: "Key facts", items: [{ val: "380,000", label: "graduates / year in Morocco" }, { val: "1,600+", label: "student ambassadors (JADARA)" }, { val: "130", label: "schools mapped V1" }, { val: "Mid-2026", label: "app launch" }] },
    contact: "Contact",
    pressEmail: "presse@wyn.africa",
    schoolsEmail: "ecoles@wyn.africa",
    pitchTeaser: "Are you an investor or journalist? Request our full pitch deck.",
    pitchCta: "Request pitch deck",
  },
};

function PresseContent() {
  const { lang, C } = useLayout();
  const c = copy[lang] || copy.fr;

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: 48 }}>

          <div>
            <FadeIn>
              <div style={{ background: C.bgCard, borderRadius: 12, padding: "36px 36px 40px", border: `1px solid ${C.border}`, marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <img src="/jadara.png" alt="JADARA Foundation" width="80" height="28" style={{ height: 28, width: "auto", objectFit: "contain", opacity: 0.85 }} />
                  <div style={{ display: "inline-block", padding: "3px 11px", borderRadius: 4, fontSize: 10, fontWeight: 600, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", background: C.greenLight, color: C.greenText }}>{c.jadara.label}</div>
                </div>
                <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: C.text, marginBottom: 6, lineHeight: 1.3 }}>{c.jadara.title}</h2>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.textMuted, marginBottom: 24 }}>{c.jadara.date}</p>
                {c.jadara.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.8, marginBottom: i < c.jadara.body.length - 1 ? 16 : 24 }}>{para}</p>
                ))}
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.greenText }}>{c.jadara.contact}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ background: C.bgCard, borderRadius: 12, padding: "32px 36px", border: `1px solid ${C.border}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 24 }}>{c.facts.title}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {c.facts.items.map((item, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 26, fontWeight: 500, color: C.greenText, marginBottom: 4 }}>{item.val}</div>
                      <div style={{ fontSize: 12.5, color: C.textMuted }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <FadeIn delay={0.12}>
              <div style={{ background: C.bgCard, borderRadius: 12, padding: "28px 28px", border: `1px solid ${C.border}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 18 }}>{c.kit.title}</h3>
                {c.kit.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontSize: 13.5, color: C.textMuted }}>
                    <span style={{ color: C.greenText }}>↓</span> {item}
                  </div>
                ))}
                <p style={{ fontSize: 12, color: C.textMuted, marginTop: 16, lineHeight: 1.6, fontStyle: "italic" }}>{c.kit.note}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ background: C.bgCard, borderRadius: 12, padding: "28px 28px", border: `1px solid ${C.border}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 18 }}>{c.contact}</h3>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>Presse / Press</div>
                  <a href={`mailto:${c.pressEmail}`} style={{ fontSize: 14, color: C.greenText, textDecoration: "none", fontWeight: 500 }}>{c.pressEmail}</a>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>Écoles / Schools</div>
                  <a href={`mailto:${c.schoolsEmail}`} style={{ fontSize: 14, color: C.greenText, textDecoration: "none", fontWeight: 500 }}>{c.schoolsEmail}</a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div style={{ background: "linear-gradient(135deg, #0D1F16, #1B6B50)", borderRadius: 12, padding: "28px 28px" }}>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: 16 }}>{c.pitchTeaser}</p>
                <a href={`mailto:${c.pressEmail}`} style={{ display: "inline-block", padding: "10px 20px", borderRadius: 6, background: "#F59E0B", color: "#1A1A2E", fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "inherit" }}>
                  {c.pitchCta} →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PressePage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><PresseContent /></Layout>;
}
