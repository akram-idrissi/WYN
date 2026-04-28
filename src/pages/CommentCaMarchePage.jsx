import { FadeIn } from "../components/FadeIn.jsx";
import { WaitlistForm } from "../components/WaitlistForm.jsx";
import { Icons } from "../components/Icons.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const phases = [
  {
    num: "01", icon: Icons.Compass,
    fr: { title: "Orientation",    sub: "Test RIASEC + IA",          text: "Un test psychométrique gamifié de 12 questions pour découvrir ta personnalité professionnelle. L'IA croise ton profil avec les métiers disponibles au Maroc et en Afrique." },
    en: { title: "Orientation",    sub: "RIASEC test + AI",          text: "A 12-question gamified psychometric test to discover your professional personality. The AI cross-references your profile with available careers in Morocco and Africa." },
    ar: { title: "التوجيه",        sub: "اختبار RIASEC + الذكاء الاصطناعي", text: "اختبار نفسي ممتع من 12 سؤالاً لاكتشاف شخصيتك المهنية." },
  },
  {
    num: "02", icon: Icons.CheckShield,
    fr: { title: "Vie étudiante",  sub: "Données vérifiées",         text: "Consulte les fiches écoles avec les vrais prix, les reconnaissances officielles, les témoignages d'étudiants vérifiés. Compare. Décide en connaissance de cause." },
    en: { title: "Student life",   sub: "Verified data",             text: "Browse school profiles with real prices, official recognitions, verified student reviews. Compare. Make informed decisions." },
    ar: { title: "الحياة الجامعية", sub: "بيانات موثقة",             text: "تصفح ملفات المدارس بالأسعار الحقيقية والاعترافات الرسمية وآراء الطلاب الموثقة." },
  },
  {
    num: "03", icon: Icons.Briefcase,
    fr: { title: "Premier emploi", sub: "Matching & opportunités",   text: "Stages, missions freelance, premier CDI — WYN connecte ton profil aux opportunités qui correspondent. Le Salariomètre te donne les vraies fourchettes de rémunération." },
    en: { title: "First job",      sub: "Matching & opportunities",  text: "Internships, freelance, first permanent job — WYN connects your profile to matching opportunities. The Salary Tool gives you real pay ranges." },
    ar: { title: "أول وظيفة",     sub: "مطابقة وفرص",              text: "تدريبات، عمل حر، أول عقد دائم — WYN يربط ملفك بالفرص المناسبة." },
  },
];

const copy = {
  fr: { badge: "COMMENT ÇA MARCHE", title: "3 phases, 1 plateforme", sub: "WYN t'accompagne à chaque étape clé, du Bac jusqu'au premier emploi.", waitlistTitle: "Rejoins la liste d'attente" },
  en: { badge: "HOW IT WORKS",       title: "3 phases, 1 platform",  sub: "WYN guides you at every key stage, from graduation to your first job.",  waitlistTitle: "Join the waitlist" },
  ar: { badge: "كيف يعمل",           title: "3 مراحل، منصة واحدة",  sub: "WYN يرافقك في كل مرحلة أساسية، من الباكالوريا إلى أول وظيفة.",          waitlistTitle: "انضم لقائمة الانتظار" },
};

function CommentCaContent() {
  const { lang, C, t } = useLayout();
  const c = copy[lang] || copy.fr;

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          const s = phase[lang] || phase.fr;
          return (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 32, marginBottom: 56, paddingBottom: 56, borderBottom: i < 2 ? `1px solid ${C.border}` : "none", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.greenText, fontWeight: 500 }}>{phase.num}</span>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.greenText }}><Icon /></div>
                </div>
                <div>
                  <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: C.text, marginBottom: 4 }}>{s.title}</h2>
                  <div style={{ display: "inline-block", padding: "3px 11px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'DM Mono', monospace", background: C.greenLight, color: C.greenText, marginBottom: 14 }}>{s.sub}</div>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.78, maxWidth: 580 }}>{s.text}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
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

export default function CommentCaMarchePage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><CommentCaContent /></Layout>;
}
