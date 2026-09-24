import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { transformations } from "@/data/transformations";

export default function Transformations() {
  return (
    <section id="transformaciones" className="bg-carbon py-24">
      <Container>
        <SectionHeading kicker="Resultados" title="Transformaciones reales" />

        <div className="grid gap-8 lg:grid-cols-2">
          {transformations.map((t) => (
            <div key={t.id} className="rounded-sm border border-line bg-steel/30 p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <img src={t.beforeImage} alt={`Antes — ${t.name}`} className="h-56 w-full rounded-sm object-cover" />
                  <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white">Antes</span>
                </div>
                <div className="relative">
                  <img src={t.afterImage} alt={`Después — ${t.name}`} className="h-56 w-full rounded-sm object-cover" />
                  <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-ink">Después</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-white">{t.name}</h3>
                <p className="text-xs text-white/50">{t.goal} · {t.timeframe}</p>
                <p className="mt-2 text-sm italic text-white/60">&ldquo;{t.testimonial}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
