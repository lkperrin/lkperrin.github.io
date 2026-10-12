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
    'nav.education': 'Education',
    'nav.projects': 'Personal Projects',
    'nav.interests': 'Hobbies & Community Involvement',
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
    'profile.bio1': 'Final-year student at IMT Atlantique, I specialized in Data Science and Machine Learning in my second year, and am now pursuing Advanced Optimization Methods.',
    'profile.bio2': 'I enjoy working on complex projects with concrete impact, especially by designing tools and algorithms. I am particularly interested in applied AI and in optimizing existing processes. Naturally curious, I like thinking about topics from a wide range of fields.',
    'profile.bio3': 'I am looking for a final-year internship starting in April 2027, as a Data Scientist, AI Engineer or Data/AI Consultant.',
    'profile.location': 'Paris, France',
    'nav.aria': 'Site navigation',

    /* --- experience --- */
    'page.title.experience': 'Experience | Lucas Perrin',
    'exp.heading': 'Professional Experience',
    'exp.aria': 'Professional experience timeline',
    'exp.1.period': 'March 2026 – August 2026',
    'exp.1.title': 'Research Internship in Astrophysics',
    'exp.1.b1': 'Worked on the inversion of internal rotation profiles of red giant stars, incorporating new physical effects, and built a fully automated inversion pipeline',
    'exp.1.b2': 'Applied the pipeline to real observational data, with results presented as a scientific poster at the TASC10/KASC17 conference',
    'exp.1.b3': 'Gained experience across different methods: MCMC with uncertainty quantification, machine-learning approaches, numerical optimization',
    'exp.1.b4': 'Co-author of scientific papers currently in preparation',
    'exp.2.period': 'August 2025 – February 2026',
    'exp.2.title': 'Data Scientist Intern',
    'exp.2.b1': 'Fraud detection using data analysis techniques',
    'exp.2.b2': 'Development of machine learning algorithms to identify suspicious patterns',
    'exp.2.b3': 'Mathematical optimization applied to trading strategies',
    'exp.3.period': 'June 2024 – July 2024',
    'exp.3.title': 'Operator Intern',
    'exp.3.description': 'Contribution to the renovation of VBCI armored vehicles. Immersion in an industrial environment with observation of engineering and production processes.',

    /* --- works --- */
    'page.title.works': 'Works & Publications | Lucas Perrin',
    'works.heading': 'Works & Publications',
    'works.aria': 'Works and publications',
    'works.paper.date': 'In progress',
    'works.paper.title': 'Co-author of a Research Paper in an International Collaboration',
    'works.paper.description': 'Research paper currently being written within an international collaboration of researchers. It presents a new mathematical and computational method for inverting mode kernels in asteroseismology.',
    'works.paper.status': 'Soon published',
    'works.for': 'for ',
    'works.inria.date': 'In progress',
    'works.inria.title': 'Meshcore Repeater Planning Tool',
    'works.inria.description': 'Development of a platform suggesting optimal locations for LoRa repeaters in order to plan Meshcore mesh networks.',
    'works.ssndp.date': 'In progress',
    'works.ssndp.title': 'Comparative Evaluation and Hybridization Perspectives of Scheduled Service Network Design Problem Formulations',
    'works.ssndp.description': 'Implementation and experimental comparison of integer linear programming formulations for freight transport network planning.',
    'works.1.date': 'July 2026',
    'works.1.title': 'Poster Presentation at TASC10/KASC17 Workshop (Asteroseismology)',
    'works.1.description': 'Realization and presentation of a scientific poster at the TASC10/KASC17 workshop in the field of asteroseismology.',
    'works.1.link1': 'Abstract',
    'works.1.link2': 'Poster',
    'works.2.date': 'January 2025',
    'works.2.title': 'Decision Support Interface for Production Non-Conformity Resolution',
    'works.2.description': 'Development of a decision support interface to assist in resolving production non-conformities. Involved machine learning, software development, data processing, and project management.',
    'works.2.link1': 'Poster',
    'works.2.link2': 'Slides',
    'works.3.title': 'AIS Satellite Communication Detection in the Presence of Multiple Access Interference',
    'works.3.description': 'Detection of AIS communications by satellite in the presence of multiple access interference. Involved signal processing, satellite specifications study, project management, MATLAB, and Python.',
    'works.3.link1': 'Report',

    /* --- education --- */
    'page.title.education': 'Education | Lucas Perrin',
    'edu.heading': 'Education',
    'edu.aria': 'Education',
    'edu.1.degree': 'Engineering Degree: "Data Science" & "Advanced optimization methods"',
    'edu.1.y3': '3rd year: "Advanced Optimization Methods"',
    'edu.1.y2': '2nd year: "Observation and Processing for Environmental Data"',
    'edu.1.y1': '1st year: General curriculum',
    'edu.2.period': 'February – August 2025',
    'edu.2.degree': 'Academic exchange in computer science',
    'edu.2.c1': 'Computational Linear Algebra',
    'edu.2.c2': 'Numerical Methods',
    'edu.2.c3': 'Machine Learning',
    'edu.2.c4': 'Data Mining',
    'edu.2.place': ' ·  Rio de Janeiro, Brazil',
    'edu.3.degree': 'Classes Préparatoires aux Grandes Écoles (PCSI / PC*)',
    'cert.aria': 'Certifications',
    'cert.heading': 'Certifications',
    'cert.ielts': 'IELTS (7)',
    'cert.view': 'View certificate →',

    /* --- projects --- */
    'page.title.projects': 'Personal Projects | Lucas Perrin',
    'proj.heading': 'Personal Projects',
    'proj.aria': 'Personal projects',
    'proj.1.title': 'Creation of an interactive website introducing asteroseismology to a scientific audience',
    'proj.1.description': 'A website for physics and astrophysics researchers who want to discover asteroseismology, the study of stellar interiors through their oscillations.',
    'proj.1.link': 'Visit the website →',

    /* --- interests --- */
    'page.title.interests': 'Hobbies & Community Involvement | Lucas Perrin',
    'int.heading': 'Hobbies & Community Involvement',
    'int.hobbies.heading': 'Hobbies',
    'int.aria': 'Hobbies',
    'inv.heading': 'Community involvement',
    'inv.aria': 'Community involvement',
    'inv.1.title': 'Private tutoring',
    'inv.1.description': 'Private lessons for struggling students at the La Courte Échelle social center in Brest.',
    'inv.2.title': 'Chessbar',
    'inv.2.description': 'Lessons donated via the Chessbar app.',
    'inv.3.title': 'Atlanticup 2025',
    'inv.3.description': 'Head of sports for Atlanticup 2025, with a budget of over <strong>€25k</strong>.',
    'int.1.title': 'Football',
    'int.1.description': 'Playing and following football. Ex President of the IMT Atlantique football club. Unfortunately supporting ASSE...',
    'int.2.title': 'Astrophysics & Cosmology',
    'int.2.description': 'Passionate about space science, from stellar physics to the large-scale structure of the universe. Particularly interested in time-related philosophy and physics.',
    'int.3.title': 'Artificial Intelligence',
    'int.3.description': 'Keeping up with the latest research and breakthroughs in AI; from new architectures to real-world applications.',
    'int.4.title': 'Chess',
    'int.4.description': 'Active player and coach. 2000+ on chess.com, still learning and improving.'
  },

  fr: {
    /* --- shared --- */
    'back': 'Retour',
    'back.aria': "Retour à l'accueil",
    'nav.experience': 'Expériences',
    'nav.works': 'Travaux & Publications',
    'nav.education': 'Formation',
    'nav.projects': 'Projets personnels',
    'nav.interests': 'Hobbies et engagement associatif',
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
    'profile.bio1': "Étudiant en dernière année à IMT Atlantique, je me suis spécialisé en Data Science et Machine Learning en 2ème année, et je poursuis actuellement en Méthodes avancées d'optimisation.",
    'profile.bio2': "J'aime travailler sur des projets complexes à impact concret, notamment en concevant des outils et des algorithmes. Je m'intéresse particulièrement à l'IA appliquée et à l'optimisation de processus existants. Curieux de nature, j'apprécie réfléchir à des domaines variés.",
    'profile.bio3': "Je suis à la recherche d'un stage de fin d'études à partir d'avril 2027, en tant que Data Scientist, Ingénieur IA ou Consultant Data/IA.",
    'profile.location': 'Paris, France',
    'nav.aria': 'Navigation du site',

    /* --- experience --- */
    'page.title.experience': 'Expériences | Lucas Perrin',
    'exp.heading': 'Expériences professionnelles',
    'exp.aria': 'Parcours professionnel',
    'exp.1.period': "Mars 2026 – Août 2026",
    'exp.1.title': 'Stage de recherche en astrophysique',
    'exp.1.b1': "Travail sur l'inversion des profils de rotation interne d'étoiles géantes rouges, en intégrant de nouveaux effets physiques, et construction d'un pipeline d'inversion entièrement automatisé",
    'exp.1.b2': "Application du pipeline à des données d'observation réelles, avec des résultats présentés sous forme de poster scientifique à la conférence TASC10/KASC17",
    'exp.1.b3': "Expérience de différentes méthodes : MCMC avec quantification des incertitudes, approches de machine learning, optimisation numérique",
    'exp.1.b4': "Co-auteur d'articles scientifiques en cours de préparation",
    'exp.2.period': 'Août 2025 – Février 2026',
    'exp.2.title': 'Stagiaire Data Scientist',
    'exp.2.b1': "Détection de fraude à l'aide de techniques d'analyse de données",
    'exp.2.b2': "Développement d'algorithmes de machine learning pour identifier des schémas suspects",
    'exp.2.b3': "Optimisation mathématique appliquée à des stratégies de trading",
    'exp.3.period': 'Juin 2024 – Juillet 2024',
    'exp.3.title': 'Stagiaire opérateur',
    'exp.3.description': "Participation à la rénovation des véhicules blindés VBCI. Immersion en milieu industriel avec observation des processus d'ingénierie et de production.",

    /* --- works --- */
    'page.title.works': 'Travaux & Publications | Lucas Perrin',
    'works.heading': 'Travaux & Publications',
    'works.aria': 'Travaux et publications',
    'works.paper.date': 'En cours',
    'works.paper.title': 'Co-auteur d\'un papier de recherche en collaboration internationale',
    'works.paper.description': 'Papier de recherche en cours de rédaction au sein d\'une collaboration internationale de chercheurs. Il présente une nouvelle méthode mathématique et informatique d\'inversion de kernels de modes en astérosismologie.',
    'works.paper.status': 'Bientôt publié',
    'works.for': 'pour ',
    'works.inria.date': 'En cours',
    'works.inria.title': 'Outil de planification de répéteurs Meshcore',
    'works.inria.description': 'Développement d\'une plateforme suggérant des emplacements optimaux de répéteurs LoRa pour planifier des réseaux maillés Meshcore.',
    'works.ssndp.date': 'En cours',
    'works.ssndp.title': 'Évaluation comparative et perspectives d\'hybridation de formulations du Scheduled Service Network Design Problem',
    'works.ssndp.description': 'Implémentation et comparaison expérimentale de formulations en programmation linéaire en nombres entiers pour la planification de réseaux de transport de fret.',
    'works.1.date': 'Juillet 2026',
    'works.1.title': "Présentation d'un poster au workshop TASC10/KASC17 (astérosismologie)",
    'works.1.description': "Réalisation et présentation d'un poster scientifique au workshop TASC10/KASC17, dans le domaine de l'astérosismologie.",
    'works.1.link1': 'Résumé',
    'works.1.link2': 'Poster',
    'works.2.date': 'Janvier 2025',
    'works.2.title': "Interface d'aide à la décision pour la résolution des non-conformités en production",
    'works.2.description': "Développement d'une interface d'aide à la décision pour la résolution des non-conformités en production. Machine learning, développement logiciel, traitement de données et gestion de projet.",
    'works.2.link1': 'Poster',
    'works.2.link2': 'Présentation',
    'works.3.title': "Détection de communications AIS par satellite en présence d'interférences d'accès multiple",
    'works.3.description': "Détection de communications AIS par satellite en présence d'interférences d'accès multiple. Traitement du signal, étude des spécifications satellite, gestion de projet, MATLAB et Python.",
    'works.3.link1': 'Rapport',

    /* --- education --- */
    'page.title.education': 'Formation | Lucas Perrin',
    'edu.heading': 'Formation',
    'edu.aria': 'Formation',
    'edu.1.degree': "Diplôme d'ingénieur : \"Data Science\" & \"Méthodes avancées d'optimisation\"",
    'edu.1.y3': "3e année : \"Méthodes avancées d'optimisation\"",
    'edu.1.y2': "2e année : \"Observation et traitement des données environnementales\"",
    'edu.1.y1': "1re année : tronc commun",
    'edu.2.period': 'Février – Août 2025',
    'edu.2.degree': "Échange académique en computer science",
    'edu.2.c1': "Algèbre linéaire computationnelle",
    'edu.2.c2': "Méthodes numériques",
    'edu.2.c3': "Machine Learning",
    'edu.2.c4': "Fouille de données",
    'edu.2.place': ' ·  Rio de Janeiro, Brésil',
    'edu.3.degree': 'Classes Préparatoires aux Grandes Écoles (PCSI / PC*)',
    'cert.aria': 'Certifications',
    'cert.heading': 'Certifications',
    'cert.ielts': 'IELTS (7)',
    'cert.view': 'Voir le certificat →',

    /* --- projects --- */
    'page.title.projects': 'Projets personnels | Lucas Perrin',
    'proj.heading': 'Projets personnels',
    'proj.aria': 'Projets personnels',
    'proj.1.title': "Création d'un site interactif d'introduction à l'astérosismologie pour un public scientifique",
    'proj.1.description': "Un site web destiné aux chercheurs en physique et astrophysique souhaitant découvrir l'astérosismologie, l'étude de l'intérieur des étoiles à travers leurs oscillations.",
    'proj.1.link': 'Visiter le site →',

    /* --- interests --- */
    'page.title.interests': 'Hobbies et engagement associatif | Lucas Perrin',
    'int.heading': 'Hobbies et engagement associatif',
    'int.hobbies.heading': 'Hobbies',
    'int.aria': 'Hobbies',
    'inv.heading': 'Engagement associatif',
    'inv.aria': 'Engagement associatif',
    'inv.1.title': 'Cours particuliers',
    'inv.1.description': 'Cours particuliers à des élèves en difficulté au centre social La Courte Échelle à Brest.',
    'inv.2.title': 'Chessbar',
    'inv.2.description': "Dons de cours via l'application Chessbar.",
    'inv.3.title': 'Atlanticup 2025',
    'inv.3.description': "Responsable sport de l'Atlanticup 2025 : plus de <strong>25 k€</strong> de budget.",
    'int.1.title': 'Football',
    'int.1.description': "Pratique et suivi du football. Ancien président du club de football d'IMT Atlantique. Supporter de l'ASSE, malheureusement...",
    'int.2.title': 'Astrophysique & Cosmologie',
    'int.2.description': "Passionné par les sciences de l'espace, de la physique stellaire aux grandes structures de l'univers. Particulièrement intéressé par la philosophie et la physique du temps.",
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