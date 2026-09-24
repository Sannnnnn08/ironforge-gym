import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { openingHours } from "@/config/gymConfig";

export default function Hours() {
  const today = new Intl.DateTimeFormat("es-MX", { weekday: "long" }).format(new Date());
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);

  return (
    <section id="horarios" className="bg-ink py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="Horarios" title="Cuándo entrenar" description="Horario configurable desde openingHours en gymConfig." />
        </div>

        <div className="divide-y divide-line rounded-sm border border-line bg-carbon">
          {openingHours.map((h) => (
            <div
              key={h.day}
              className={`flex items-center justify-between px-6 py-4 text-sm ${
                h.day === todayCapitalized ? "bg-accent/5" : ""
              }`}
            >
              <span className={`font-medium ${h.day === todayCapitalized ? "text-accent" : "text-white/80"}`}>
                {h.day}
              </span>
              <span className="text-white/60">
                {h.open ? `${h.open} — ${h.close}` : "Cerrado"}
                {h.note && <span className="ml-2 text-xs text-white/40">({h.note})</span>}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
