/* ===== I18N — bilingual content (EN default, FR optional) ===== */

const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'site-lang';

const TRANSLATIONS = {
  en: {
    /* --- shared --- */
    'back': 'Back',
    'back.aria': 'Back to home',
    'nav.experience': 'Experience',
    'nav.works': 'Works & Publications',
    'nav.education': 'Education & Degrees',
    'nav.interests': 'Interests',
    'lang.aria': 'Language selection',

    /* --- index --- */
    'page.title.home': 'Lucas Perrin',
    'profile.photo.alt': 'Portrait of Lucas Perrin',
    'profile.title': 'Student at IMT Atlantique · Advanced Optimization Methods',
    'profile.link.email': 'Email',
    'profile.link.email.aria': 'Send email',
    'profile.link.linkedin.aria': 'LinkedIn profile',
    'profile.link.github.aria': 'GitHub profile',
    'profile.link.cv': 'CV',
    'profile.link.cv.aria': 'Download CV',
    'profile.link.cv.href': 'assets/pdf/cv_eng.pdf',
    'profile.bio1': 'Engineering student in my final year at IMT Atlantique, specializing in advanced optimization methods; constraint programming, linear programming, and related techniques.',
    'profile.bio2': 'During previous years, I did a data science exchange at UFRJ (Rio de Janeiro), a machine learning internship at Gaming Innovation Group, and a research internship at CEA on asteroseismology.',
    'profile.bio3': 'I am looking for a 6-month final-year internship starting April 2027. Curious and motivated, I enjoy tackling complex problems where I can apply my skills in optimization and machine learning, in industry or scientific research.',
    'profile.location': 'Paris, France',
    'nav.aria': 'Site navigation',

    /* --- experience --- */
    'page.title.experience': 'Experience — Lucas Perrin',
    'exp.heading': 'Professional Experience',
    'exp.aria': 'Professional experience timeline',
    'exp.1.period': 'March 2026 — Present',
    'exp.1.title': 'Research Internship in Astrophysics',
    'exp.1.place': '  ·  Paris, France',
    'exp.1.description': 'Internship in Asteroseismology focused on new implementations for rotation profile inversions on Red Giant Branch (RGB) stars. Also contributing machine learning solutions to the research pipeline.',
    'exp.1.tag2': 'Astrophysics',
    'exp.1.tag3': 'Linear Algebra',
    'exp.2.period': 'August 2025 — February 2026',
    'exp.2.title': 'Data Scientist Intern',
    'exp.2.description': 'Dashboard creation with Tableau & Power BI, fraud detection, and development of machine learning models including revenue prediction and player classification.',
    'exp.3.period': 'June 2024 — July 2024',
    'exp.3.title': 'Operator Intern',
    'exp.3.description': 'Contribution to the renovation of VBCI armored vehicles. Immersion in an industrial environment with observation of engineering and production processes.',
    'exp.3.tag1': 'Industrial Processes',
    'exp.3.tag2': 'Engineering Documentation',
    'tags.aria': 'Skills',

    /* --- works --- */
    'page.title.works': 'Works & Publications — Lucas Perrin',
    'works.heading': 'Works & Publications',
    'works.aria': 'Works and publications',
    'works.1.date': 'July 2026',
    'works.1.type': 'Scientific Poster',
    'works.1.title': 'Poster Presentation at TASC10/KASC17 Workshop (Asteroseismology)',
    'works.1.description': 'Realization and presentation of a scientific poster at the TASC10/KASC17 workshop in the field of asteroseismology.',
    'works.1.link1': 'Abstract',
    'works.1.link2': 'Poster',
    'works.2.date': 'January 2025',
    'works.2.type': 'Academic Project — Exail',
    'works.2.title': 'Decision Support Interface for Production Non-Conformity Resolution',
    'works.2.description': 'Development of a decision support interface to assist in resolving production non-conformities. Involved machine learning, software development, data processing, and project management.',
    'works.2.link1': 'Poster',
    'works.2.link2': 'Slides',
    'works.3.type': 'Co-development Project',
    'works.3.title': 'AIS Satellite Communication Detection in the Presence of Multiple Access Interference',
    'works.3.description': 'Detection of AIS communications by satellite in the presence of multiple access interference. Involved signal processing, satellite specifications study, project management, MATLAB, and Python.',
    'works.3.link1': 'Report',

    /* --- education --- */
    'page.title.education': 'Education — Lucas Perrin',
    'edu.heading': 'Education & Degrees',
    'edu.aria': 'Education',
    'edu.1.degree': 'Engineering Degree — Specialisation "Observation and Processing for Environmental Data"',
    'edu.1.details': 'Additional modules: <em>Data Science and Information Processing for Sensor Data</em> / <em>Stochastic Dynamic Models</em>',
    'edu.2.period': 'February — August 2025',
    'edu.2.degree': 'Data Science & Computer Engineering — Exchange Program',
    'edu.2.place': ' ·  Rio de Janeiro, Brazil',
    'edu.3.degree': 'Classes Préparatoires aux Grandes Écoles — PCSI / PC*',
    'cert.aria': 'Certifications',
    'cert.heading': 'Certifications',
    'cert.ielts': 'IELTS 7.0 — 2025',
    'cert.view': 'View certificate →',

    /* --- interests --- */
    'page.title.interests': 'Interests — Lucas Perrin',
    'int.heading': 'Interests & Hobbies',
    'int.aria': 'Interests and hobbies',
    'int.1.title': 'Football',
    'int.1.description': 'Playing and following football. Ex President of the IMT Atlantique football club. Unfortunately supporting ASSE...',
    'int.2.title': 'Astrophysics & Cosmology',
    'int.2.description': 'Passionate about space science, from stellar physics to the large-scale structure of the universe. Also interested in time-related philosophy and physics.',
    'int.3.title': 'Artificial Intelligence',
    'int.3.description': 'Keeping up with the latest research and breakthroughs in AI; from new architectures to real-world applications.',
    'int.4.title': 'Chess',
    'int.4.description': 'Active player and coach. 2000+ on chess.com, still learning and improving.'
  },

  fr: {
    /* --- shared --- */
    'back': 'Retour',
    'back.aria': "Retour à l'accueil",
    'nav.experience': 'Expérience',
    'nav.works': 'Travaux & Publications',
    'nav.education': 'Formation & Diplômes',
    'nav.interests': "Centres d'intérêt",
    'lang.aria': 'Choix de la langue',

    /* --- index --- */
    'page.title.home': 'Lucas Perrin',
    'profile.photo.alt': 'Portrait de Lucas Perrin',
    'profile.title': "Étudiant à IMT Atlantique · Méthodes avancées d'optimisation",
    'profile.link.email': 'E-mail',
    'profile.link.email.aria': 'Envoyer un e-mail',
    'profile.link.linkedin.aria': 'Profil LinkedIn',
    'profile.link.github.aria': 'Profil GitHub',
    'profile.link.cv': 'CV',
    'profile.link.cv.aria': 'Télécharger le CV',
    'profile.link.cv.href': 'assets/pdf/cv.pdf',
    'profile.bio1': "Élève ingénieur en dernière année à IMT Atlantique, actuellement en spécialisation Méthodes Avancées d'Optimisation: programmation sous contraintes, programmation linéaire, et techniques associées.",
    'profile.bio2': "Ces deux dernières années, j'ai fait un échange en data science à l'UFRJ (Rio de Janeiro), un stage en machine learning chez Gaming Innovation Group, et un stage de recherche au CEA en astérosismologie.",
    'profile.bio3': "Je recherche un stage de fin d'études de 6 mois à partir d'avril 2027. Curieux et motivé, j'aime m'attaquer à des problèmes complexes où je peux mettre à profit mes compétences en optimisation et machine learning, dans l'industrie comme dans la recherche scientifique.",
    'profile.location': 'Paris, France',
    'nav.aria': 'Navigation du site',

    /* --- experience --- */
    'page.title.experience': 'Expérience — Lucas Perrin',
    'exp.heading': 'Expérience professionnelle',
    'exp.aria': 'Parcours professionnel',
    'exp.1.period': "Mars 2026 — Aujourd'hui",
    'exp.1.title': 'Stage de recherche en astrophysique',
    'exp.1.place': '  ·  Paris, France',
    'exp.1.description': "Stage en astérosismologie portant sur de nouvelles implémentations pour l'inversion des profils de rotation des étoiles de la branche des géantes rouges (RGB). J'apporte également des solutions de machine learning au pipeline de recherche.",
    'exp.1.tag2': 'Astrophysique',
    'exp.1.tag3': 'Algèbre linéaire',
    'exp.2.period': 'Août 2025 — Février 2026',
    'exp.2.title': 'Stagiaire Data Scientist',
    'exp.2.description': "Création de tableaux de bord avec Tableau & Power BI, détection de fraude et développement de modèles de machine learning : prédiction du chiffre d'affaires et classification des joueurs.",
    'exp.3.period': 'Juin 2024 — Juillet 2024',
    'exp.3.title': 'Stagiaire opérateur',
    'exp.3.description': "Participation à la rénovation des véhicules blindés VBCI. Immersion en milieu industriel avec observation des processus d'ingénierie et de production.",
    'exp.3.tag1': 'Procédés industriels',
    'exp.3.tag2': 'Documentation technique',
    'tags.aria': 'Compétences',

    /* --- works --- */
    'page.title.works': 'Travaux & Publications — Lucas Perrin',
    'works.heading': 'Travaux & Publications',
    'works.aria': 'Travaux et publications',
    'works.1.date': 'Juillet 2026',
    'works.1.type': 'Poster scientifique',
    'works.1.title': "Présentation d'un poster au workshop TASC10/KASC17 (astérosismologie)",
    'works.1.description': "Réalisation et présentation d'un poster scientifique au workshop TASC10/KASC17, dans le domaine de l'astérosismologie.",
    'works.1.link1': 'Résumé',
    'works.1.link2': 'Poster',
    'works.2.date': 'Janvier 2025',
    'works.2.type': 'Projet académique — Exail',
    'works.2.title': "Interface d'aide à la décision pour la résolution des non-conformités en production",
    'works.2.description': "Développement d'une interface d'aide à la décision pour la résolution des non-conformités en production. Machine learning, développement logiciel, traitement de données et gestion de projet.",
    'works.2.link1': 'Poster',
    'works.2.link2': 'Présentation',
    'works.3.type': 'Projet de co-développement',
    'works.3.title': "Détection de communications AIS par satellite en présence d'interférences d'accès multiple",
    'works.3.description': "Détection de communications AIS par satellite en présence d'interférences d'accès multiple. Traitement du signal, étude des spécifications satellite, gestion de projet, MATLAB et Python.",
    'works.3.link1': 'Rapport',

    /* --- education --- */
    'page.title.education': 'Formation — Lucas Perrin',
    'edu.heading': 'Formation & Diplômes',
    'edu.aria': 'Formation',
    'edu.1.degree': "Diplôme d'ingénieur — Spécialisation « Observation et traitement des données environnementales »",
    'edu.1.details': "Modules complémentaires : <em>Science des données et traitement de l'information pour les données capteurs</em> / <em>Modèles dynamiques stochastiques</em>",
    'edu.2.period': 'Février — Août 2025',
    'edu.2.degree': "Data Science & Génie informatique — Programme d'échange",
    'edu.2.place': ' ·  Rio de Janeiro, Brésil',
    'edu.3.degree': 'Classes Préparatoires aux Grandes Écoles — PCSI / PC*',
    'cert.aria': 'Certifications',
    'cert.heading': 'Certifications',
    'cert.ielts': 'IELTS 7.0 — 2025',
    'cert.view': 'Voir le certificat →',

    /* --- interests --- */
    'page.title.interests': "Centres d'intérêt — Lucas Perrin",
    'int.heading': "Centres d'intérêt & Loisirs",
    'int.aria': "Centres d'intérêt et loisirs",
    'int.1.title': 'Football',
    'int.1.description': "Pratique et suivi du football. Ancien président du club de football d'IMT Atlantique. Supporter de l'ASSE, malheureusement...",
    'int.2.title': 'Astrophysique & Cosmologie',
    'int.2.description': "Passionné par les sciences de l'espace, de la physique stellaire aux grandes structures de l'univers. Également intéressé par la philosophie et la physique du temps.",
    'int.3.title': 'Intelligence artificielle',
    'int.3.description': "Veille sur les dernières recherches et avancées en IA, des nouvelles architectures aux applications concrètes.",
    'int.4.title': 'Échecs',
    'int.4.description': 'Joueur actif et coach. Plus de 2000 elo sur chess.com, toujours en progression.'
  }
};

const readStoredLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'fr' || stored === 'en' ? stored : DEFAULT_LANG;
  } catch (e) {
    return DEFAULT_LANG;
  }
};

const storeLang = (lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* storage unavailable — language simply resets on next visit */
  }
};

const translate = (key, lang) => {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
  const value = dict[key];
  return value === undefined ? TRANSLATIONS[DEFAULT_LANG][key] : value;
};

const applyLang = (lang) => {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = translate(el.dataset.i18n, lang);
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = translate(el.dataset.i18nHtml, lang);
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = translate(el.dataset.i18nAria, lang);
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-href]').forEach((el) => {
    const value = translate(el.dataset.i18nHref, lang);
    if (value !== undefined) el.setAttribute('href', value);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = translate(el.dataset.i18nAlt, lang);
    if (value !== undefined) el.setAttribute('alt', value);
  });

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
};

const initI18n = () => {
  let lang = readStoredLang();
  applyLang(lang);

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      if (next === lang) return;
      lang = next;
      storeLang(lang);
      applyLang(lang);
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}