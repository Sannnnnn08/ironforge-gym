import { gymConfig, openingHours } from "@/config/gymConfig";

export default function StructuredData() {
  const dayMap: Record<string, string> = {
    Lunes: "Monday",
    Martes: "Tuesday",
    Miércoles: "Wednesday",
    Jueves: "Thursday",
    Viernes: "Friday",
    Sábado: "Saturday",
    Domingo: "Sunday"
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: gymConfig.name,
    image: gymConfig.seo.ogImage,
    telephone: gymConfig.phone,
    email: gymConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: gymConfig.address,
      addressLocality: gymConfig.city
    },
    url: "https://www.ironforgegym.mx",
    sameAs: [gymConfig.instagram, gymConfig.facebook, gymConfig.tiktok, gymConfig.youtube],
    openingHoursSpecification: openingHours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[h.day],
        opens: h.open,
        closes: h.close
      }))
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
