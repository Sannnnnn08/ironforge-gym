import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainers } from "@/data/trainers";

export default function Trainers() {
  return (
    <section id="entrenadores" className="bg-carbon py-24">
      <Container>
        <SectionHeading
          kicker="Equipo"
          title="Entrenadores certificados"
          description="Un equipo profesional dedicado a que alcances tus objetivos de forma segura y efectiva."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <div key={t.id} className="group overflow-hidden rounded-sm border border-line bg-steel/30">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-white">{t.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{t.specialty}</p>
                <p className="mt-2 text-xs text-white/50">{t.experienceYears} años de experiencia</p>
                <p className="mt-2 line-clamp-3 text-xs text-white/50">{t.bio}</p>
                {t.instagram && (
                  <a href={t.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-white/50 hover:text-accent">
                    <Instagram size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
