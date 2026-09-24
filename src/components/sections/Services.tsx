import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-carbon py-24">
      <Container>
        <SectionHeading
          kicker="Servicios"
          title="Entrena a tu manera"
          description="Sea cual sea tu objetivo, tenemos el programa ideal para llevarte ahí."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Dumbbell;
            return (
              <div
                key={service.id}
                className="group rounded-sm border border-line bg-steel/40 p-7 transition-colors hover:border-accent/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mb-4 text-sm text-white/55">{service.description}</p>
                <a href="#contacto" className="text-xs font-bold uppercase tracking-wider text-accent">
                  {service.ctaLabel} →
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
