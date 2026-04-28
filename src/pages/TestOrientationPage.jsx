import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../components/FadeIn.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { useLayout } from "../components/LayoutContext.jsx";

const questions = [
  { id: 1,  fr: "J'aime réparer ou construire des objets avec mes mains.",          en: "I enjoy repairing or building things with my hands.",              type: "R" },
  { id: 2,  fr: "J'aime observer, analyser et résoudre des problèmes complexes.",   en: "I enjoy observing, analyzing, and solving complex problems.",       type: "I" },
  { id: 3,  fr: "J'aime créer des œuvres artistiques, écrire ou jouer de la musique.", en: "I enjoy creating art, writing, or making music.",               type: "A" },
  { id: 4,  fr: "J'aime aider, enseigner ou soigner les autres.",                   en: "I enjoy helping, teaching, or caring for others.",                 type: "S" },
  { id: 5,  fr: "J'aime convaincre les gens et diriger des projets.",               en: "I enjoy persuading people and leading projects.",                  type: "E" },
  { id: 6,  fr: "J'aime organiser des données, tenir des registres et suivre des procédures.", en: "I enjoy organizing data, keeping records, and following procedures.", type: "C" },
  { id: 7,  fr: "J'aime travailler à l'extérieur ou avec des machines.",            en: "I enjoy working outdoors or with machinery.",                      type: "R" },
  { id: 8,  fr: "Je m'intéresse aux sciences et à la recherche.",                   en: "I'm interested in science and research.",                          type: "I" },
  { id: 9,  fr: "J'apprécie les activités créatives et l'expression libre.",        en: "I appreciate creative activities and free expression.",            type: "A" },
  { id: 10, fr: "Je trouve du sens à aider les personnes en difficulté.",           en: "I find meaning in helping people in need.",                        type: "S" },
  { id: 11, fr: "J'aime prendre des initiatives et lancer des projets.",            en: "I like taking initiative and starting new ventures.",              type: "E" },
  { id: 12, fr: "Je préfère un travail bien structuré avec des règles claires.",    en: "I prefer well-structured work with clear rules.",                  type: "C" },
];

const typeLabels = {
  R: { fr: "Réaliste",      en: "Realistic",     emoji: "🔧" },
  I: { fr: "Investigateur", en: "Investigative", emoji: "🔬" },
  A: { fr: "Artistique",    en: "Artistic",      emoji: "🎨" },
  S: { fr: "Social",        en: "Social",        emoji: "🤝" },
  E: { fr: "Entrepreneur",  en: "Enterprising",  emoji: "💡" },
  C: { fr: "Conventionnel", en: "Conventional",  emoji: "📋" },
};

const copy = {
  fr: { badge: "TEST D'ORIENTATION", title: "Quel métier te correspond ?", sub: "12 questions pour découvrir ta personnalité professionnelle (modèle RIASEC).", next: "Suivant", prev: "Précédent", submit: "Voir mes résultats", emailGate: "Entre ton email pour recevoir ton profil complet", emailPlaceholder: "ton.email@exemple.com", emailCta: "Découvrir mon profil", resultTitle: "Ton profil RIASEC", resultSub: "Résultats complets au lancement de l'app WYN.", agree: "Tout à fait d'accord", disagree: "Pas du tout d'accord", emailNote: "Tes résultats sont prêts. Un email de confirmation sera envoyé.", backHome: "Retour à l'accueil" },
  en: { badge: "ORIENTATION TEST",   title: "Which career suits you?",     sub: "12 questions to discover your professional personality (RIASEC model).",       next: "Next",    prev: "Previous",  submit: "See my results",    emailGate: "Enter your email to receive your full profile",   emailPlaceholder: "your.email@example.com", emailCta: "Discover my profile", resultTitle: "Your RIASEC profile", resultSub: "Full results at the WYN app launch.", agree: "Strongly agree", disagree: "Strongly disagree", emailNote: "Your results are ready. A confirmation email will be sent.", backHome: "Back to home" },
  ar: { badge: "اختبار التوجيه",     title: "ما المهنة التي تناسبك؟",      sub: "12 سؤالاً لاكتشاف شخصيتك المهنية (نموذج RIASEC).",                           next: "التالي",  prev: "السابق",    submit: "اعرض نتائجي",       emailGate: "أدخل بريدك الإلكتروني لتلقي ملفك الكامل",        emailPlaceholder: "بريدك@مثال.com",        emailCta: "اكتشف ملفي",         resultTitle: "ملفك RIASEC",        resultSub: "نتائج كاملة عند إطلاق تطبيق WYN.", agree: "موافق تماماً", disagree: "غير موافق", emailNote: "نتائجك جاهزة. سيتم إرسال بريد تأكيد.", backHome: "العودة للرئيسية" },
};

