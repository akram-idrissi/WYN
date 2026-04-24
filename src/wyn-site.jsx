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
        { age: "17 ans", headline: "Perdu après le Bac", text: "380 000 bacheliers chaque année au Maroc. Zéro outil fiable pour choisir. Les brochures mentent sur les prix, les taux d'insertion, les reconnaissances." },
        { age: "20 ans", headline: "Fauché pendant les études", text: "Le privé coûte 30 000 à 80 000 DH/an. Pas de prêt étudiant accessible. Pas de plateforme de jobs étudiants structurée." },
        { age: "23 ans", headline: "Diplômé et invisible", text: "Les entreprises ne trouvent pas les bons profils. Les jeunes diplômés envoient 50 CV sans réponse. Le matching est cassé." },
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
        { title: "Abordable", text: "Frais de scolarité 3 à 5x moins chers qu'en Europe" },
        { title: "Proximité culturelle", text: "Francophone, arabophone, cosmopolite" },
        { title: "Diplômes reconnus", text: "Accréditations internationales (AACSB, ABET)" },
        { title: "Hub Afrique", text: "Vols directs depuis 30+ villes africaines" },
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
        { title: "Student Fit Score", text: "Chaque lead est scoré selon sa compatibilité réelle avec votre école : profil, budget, ambition, localisation." },
        { title: "No Cure No Pay", text: "Zéro risque. Vous ne payez une commission que lorsque l'étudiant s'inscrit effectivement chez vous." },
        { title: "Dashboard temps réel", text: "Suivez vos leads, vos conversions, votre ROI. Comparez-vous au marché. Pilotez votre recrutement par la data." },
        { title: "Étudiants internationaux", text: "Accédez aux étudiants d'Afrique subsaharienne qui cherchent à étudier au Maroc. Panier moyen x3." },
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
        { age: "Age 17", headline: "Lost after high school", text: "380,000 graduates every year in Morocco alone. Zero reliable tools to choose. Brochures lie about prices, employment rates, accreditation." },
        { age: "Age 20", headline: "Broke during studies", text: "Private tuition costs 30,000–80,000 MAD/year. No accessible student loans. No structured platform for student jobs." },
        { age: "Age 23", headline: "Graduated and invisible", text: "Companies can't find the right profiles. Young graduates send 50 CVs with zero response. The matching is broken." },
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
        { title: "Affordable", text: "Tuition 3–5x cheaper than Europe" },
        { title: "Cultural proximity", text: "French-speaking, cosmopolitan, welcoming" },
        { title: "Recognized degrees", text: "International accreditations (AACSB, ABET)" },
        { title: "Africa hub", text: "Direct flights from 30+ African cities" },
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
        { title: "Student Fit Score", text: "Each lead is scored by real compatibility with your school: profile, budget, ambition, location." },
        { title: "No Cure No Pay", text: "Zero risk. You pay a commission only when a student actually enrolls." },
        { title: "Real-time dashboard", text: "Track your leads, conversions, and ROI. Benchmark against the market. Data-driven recruitment." },
        { title: "International students", text: "Access Sub-Saharan African students looking to study in Morocco. Average basket x3." },
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
  { name: "ESCA École de Management", city: "Casablanca", field: "Commerce", price: "52 000 DH", vibe: 4.2, insertion: "87%", recognized: true, accent: "#1B6B50" },
  { name: "EMSI", city: "Casablanca", field: "Ingénierie", price: "38 000 DH", vibe: 3.8, insertion: "82%", recognized: true, accent: "#2654A0" },
  { name: "UIR — Université Internationale de Rabat", city: "Rabat", field: "Multi", price: "65 000 DH", vibe: 4.5, insertion: "91%", recognized: true, accent: "#8B1A2B" },
];

// SVG Icons — refined line icons that match the editorial aesthetic
const Icons = {
  Compass: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  CheckShield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /><line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  ),
  GradCap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Target: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Coin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v2m0 8v2M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
    </svg>
  ),
  BarChart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  Sun: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  Moon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  Menu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  X: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  MapPin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  DollarSign: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  Plane: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ),
  Award: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
};

function VibeStars({ score, dark }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= Math.round(score) ? "#F59E0B" : "none"} stroke={i <= Math.round(score) ? "#F59E0B" : dark ? "rgba(255,255,255,0.25)" : "#D1D5DB"} strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ marginLeft: 4, fontSize: 12, color: dark ? "rgba(255,255,255,0.45)" : "#9CA3AF" }}>{score}</span>
    </span>
  );
}

