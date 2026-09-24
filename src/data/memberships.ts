import { Membership } from "@/types";

export const memberships: Membership[] = [
  {
    id: "mensual",
    name: "Mensual",
    period: "mensual",
    price: 599,
    currency: "MXN",
    description: "Ideal para probar el gimnasio sin compromiso.",
    benefits: [
      "Acceso a sala de pesas y cardio",
      "Horario estándar (6am–10pm)",
      "App de seguimiento de progreso"
    ],
    featured: false,
    active: true,
    ctaLabel: "Inscribirme"
  },
  {
    id: "trimestral",
    name: "Trimestral",
    period: "trimestral",
    price: 1599,
    currency: "MXN",
    description: "Ahorra vs. el plan mensual y mantén tu constancia.",
    benefits: [
      "Todo lo del plan Mensual",
      "Acceso a clases grupales ilimitadas",
      "1 evaluación física inicial"
    ],
    featured: false,
    active: true,
    ctaLabel: "Inscribirme"
  },
  {
    id: "semestral",
    name: "Semestral",
    period: "semestral",
    price: 2899,
    currency: "MXN",
    description: "El plan más elegido por quienes buscan resultados reales.",
    benefits: [
      "Acceso 24/7",
      "Clases grupales ilimitadas",
      "1 sesión mensual con coach",
      "Plan nutricional básico incluido"
    ],
    featured: true,
    active: true,
    ctaLabel: "Inscribirme"
  },
  {
    id: "anual",
    name: "Anual",
    period: "anual",
    price: 4999,
    currency: "MXN",
    description: "Máximo ahorro para quienes se comprometen en serio.",
    benefits: [
      "Todo lo del plan Semestral",
      "Entrenador personal 2x/semana",
      "Acceso a zona premium",
      "Evaluación física mensual"
    ],
    featured: false,
    active: true,
    ctaLabel: "Inscribirme"
  }
];
