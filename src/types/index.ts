export interface GymConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // formato internacional sin '+', ej: 5217711234567
  email: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  googleMapsEmbedSrc: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  youtube: string;
  accentColor: string; // hex
  stats: {
    members: string;
    machines: string;
    years: string;
    trainers: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface OpeningHour {
  day: string;
  open: string | null; // null = cerrado
  close: string | null;
  note?: string;
}

export type MembershipPeriod = "mensual" | "trimestral" | "semestral" | "anual";

export interface Membership {
  id: string;
  name: string;
  period: MembershipPeriod;
  price: number;
  currency: string;
  description: string;
  benefits: string[];
  featured: boolean;
  active: boolean;
  ctaLabel: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // nombre del icono de lucide-react
  image?: string;
  ctaLabel: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experienceYears: number;
  certifications: string[];
  bio: string;
  photo: string;
  instagram?: string;
  contactUrl?: string;
}

export type ClassLevel = "principiante" | "intermedio" | "avanzado" | "todos";

export interface GymClass {
  id: string;
  name: string;
  instructorId: string; // referencia a Trainer.id
  day: string;
  time: string;
  durationMinutes: number;
  level: ClassLevel;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface Transformation {
  id: string;
  name: string;
  goal: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
}

export type GalleryCategory =
  | "Peso libre"
  | "Máquinas"
  | "Cardio"
  | "Funcional"
  | "Vestidores"
  | "Regaderas"
  | "Recepción"
  | "Áreas especiales";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
}
