/**
 * Contenu central du site Kanora.
 * Modifier les textes, tarifs et images ici — les composants les consomment.
 *
 * Images locales (public/) :
 *   /logo.webp           → Logo (Header, menu)
 *   /hero.png            → Hero
 *   /menage.png          → Service Ménage
 *   /cuisine.png         → Service Cuisine
 *   /garde-enfants.jpg   → Service Garde d'enfants
 *   /limites.jpg         → FreeSearch (« Le bouche à oreille… »)
 *   /acteurs.png         → Section Acteurs
 *   /testimonials/*.jpg  → Témoignages
 *
 * Sections encore en Unsplash (à remplacer quand les assets seront prêts) :
 *   Membership (étape 1)
 *
 * Partenaires : public/partenaires/ → 2e marquee de la section « 3 étapes »
 */

export const site = {
  name: "Kanora",
  tagline: "Aide à domicile de confiance à Dakar",
  seo: {
    title: "Kanora : aide à domicile de confiance à Dakar",
    description:
      "Kanora forme, encadre et vous met en relation avec des KaNora Ladies vérifiées pour le ménage, la cuisine et la garde d'enfants à Dakar.",
  },
} as const;

/* -------------------- Navigation -------------------- */

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Devenir KaNora Lady", href: "#" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "À propos", href: "#" },
  ],
  loginLabel: "Se connecter",
  loginHref: "#",
  ctaLabel: "Réserver",
  ctaHref: "#",
} as const;

/* -------------------- Hero -------------------- */

export const hero = {
  image: "/hero.png",
  imageAlt: "Une KaNora Lady souriante, formée et vérifiée par Kanora",
  title: "Une maison bien tenue.\nUne professionnelle en qui vous croyez.",
  primaryCta: { label: "Réserver une KaNora Lady", href: "#" },
  secondaryCta: { label: "Devenir KaNora Lady", href: "#" },
} as const;

/* -------------------- Services -------------------- */

export const services = {
  title: "Nos services",
  subtitle: "Trois services, un même soin du détail.",
  ctaLabel: "Réserver",
  ctaHref: "#",
  items: [
    {
      id: "menage",
      label: "Ménage",
      description: "Un intérieur impeccable, sans y penser.",
      image: "/menage.png",
      rate: 3000,
    },
    {
      id: "cuisine",
      label: "Cuisine",
      description: "Des repas faits maison, préparés chez vous.",
      image: "/cuisine.png",
      rate: 3500,
    },
    {
      id: "garde-enfants",
      label: "Garde d'enfants",
      description: "Une présence rassurante pour vos enfants.",
      image: "/garde-enfants.jpg",
      rate: 4000,
    },
  ],
} as const;

/* -------------------- Comment ça marche -------------------- */

export const howItWorks = {
  title: "Une aide à domicile fiable, en 3 étapes",
  ctaLabel: "Réserver",
  ctaHref: "#",
  /** Image de l'étape 1 — à remplacer par un asset local */
  step1Image:
    "https://images.unsplash.com/photo-1651688729724-bafbf0935462?auto=format&fit=crop&w=900&q=80",
  steps: [
    {
      kind: "image" as const,
      title: "Choisissez votre besoin",
      desc: "Ménage, cuisine ou garde d'enfants, ponctuel ou récurrent.",
      overlayTitle: "Étape 1",
      overlaySubtitle: "Choisissez votre besoin",
      overlayDesc: "Ménage, cuisine ou garde d'enfants, ponctuel ou récurrent",
    },
    {
      kind: "phone" as const,
      bg: "bg-kanora-cream",
      title: "Recevez votre KaNora Lady",
      desc: "Formée, vérifiée et adaptée à votre foyer, en quelques clics.",
    },
    {
      kind: "phone" as const,
      bg: "bg-kanora-orange/10",
      title: "Suivez et payez en ligne",
      desc: "Simple, sécurisé, sans mauvaise surprise ni frais cachés.",
    },
  ],
  phoneMock: {
    searchLabel: "Ménage",
    searchLoc: "Dakar, Plateau",
    caregivers: [
      {
        name: "Aïcha D.",
        loc: "Dakar, Almadies",
        rate: "1 500",
        note: "Recrutée par 5 familles du quartier",
        tags: ["Vérifiée", "Formée"],
      },
      {
        name: "Fatou S.",
        loc: "Dakar, Mermoz · 3 ans d'expérience",
        rate: "1 300",
      },
    ],
  },
  statsRowA: [
    {
      badge: "+300",
      badgeColor: "bg-kanora-orange text-white",
      title: "KaNora Ladies",
      sub: "formées et vérifiées, mai 2026",
    },
    {
      badge: "88%",
      badgeColor: "bg-kanora-orange/15 text-kanora-orange-hover",
      title: "Nouvelles compétences",
      sub: "développées grâce à Kanora",
    },
    { title: "Ménage", sub: "un intérieur impeccable" },
    { title: "Paiement sécurisé", sub: "en ligne, sans frais cachés" },
    { title: "Dakar, Sénégal", sub: "notre ville de naissance" },
    { title: "Formation continue", sub: "pour chaque KaNora Lady" },
    { title: "Encadrement", sub: "assuré par l'équipe Kanora" },
  ],
  partners: [
    { name: "WAW", logo: "/partenaires/waw.webp" },
    { name: "Sanlam Allianz", logo: "/partenaires/sanlam_allianz.webp" },
    { name: "Segal", logo: "/partenaires/segal.webp" },
    { name: "PFE", logo: "/partenaires/pfe.svg" },
    { name: "SII", logo: "/partenaires/SII.webp" },
    { name: "Kitambaa", logo: "/partenaires/kitambaa.webp" },
    { name: "Forcen", logo: "/partenaires/forcen.webp" },
    { name: "Finafia", logo: "/partenaires/finafia.webp" },
    { name: "EDC", logo: "/partenaires/edc.webp" },
    { name: "IAB", logo: "/partenaires/iab.webp" },
    { name: "Grow with NK", logo: "/partenaires/growwithnk.webp" },
    { name: "Sammante", logo: "/partenaires/sammante.webp" },
  ],
} as const;

