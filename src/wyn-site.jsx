import { useState, useEffect, useRef } from "react";

 const content = {
  fr: {
    nav: { students: "Étudiants", schools: "Écoles", howItWorks: "Comment ça marche", guides: "Guides", salaries: "Salaires", about: "À propos", demo: "Demander une démo", download: "Télécharger l'app" },
    hero: {
      tagline: "What's Your Next?",
      sub: "De l'orientation au premier emploi.",
      desc: "La plateforme qui donne aux étudiants africains les données vérifiées pour choisir leur école, financer leurs études et lancer leur carrière.",
      ctaStudent: "Je suis étudiant",
      ctaSchool: "Je suis une école",
      stat1: "130+", stat1Label: "Écoles référencées",
      stat2: "100%", stat2Label: "Données vérifiées",
      stat3: "24/7", stat3Label: "IA conseiller",
    },
    pain: {
      title: "Le problème que personne ne résout",
      cards: [
        { age: "17 ans", emoji: "🎓", headline: "Perdu après le Bac", text: "380 000 bacheliers chaque année au Maroc. Zéro outil fiable pour choisir. Les brochures mentent sur les prix, les taux d'insertion, les reconnaissances." },
        { age: "20 ans", emoji: "💼", headline: "Fauché pendant les études", text: "Le privé coûte 30 000 à 80 000 DH/an. Pas de prêt étudiant accessible. Pas de plateforme de jobs étudiants structurée." },
        { age: "23 ans", emoji: "📋", headline: "Diplômé et invisible", text: "Les entreprises ne trouvent pas les bons profils. Les jeunes diplômés envoient 50 CV sans réponse. Le matching est cassé." },
      ],
    },
    solution: {
      title: "WYN répond à chaque étape",
      steps: [
        { num: "01", title: "Orientation intelligente", desc: "Un test psychométrique gamifié (RIASEC) + une IA qui parle ta langue. Tu découvres les métiers qui te correspondent et les écoles qui y mènent — avec les vrais prix, les vrais taux d'insertion.", tag: "What's Your Next school?" },
        { num: "02", title: "Données vérifiées", desc: "Chaque fiche école affiche le Score de Vérité : prix réels, reconnaissance de l'État, taux d'employabilité, avis d'étudiants vérifiés sur le terrain. Fini les brochures photoshoppées.", tag: "What's Your Next move?" },
        { num: "03", title: "Du campus au premier job", desc: "Stages, missions freelance, premier emploi — WYN te connecte aux opportunités qui matchent ton profil. Tu finances tes études et tu lances ta carrière.", tag: "What's Your Next career?" },
      ],
    },
    schools: {
      title: "Trouve ton école",
      subtitle: "Filtre par ville, budget, filière, type. Compare. Décide.",
      filters: ["Casablanca", "Rabat", "Marrakech", "Commerce", "Ingénierie", "Santé"],
      cta: "Explorer toutes les écoles",
      cardLabels: { price: "À partir de", recognition: "Reconnue", vibe: "Score Vibe", insertion: "Insertion", compare: "Comparer" },
    },
    studyMorocco: {
      title: "Study in Morocco",
      subtitle: "Le Maroc est le premier hub universitaire d'Afrique. Des milliers d'étudiants du Sénégal, de Côte d'Ivoire, du Congo et de toute l'Afrique y font leurs études chaque année.",
      reasons: [
        { icon: "💰", title: "Abordable", text: "Frais de scolarité 3 à 5x moins chers qu'en Europe" },
        { icon: "🌍", title: "Proximité culturelle", text: "Francophone, arabophone, cosmopolite" },
        { icon: "📜", title: "Diplômes reconnus", text: "Accréditations internationales (AACSB, ABET)" },
        { icon: "✈️", title: "Hub Afrique", text: "Vols directs depuis 30+ villes africaines" },
      ],
      cta: "Découvrir les écoles pour étudiants internationaux",
    },
    salaries: {
      title: "Les vrais salaires au Maroc",
      subtitle: "Fini les rumeurs. Découvre combien tu gagneras vraiment après tes études — données crowdsourcées, vérifiées, anonymes.",
      cta: "Explorer le Salariomètre",
      examples: [
        { field: "Ingénieur Informatique", range: "8 000 — 15 000 DH", level: "Bac+5, 0-2 ans" },
        { field: "Marketing Digital", range: "5 500 — 9 000 DH", level: "Bac+5, 0-2 ans" },
        { field: "Finance d'Entreprise", range: "7 000 — 12 000 DH", level: "Bac+5, 0-2 ans" },
      ],
    },
    b2b: {
      title: "Écoles : recrutez mieux, pas plus cher",
      subtitle: "WYN vous envoie des étudiants dont le profil psychométrique matche avec votre école. Vous ne payez que par inscription effective.",
      features: [
        { icon: "🎯", title: "Student Fit Score", text: "Chaque lead est scoré selon sa compatibilité réelle avec votre école : profil, budget, ambition, localisation." },
        { icon: "💸", title: "No Cure No Pay", text: "Zéro risque. Vous ne payez une commission que lorsque l'étudiant s'inscrit effectivement chez vous." },
        { icon: "📊", title: "Dashboard temps réel", text: "Suivez vos leads, vos conversions, votre ROI. Comparez-vous au marché. Pilotez votre recrutement par la data." },
        { icon: "🌍", title: "Étudiants internationaux", text: "Accédez aux étudiants d'Afrique subsaharienne qui cherchent à étudier au Maroc. Panier moyen x3." },
      ],
      cta: "Demander une démo",
      proof: "Modèle validé par CollegeDekho (Inde) — $150M d'exit sur la même thèse.",
    },
    about: {
      title: "Construit par ADITYA",
      text: "WYN est développé par ADITYA, un studio technologique basé au Maroc qui construit l'infrastructure numérique pour connecter la jeunesse africaine à l'éducation et à l'emploi. Notre ambition : devenir le Career OS du continent.",
      mission: "Le Maroc est le laboratoire. L'Afrique est le marché.",
    },
    footer: {
      tagline: "What's Your Next?",
      col1Title: "Étudiants",
      col1: ["Comment ça marche", "Trouver une école", "Salaires", "Guides"],
      col2Title: "Écoles",
      col2: ["Solution", "Résultats", "Tarification", "Demander une démo"],
      col3Title: "WYN",
      col3: ["À propos", "Presse", "Carrières", "Contact"],
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      copy: "© 2026 WYN by ADITYA. Tous droits réservés.",
    },
  },
  en: {
    nav: { students: "Students", schools: "Schools", howItWorks: "How it works", guides: "Guides", salaries: "Salaries", about: "About", demo: "Request a demo", download: "Download the app" },
    hero: {
      tagline: "What's Your Next?",
      sub: "From guidance to your first job.",
      desc: "The platform giving African students verified data to choose their school, fund their studies, and launch their career.",
      ctaStudent: "I'm a student",
      ctaSchool: "I'm a school",
      stat1: "130+", stat1Label: "Schools listed",
      stat2: "100%", stat2Label: "Verified data",
      stat3: "24/7", stat3Label: "AI counselor",
    },
    pain: {
      title: "The problem no one is solving",
      cards: [
        { age: "Age 17", emoji: "🎓", headline: "Lost after high school", text: "380,000 graduates every year in Morocco alone. Zero reliable tools to choose. Brochures lie about prices, employment rates, accreditation." },
        { age: "Age 20", emoji: "💼", headline: "Broke during studies", text: "Private tuition costs 30,000–80,000 MAD/year. No accessible student loans. No structured platform for student jobs." },
        { age: "Age 23", emoji: "📋", headline: "Graduated and invisible", text: "Companies can't find the right profiles. Young graduates send 50 CVs with zero response. The matching is broken." },
      ],
    },
    solution: {
      title: "WYN answers at every stage",
      steps: [
        { num: "01", title: "Smart guidance", desc: "A gamified psychometric test (RIASEC) + an AI that speaks your language. Discover careers that match your profile and schools that lead there — with real prices and real employment rates.", tag: "What's Your Next school?" },
        { num: "02", title: "Verified data", desc: "Every school page displays the Truth Score: real prices, state recognition, employment rate, verified student reviews. No more photoshopped brochures.", tag: "What's Your Next move?" },
        { num: "03", title: "From campus to first job", desc: "Internships, freelance gigs, first job — WYN connects you to opportunities matching your profile. Fund your studies and launch your career.", tag: "What's Your Next career?" },
      ],
    },
    schools: {
      title: "Find your school",
      subtitle: "Filter by city, budget, field, type. Compare. Decide.",
      filters: ["Casablanca", "Rabat", "Marrakech", "Business", "Engineering", "Health"],
      cta: "Explore all schools",
      cardLabels: { price: "Starting from", recognition: "Accredited", vibe: "Vibe Score", insertion: "Employment", compare: "Compare" },
    },
    studyMorocco: {
      title: "Study in Morocco",
      subtitle: "Morocco is Africa's #1 university hub. Thousands of students from Senegal, Ivory Coast, Congo and across Africa study here every year.",
      reasons: [
        { icon: "💰", title: "Affordable", text: "Tuition 3–5x cheaper than Europe" },
        { icon: "🌍", title: "Cultural proximity", text: "French-speaking, cosmopolitan, welcoming" },
        { icon: "📜", title: "Recognized degrees", text: "International accreditations (AACSB, ABET)" },
        { icon: "✈️", title: "Africa hub", text: "Direct flights from 30+ African cities" },
      ],
      cta: "Discover schools for international students",
    },
    salaries: {
      title: "Real salaries in Morocco",
      subtitle: "No more rumors. Discover what you'll actually earn after graduation — crowdsourced, verified, anonymous data.",
      cta: "Explore the Salary Tool",
      examples: [
        { field: "Software Engineer", range: "8,000 — 15,000 MAD", level: "Master's, 0-2 years" },
        { field: "Digital Marketing", range: "5,500 — 9,000 MAD", level: "Master's, 0-2 years" },
        { field: "Corporate Finance", range: "7,000 — 12,000 MAD", level: "Master's, 0-2 years" },
      ],
    },
    b2b: {
      title: "Schools: recruit better, not more expensively",
      subtitle: "WYN sends you students whose psychometric profile matches your school. You only pay per effective enrollment.",
      features: [
        { icon: "🎯", title: "Student Fit Score", text: "Each lead is scored by real compatibility with your school: profile, budget, ambition, location." },
        { icon: "💸", title: "No Cure No Pay", text: "Zero risk. You pay a commission only when a student actually enrolls." },
        { icon: "📊", title: "Real-time dashboard", text: "Track your leads, conversions, and ROI. Benchmark against the market. Data-driven recruitment." },
        { icon: "🌍", title: "International students", text: "Access Sub-Saharan African students looking to study in Morocco. Average basket x3." },
      ],
      cta: "Request a demo",
      proof: "Model validated by CollegeDekho (India) — $150M exit on the same thesis.",
    },
    about: {
      title: "Built by ADITYA",
      text: "WYN is developed by ADITYA, a Morocco-based tech studio building the digital infrastructure to connect African youth with education and employment. Our ambition: becoming the continent's Career OS.",
      mission: "Morocco is the lab. Africa is the market.",
    },
    footer: {
      tagline: "What's Your Next?",
      col1Title: "Students",
      col1: ["How it works", "Find a school", "Salaries", "Guides"],
      col2Title: "Schools",
      col2: ["Solution", "Results", "Pricing", "Request a demo"],
      col3Title: "WYN",
      col3: ["About", "Press", "Careers", "Contact"],
      legal: "Legal notice",
      privacy: "Privacy policy",
      copy: "© 2026 WYN by ADITYA. All rights reserved.",
    },
  },
};

