import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { gymConfig } from "@/config/gymConfig";

export default function About() {
  return (
    <section id="nosotros" className="bg-carbon py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            kicker="Sobre nosotros"
            title="Más que un gimnasio."
            description={`${gymConfig.shortName} nació hace ${gymConfig.stats.years} años con una idea simple: crear un espacio donde la disciplina, el respeto y los resultados reales fueran el estándar, no la excepción.`}
          />
          <p className="mb-6 text-white/60">
            Hoy somos una comunidad de más de {gymConfig.stats.members} miembros que entrenan
            todos los días con el respaldo de {gymConfig.stats.trainers} entrenadores certificados
            y {gymConfig.stats.machines} equipos de última generación.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-line pt-6">
            <MiniStat value={gymConfig.stats.years} label="Años de experiencia" />
            <MiniStat value={gymConfig.stats.members} label="Miembros activos" />
            <MiniStat value="24/7" label="Acceso total" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
            alt="Interior del gimnasio"
            className="col-span-2 h-64 w-full rounded-sm object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80"
            alt="Zona de peso libre"
            className="h-48 w-full rounded-sm object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
            alt="Entrenador asesorando a un miembro"
            className="h-48 w-full rounded-sm object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-white">{value}</div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
}
