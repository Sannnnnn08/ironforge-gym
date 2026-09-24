import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "musculacion",
    title: "Musculación",
    description:
      "Zona completa de peso libre y máquinas de última generación para hipertrofia y fuerza.",
    icon: "Dumbbell",
    ctaLabel: "Conocer más"
  },
  {
    id: "cardio",
    title: "Cardio",
    description: "Caminadoras, bicicletas y remo con monitoreo de frecuencia cardíaca.",
    icon: "HeartPulse",
    ctaLabel: "Conocer más"
  },
  {
    id: "funcional",
    title: "Entrenamiento Funcional",
    description: "Movimiento real para la vida real: movilidad, estabilidad y fuerza aplicada.",
    icon: "Zap",
    ctaLabel: "Conocer más"
  },
  {
    id: "personalizado",
    title: "Entrenamiento Personalizado",
    description: "Sesiones 1 a 1 con coach certificado según tus objetivos específicos.",
    icon: "UserCheck",
    ctaLabel: "Reservar sesión"
  },
  {
    id: "clases-grupales",
    title: "Clases Grupales",
    description: "HIIT, spinning, funcional y más, con horarios todos los días.",
    icon: "Users",
    ctaLabel: "Ver horarios"
  },
  {
    id: "rutinas",
    title: "Rutinas Personalizadas",
    description: "Planificación de entrenamiento adaptada a tu nivel y objetivo.",
    icon: "ClipboardList",
    ctaLabel: "Solicitar rutina"
  },
  {
    id: "asesoria",
    title: "Asesoría Nutricional",
    description: "Orientación básica de alimentación para acompañar tu progreso.",
    icon: "Apple",
    ctaLabel: "Agendar asesoría"
  },
  {
    id: "recuperacion",
    title: "Recuperación",
    description: "Espacio de movilidad, estiramiento y recuperación activa post-entreno.",
    icon: "Waves",
    ctaLabel: "Conocer más"
  }
];
