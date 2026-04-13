import type { Metadata } from "next";

export const siteUrl = "https://njrsolutions.fr";

export const business = {
  name: "NJR Solutions",
  tagline:
    "Service local à domicile pour particuliers et professionnels : maison, jardin et informatique du quotidien",
  heroTitle: "Installation et optimisation de votre maison connectée",
  heroSubtitle: "Robot tondeuse • WiFi • Sécurité • Assistance informatique",
  heroDescription:
    "J'accompagne les particuliers et les professionnels pour installer, améliorer et simplifier les équipements technologiques utiles au quotidien.",
  description:
    "NJR Solutions accompagne les particuliers et les professionnels avec des services simples, modernes et utiles pour le jardin, le WiFi, la sécurité connectée et l'informatique du quotidien à Villeneuve-sur-Lot, Agen et alentours.",
  phone: "06 75 83 50 43",
  phoneLink: "tel:0675835043",
  whatsappLink: "https://wa.me/33782307536",
  whatsappLabel: "WhatsApp",
  email: "contact@njrsolutions.fr",
  emailLink: "mailto:contact@njrsolutions.fr",
  address: "Villeneuve-sur-Lot, Lot-et-Garonne",
  locality: "Villeneuve-sur-Lot",
  postalCode: "47300",
  department: "Lot-et-Garonne",
  region: "Nouvelle-Aquitaine",
  hours: {
    days: "Lundi au dimanche",
    range: "09h00 - 18h30",
  },
  availability: "Réponse rapide",
  serviceArea: "Villeneuve-sur-Lot, Agen, Bias, Pujols et alentours",
  topBarMessage:
    "Intervention locale • Particuliers et professionnels • Réponse rapide",
};

export const responsePromise = "Réponse rapide sous 24h ouvrées";

export const processSteps = [
  "Vous me contactez en 30 secondes",
  "On clarifie le besoin ensemble",
  "Je propose une solution adaptée",
  "J'installe et je mets en service",
];

export const trustHighlights = [
  "Devis gratuit",
  "Intervention locale",
  "Explications claires",
  "Matériel simple à utiliser",
];

