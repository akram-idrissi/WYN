import { useNavigate } from "react-router-dom";
import { FadeIn } from "../components/FadeIn.jsx";
import { WaitlistForm } from "../components/WaitlistForm.jsx";
import { Icons } from "../components/Icons.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const steps = [
  { icon: Icons.Compass,     fr: { title: "Fais le test RIASEC",  text: "12 questions pour découvrir ta personnalité professionnelle et les métiers qui te correspondent." },    en: { title: "Take the RIASEC test", text: "12 questions to discover your professional personality and the careers that suit you." } },
  { icon: Icons.CheckShield, fr: { title: "Compare les écoles",   text: "Filtre par ville, filière, budget. Consulte les fiches vérifiées. Évite les mauvaises surprises." },  en: { title: "Compare schools",      text: "Filter by city, field, budget. Read verified profiles. Avoid bad surprises." } },
  { icon: Icons.Briefcase,   fr: { title: "Décroche un job",      text: "Stages, freelance, premier emploi — WYN te connecte aux opportunités qui matchent ton profil." },     en: { title: "Land a job",           text: "Internships, freelance, first job — WYN connects you to opportunities matching your profile." } },
];
const copy = {
  fr: { badge: "POUR LES ÉTUDIANTS", title: "Ta boussole après le Bac",      sub: "De l'orientation au premier emploi — tout ce dont tu as besoin en un seul endroit.", stepsTitle: "Comment ça marche", quizCta: "Faire le test d'orientation", waitlistTitle: "Sois prévenu(e) au lancement" },
  en: { badge: "FOR STUDENTS",       title: "Your compass after graduation", sub: "From orientation to first job — everything you need in one place.",                      stepsTitle: "How it works",      quizCta: "Take the orientation test",   waitlistTitle: "Be notified at launch" },
  ar: { badge: "للطلاب",             title: "بوصلتك بعد الباكالوريا",        sub: "من التوجيه إلى أول وظيفة — كل ما تحتاجه في مكان واحد.",                                  stepsTitle: "كيف يعمل",          quizCta: "ابدأ اختبار التوجيه",         waitlistTitle: "كن أول من يعلم عند الإطلاق" },
};

function EtudiantsContent() {
  const { lang, C, t } = useLayout();
  const navigate        = useNavigate();
  const c               = copy[lang] || copy.fr;

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <section style={{ padding: "80px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, marginBottom: 48, letterSpacing: "-1px", color: C.text }}>{c.stepsTitle}</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const s = step[lang] || step.fr;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.bgCard, borderRadius: 10, padding: "28px 26px", border: `1px solid ${C.border}` }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.greenText, marginBottom: 18 }}><Icon /></div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.greenText, marginBottom: 8 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: C.text }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7 }}>{s.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => navigate("/test-orientation")} style={{ padding: "13px 26px", borderRadius: 6, background: "#F59E0B", color: "#1A1A2E", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              {c.quizCta} →
            </button>
            <button onClick={() => navigate("/salaires")} style={{ padding: "13px 26px", borderRadius: 6, background: "transparent", border: `1.5px solid ${C.green}`, color: C.greenText, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
              {t.salaries.cta}
            </button>
          </div>
        </FadeIn>
      </section>

      <section style={{ background: "linear-gradient(130deg, #0D1F16, #1B6B50)", padding: "72px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-1px" }}>{c.waitlistTitle}</h2>
          <div style={{ maxWidth: 520, margin: "24px auto 0" }}>
            <WaitlistForm lang={lang} t={t.hero} dark={true} compact={true} />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default function EtudiantsPage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><EtudiantsContent /></Layout>;
}
