/**
 * Contenu central du site Kanora.
 * Modifier les textes, tarifs et images ici, les composants les consomment.
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
    { label: "Services", href: "/#services" },
    { label: "Devenir KaNora Lady", href: "#" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "Blog", href: "/blog" },
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
  /** Image de l'étape 1, à remplacer par un asset local */
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
    "Fondateurs, formatrices et KaNora Ladies : une communauté animée par nos valeurs : innovation, connexion, respect, excellence et impact.",
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

/* -------------------- Blog -------------------- */

export const blog = {
  eyebrow: "Le blog",
  title: "Actualités & histoires KaNora",
  subtitle:
    "Mission, parcours, jalons : ce qui fait avancer Kanora et ses KaNora Ladies, au fil des mois.",
  articles: [
    {
      slug: "inclusion-un-parcours",
      category: "Mission & Impact",
      title: "Chez KaNora, l'inclusion n'est pas un mot, c'est un parcours",
      chapo:
        "Un salaire, un compte, une compétence, une dignité retrouvée : voici comment nous construisons, pas à pas, une inclusion sociale et financière qui dure.",
      image: "/Blogs/article-1.jpg",
      imageAlt: "KaNora Ladies primées lors d'un événement KaNora",
      date: "",
      content: [
        "Il ne suffit pas de donner un emploi à une jeune femme pour changer sa vie. Ce que nous avons compris, dès les premiers pas de KaNora, c'est que la véritable inclusion, sociale et financière, se construit dans la durée, brique par brique.",
        "Dans un secteur historiquement informel, où le travail domestique reste souvent invisible, précaire et sans reconnaissance, notre mission est claire : transformer ces jeunes femmes en professionnelles respectées, valorisées et autonomes. Cela commence par l'inclusion sociale : offrir un emploi sûr, équitable, encadré par un vrai contrat, et redonner à ces jeunes femmes le pouvoir d'agir sur leur propre trajectoire. Pas de zone grise, pas d'incertitude, juste un cadre clair dans lequel elles peuvent se projeter.",
        "Mais un emploi digne ne suffit pas s'il ne s'accompagne pas d'une autonomie financière réelle. C'est pourquoi nous plaçons l'inclusion économique au cœur de notre modèle : compétences techniques reconnues par des écoles d'État, éducation financière, et ouverture vers des opportunités entrepreneuriales pour celles qui souhaitent aller plus loin. Nous ne voulons pas seulement que nos KaNora Ladies gagnent un salaire : nous voulons qu'elles apprennent à le gérer, à l'épargner, à en faire un levier pour leurs propres ambitions.",
        "Cette approche change fondamentalement la manière dont le travail domestique est perçu : par la société, par les familles employeuses, et surtout par les jeunes femmes elles-mêmes. Elles ne sont plus de simples exécutantes invisibles. Elles deviennent des professionnelles formées, un contrat en poche, une carrière en perspective.",
        "C'est cela, pour nous, une inclusion durable : celle qui ne se contente pas d'ouvrir une porte, mais qui donne les clés pour avancer, restaure la dignité, et permet à chacune de nos KaNora Ladies de bâtir, à son rythme, la vie qu'elle a choisie.",
      ],
    },
    {
      slug: "de-la-selection-a-l-evolution",
      category: "Parcours KaNora Lady",
      title:
        "De la sélection à l'évolution : le parcours qui transforme une candidate en professionnelle",
      chapo:
        "Un entretien. Une formation. Un placement. Un accompagnement continu. Découvrez les quatre étapes qui font d'une jeune femme une KaNora Lady, et parfois, demain, une cheffe d'agence.",
      image: "/Blogs/article-2.jpg",
      imageAlt: "KaNora Ladies en formation cuisine et travaux domestiques",
      date: "",
      content: [
        "Devenir une KaNora Lady, ce n'est pas simplement décrocher un emploi. C'est entamer un véritable parcours, pensé du premier jour jusqu'à l'évolution de carrière, pour construire à la fois l'avenir de chaque jeune femme et la qualité de notre service.",
        "Tout commence par le recrutement. Un entretien approfondi, un contrat clair, une inscription sur notre plateforme : dès cette première étape, nous posons des bases solides, loin de l'informel et de l'incertitude qui caractérisent trop souvent ce secteur.",
        "Vient ensuite la formation. C'est ici que nous investissons le plus, car nous savons que la compétence technique ne suffit pas. Nos KaNora Ladies sont formées par des écoles reconnues de l'État aux métiers de l'assistanat maternel et des travaux domestiques, mais aussi aux compétences humaines : communication, posture professionnelle, gestion du temps. C'est cette double formation qui fait la différence entre un emploi précaire et une véritable carrière.",
        "Troisième étape : le placement. Nous ne mettons pas simplement une jeune femme en relation avec une famille : nous construisons une correspondance pensée entre ses compétences et les besoins réels du client, avec, derrière chaque placement, un vrai plan de carrière.",
        "Enfin, et c'est peut-être l'étape la plus déterminante : l'accompagnement continu. Le parcours ne s'arrête jamais au placement. Nous assurons un suivi régulier, un soutien en cas de besoin, et surtout, de vraies possibilités d'évolution. Certaines de nos KaNora Ladies deviennent mentors pour les nouvelles recrues. D'autres, à terme, deviennent cheffes d'agence.",
        "C'est cette progression, de la sélection à l'évolution, qui donne tout son sens à notre modèle. Nous ne formons pas seulement des travailleuses domestiques. Nous accompagnons des trajectoires, nous ouvrons des perspectives, et nous prouvons chaque jour qu'un métier considéré comme précaire peut devenir un véritable tremplin professionnel.",
        "C'est cela, la promesse KaNora : un parcours qui ne s'arrête jamais à l'emploi, mais qui commence avec lui.",
      ],
    },
    {
      slug: "premiere-bougie-un-an-de-kanora",
      category: "Actualités & Jalons",
      title:
        "KaNora souffle sa première bougie : un an, 70 clients, 400 sourires retrouvés",
      chapo:
        "En un an, une idée est devenue un mouvement : voici comment nous sommes passés de 26 KaNora Ladies à près de 400 vies transformées.",
      image: "/Blogs/article-3.jpg",
      imageAlt:
        "Célébration du premier anniversaire de KaNora avec les KaNora Ladies",
      date: "20 mai 2025",
      content: [
        "Le 20 mai dernier, nous avons fêté un anniversaire qui n'est pas seulement le nôtre : c'est celui de chaque jeune femme qui a choisi de croire en KaNora, et de chaque famille qui nous a fait confiance.",
        "Il y a un an, avant notre cérémonie officielle, nous comptions 14 clients et 26 KaNora Ladies actives. Des chiffres modestes, mais qui portaient déjà en eux toute notre conviction : que le travail domestique mérite d'être reconnu, structuré, et valorisé. Le soir même de notre cérémonie, ce nombre de clients est passé à 34. Un signal fort que notre modèle répondait à un vrai besoin.",
        "Douze mois plus tard, le chemin parcouru dépasse ce que nous avions imaginé. Nous comptons aujourd'hui près de 70 clients et près de 400 KaNora Ladies qui, chaque jour, exercent leur métier avec fierté, dans un cadre sécurisé et respectueux. Des centaines de commandes honorées, des centaines de familles rassurées, et surtout, des centaines de trajectoires de vie qui prennent une autre direction.",
        "Mais KaNora, un an après, ce n'est plus seulement une agence de placement. Nous avons franchi une étape stratégique majeure en devenant un agrégateur d'agences, avec le lancement de notre toute première agence agrégée sur notre plateforme. C'est une évolution naturelle de notre mission : au-delà de nos propres recrutements, nous voulons structurer tout un secteur, en donnant à d'autres agences les outils, les standards et la crédibilité nécessaires pour, elles aussi, professionnaliser le travail domestique.",
        "Ce premier anniversaire n'est pas un aboutissement. C'est une preuve de concept. La preuve que lorsqu'on donne à une jeune femme un contrat clair, une formation solide et un vrai accompagnement, elle ne se contente pas de travailler : elle se construit un avenir.",
        "Merci à chaque KaNora Lady, à chaque client, à chaque partenaire qui a fait de cette première année une réussite. La suite s'annonce encore plus grande.",
      ],
    },
    {
      slug: "kanora-parmi-33-pepites-afrique-ouest",
      category: "Actualités & Jalons",
      title:
        "KaNora reconnue parmi 33 pépites d'Afrique de l'Ouest : une distinction qui nous porte plus loin",
      chapo:
        "Être choisie parmi 33 organisations d'exception, recevoir deux distinctions majeures : voici ce que cette reconnaissance change vraiment pour KaNora et pour nos KaNora Ladies.",
      image: "/Blogs/article-4.png",
      imageAlt:
        "Cérémonie de graduation du Social Impact Incubator West Africa 2025",
      date: "",
      content: [
        "Il y a des moments où l'on comprend que le travail accompli a une résonance qui dépasse nos propres frontières. La graduation de la première cohorte du Social Impact Incubator West Africa a été l'un de ces moments pour KaNora.",
        "Le SII West Africa, soutenu par la Segal Family Foundation, vient de célébrer la remise de diplômes de sa première cohorte : 33 organisations issues du Sénégal, du Bénin et du Togo, unies par une même conviction : que l'impact local peut changer un continent. Faire partie de cette cohorte est déjà un honneur. Mais ce que ce programme nous a apporté va bien au-delà d'une ligne sur notre parcours.",
        "Grâce à ses quatre piliers (Capacités, Capital, Connexion et Communauté), nous ressortons de cette expérience profondément renforcés. Plus organisés. Plus solides. Plus opérationnels. Mieux armés pour porter notre mission, et surtout pour porter nos KaNora Ladies encore plus loin dans leur propre parcours.",
        "Et puis il y a eu ces deux distinctions qui nous ont particulièrement touchés.",
        "L'Amplifier Award, d'abord. Quand une organisation choisit non seulement d'agir, mais de témoigner, de rendre visible ce qui est trop souvent tu, d'amplifier ce qui est ignoré, elle devient un pont entre une communauté et le monde. C'est exactement ce que nous nous efforçons de faire chaque jour : donner une voix à des femmes que la société regarde rarement, et raconter leur histoire là où elle n'aurait jamais pu parvenir seule.",
        "Le SII Ambassador Award, ensuite, un honneur qui nous touche profondément. Cette distinction récompense l'organisation qui incarne le mieux la promesse de l'incubateur : clarté stratégique, courage organisationnel, ancrage dans la communauté et engagement indéfectible. La recevoir, parmi tant d'organisations remarquables, est une reconnaissance que nous portons avec une immense gratitude, et une responsabilité renouvelée.",
        "Cette reconnaissance n'est pas une fin en soi. C'est un tremplin. Elle nous rappelle pourquoi nous nous sommes lancés, et elle nous donne les moyens d'aller plus loin, plus vite, pour chaque jeune femme qui rejoint l'aventure KaNora.",
      ],
    },
  ],
} as const;
