import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { memberships } from "@/data/memberships";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/gymConfig";

export default function Memberships() {
  const active = memberships.filter((m) => m.active);

  return (
    <section id="membresias" className="bg-ink py-24">
      <Container>
        <SectionHeading
          kicker="Membresías"
          title="Planes para cada nivel"
          description="Sin permanencia forzosa en el plan Mensual. Elige el que se ajuste a tu meta."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {active.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-sm border p-8 ${
                plan.featured ? "border-accent bg-gradient-to-b from-accent/10 to-transparent" : "border-line bg-carbon"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Más elegido
                </span>
              )}
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/60">{plan.name}</h3>
              <div className="font-display mt-3 text-4xl text-white">
                ${plan.price.toLocaleString("es-MX")}
                <span className="text-sm font-sans font-normal text-white/50"> {plan.currency}/{plan.period === "mensual" ? "mes" : plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-white/50">{plan.description}</p>

              <ul className="my-8 flex-1 space-y-3">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(whatsappMessages.signup)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  plan.featured ? "bg-accent text-ink hover:bg-accent-dim" : "border border-white/30 text-white hover:border-accent hover:text-accent"
                }`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Pago en línea con tarjeta (Stripe / Mercado Pago) próximamente. Por ahora la inscripción se
          confirma por WhatsApp o en recepción — ver nota técnica en el README del proyecto.
        </p>
      </Container>
    </section>
  );
}
