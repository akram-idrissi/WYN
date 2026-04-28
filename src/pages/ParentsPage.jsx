import { useState } from "react";
import { FadeIn } from "../components/FadeIn.jsx";
import { Icons } from "../components/Icons.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { WaitlistForm } from "../components/WaitlistForm.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const fears = [
  { icon: Icons.Coin,        fr: { title: "Les vraies fourchettes de prix",  text: "Comparez les coûts réels des écoles privées : frais de scolarité, hébergement, transport. Pas les prix brochure." }, en: { title: "Real price ranges",    text: "Compare actual costs of private schools: tuition, housing, transport. Not brochure prices." } },
  { icon: Icons.CheckShield, fr: { title: "La reconnaissance des diplômes",  text: "Toutes les accréditations clairement indiquées. Pas de mauvaise surprise après 5 ans." },                             en: { title: "Degree recognition",    text: "All accreditations clearly stated. No surprises after 5 years." } },
  { icon: Icons.BarChart,    fr: { title: "Les débouchés réels",             text: "Les secteurs qui recrutent, les salaires de départ, les témoignages de diplômés." },                                   en: { title: "Real career outcomes",  text: "Hiring sectors, starting salaries, graduate testimonials. Sourced data." } },
  { icon: Icons.Briefcase,   fr: { title: "Le guide parents",                text: "Une brochure complète pour comprendre le système éducatif marocain et les options de financement." },                  en: { title: "Parent guide",          text: "A complete brochure to understand Morocco's education system and financing options." } },
];

const copy = {
  fr: { badge: "POUR LES PARENTS", title: "Votre enfant passe le Bac. Et après ?",     sub: "WYN aide votre enfant à faire le bon choix — avec des données vérifiées sur les écoles, les coûts réels et les débouchés.", waitlistTitle: "Soyez informé(e) au lancement" },
  en: { badge: "FOR PARENTS",       title: "Your child is graduating. What's next?",   sub: "WYN helps your child make the right choice — with verified data on schools, real costs, and career outcomes.",               waitlistTitle: "Be notified at launch" },
  ar: { badge: "للأولياء",          title: "طفلك يجتاز الباكالوريا. ثم ماذا؟",         sub: "WYN يساعد طفلك على اتخاذ القرار الصحيح — ببيانات موثقة عن المدارس والتكاليف الحقيقية.",                                  waitlistTitle: "كن أول من يعلم عند الإطلاق" },
};

function ParentsContent() {
  const { lang, C, t } = useLayout();
  const c = copy[lang] || copy.fr;

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <section style={{ padding: "80px 24px", maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 64 }}>
          {fears.map((item, i) => {
            const Icon = item.icon;
            const s = item[lang] || item.fr;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.bgCard, borderRadius: 10, padding: "26px 24px", border: `1px solid ${C.border}` }}>
                  <div style={{ width: 42, height: 42, borderRadius: 9, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.greenText, marginBottom: 16 }}><Icon /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: C.text }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.7 }}>{s.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
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

export default function ParentsPage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><ParentsContent /></Layout>;
}
