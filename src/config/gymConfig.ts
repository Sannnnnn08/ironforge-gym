import { GymConfig, OpeningHour } from "@/types";

/**
 * CONFIGURACIÓN CENTRAL
 * Cambia estos valores y se reflejan en todo el sitio (header, footer, hero,
 * WhatsApp flotante, SEO, JSON-LD, mapa, etc.). No hay datos hardcodeados
 * repetidos en los componentes.
 */
export const gymConfig: GymConfig = {
  name: "IronForge Gym",
  shortName: "IronForge",
  logoText: "IRON FORGE",
  tagline: "Entrena. Supérate. Transforma.",
  phone: "+527711234567",
  phoneDisplay: "+52 771 123 4567",
  whatsapp: "5217711234567",
  email: "hola@ironforgegym.mx",
  address: "Av. Constitución 245, Col. Centro",
  city: "Pachuca de Soto, Hidalgo, México",
  googleMapsUrl: "https://maps.google.com/?q=IronForge+Gym+Pachuca",
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0!2d-98.7591!3d20.1011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA2JzA0LjAiTiA5OMKwNDUnMzMuMCJX!5e0!3m2!1ses!2smx!4v0000000000000",
  instagram: "https://instagram.com/ironforgegym",
  facebook: "https://facebook.com/ironforgegym",
  tiktok: "https://tiktok.com/@ironforgegym",
  youtube: "https://youtube.com/@ironforgegym",
  accentColor: "#c9a24a",
  stats: {
    members: "1,200+",
    machines: "80+",
    years: "9",
    trainers: "18"
  },
  seo: {
    title: "IronForge Gym | Gimnasio Premium en Pachuca",
    description:
      "Gimnasio premium en Pachuca de Soto con entrenadores certificados, clases grupales, área funcional y membresías flexibles. Abierto 24/7.",
    keywords: [
      "gimnasio Pachuca",
      "gym premium",
      "entrenamiento personalizado",
      "membresías gym",
      "clases grupales fitness"
    ],
    ogImage: "/og-image.jpg"
  }
};

export const openingHours: OpeningHour[] = [
  { day: "Lunes", open: "06:00", close: "22:00" },
  { day: "Martes", open: "06:00", close: "22:00" },
  { day: "Miércoles", open: "06:00", close: "22:00" },
  { day: "Jueves", open: "06:00", close: "22:00" },
  { day: "Viernes", open: "06:00", close: "22:00" },
  { day: "Sábado", open: "08:00", close: "16:00" },
  { day: "Domingo", open: "09:00", close: "14:00", note: "Horario reducido" }
];

/** Mensajes predefinidos para los enlaces de WhatsApp en distintos puntos del sitio */
export const whatsappMessages = {
  memberships: `Hola, quiero información sobre las membresías de ${gymConfig.shortName}.`,
  hours: `Hola, quiero conocer los horarios de ${gymConfig.shortName}.`,
  signup: `Hola, quiero inscribirme en ${gymConfig.shortName}.`,
  general: `Hola, me gustaría más información sobre ${gymConfig.shortName}.`
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${gymConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