function QuizContent() {
  const { lang, C } = useLayout();
  const navigate = useNavigate();
  const c = copy[lang] || copy.fr;

  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail]     = useState("");

  const handleAnswer = (value) => {
    setAnswers(prev => ({ ...prev, [step]: value }));
    if (step < 11) setStep(s => s + 1);
    else setStep(12);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try { await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, bac: "RIASEC", lang }) }); } catch {}
    setStep(13);
  };

  const scores = {};
  Object.entries(answers).forEach(([idx, val]) => {
    const type = questions[parseInt(idx)].type;
    scores[type] = (scores[type] || 0) + val;
  });
  const topTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([type]) => type);
  const progress = Math.round((Object.keys(answers).length / 12) * 100);

  return (
    <div>
      <PageHero badge={c.badge} title={c.title} sub={c.sub} />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
        {step < 12 && (
          <>
            <div style={{ height: 4, background: C.border, borderRadius: 4, marginBottom: 40, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: "#1B6B50", borderRadius: 4, transition: "width 0.4s" }} />
            </div>

            <FadeIn key={step}>
              <div style={{ background: C.bgCard, borderRadius: 12, padding: "36px 32px", border: `1px solid ${C.border}`, marginBottom: 24 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.greenText, marginBottom: 14 }}>{step + 1} / 12</div>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 500, color: C.text, lineHeight: 1.5, marginBottom: 32 }}>
                  {lang === "en" ? questions[step].en : questions[step].fr}
                </p>
                <div style={{ display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{c.disagree}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[1, 2, 3, 4, 5].map(v => (
                      <button key={v} onClick={() => handleAnswer(v)} style={{ width: 44, height: 44, borderRadius: 8, border: `2px solid ${answers[step] === v ? "#1B6B50" : C.border}`, background: answers[step] === v ? "#1B6B50" : "transparent", color: answers[step] === v ? "#fff" : C.textMuted, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>{v}</button>
                    ))}
                  </div>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{c.agree}</span>
                </div>
              </div>
            </FadeIn>

            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} style={{ background: "none", border: "none", cursor: "pointer", color: C.greenText, fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
                ← {c.prev}
              </button>
            )}
          </>
        )}

        {step === 12 && (
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: "-1px" }}>{c.emailGate}</h2>
              <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 28 }}>{c.emailNote}</p>
              <form onSubmit={handleEmailSubmit} style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={c.emailPlaceholder}
                  style={{ padding: "13px 16px", borderRadius: 6, border: `1.5px solid ${C.border}`, background: C.bgCard, color: C.text, fontSize: 14, fontFamily: "inherit", outline: "none", minWidth: 260 }} />
                <button type="submit" style={{ padding: "13px 24px", borderRadius: 6, background: "#1B6B50", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {c.emailCta}
                </button>
              </form>
            </div>
          </FadeIn>
        )}

        {step === 13 && (
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: "-1.5px" }}>
                {topTypes.map(type => typeLabels[type]?.emoji).join(" ")}
              </h2>
              <p style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 600, color: C.text, marginBottom: 14 }}>
                {topTypes.map(type => typeLabels[type]?.[lang === "en" ? "en" : "fr"]).join(" · ")}
              </p>
              <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 32 }}>{c.resultSub}</p>
              <button onClick={() => navigate("/")} style={{ padding: "13px 28px", borderRadius: 6, background: "#1B6B50", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                ← {c.backHome}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

export default function TestOrientationPage({ lang, dark, setLang, setDark }) {
  return <Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark}><QuizContent /></Layout>;
}
