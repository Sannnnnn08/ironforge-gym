import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { gymConfig, openingHours } from "@/config/gymConfig";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-ink py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="Ubicación" title="Cómo llegar" />

          <ul className="space-y-5 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={20} className="shrink-0 text-accent" />
              <span>{gymConfig.address}<br />{gymConfig.city}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="shrink-0 text-accent" />
              <a href={`tel:${gymConfig.phone}`}>{gymConfig.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="shrink-0 text-accent" />
              <a href={`mailto:${gymConfig.email}`}>{gymConfig.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock size={20} className="shrink-0 text-accent" />
              <span>{openingHours[0].open} – {openingHours[0].close} (L–V)</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={gymConfig.googleMapsUrl}>Abrir en Google Maps</ButtonLink>
            <ButtonLink href={gymConfig.googleMapsUrl} variant="outline">Cómo llegar</ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-line">
          <iframe
            title={`Mapa de ${gymConfig.name}`}
            src={gymConfig.googleMapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 360 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
