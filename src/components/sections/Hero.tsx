import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { gymConfig } from "@/config/gymConfig";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

      <Container className="relative z-10">
        <span className="mb-6 inline-block rounded-full border border-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
          Abierto 24/7 · {gymConfig.city.split(",")[0]}
        </span>
        <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] text-white sm:text-7xl">
          {gymConfig.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          El lugar donde tu disciplina se convierte en resultados. Entrenadores certificados,
          equipo de última generación y una comunidad que no te deja rendirte.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#membresias">Ver membresías</ButtonLink>
          <ButtonLink href="#nosotros" variant="outline">Conocer el gimnasio</ButtonLink>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          <Stat value={gymConfig.stats.members} label="Miembros" />
          <Stat value={gymConfig.stats.machines} label="Máquinas" />
          <Stat value={gymConfig.stats.years} label="Años" />
          <Stat value={gymConfig.stats.trainers} label="Entrenadores" />
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-accent">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
    </div>
  );
}