export const siteKeywords = [
  "installation robot tondeuse",
  "optimisation WiFi",
  "installation caméra domicile",
  "assistance informatique à domicile",
  "PC sur mesure",
  "maison connectée",
  "sécurité connectée",
  "installation sonnette connectée",
  "service tech à domicile Lot-et-Garonne",
  "installation robot tondeuse Villeneuve-sur-Lot",
  "optimisation WiFi Agen",
];

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/services", label: "Services" },
  { href: "/qui-sommes-nous", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const trustBar = [
  "Service local",
  "Intervention rapide",
  "Particuliers et professionnels",
];

export const serviceAreaBadges = [
  "Villeneuve-sur-Lot",
  "Agen",
  "Bias",
  "Pujols",
];

export const problemSolutions = [
  {
    title: "WiFi lent ou instable",
    problem: "Le signal capte mal selon les pièces ou décroche dès que vous vous éloignez de la box.",
    solution:
      "J'améliore la couverture avec une solution simple pour retrouver une connexion plus stable au quotidien.",
  },
  {
    title: "Installation trop compliquée",
    problem: "Le matériel est là, mais la mise en route devient vite pénible ou source d'erreurs.",
    solution:
      "Je prends en charge l'installation, la configuration utile et les explications essentielles.",
  },
  {
    title: "Besoin de sécurité simple",
    problem: "Vous voulez surveiller un accès ou voir qui sonne sans installer un système lourd.",
    solution:
      "Je mets en place une caméra ou une sonnette connectée propre, claire et facile à utiliser.",
  },
  {
    title: "PC lent ou encombré",
    problem: "L'ordinateur rame, démarre mal ou devient pénible à utiliser au quotidien.",
    solution:
      "J'optimise, nettoie et remets l'appareil dans un état plus fluide sans prise de tête.",
  },
  {
    title: "Besoin d'un PC adapté",
    problem: "Vous ne savez pas quel ordinateur choisir pour la maison, le travail ou un usage plus poussé.",
    solution:
      "Je vous aide à retenir la bonne configuration et je livre un PC prêt à l'emploi selon votre usage.",
  },
];

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

export const services: ServiceItem[] = [
  {
    slug: "robot-tondeuse",
    title: "Installation de robot tondeuse",
    shortTitle: "Robot tondeuse",
    kicker: "Solution clé en main pour un jardin entretenu sans effort",
    description:
      "Conseil, choix du modèle adapté, installation complète, configuration et mise en service pour un jardin entretenu sans contrainte technique.",
    includes: [
      "Conseil sur la solution adaptée",
      "Choix du modèle selon le terrain",
      "Installation complète à domicile",
      "Configuration et mise en service",
    ],
    image: "/assets/images/products/navimow-i105e/04-garden-scene.jpg",
    imageAlt: "Robot tondeuse en situation dans un jardin moderne",
    imageFit: "cover",
  },
  {
    slug: "wifi",
    title: "Optimisation WiFi",
    shortTitle: "Optimisation WiFi",
    kicker: "Une connexion plus stable dans la maison et autour",
    description:
      "Diagnostic, amélioration du signal et installation de solutions simples pour réduire les zones mortes et retrouver un réseau fiable.",
    includes: [
      "Diagnostic du réseau existant",
      "Conseil sur les emplacements utiles",
      "Installation de répéteurs ou d'une solution simple",
      "Vérification de la couverture obtenue",
    ],
    image: "/assets/images/services/wifi-optimization.png",
    imageAlt: "Système WiFi mesh sur fond propre",
    imageFit: "contain",
  },
  {
    slug: "securite-connectee",
    title: "Installation simple de sécurité connectée",
    shortTitle: "Sécurité connectée",
    kicker: "Caméras et sonnette connectée sans installation lourde",
    description:
      "Des solutions claires pour surveiller les accès, recevoir des alertes et garder un œil sur votre domicile sans installation complexe.",
    includes: [
      "Conseil sur la caméra ou la sonnette adaptée",
      "Installation simple et propre",
      "Connexion à l'application",
      "Prise en main rapide à domicile",
    ],
    image: "/assets/images/services/security-connected.jpg",
    imageAlt: "Caméra connectée installée en extérieur",
    imageFit: "cover",
  },
  {
    slug: "assistance-informatique",
    title: "Assistance informatique à domicile",
    shortTitle: "Assistance informatique",
    kicker: "Une aide simple, rapide et utile pour le quotidien",
    description:
      "Optimisation PC, nettoyage logiciel, aide smartphone et installation d'un appareil neuf pour retrouver un usage fluide.",
    includes: [
      "Optimisation et nettoyage logiciel",
      "Aide simple sur PC et smartphone",
      "Installation de matériel neuf",
      "Conseils clairs sans jargon",
    ],
    image: "/assets/images/services/computer-assistance.jpg",
    imageAlt: "Ordinateur portable sur un bureau lumineux",
    imageFit: "cover",
  },
  {
    slug: "pc-sur-mesure",
    title: "PC sur mesure / prêt à l'emploi",
    shortTitle: "PC sur mesure",
    kicker: "Un ordinateur prêt à l'emploi selon vos besoins réels",
    description:
      "J'analyse votre usage, je retiens une configuration adaptée, je prépare le poste et je vous livre une solution prête à l'emploi.",
    includes: [
      "Analyse du besoin et des usages",
      "Sélection du matériel adapté",
      "Configuration et préparation",
      "Mise en service prête à l'emploi",
    ],
    image: "/assets/images/services/computer-packshot.png",
    imageAlt: "Ordinateur prêt à l'emploi sur fond propre",
    imageFit: "contain",
  },
];

export type RobotModel = {
  slug: string;
  name: string;
  terrain: string;
  price: string;
  description: string;
  features: string[];
  technicalSpecs: Array<{
    label: string;
    value: string;
  }>;
  includes: string[];
  images: Array<{
    src: string;
    alt: string;
    label: string;
    fit?: "cover" | "contain";
  }>;
};

export const robotModels: RobotModel[] = [
  {
    slug: "navimow-i105e",
    name: "Navimow i105E",
    terrain: "Idéal pour petits terrains",
    price: "À partir de 999 €",
    description:
      "Une solution propre et moderne pour automatiser l'entretien d'un jardin de petite taille avec une prise en main simple.",
    features: [
      "Sans câble",
      "Application mobile",
      "Installation complète",
      "Solution adaptée au terrain",
    ],
    technicalSpecs: [
      { label: "Surface conseillée", value: "Jusqu'à 600 m²" },
      { label: "Navigation", value: "Positionnement intelligent sans câble" },
      { label: "Gestion des zones", value: "Multi-zones via application" },
      { label: "Connectivité", value: "WiFi / Bluetooth" },
      { label: "Pilotage", value: "Application mobile dédiée" },
      { label: "Niveau sonore", value: "Très discret pour un usage résidentiel" },
    ],
    includes: [
      "Étude rapide du terrain",
      "Installation complète à domicile",
      "Configuration des zones utiles",
      "Mise en service et test",
      "Explication simple pour la prise en main",
    ],
    images: [
      {
        src: "/assets/images/products/navimow-i105e/01-packshot-front.png",
        alt: "Navimow i105E vue de face",
        label: "Packshot produit",
        fit: "contain",
      },
      {
        src: "/assets/images/products/navimow-i105e/02-packshot-side.png",
        alt: "Navimow i105E vue latérale",
        label: "Design compact",
        fit: "contain",
      },
      {
        src: "/assets/images/products/navimow-i105e/03-packshot-top.png",
        alt: "Navimow i105E vue du dessus",
        label: "Vue détaillée",
        fit: "contain",
      },
      {
        src: "/assets/images/products/navimow-i105e/04-garden-scene.jpg",
        alt: "Navimow i105E en situation dans un jardin",
        label: "Robot en situation",
      },
      {
        src: "/assets/images/products/navimow-i105e/05-smart-mapping.jpg",
        alt: "Application et cartographie Navimow i105E",
        label: "Gestion intelligente",
      },
    ],
  },
  {
    slug: "navimow-i210-lidar-pro",
    name: "Navimow i210 LiDAR Pro",
    terrain: "Solution confort pour terrains moyens",
    price: "À partir de 1 799 €",
    description:
      "Une solution plus premium pour les terrains familiaux qui demandent davantage d'autonomie, de précision et de souplesse.",
    features: [
      "Navigation LiDAR",
      "Gestion via application",
      "Installation clé en main",
      "Très bon confort d'usage",
    ],
    technicalSpecs: [
      { label: "Surface conseillée", value: "Jusqu'à 1 000 m²" },
      { label: "Navigation", value: "LiDAR avancé + cartographie précise" },
      { label: "Gestion des zones", value: "Multi-zones avec planning intelligent" },
      { label: "Connectivité", value: "WiFi / Bluetooth / application mobile" },
      { label: "Gestion des pentes", value: "Adapté aux terrains variés" },
      { label: "Positionnement", value: "Solution confort premium pour famille" },
    ],
    includes: [
      "Conseil personnalisé selon terrain",
      "Installation et réglages complets",
      "Optimisation des zones de tonte",
      "Mise en route guidée",
      "Support de prise en main",
    ],
    images: [
      {
        src: "/assets/images/products/navimow-i210-lidar-pro/01-packshot.png",
        alt: "Navimow i210 LiDAR Pro packshot produit",
        label: "Packshot officiel",
        fit: "contain",
      },
      {
        src: "/assets/images/products/navimow-i210-lidar-pro/02-garden-scene.jpg",
        alt: "Navimow i210 LiDAR Pro dans un jardin",
        label: "En situation dans le jardin",
      },
      {
        src: "/assets/images/products/navimow-i210-lidar-pro/03-detail-scene.jpg",
        alt: "Détail produit Navimow i210 LiDAR Pro",
        label: "Vue rapprochée",
      },
      {
        src: "/assets/images/products/navimow-i210-lidar-pro/04-cutting-scene.jpg",
        alt: "Navimow i210 LiDAR Pro en action",
        label: "Robot en action",
      },
      {
        src: "/assets/images/products/navimow-i210-lidar-pro/05-lifestyle-scene.jpg",
        alt: "Navimow i210 LiDAR Pro dans un environnement premium",
        label: "Visuel lifestyle",
      },
    ],
  },
  {
    slug: "ecoflow-blade",
    name: "EcoFlow Blade",
    terrain: "Solution haut de gamme",
    price: "Sur devis",
    description:
      "Un modèle premium pensé pour les clients qui veulent une solution différenciante, soignée et adaptée à une étude personnalisée.",
    features: [
      "Positionnement premium",
      "Pilotage intelligent",
      "Étude sur mesure",
      "Installation et réglages inclus",
    ],
    technicalSpecs: [
      { label: "Surface conseillée", value: "Grandes surfaces ou besoins spécifiques" },
      { label: "Navigation", value: "Technologie de guidage avancée" },
      { label: "Gestion des zones", value: "Personnalisation selon configuration réelle" },
      { label: "Connectivité", value: "Application mobile et pilotage connecté" },
      { label: "Positionnement", value: "Solution premium sur étude" },
      { label: "Tarification", value: "Sur devis selon terrain et contraintes" },
    ],
    includes: [
      "Étude personnalisée complète",
      "Sélection du scénario d'installation",
      "Installation professionnelle",
      "Réglages fins et optimisation",
      "Accompagnement post-mise en service",
    ],
    images: [
      {
        src: "/assets/images/products/ecoflow-blade/01-hero-scene.webp",
        alt: "EcoFlow Blade visuel principal",
        label: "Visuel premium",
      },
      {
        src: "/assets/images/products/ecoflow-blade/02-garden-scene.webp",
        alt: "EcoFlow Blade dans un jardin",
        label: "En situation",
      },
      {
        src: "/assets/images/products/ecoflow-blade/03-action-scene.webp",
        alt: "EcoFlow Blade en action",
        label: "Robot en action",
      },
      {
        src: "/assets/images/products/ecoflow-blade/04-detail-scene.webp",
        alt: "Détail EcoFlow Blade",
        label: "Vue rapprochée",
      },
      {
        src: "/assets/images/products/ecoflow-blade/05-product-detail.webp",
        alt: "EcoFlow Blade détail produit",
        label: "Finition produit",
      },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Service local à domicile",
    description:
      "Un interlocuteur proche, réactif et facile à joindre pour des besoins concrets du quotidien.",
  },
  {
    title: "Solutions simples et adaptées",
    description:
      "Je privilégie des prestations claires, utiles et compréhensibles, sans complexité inutile.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Chaque besoin est étudié selon votre usage, votre logement, votre jardin et votre matériel.",
  },
  {
    title: "Installation et mise en service complètes",
    description:
      "Le but est de vous laisser une solution prête à l'emploi, bien réglée et facile à utiliser.",
  },
];

export const aboutValues = [
  {
    title: "Simplicité",
    description:
      "Je privilégie des solutions concrètes, faciles à comprendre et utiles dès le premier jour.",
  },
  {
    title: "Efficacité",
    description:
      "Chaque intervention doit régler un vrai besoin et apporter un confort visible au quotidien.",
  },
  {
    title: "Proximité",
    description:
      "Le service reste local, humain et rassurant, avec un vrai accompagnement sur le terrain.",
  },
];

export const testimonials = [
  {
    quote:
      "Installation propre, explications simples et vrai gain de confort au quotidien.",
    author: "Nadine",
    city: "Villeneuve-sur-Lot",
    context: "Robot tondeuse",
  },
  {
    quote:
      "Le WiFi capte enfin correctement dans toute la maison. Intervention rapide et très claire.",
    author: "Julien",
    city: "Bias",
    context: "Optimisation WiFi",
  },
  {
    quote:
      "Nous voulions une solution simple pour surveiller l'entrée. Tout a été installé sans stress.",
    author: "Céline",
    city: "Agen",
    context: "Sécurité connectée",
  },
  {
    quote:
      "Mon PC a retrouvé de la vitesse et j'ai enfin quelqu'un qui explique simplement les choses.",
    author: "Michel",
    city: "Pujols",
    context: "Assistance informatique",
  },
  {
    quote:
      "Le PC préparé selon notre usage était prêt à l'emploi. C'était clair, fluide et rassurant.",
    author: "Sandra",
    city: "Villeneuve-sur-Lot",
    context: "PC sur mesure",
  },
];

export const legalInformation = {
  editor: business.name,
  companyDetails:
    "Service local à domicile spécialisé dans les solutions utiles pour la maison, le jardin et l'informatique du quotidien (informations légales à compléter avant mise en production).",
  publicationDirector: business.name,
  hostName: "Hébergeur à compléter",
  hostAddress: "Adresse de l'hébergeur à compléter",
  hostPhone: "Téléphone de l'hébergeur à compléter",
};

export const pages = [
  { path: "/", priority: 1 },
  { path: "/boutique", priority: 0.95 },
  { path: "/services", priority: 0.9 },
  { path: "/qui-sommes-nous", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
  { path: "/mentions-legales", priority: 0.4 },
];

export function getRobotModelBySlug(slug: string) {
  return robotModels.find((model) => model.slug === slug);
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...siteKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: business.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: absoluteUrl("/hero-connected-home.svg"),
          width: 1200,
          height: 630,
          alt: `${business.name}, services locaux utiles et modernes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/hero-connected-home.svg")],
    },
    other: {
      "geo.region": "FR-47",
      "geo.placename": business.locality,
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  slogan: business.tagline,
  url: siteUrl,
  image: absoluteUrl("/hero-connected-home.svg"),
  telephone: business.phone,
  email: business.email,
  description: business.description,
  knowsAbout: siteKeywords,
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Lot-et-Garonne",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    postalCode: business.postalCode,
    addressLocality: business.locality,
    addressRegion: business.region,
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  priceRange: "€€",
};