/* -------------------- FreeSearch (argumentaire) -------------------- */

export const freeSearch = {
  image: "/limites.jpg",
  title: "Le bouche à oreille a ses limites",
  body: "Plus de temps perdu, plus d'incertitude, aucune vérification. Arrêtez de tout gérer seul, et trouvez une aide à domicile de confiance.",
  ctaLabel: "Voir les tarifs",
  ctaHref: "#tarifs",
} as const;

/* -------------------- Comparaison -------------------- */

export const comparison = {
  title: "L'aide à domicile n'est pas un endroit pour couper les coins ronds",
  ctaLabel: "Réserver",
  ctaHref: "#",
  video: {
    youtubeId: "EYUa2eIOoGs",
    title: "Découvrez Kanora en vidéo",
  },
} as const;

/* -------------------- Acteurs -------------------- */

export const acteurs = {
  title: "Celles et ceux qui font Kanora",
  subtitle:
    "Fondateurs, formatrices et KaNora Ladies : une communauté animée par nos valeurs — innovation, connexion, respect, excellence et impact.",
  image: "/acteurs.png",
  imageAlt:
    "Les acteurs de Kanora : équipe, formatrices et KaNora Ladies, et les valeurs Innovation, Connexion, Impact, Respect, Excellence",
} as const;

/* -------------------- Tarifs -------------------- */

export const pricing = {
  eyebrow: "Simulateur de tarifs",
  title: "Estimez le coût de votre service",
  hoursOptions: [2, 3, 4, 6, 8] as const,
  frequencies: [
    { label: "Ponctuel", mult: 1, per: "intervention" },
    { label: "1x / semaine", mult: 4, per: "mois" },
    { label: "2x / semaine", mult: 8, per: "mois" },
  ],
  guarantee: "Aucun frais caché. Vous savez exactement ce que vous payez.",
  ctaLabel: "Réserver maintenant",
  ctaHref: "#",
} as const;

/* -------------------- Communauté -------------------- */

export const community = {
  title: "Notre communauté parle d'elle même",
  badges: {
    enterprise: { title: "Kanora", subtitle: "ENTREPRISE SOCIALE\nSÉNÉGALAISE" },
    rating: { score: "4.8", label: "4.8 de note moyenne" },
    ladies: { count: "+300", label: "KaNora Ladies formées" },
  },
  testimonials: [
    {
      name: "Fatou Diagne",
      location: "Dakar (Plateau)",
      rating: 5,
      service: "Ménage",
      image: "/testimonials/Fatou.jpg",
      imagePosition: "center 30%",
      quote:
        "Ma KaNora Lady est ponctuelle, discrète et d'un professionnalisme remarquable. La maison n'a jamais été aussi bien tenue. Je recommande sans hésiter.",
    },
    {
      name: "Cheikh Anta Fall",
      location: "Almadies",
      rating: 5,
      service: "Cuisine",
      image: "/testimonials/Cheick.jpg",
      quote:
        "Des repas savoureux préparés avec soin chaque semaine. Ce qui me touche le plus, c'est de savoir que je soutiens l'autonomie de jeunes femmes. Un vrai gain de temps et de sens.",
    },
    {
      name: "Aminata Sow",
      location: "Mermoz",
      rating: 4,
      service: "Assistante maternelle",
      image: "/testimonials/Aminata.jpg",
      quote:
        "Une personne douce et de confiance pour mes enfants. Le suivi de KaNora est rassurant. Petit délai au démarrage, mais l'équipe a été très réactive.",
    },
    {
      name: "Ousmane Bâ",
      location: "Ngor",
      rating: 5,
      service: "Ménage + Cuisine",
      image: "/testimonials/Ousmane.jpg",
      quote:
        "La plateforme est simple, le paiement transparent et la qualité au rendez-vous. KaNora a changé notre quotidien à la maison.",
    },
    {
      name: "Mariama Ndiaye",
      location: "Point E",
      rating: 5,
      service: "Assistante maternelle",
      image: "/testimonials/Mariama.jpg",
      quote:
        "Sérieux, humain et fiable. Je sais que derrière chaque prestation il y a une femme accompagnée et valorisée. C'est exactement le service que je cherchais.",
    },
  ],
} as const;

