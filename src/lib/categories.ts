export interface SubCategory {
  label: string;
  slug: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  icon: string;
  description: string;
  subCategories?: SubCategory[];
}

export const WIKIDOC_CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Arts & Culture",
    slug: "arts-culture",
    icon: "Palette",
    description: "Architecture, Musique, Littérature, Patrimoine et plus.",
    subCategories: [
      { label: "Architecture", slug: "architecture" },
      { label: "Artisanat", slug: "artisanat" },
      { label: "Cinéma", slug: "cinema" },
      { label: "Design", slug: "design" },
      { label: "Dessin", slug: "dessin" },
      { label: "Littérature", slug: "litterature" },
      { label: "Musique", slug: "musique" },
      { label: "Photographie", slug: "photographie" },
      { label: "Sculpture", slug: "sculpture" },
      { label: "Arts du spectacle", slug: "arts-spectacle" }
    ]
  },
  {
    id: 2,
    title: "Sciences",
    slug: "sciences",
    icon: "Beaker",
    description: "Mathématiques, Physique, Biologie et Sciences Humaines.",
    subCategories: [
      { label: "Mathématiques", slug: "mathematiques" },
      { label: "Physique", slug: "physique" },
      { label: "Chimie", slug: "chimie" },
      { label: "Biologie", slug: "biologie" },
      { label: "Astronomie", slug: "astronomie" },
      { label: "Archéologie", slug: "archeologie" },
      { label: "Géographie", slug: "geographie" },
      { label: "Histoire", slug: "histoire" },
      { label: "Sociologie", slug: "sociologie" }
    ]
  },
  {
    id: 3,
    title: "Technologies",
    slug: "technologies",
    icon: "Cpu",
    description: "Aéronautique, Informatique, Énergie et Industrie.",
    subCategories: [
      { label: "Aéronautique", slug: "aeronautique" },
      { label: "Agriculture", slug: "agriculture" },
      { label: "Informatique", slug: "informatique" },
      { label: "Énergie", slug: "energie" },
      { label: "Transports", slug: "transports" },
      { label: "Robotique", slug: "robotique" }
    ]
  },
  {
    id: 4,
    title: "Société",
    slug: "societe",
    icon: "Users",
    description: "Gastronomie, Éducation, Urbanisme et Médias.",
    subCategories: [
      { label: "Alimentation", slug: "alimentation" },
      { label: "Éducation", slug: "education" },
      { label: "Urbanisme", slug: "urbanisme" },
      { label: "Médias", slug: "medias" },
      { label: "Mode", slug: "mode" },
      { label: "Santé", slug: "sante" }
    ]
  },
  {
    id: 5,
    title: "Sport",
    slug: "sport",
    icon: "Trophy",
    description: "Sports collectifs, individuels, nautiques et mécaniques.",
    subCategories: [
      { label: "Sports collectifs", slug: "sports-collectifs" },
      { label: "Sports individuels", slug: "sports-individuels" },
      { label: "Sports de combat", slug: "sports-combat" },
      { label: "Sports nautiques", slug: "sports-nautiques" }
    ]
  },
  {
    id: 6,
    title: "Loisirs",
    slug: "loisirs",
    icon: "Gamepad2",
    description: "Jeux, Voyages et Activités de plein air.",
    subCategories: [
      { label: "Jeux", slug: "jeux" },
      { label: "Voyage", slug: "voyage" },
      { label: "Plein air", slug: "plein-air" }
    ]
  },
  {
    id: 7,
    title: "Politique",
    slug: "politique",
    icon: "Gavel",
    description: "Systèmes politiques, Institutions et Relations internationales.",
    subCategories: [
      { label: "Systèmes", slug: "systemes-politiques" },
      { label: "Institutions", slug: "institutions" },
      { label: "Relations internationales", slug: "relations-int" }
    ]
  },
  {
    id: 8,
    title: "Religions & croyances",
    slug: "religions-croyances",
    icon: "Church",
    description: "Religions, Mythes, Légendes et Spiritualités.",
    subCategories: [
      { label: "Religions", slug: "religions" },
      { label: "Mythes et légendes", slug: "mythes-legendes" },
      { label: "Spiritualités", slug: "spiritualites" }
    ]
  },
  {
    id: 9,
    title: "Histoire",
    slug: "histoire",
    icon: "History",
    description: "Périodes historiques, Civilisations et Événements.",
    subCategories: [
      { label: "Périodes", slug: "periodes" },
      { label: "Civilisations", slug: "civilisations" },
      { label: "Événements", slug: "evenements" }
    ]
  },
  {
    id: 10,
    title: "Géographie",
    slug: "geographie",
    icon: "Globe",
    description: "Continents, Pays, Régions et Villes.",
    subCategories: [
      { label: "Continents", slug: "continents" },
      { label: "Pays", slug: "pays" },
      { label: "Régions", slug: "regions" },
      { label: "Villes", slug: "villes" }
    ]
  },
  {
    id: 11,
    title: "Espace & Temps",
    slug: "espace-temps",
    icon: "Clock",
    description: "Chronologie, Calendriers et Territoires.",
    subCategories: [
      { label: "Temps", slug: "temps" },
      { label: "Espace", slug: "espace" }
    ]
  },
  {
    id: 12,
    title: "Personnes",
    slug: "personnes",
    icon: "UserCircle",
    description: "Biographies par métier, nationalité ou période.",
    subCategories: [
      { label: "Par métier", slug: "par-metier" },
      { label: "Par nationalité", slug: "par-nationalite" },
      { label: "Par période", slug: "par-periode" }
    ]
  }
];