const mockSchools = [
  { name: "ESCA École de Management", city: "Casablanca", field: "Commerce", price: "52 000 DH", vibe: 4.2, insertion: "87%", recognized: true, color: "#1B6B50" },
  { name: "EMSI", city: "Casablanca", field: "Ingénierie", price: "38 000 DH", vibe: 3.8, insertion: "82%", recognized: true, color: "#2654A0" },
  { name: "UIR — Université Internationale de Rabat", city: "Rabat", field: "Multi", price: "65 000 DH", vibe: 4.5, insertion: "91%", recognized: true, color: "#8B1A2B" },
];

function VibeStars({ score }) {
  return (
    <span style={{ letterSpacing: 2, fontSize: 13 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.round(score) ? "#F59E0B" : "#D1D5DB" }}>★</span>
      ))}
      <span style={{ marginLeft: 6, color: "#6B7280", fontSize: 12 }}>{score}</span>
    </span>
  );
}

function useOnScreen(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function WYNSite() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const t = content[lang];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["hero", "pain", "solution", "schools", "study", "salaries", "b2b", "about"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", color: "#1A1A2E", background: "#FAFAF7", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #1B6B50; color: #fff; }
        .wyn-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 50px; font-weight: 500; font-size: 15px; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s ease; font-family: inherit; }
        .wyn-btn-primary { background: #1B6B50; color: #fff; }
        .wyn-btn-primary:hover { background: #145540; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(27,107,80,0.3); }
        .wyn-btn-secondary { background: transparent; color: #1B6B50; border: 1.5px solid #1B6B50; }
        .wyn-btn-secondary:hover { background: #1B6B50; color: #fff; }
        .wyn-btn-dark { background: #1A1A2E; color: #fff; }
        .wyn-btn-dark:hover { background: #2D2D4A; transform: translateY(-2px); }
        .wyn-btn-amber { background: #F59E0B; color: #1A1A2E; font-weight: 700; }
        .wyn-btn-amber:hover { background: #D97706; transform: translateY(-2px); }
        .nav-link { color: #4A4A5A; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; }
        .nav-link:hover { color: #1B6B50; }
        .nav-link.active { color: #1B6B50; }
        .lang-toggle { display: flex; border-radius: 20px; overflow: hidden; border: 1.5px solid #E5E5E0; }
        .lang-btn { padding: 6px 14px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; font-family: 'Space Mono', monospace; }
        .lang-btn.active { background: #1A1A2E; color: #fff; }
        .lang-btn:not(.active) { background: transparent; color: #6B7280; }
        .section-pad { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 768px) {
          .section-pad { padding: 64px 20px; }
          .hide-mobile { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-overlay { display: none !important; }
        }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .tag-pill { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; font-family: 'Space Mono', monospace; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 900px) {
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        .mono { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* ========== NAVBAR ========== */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(250,250,247,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <span onClick={() => scrollTo("hero")} style={{ cursor: "pointer", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 22, color: "#1A1A2E", letterSpacing: -1 }}>
              WYN<span style={{ color: "#1B6B50" }}>.</span>
            </span>
            <div className="hide-mobile" style={{ display: "flex", gap: 24 }}>
              <button className={`nav-link ${activeSection === "solution" ? "active" : ""}`} onClick={() => scrollTo("solution")}>{t.nav.howItWorks}</button>
              <button className={`nav-link ${activeSection === "schools" ? "active" : ""}`} onClick={() => scrollTo("schools")}>{t.nav.students}</button>
              <button className={`nav-link ${activeSection === "b2b" ? "active" : ""}`} onClick={() => scrollTo("b2b")}>{t.nav.schools}</button>
              <button className={`nav-link ${activeSection === "salaries" ? "active" : ""}`} onClick={() => scrollTo("salaries")}>{t.nav.salaries}</button>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === "fr" ? "active" : ""}`} onClick={() => setLang("fr")}>FR</button>
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            </div>
            <button className="wyn-btn wyn-btn-primary hide-mobile" onClick={() => scrollTo("b2b")} style={{ padding: "10px 20px", fontSize: 13 }}>{t.nav.demo}</button>
            <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", display: "none" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-overlay" style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "#FAFAF7", padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
            <button className="nav-link" onClick={() => scrollTo("solution")}>{t.nav.howItWorks}</button>
            <button className="nav-link" onClick={() => scrollTo("schools")}>{t.nav.students}</button>
            <button className="nav-link" onClick={() => scrollTo("b2b")}>{t.nav.schools}</button>
            <button className="nav-link" onClick={() => scrollTo("salaries")}>{t.nav.salaries}</button>
            <button className="nav-link" onClick={() => scrollTo("about")}>{t.nav.about}</button>
            <button className="wyn-btn wyn-btn-primary" onClick={() => scrollTo("b2b")} style={{ marginTop: 16 }}>{t.nav.demo}</button>
          </div>
        )}
      </nav>

      {/* ========== HERO ========== */}
      <section id="hero" style={{ paddingTop: 120, paddingBottom: 80, background: "linear-gradient(165deg, #FAFAF7 0%, #E8F5EE 40%, #FAFAF7 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,107,80,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <FadeIn>
            <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: "#1B6B50", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
              The Career OS for Africa
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 700, lineHeight: 1, letterSpacing: -3, color: "#1A1A2E", marginBottom: 20 }}>
              {t.hero.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: "#4A4A5A", maxWidth: 600, lineHeight: 1.4, marginBottom: 12 }}>
              {t.hero.sub}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
              {t.hero.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
              <button className="wyn-btn wyn-btn-primary" style={{ fontSize: 16, padding: "16px 32px" }} onClick={() => scrollTo("solution")}>
                {t.hero.ctaStudent} →
              </button>
              <button className="wyn-btn wyn-btn-secondary" style={{ fontSize: 16, padding: "16px 32px" }} onClick={() => scrollTo("b2b")}>
                {t.hero.ctaSchool}
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              {[
                [t.hero.stat1, t.hero.stat1Label],
                [t.hero.stat2, t.hero.stat2Label],
                [t.hero.stat3, t.hero.stat3Label],
              ].map(([val, label], i) => (
                <div key={i}>
                  <div className="mono" style={{ fontSize: 32, fontWeight: 700, color: "#1B6B50" }}>{val}</div>
                  <div style={{ fontSize: 13, color: "#6B7280", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section id="pain" style={{ background: "#1A1A2E", color: "#fff" }}>
        <div className="section-pad">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 56, letterSpacing: -1 }}>
              {t.pain.title}
            </h2>
          </FadeIn>
          <div className="grid-3">
            {t.pain.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="card-hover" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 32, border: "1px solid rgba(255,255,255,0.08)", height: "100%" }}>
                  <div className="mono" style={{ fontSize: 11, color: "#F59E0B", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>{card.age}</div>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{card.emoji}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{card.headline}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION ========== */}
      <section id="solution" style={{ background: "#FAFAF7" }}>
        <div className="section-pad">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 64, letterSpacing: -1 }}>
              {t.solution.title}
            </h2>
          </FadeIn>
          {t.solution.steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ display: "flex", gap: 32, marginBottom: 56, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div className="mono" style={{ fontSize: 48, fontWeight: 700, color: "#E5E5E0", lineHeight: 1, minWidth: 80 }}>{step.num}</div>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "#4A4A5A", lineHeight: 1.7, marginBottom: 12, maxWidth: 600 }}>{step.desc}</p>
                  <span className="tag-pill" style={{ background: "#E8F5EE", color: "#1B6B50" }}>{step.tag}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ========== SCHOOLS PREVIEW ========== */}
      <section id="schools" style={{ background: "#F0F0EB" }}>
        <div className="section-pad">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 8, letterSpacing: -1 }}>
              {t.schools.title}
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", marginBottom: 32 }}>{t.schools.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
              {t.schools.filters.map((f, i) => (
                <span key={i} className="tag-pill" style={{ background: i < 3 ? "#1A1A2E" : "#fff", color: i < 3 ? "#fff" : "#1A1A2E", border: "1px solid #D1D5DB", cursor: "pointer" }}>{f}</span>
              ))}
            </div>
          </FadeIn>
          <div className="grid-3">
            {mockSchools.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #E5E5E0" }}>
                  <div style={{ height: 8, background: s.color }} />
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, flex: 1 }}>{s.name}</h4>
                      {s.recognized && (
                        <span className="tag-pill" style={{ background: "#E8F5EE", color: "#1B6B50", fontSize: 10, whiteSpace: "nowrap" }}>
                          ✓ {t.schools.cardLabels.recognition}
                        </span>
                      )}
                    </div>
                    <div className="mono" style={{ fontSize: 12, color: "#6B7280", marginBottom: 16 }}>{s.city} · {s.field}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#9CA3AF" }}>{t.schools.cardLabels.price}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A2E" }}>{s.price}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#9CA3AF" }}>{t.schools.cardLabels.insertion}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#1B6B50" }}>{s.insertion}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>{t.schools.cardLabels.vibe}</div>
                      <VibeStars score={s.vibe} />
                    </div>
                    <button className="wyn-btn wyn-btn-secondary" style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: 13 }}>
                      {t.schools.cardLabels.compare}
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <button className="wyn-btn wyn-btn-dark" style={{ fontSize: 15 }}>{t.schools.cta} →</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== STUDY IN MOROCCO ========== */}
      <section id="study" style={{ background: "#1B6B50", color: "#fff" }}>
        <div className="section-pad">
          <FadeIn>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 16 }}>International students</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 12, letterSpacing: -1 }}>
              {t.studyMorocco.title}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 640, lineHeight: 1.7, marginBottom: 48 }}>
              {t.studyMorocco.subtitle}
            </p>
          </FadeIn>
          <div className="grid-4">
            {t.studyMorocco.reasons.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{r.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{r.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ marginTop: 48 }}>
              <button className="wyn-btn" style={{ background: "#fff", color: "#1B6B50", fontWeight: 700 }}>{t.studyMorocco.cta} →</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== SALARIES ========== */}
      <section id="salaries" style={{ background: "#FAFAF7" }}>
        <div className="section-pad">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 8, letterSpacing: -1 }}>
              {t.salaries.title}
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 560, marginBottom: 40 }}>{t.salaries.subtitle}</p>
          </FadeIn>
          <div className="grid-3" style={{ marginBottom: 40 }}>
            {t.salaries.examples.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #E5E5E0" }}>
                  <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 8 }}>{s.field}</div>
                  <div className="mono" style={{ fontSize: 24, fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>{s.range}</div>
                  <div className="tag-pill" style={{ background: "#FEF3C7", color: "#92400E" }}>{s.level}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <button className="wyn-btn wyn-btn-primary">{t.salaries.cta} →</button>
          </FadeIn>
        </div>
      </section>

      {/* ========== B2B ========== */}
      <section id="b2b" style={{ background: "#1A1A2E", color: "#fff" }}>
        <div className="section-pad">
          <FadeIn>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "#F59E0B", textTransform: "uppercase", marginBottom: 16 }}>
              {lang === "fr" ? "Pour les écoles" : "For schools"}
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 12, letterSpacing: -1 }}>
              {t.b2b.title}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 600, lineHeight: 1.7, marginBottom: 56 }}>
              {t.b2b.subtitle}
            </p>
          </FadeIn>
          <div className="grid-2" style={{ marginBottom: 48 }}>
            {t.b2b.features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: 32, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</h4>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{f.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <button className="wyn-btn wyn-btn-amber" style={{ fontSize: 16, padding: "16px 32px" }}>{t.b2b.cta} →</button>
              <span className="mono" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", maxWidth: 400 }}>{t.b2b.proof}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== ABOUT / ADITYA ========== */}
      <section id="about" style={{ background: "#F0F0EB" }}>
        <div className="section-pad" style={{ textAlign: "center" }}>
          <FadeIn>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 3, color: "#1B6B50", textTransform: "uppercase", marginBottom: 16 }}>ADITYA · Casablanca, Morocco</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: 20, letterSpacing: -1 }}>
              {t.about.title}
            </h2>
            <p style={{ fontSize: 16, color: "#4A4A5A", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
              {t.about.text}
            </p>
            <div style={{ display: "inline-block", padding: "16px 32px", background: "#1A1A2E", borderRadius: 12, color: "#fff" }}>
              <span style={{ fontSize: 20, fontWeight: 700, fontStyle: "italic" }}>{t.about.mission}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== CTA BAND ========== */}
      <section style={{ background: "linear-gradient(135deg, #1B6B50, #145540)", padding: "64px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>
            What's Your Next?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>
            {lang === "fr" ? "Télécharge l'app. Trouve ta voie." : "Download the app. Find your path."}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="wyn-btn" style={{ background: "#fff", color: "#1B6B50", fontWeight: 700, fontSize: 16, padding: "16px 32px" }}>
              App Store
            </button>
            <button className="wyn-btn" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", fontSize: 16, padding: "16px 32px" }}>
              Google Play
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{ background: "#1A1A2E", color: "rgba(255,255,255,0.6)", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48, flexWrap: "wrap" }} className="grid-footer">
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 28, color: "#fff", marginBottom: 8 }}>
                WYN<span style={{ color: "#1B6B50" }}>.</span>
              </div>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", fontWeight: 300, fontStyle: "italic", marginBottom: 16 }}>{t.footer.tagline}</p>
              <p style={{ fontSize: 13, lineHeight: 1.6 }}>The Career OS for Africa</p>
            </div>
            <div>
              <h5 style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t.footer.col1Title}</h5>
              {t.footer.col1.map((item, i) => (
                <div key={i} style={{ marginBottom: 10, fontSize: 14, cursor: "pointer" }}>{item}</div>
              ))}
            </div>
            <div>
              <h5 style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t.footer.col2Title}</h5>
              {t.footer.col2.map((item, i) => (
                <div key={i} style={{ marginBottom: 10, fontSize: 14, cursor: "pointer" }}>{item}</div>
              ))}
            </div>
            <div>
              <h5 style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t.footer.col3Title}</h5>
              {t.footer.col3.map((item, i) => (
                <div key={i} style={{ marginBottom: 10, fontSize: 14, cursor: "pointer" }}>{item}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 12 }}>{t.footer.copy}</span>
            <div style={{ display: "flex", gap: 24 }}>
              <span style={{ fontSize: 12, cursor: "pointer" }}>{t.footer.legal}</span>
              <span style={{ fontSize: 12, cursor: "pointer" }}>{t.footer.privacy}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