/* -------------------- CTA final -------------------- */

export const cta = {
  title: "Votre maison mérite\nune KaNora Lady.",
  primary: { label: "Réserver maintenant", href: "#" },
  secondary: { label: "Devenir KaNora Lady", href: "#" },
} as const;

/* -------------------- Footer -------------------- */

export const footer = {
  appStores: [
    {
      name: "App Store",
      caption: "Télécharger sur",
      href: "#",
      logo: "/partenaires/logo-app/Apple_Store_logo.svg.webp",
    },
    {
      name: "Google Play",
      caption: "Disponible sur",
      href: "#",
      logo: "/partenaires/logo-app/play-store-new-logo-4.jpg",
    },
  ],
  columns: [
    {
      title: "À propos de Kanora",
      links: [
        "Qui sommes nous",
        "Notre mission",
        "Notre impact",
        "Conditions d'utilisation",
        "Politique de confidentialité",
      ],
    },
    {
      title: "Aide",
      links: ["Sécurité", "Articles et guides", "Centre d'aide", "Nous contacter"],
    },
    {
      title: "Découvrir",
      links: [
        "Kanora pour les familles",
        "Devenir KaNora Lady",
        "Tarifs",
        "Kanora pour les entreprises",
        "Devenir partenaire",
        "Guides de tarifs",
      ],
    },
  ],
  popular: [
    {
      title: "Ménage",
      links: [
        "Ménage à domicile",
        "Nettoyage en profondeur",
        "Repassage",
        "Ménage récurrent",
        "Tarifs ménage",
      ],
    },
    {
      title: "Cuisine",
      links: [
        "Repas faits maison",
        "Cuisine à domicile",
        "Cuisine ponctuelle",
        "Tarifs cuisine",
      ],
    },
    {
      title: "Garde d'enfants",
      links: [
        "Garde d'enfants à domicile",
        "Assistante maternelle",
        "Baby sitting",
        "Tarifs garde d'enfants",
      ],
    },
    {
      title: "Ressources",
      links: [
        "Guides et ressources",
        "Devenir KaNora Lady",
        "Notre communauté",
        "Notre impact",
        "Simulateur de tarifs",
      ],
    },
  ],
  quartiers: [
    "Plateau",
    "Almadies",
    "Ouakam",
    "Ngor",
    "Yoff",
    "Mermoz",
    "Sacré Cœur",
    "Point E",
    "Liberté",
    "Grand Yoff",
    "Parcelles Assainies",
    "Sicap",
    "Fann",
    "Hann",
    "Dieuppeul",
    "Castors",
    "Gueule Tapée",
    "Médina",
    "HLM",
    "Cambérène",
    "Ouest Foire",
    "Golf Sud",
    "Patte d'Oie",
    "Grand Dakar",
    "Colobane",
  ],
  villes: [
    "Rufisque",
    "Guédiawaye",
    "Pikine",
    "Thiès",
    "Saint Louis",
    "Mbour",
    "Diamniadio",
    "Ziguinchor",
    "Kaolack",
    "Saly",
    "Touba",
    "Louga",
  ],
  legal: [
    "Les vérifications des antécédents ne sont pas toujours exhaustives et ne peuvent garantir une sécurité absolue. Pour en savoir plus, consultez notre page sécurité.",
    "Kanora forme et encadre les KaNora Ladies présentes sur sa plateforme, mais n'emploie pas directement chaque professionnelle et n'est pas responsable de la conduite de chaque utilisateur du service.",
    "Kanora est une marque de services à la personne. © 2026 Kanora Services. Tous droits réservés.",
  ],
  legalLinks: [
    "Conditions d'utilisation",
    "Politique de confidentialité",
    "Mentions légales",
    "Cookies",
  ],
} as const;