function useOnScreen(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
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
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const solutionIcons = [Icons.Compass, Icons.CheckShield, Icons.Briefcase];
const b2bIcons = [Icons.Target, Icons.Coin, Icons.BarChart, Icons.Globe];
const moroccoIcons = [Icons.DollarSign, Icons.Globe, Icons.Award, Icons.Plane];

const legalContent = {
  fr: {
    legal: {
      title: "Mentions légales",
      sections: [
        {
          heading: "Éditeur du site",
          body: `Le site WYN (whatsyournext.ma) est édité par la société ADITYA, société à responsabilité limitée au capital de 100 000 MAD, dont le siège social est situé à Casablanca, Maroc.\n\nNuméro d'immatriculation RC : en cours d'enregistrement\nIdentifiant fiscal : en cours\nEmail de contact : contact@aditya.ma`,
        },
        {
          heading: "Directeur de la publication",
          body: "Le directeur de la publication est le gérant de la société ADITYA.",
        },
        {
          heading: "Hébergement",
          body: "Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels…) est la propriété exclusive d'ADITYA ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'ADITYA.",
        },
        {
          heading: "Limitation de responsabilité",
          body: "ADITYA s'efforce de fournir sur le site WYN des informations aussi précises que possible. Toutefois, ADITYA ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.\n\nLes informations présentes sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs.",
        },
        {
          heading: "Données personnelles",
          body: "Conformément au RGPD et à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour exercer ce droit, adressez-vous à : privacy@aditya.ma",
        },
        {
          heading: "Cookies",
          body: "Le site WYN utilise des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies. Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services.",
        },
        {
          heading: "Droit applicable",
          body: "Tout litige en relation avec l'utilisation du site WYN est soumis au droit marocain. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Casablanca.",
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      intro: "Chez WYN, la protection de vos données personnelles est une priorité. Cette politique explique quelles données nous collectons, pourquoi, et comment nous les protégeons.",
      sections: [
        {
          heading: "1. Qui sommes-nous ?",
          body: "WYN est une plateforme développée par ADITYA (Casablanca, Maroc). En utilisant WYN, vous confiez vos données à ADITYA, responsable de traitement au sens du RGPD et de la loi marocaine 09-08.\n\nContact DPO : privacy@aditya.ma",
        },
        {
          heading: "2. Données collectées",
          body: "Nous collectons uniquement les données nécessaires au fonctionnement du service :\n\n• Données d'identification : nom, prénom, adresse e-mail lors de l'inscription.\n• Données de profil : résultats du test psychométrique RIASEC, champs d'intérêt, ville, niveau d'études.\n• Données d'usage : pages visitées, clics, durée de session — collectées de manière anonymisée via des outils d'analyse.\n• Données de communication : messages envoyés via notre formulaire de contact ou notre support.\n\nNous ne collectons pas de données sensibles (origine ethnique, opinion politique, santé, biométrie).",
        },
        {
          heading: "3. Finalités et bases légales",
          body: "Vos données sont traitées pour les finalités suivantes :\n\n• Fourniture du service (orientation, recherche d'école, matching emploi) — base légale : exécution du contrat.\n• Amélioration du produit et personnalisation — base légale : intérêt légitime.\n• Envoi de communications (newsletters, alertes) — base légale : consentement.\n• Obligations légales et comptables — base légale : obligation légale.",
        },
        {
          heading: "4. Partage des données",
          body: "Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :\n\n• Nos sous-traitants techniques (hébergement, analytics) liés par des accords de confidentialité.\n• Les établissements scolaires partenaires, uniquement si vous avez explicitement manifesté votre intérêt pour l'un d'eux.\n• Les autorités compétentes si la loi l'exige.\n\nTout transfert hors du Maroc est encadré par des garanties appropriées (clauses contractuelles types ou pays adéquat).",
        },
        {
          heading: "5. Conservation des données",
          body: "Vos données sont conservées pendant la durée de votre utilisation active du service, puis archivées pendant 3 ans à compter de votre dernière connexion, sauf obligation légale de conservation plus longue.\n\nLes données d'analyse anonymisées sont conservées 26 mois.",
        },
        {
          heading: "6. Vos droits",
          body: "Conformément au RGPD et à la loi 09-08, vous disposez des droits suivants :\n\n• Droit d'accès : obtenir une copie de vos données.\n• Droit de rectification : corriger des données inexactes.\n• Droit à l'effacement : demander la suppression de vos données (« droit à l'oubli »).\n• Droit à la portabilité : recevoir vos données dans un format structuré.\n• Droit d'opposition : vous opposer à certains traitements.\n• Droit de retrait du consentement : à tout moment pour les traitements basés sur votre consentement.\n\nPour exercer vos droits : privacy@aditya.ma. Nous répondons dans un délai de 30 jours.",
        },
        {
          heading: "7. Sécurité",
          body: "Nous mettons en œuvre des mesures techniques et organisationnelles adaptées : chiffrement des données en transit (TLS), hachage des mots de passe, accès restreint aux données en interne, audits de sécurité réguliers.",
        },
        {
          heading: "8. Cookies et traceurs",
          body: "Nous utilisons :\n\n• Cookies essentiels : indispensables au fonctionnement du site (session, authentification).\n• Cookies d'analyse : mesure d'audience anonymisée (Plausible Analytics — sans cookie tiers).\n• Cookies de préférence : mémorisation de vos choix (langue, thème).\n\nVous pouvez gérer vos préférences de cookies depuis les paramètres de votre navigateur.",
        },
        {
          heading: "9. Modifications",
          body: "Nous nous réservons le droit de modifier cette politique à tout moment. En cas de changement substantiel, vous serez notifié par e-mail ou via une bannière sur le site. La date de dernière mise à jour est indiquée ci-dessous.",
        },
        {
          heading: "10. Contact",
          body: "Pour toute question relative à la protection de vos données :\n\nADITYA — DPO\nCasablanca, Maroc\nprivacy@aditya.ma\n\nDernière mise à jour : avril 2026",
        },
      ],
    },
  },
  en: {
    legal: {
      title: "Legal Notice",
      sections: [
        {
          heading: "Publisher",
          body: `The WYN website (whatsyournext.ma) is published by ADITYA, a limited liability company with share capital of MAD 100,000, headquartered in Casablanca, Morocco.\n\nRegistration number: pending\nTax ID: pending\nContact email: contact@aditya.ma`,
        },
        {
          heading: "Publication Director",
          body: "The publication director is the managing director of ADITYA.",
        },
        {
          heading: "Hosting",
          body: "The site is hosted by Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, United States.",
        },
        {
          heading: "Intellectual Property",
          body: "All content on this site (texts, images, graphics, logos, icons, sounds, software…) is the exclusive property of ADITYA or its partners. Any reproduction, representation, modification, publication, or adaptation — in whole or in part — of site elements, by any means or process, is prohibited without prior written authorization from ADITYA.",
        },
        {
          heading: "Limitation of Liability",
          body: "ADITYA strives to provide accurate information on the WYN site. However, ADITYA cannot be held responsible for omissions, inaccuracies, or update failures, whether caused by ADITYA or third-party partners providing the information.\n\nInformation on the site is provided for informational purposes and is subject to change. It is not exhaustive.",
        },
        {
          heading: "Personal Data",
          body: "In accordance with GDPR and Moroccan Law 09-08 on the protection of personal data, you have the right to access, correct, oppose, and delete your data. To exercise this right, contact: privacy@aditya.ma",
        },
        {
          heading: "Cookies",
          body: "WYN uses cookies for audience measurement and user experience improvement. You may configure your browser to refuse cookies. Refusing cookies may prevent access to certain features.",
        },
        {
          heading: "Applicable Law",
          body: "Any dispute relating to the use of the WYN site is subject to Moroccan law. Exclusive jurisdiction is granted to the competent courts of Casablanca.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro: "At WYN, protecting your personal data is a priority. This policy explains what data we collect, why, and how we protect it.",
      sections: [
        {
          heading: "1. Who are we?",
          body: "WYN is a platform developed by ADITYA (Casablanca, Morocco). By using WYN, you entrust your data to ADITYA, the data controller under GDPR and Moroccan Law 09-08.\n\nDPO contact: privacy@aditya.ma",
        },
        {
          heading: "2. Data collected",
          body: "We only collect data necessary for the service:\n\n• Identification data: name, email address at registration.\n• Profile data: RIASEC psychometric test results, interests, city, education level.\n• Usage data: pages visited, clicks, session duration — collected anonymously via analytics tools.\n• Communication data: messages sent via our contact form or support.\n\nWe do not collect sensitive data (ethnic origin, political opinion, health, biometrics).",
        },
        {
          heading: "3. Purposes and legal bases",
          body: "Your data is processed for the following purposes:\n\n• Service delivery (guidance, school search, job matching) — legal basis: contract performance.\n• Product improvement and personalization — legal basis: legitimate interest.\n• Communications (newsletters, alerts) — legal basis: consent.\n• Legal and accounting obligations — legal basis: legal obligation.",
        },
        {
          heading: "4. Data sharing",
          body: "We never sell your personal data. We may share it with:\n\n• Our technical subcontractors (hosting, analytics) bound by confidentiality agreements.\n• Partner schools, only if you have explicitly expressed interest in one.\n• Competent authorities when required by law.\n\nAny transfer outside Morocco is governed by appropriate safeguards (standard contractual clauses or adequate country).",
        },
        {
          heading: "5. Data retention",
          body: "Your data is retained for the duration of your active use of the service, then archived for 3 years from your last login, unless a longer retention period is legally required.\n\nAnonymized analytics data is retained for 26 months.",
        },
        {
          heading: "6. Your rights",
          body: "Under GDPR and Law 09-08, you have the following rights:\n\n• Right of access: obtain a copy of your data.\n• Right to rectification: correct inaccurate data.\n• Right to erasure: request deletion of your data (\"right to be forgotten\").\n• Right to data portability: receive your data in a structured format.\n• Right to object: object to certain processing activities.\n• Right to withdraw consent: at any time for consent-based processing.\n\nTo exercise your rights: privacy@aditya.ma. We respond within 30 days.",
        },
        {
          heading: "7. Security",
          body: "We implement appropriate technical and organizational measures: encryption of data in transit (TLS), password hashing, restricted internal data access, regular security audits.",
        },
        {
          heading: "8. Cookies and trackers",
          body: "We use:\n\n• Essential cookies: required for site functionality (session, authentication).\n• Analytics cookies: anonymous audience measurement (Plausible Analytics — no third-party cookies).\n• Preference cookies: remembering your choices (language, theme).\n\nYou can manage cookie preferences from your browser settings.",
        },
        {
          heading: "9. Changes",
          body: "We reserve the right to modify this policy at any time. For substantial changes, you will be notified by email or via a banner on the site. The last update date is shown below.",
        },
        {
          heading: "10. Contact",
          body: "For any questions about data protection:\n\nADITYA — DPO\nCasablanca, Morocco\nprivacy@aditya.ma\n\nLast updated: April 2026",
        },
      ],
    },
  },
};

function LegalPage({ type, lang, dark, C, onClose }) {
  const data = legalContent[lang][type];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 300, background: C.bg, overflowY: "auto" }}>
      {/* Header */}
      <div style={{ position: "sticky", top: 0, background: C.navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.border}`, zIndex: 10 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 18, color: C.text, letterSpacing: -0.5 }}>
            WYN<span style={{ color: "#1B6B50" }}>.</span>
          </span>
          <button onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: `1px solid ${C.border}`, borderRadius: 6, padding: "7px 16px", cursor: "pointer", color: C.textMuted, fontSize: 13, fontFamily: "inherit", fontWeight: 500 }}>
            <Icons.X /> {lang === "fr" ? "Fermer" : "Close"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
        <div className="mono pill" style={{ background: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE", color: dark ? "#6ECBA8" : "#1B6B50", marginBottom: 20, fontSize: 11, letterSpacing: "0.1em" }}>
          {lang === "fr" ? "ADITYA · CASABLANCA, MAROC" : "ADITYA · CASABLANCA, MOROCCO"}
        </div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-1.5px", color: C.text, marginBottom: 48, lineHeight: 1.1 }}>
          {data.title}
        </h1>

        {type === "privacy" && data.intro && (
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, marginBottom: 48, padding: "20px 24px", background: dark ? "rgba(27,107,80,0.1)" : "#E8F5EE", borderRadius: 8, borderLeft: "3px solid #1B6B50" }}>
            {data.intro}
          </p>
        )}

        {data.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 44, paddingBottom: 44, borderBottom: i < data.sections.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <h2 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 4, height: 18, background: "#1B6B50", borderRadius: 2, flexShrink: 0 }} />
              {s.heading}
            </h2>
            <div style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.85, whiteSpace: "pre-line" }}>
              {s.body}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 64, padding: "24px", background: C.bgCard, borderRadius: 10, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>ADITYA</div>
            <div style={{ fontSize: 12.5, color: C.textMuted }}>Casablanca, Maroc · privacy@aditya.ma</div>
          </div>
          <button onClick={onClose} className="btn btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
            {lang === "fr" ? "Retour au site" : "Back to site"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WYNSite() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [legalPage, setLegalPage] = useState(null);
  const t = content[lang];

  const C = {
    bg: dark ? "#0E0E1A" : "#F9F9F6",
    bgSurface: dark ? "#17172A" : "#ffffff",
    bgMuted: dark ? "#13132200" : "#F0F0EB",
    bgCard: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
    bgDark: dark ? "#0A0A14" : "#1A1A2E",
    bgGreen: dark ? "#0D2E20" : "#1B6B50",
    text: dark ? "#F0EFE8" : "#1A1A2E",
    textMuted: dark ? "rgba(240,239,232,0.55)" : "#6B7280",
    textSub: dark ? "rgba(240,239,232,0.75)" : "#4A4A5A",
    border: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    borderCard: dark ? "rgba(255,255,255,0.07)" : "#E8E8E2",
    green: "#1B6B50",
    greenLight: dark ? "rgba(27,107,80,0.25)" : "#E8F5EE",
    greenText: dark ? "#6ECBA8" : "#1B6B50",
    amber: "#F59E0B",
    navBg: dark ? "rgba(14,14,26,0.93)" : "rgba(249,249,246,0.93)",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["hero", "pain", "solution", "schools", "study", "salaries", "b2b", "about"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.25 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Sora', 'DM Sans', 'Helvetica Neue', sans-serif", color: C.text, background: C.bg, minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}>
      {legalPage && <LegalPage type={legalPage} lang={lang} dark={dark} C={C} onClose={() => setLegalPage(null)} />}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #1B6B50; color: #fff; }

        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 6px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; transition: all 0.25s; font-family: inherit; letter-spacing: 0.01em; }
        .btn-primary { background: #1B6B50; color: #fff; }
        .btn-primary:hover { background: #145540; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(27,107,80,0.28); }
        .btn-outline { background: transparent; border: 1.5px solid #1B6B50; color: #1B6B50; }
        .btn-outline:hover { background: #1B6B50; color: #fff; }
        .btn-dark { background: #1A1A2E; color: #fff; border: none; }
        .btn-dark:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-amber { background: #F59E0B; color: #1A1A2E; font-weight: 700; }
        .btn-amber:hover { background: #D97706; transform: translateY(-1px); }
        .btn-white { background: #fff; color: #1B6B50; font-weight: 700; }
        .btn-white:hover { background: #f0faf5; }
        .btn-ghost-light { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
        .btn-ghost-light:hover { background: rgba(255,255,255,0.2); }

        .nav-link { color: inherit; opacity: 0.6; text-decoration: none; font-size: 13.5px; font-weight: 500; transition: opacity 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; letter-spacing: 0.01em; padding: 4px 0; }
        .nav-link:hover, .nav-link.active { opacity: 1; }

        .card { border-radius: 10px; transition: transform 0.25s, box-shadow 0.25s; }
        .card:hover { transform: translateY(-3px); }

        .mono { font-family: 'DM Mono', monospace; }
        .pill { display: inline-block; padding: 3px 11px; border-radius: 4px; font-size: 11.5px; font-weight: 600; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }

        .sp { padding: 96px 24px; max-width: 1160px; margin: 0 auto; }
        @media (max-width: 767px) {
          .sp { padding: 64px 18px; }
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .g2, .g3, .g4 { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .hero-h1 { font-size: clamp(42px, 12vw, 72px) !important; }
          .hero-stats { gap: 28px !important; }
          .solution-row { flex-direction: column !important; }
          .mobile-btns { flex-direction: column !important; }
        }
        @media (min-width: 768px) {
          .show-mob { display: none !important; }
          .mobile-overlay { display: none !important; }
        }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .g4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (min-width: 768px) and (max-width: 1024px) {
          .g3 { grid-template-columns: repeat(2, 1fr); }
          .g4 { grid-template-columns: repeat(2, 1fr); }
          .g2-b2b { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: C.navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.border}`, transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <span onClick={() => scrollTo("hero")} style={{ cursor: "pointer", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 20, color: C.text, letterSpacing: -0.5 }}>
              WYN<span style={{ color: C.green }}>.</span>
            </span>
            <div className="hide-mob" style={{ display: "flex", gap: 28 }}>
              {[["solution", t.nav.howItWorks], ["schools", t.nav.students], ["b2b", t.nav.schools], ["salaries", t.nav.salaries]].map(([id, label]) => (
                <button key={id} className={`nav-link ${activeSection === id ? "active" : ""}`} onClick={() => scrollTo(id)} style={{ color: C.text }}>{label}</button>
              ))}
            </div>
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Language */}
            <div style={{ display: "flex", borderRadius: 5, overflow: "hidden", border: `1px solid ${C.border}` }}>
              {["fr", "en"].map(l => (
                <button key={l} onClick={() => setLang(l)} className="mono" style={{ padding: "5px 12px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Mono', monospace", background: lang === l ? C.text : "transparent", color: lang === l ? C.bg : C.textMuted }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button onClick={() => setDark(!dark)} style={{ width: 34, height: 34, borderRadius: 5, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.text, transition: "all 0.2s" }}>
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>

            <button className="btn btn-primary hide-mob" onClick={() => scrollTo("b2b")} style={{ padding: "9px 18px", fontSize: 13 }}>{t.nav.demo}</button>

            {/* Mobile hamburger */}
            <button className="show-mob" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: C.text, display: "none", alignItems: "center" }}>
              {menuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-overlay" style={{ position: "fixed", top: 62, left: 0, right: 0, bottom: 0, background: C.bg, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 8, zIndex: 199, overflowY: "auto" }}>
          {[["solution", t.nav.howItWorks], ["schools", t.nav.students], ["b2b", t.nav.schools], ["salaries", t.nav.salaries], ["about", t.nav.about]].map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ color: C.text, fontSize: 18, fontWeight: 500, padding: "12px 0", borderBottom: `1px solid ${C.border}`, textAlign: "left", opacity: 1 }}>
              {label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <button className="btn btn-primary" onClick={() => scrollTo("b2b")} style={{ flex: 1 }}>{t.nav.demo}</button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" style={{ paddingTop: 128, paddingBottom: 80, background: dark ? "linear-gradient(160deg, #0E0E1A 0%, #0D1F16 50%, #0E0E1A 100%)" : "linear-gradient(160deg, #F9F9F6 0%, #EAF5F0 50%, #F9F9F6 100%)", position: "relative", overflow: "hidden" }}>
        {/* Decorative lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${dark ? "rgba(27,107,80,0.07)" : "rgba(27,107,80,0.05)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(27,107,80,0.07)" : "rgba(27,107,80,0.05)"} 1px, transparent 1px)`, backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at 30% 40%, black 40%, transparent 75%)" }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <FadeIn>
            <div className="mono pill" style={{ background: C.greenLight, color: C.greenText, marginBottom: 20, fontSize: 11, letterSpacing: "0.1em" }}>
              THE CAREER OS FOR AFRICA
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="hero-h1" style={{ fontSize: "clamp(52px, 9vw, 92px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-3px", color: C.text, marginBottom: 22 }}>
              {t.hero.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 300, color: C.textSub, maxWidth: 540, lineHeight: 1.4, marginBottom: 14 }}>
              {t.hero.sub}
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 500, lineHeight: 1.75, marginBottom: 40 }}>
              {t.hero.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="mobile-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72 }}>
              <button className="btn btn-primary" style={{ fontSize: 15, padding: "15px 30px" }} onClick={() => scrollTo("solution")}>
                {t.hero.ctaStudent} <Icons.ArrowRight />
              </button>
              <button className="btn btn-outline" style={{ fontSize: 15, padding: "15px 30px" }} onClick={() => scrollTo("b2b")}>
                {t.hero.ctaSchool}
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="hero-stats" style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
              {[[t.hero.stat1, t.hero.stat1Label], [t.hero.stat2, t.hero.stat2Label], [t.hero.stat3, t.hero.stat3Label]].map(([val, label], i) => (
                <div key={i}>
                  <div className="mono" style={{ fontSize: 30, fontWeight: 500, color: C.greenText }}>{val}</div>
                  <div style={{ fontSize: 12.5, color: C.textMuted, marginTop: 3, letterSpacing: "0.02em" }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section id="pain" style={{ background: C.bgDark }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 52, letterSpacing: "-1px", color: "#fff" }}>
              {t.pain.title}
            </h2>
          </FadeIn>
          <div className="g3">
            {t.pain.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "28px 28px 32px", border: "1px solid rgba(255,255,255,0.07)", height: "100%" }}>
                  <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 4, background: "rgba(245,158,11,0.15)", marginBottom: 20 }}>
                    <span className="mono" style={{ fontSize: 11, color: "#F59E0B", letterSpacing: "0.08em" }}>{card.age}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "#fff" }}>{card.headline}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" style={{ background: C.bg }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 64, letterSpacing: "-1px", color: C.text }}>
              {t.solution.title}
            </h2>
          </FadeIn>
          {t.solution.steps.map((step, i) => {
            const Icon = solutionIcons[i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="solution-row" style={{ display: "flex", gap: 36, marginBottom: 52, alignItems: "flex-start", paddingBottom: 52, borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                    <div className="mono" style={{ fontSize: 13, color: C.greenText, fontWeight: 500, minWidth: 28 }}>{step.num}</div>
                    <div style={{ width: 46, height: 46, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.greenText, flexShrink: 0 }}>
                      <Icon />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10, color: C.text }}>{step.title}</h3>
                    <p style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.78, marginBottom: 14, maxWidth: 580 }}>{step.desc}</p>
                    <span className="pill" style={{ background: C.greenLight, color: C.greenText }}>{step.tag}</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section id="schools" style={{ background: dark ? "#111120" : "#F0F0EB" }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: C.text }}>
              {t.schools.title}
            </h2>
            <p style={{ fontSize: 15, color: C.textMuted, marginBottom: 28 }}>{t.schools.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
              {t.schools.filters.map((f, i) => (
                <span key={i} className="pill" style={{ padding: "6px 14px", background: i < 3 ? C.text : "transparent", color: i < 3 ? C.bg : C.textSub, border: i < 3 ? "none" : `1.5px solid ${C.border}`, cursor: "pointer", fontSize: 12.5 }}>{f}</span>
              ))}
            </div>
          </FadeIn>
          <div className="g3">
            {mockSchools.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ background: C.bgCard, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.borderCard}` }}>
                  <div style={{ height: 5, background: s.accent }} />
                  <div style={{ padding: "22px 22px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, flex: 1, color: C.text }}>{s.name}</h4>
                      {s.recognized && (
                        <span className="pill" style={{ background: C.greenLight, color: C.greenText, fontSize: 10.5, whiteSpace: "nowrap", flexShrink: 0, padding: "3px 9px" }}>
                          ✓ {t.schools.cardLabels.recognition}
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 18 }}>
                      <span style={{ color: C.textMuted }}><Icons.MapPin /></span>
                      <span className="mono" style={{ fontSize: 11.5, color: C.textMuted }}>{s.city} · {s.field}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>{t.schools.cardLabels.price}</div>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{s.price}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4 }}>{t.schools.cardLabels.insertion}</div>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 500, color: C.greenText }}>{s.insertion}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 5 }}>{t.schools.cardLabels.vibe}</div>
                      <VibeStars score={s.vibe} dark={dark} />
                    </div>
                    <button className="btn btn-outline" style={{ width: "100%", justifyContent: "center", padding: "9px 14px", fontSize: 13 }}>
                      {t.schools.cardLabels.compare}
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <button className={`btn ${dark ? "btn-primary" : "btn-dark"}`} style={{ fontSize: 14 }}>{t.schools.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STUDY IN MOROCCO ── */}
      <section id="study" style={{ background: "#1B6B50" }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>
              INTERNATIONAL STUDENTS
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 12, letterSpacing: "-1px", color: "#fff" }}>
              {t.studyMorocco.title}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 600, lineHeight: 1.75, marginBottom: 48 }}>
              {t.studyMorocco.subtitle}
            </p>
          </FadeIn>
          <div className="g4">
            {t.studyMorocco.reasons.map((r, i) => {
              const Icon = moroccoIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "24px 22px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                      <Icon />
                    </div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 7, color: "#fff" }}>{r.title}</h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{r.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ marginTop: 44 }}>
              <button className="btn btn-white">{t.studyMorocco.cta} <Icons.ArrowRight /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SALARIES ── */}
      <section id="salaries" style={{ background: C.bg }}>
        <div className="sp">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 8, letterSpacing: "-1px", color: C.text }}>
              {t.salaries.title}
            </h2>
            <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>{t.salaries.subtitle}</p>
          </FadeIn>
          <div className="g3" style={{ marginBottom: 40 }}>
            {t.salaries.examples.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ background: C.bgCard, borderRadius: 10, padding: "26px 24px", border: `1px solid ${C.borderCard}` }}>
                  <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 10 }}>{s.field}</div>
                  <div className="mono" style={{ fontSize: 22, fontWeight: 500, color: C.text, marginBottom: 12, lineHeight: 1.1 }}>{s.range}</div>
                  <span className="pill" style={{ background: dark ? "rgba(245,158,11,0.15)" : "#FEF3C7", color: dark ? "#F59E0B" : "#92400E" }}>{s.level}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <button className="btn btn-primary">{t.salaries.cta} <Icons.ArrowRight /></button>
          </FadeIn>
        </div>
      </section>

      {/* ── B2B ── */}
      <section id="b2b" style={{ background: C.bgDark }}>
        <div className="sp">
          <FadeIn>
            <div className="mono pill" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>
              {lang === "fr" ? "POUR LES ÉCOLES" : "FOR SCHOOLS"}
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 12, letterSpacing: "-1px", color: "#fff", maxWidth: 640 }}>
              {t.b2b.title}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 560, lineHeight: 1.75, marginBottom: 52 }}>
              {t.b2b.subtitle}
            </p>
          </FadeIn>
          <div className="g2 g2-b2b" style={{ marginBottom: 44 }}>
            {t.b2b.features.map((f, i) => {
              const Icon = b2bIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "28px 28px 32px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 8, background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F59E0B", marginBottom: 16 }}>
                      <Icon />
                    </div>
                    <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#fff" }}>{f.title}</h4>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{f.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <button className="btn btn-amber" style={{ fontSize: 15, padding: "14px 28px" }}>{t.b2b.cta} <Icons.ArrowRight /></button>
              <span className="mono" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.3)", maxWidth: 380, lineHeight: 1.5 }}>{t.b2b.proof}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: dark ? "#111120" : "#F0F0EB" }}>
        <div className="sp" style={{ textAlign: "center" }}>
          <FadeIn>
            <div className="mono pill" style={{ background: C.greenLight, color: C.greenText, marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>
              ADITYA · CASABLANCA, MOROCCO
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-1px", color: C.text }}>
              {t.about.title}
            </h2>
            <p style={{ fontSize: 15, color: C.textSub, maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.78 }}>
              {t.about.text}
            </p>
            <div style={{ display: "inline-block", padding: "16px 30px", background: C.text, borderRadius: 8, color: C.bg }}>
              <span style={{ fontSize: 17, fontWeight: 600, fontStyle: "italic" }}>{t.about.mission}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "linear-gradient(130deg, #145540, #1B6B50)", padding: "72px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-1.5px" }}>
            What's Your Next?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 36, letterSpacing: "0.01em" }}>
            {lang === "fr" ? "Télécharge l'app. Trouve ta voie." : "Download the app. Find your path."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-white" style={{ fontSize: 15, padding: "14px 28px" }}>App Store</button>
            <button className="btn btn-ghost-light" style={{ fontSize: 15, padding: "14px 28px" }}>Google Play</button>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A0A14", color: "rgba(255,255,255,0.45)", padding: "60px 24px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            {/* Brand col */}
            <div className="footer-brand">
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 24, color: "#fff", marginBottom: 10 }}>
                WYN<span style={{ color: "#1B6B50" }}>.</span>
              </div>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, fontStyle: "italic", marginBottom: 14 }}>{t.footer.tagline}</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.6 }}>The Career OS for Africa</p>
            </div>
            {/* Link cols */}
            {[
              [t.footer.col1Title, t.footer.col1],
              [t.footer.col2Title, t.footer.col2],
              [t.footer.col3Title, t.footer.col3],
            ].map(([title, items], ci) => (
              <div key={ci}>
                <h5 style={{ color: "#fff", fontSize: 11.5, fontWeight: 600, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</h5>
                {items.map((item, i) => (
                  <div key={i} style={{ marginBottom: 11, fontSize: 13.5, cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.8)"}
                    onMouseLeave={e => e.target.style.color = ""}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <span style={{ fontSize: 12 }}>{t.footer.copy}</span>
            <div style={{ display: "flex", gap: 22 }}>
              <span style={{ fontSize: 12, cursor: "pointer", transition: "color 0.2s" }} onClick={() => setLegalPage("legal")} onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = ""}>{t.footer.legal}</span>
              <span style={{ fontSize: 12, cursor: "pointer", transition: "color 0.2s" }} onClick={() => setLegalPage("privacy")} onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = ""}>{t.footer.privacy}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}