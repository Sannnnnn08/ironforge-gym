import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

const levelColor: Record<string, string> = {
  principiante: "bg-emerald-500/15 text-emerald-400",
  intermedio: "bg-amber-500/15 text-amber-400",
  avanzado: "bg-red-500/15 text-red-400",
  todos: "bg-accent/15 text-accent"
};

export default function Classes() {
  return (
    <section id="clases" className="bg-carbon py-24">
      <Container>
        <SectionHeading kicker="Clases grupales" title="Calendario semanal" />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-y-3 text-left">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-white/40">
                <th className="pb-2">Clase</th>
                <th className="pb-2">Instructor</th>
                <th className="pb-2">Día</th>
                <th className="pb-2">Hora</th>
                <th className="pb-2">Nivel</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c) => {
                const instructor = trainers.find((t) => t.id === c.instructorId);
                return (
                  <tr key={c.id} className="rounded-sm bg-steel/30 text-sm text-white/80">
                    <td className="rounded-l-sm px-4 py-4 font-medium text-white">{c.name}</td>
                    <td className="px-4 py-4">{instructor?.name ?? "—"}</td>
                    <td className="px-4 py-4">{c.day}</td>
                    <td className="px-4 py-4">{c.time} · {c.durationMinutes} min</td>
                    <td className="rounded-r-sm px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${levelColor[c.level]}`}>
                        {c.level}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
