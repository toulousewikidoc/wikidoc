export type ThemeLabel = 'Histoire' | 'Sociologie' | 'Géographie' | 'Nature' | 'Urbanisme' | 'Culture' | 'Randonnée';

export type Language = 'fr' | 'oc' | 'en' | 'ca' | 'eu' | 'es';

export type UserRole = 'user' | 'moderator' | 'admin';
export type UserStatus = 'active' | 'blocked' | 'archived';

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: 'fr', label: 'Français' },
  { value: 'oc', label: 'Occitan' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ca', label: 'Català' },
  { value: 'eu', label: 'Euskara' },
];

export interface Profile {
  id: string;
  username: string;
  full_name?: string;
  nom?: string;
  prenom?: string;
  avatar_url?: string;
  bio?: string;
  role: UserRole;
  status: UserStatus;
  genre?: 'homme' | 'femme' | 'autre';
  ville?: string;
  departement?: string;
  region?: string;
  pays?: string;
  telephone?: string;
  email: string;
  is_major: boolean;
  langues_parlees?: string;
  vegetarien?: boolean;
  vegan?: boolean;
  sport?: string;
  musique?: string;
  jeux?: string;
  cuisine?: string;
  danse?: string;
  loisirs_divers?: string;
  film?: string;
  programmes_tele?: string;
  livres?: string;
  voyages?: string;
  animaux?: string;
  jaime?: string;
  jenaimepas?: string;
  environnement?: string;
  centres_interets?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  summary?: string;
  image_url: string;
  author_id: string;
  theme_id: number;
  language: Language;
  rating?: number;
  rating_count?: number;
  geo_json?: {
    points: { lat: number; lng: number; label?: string }[];
    metriques?: {
      distance?: string;
      difficulte?: string;
      denivele?: string;
    };
  };
  is_published: boolean;
  is_draft: boolean;
  created_at: string;
}

export interface ArticleTemplate {
  id: string;
  name: string;
  title: string;
  content: string;
  theme: string;
  language: Language;
  created_at: string;
}

export interface Suggestion {
  id: string;
  author_id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  author?: Profile;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ForumCategory {
  id: string;
  title: string;
  description: string;
  topic_count: number;
  post_count: number;
}
