import Container from "@/components/ui/Container";
import { gymConfig, openingHours } from "@/config/gymConfig";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-carbon">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl text-white">
            {gymConfig.logoText.split(" ")[0]}
            <span className="text-accent"> {gymConfig.logoText.split(" ").slice(1).join(" ")}</span>
          </span>
          <p className="mt-4 text-sm text-white/50">{gymConfig.address}</p>
          <p className="text-sm text-white/50">{gymConfig.city}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Enlaces</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#servicios" className="hover:text-accent">Servicios</a></li>
            <li><a href="#membresias" className="hover:text-accent">Membresías</a></li>
            <li><a href="#entrenadores" className="hover:text-accent">Entrenadores</a></li>
            <li><a href="#horarios" className="hover:text-accent">Horarios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href={`tel:${gymConfig.phone}`} className="hover:text-accent">{gymConfig.phoneDisplay}</a></li>
            <li><a href={`mailto:${gymConfig.email}`} className="hover:text-accent">{gymConfig.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href={gymConfig.instagram} aria-label="Instagram" className="text-white/50 hover:text-accent"><Instagram size={18} /></a>
            <a href={gymConfig.facebook} aria-label="Facebook" className="text-white/50 hover:text-accent"><Facebook size={18} /></a>
            <a href={gymConfig.youtube} aria-label="YouTube" className="text-white/50 hover:text-accent"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Horario</h4>
          <ul className="space-y-1 text-sm text-white/50">
            {openingHours.slice(0, 3).map((h) => (
              <li key={h.day}>
                {h.day}: {h.open ? `${h.open} – ${h.close}` : "Cerrado"}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {gymConfig.name}. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="/privacidad" className="hover:text-accent">Privacidad</a>
            <a href="/terminos" className="hover:text-accent">Términos</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
