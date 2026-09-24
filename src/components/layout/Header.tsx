"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { gymConfig } from "@/config/gymConfig";

const navLinks = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Membresías", href: "#membresias" },
  { label: "Entrenadores", href: "#entrenadores" },
  { label: "Horarios", href: "#horarios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <Container className="flex items-center justify-between py-5">
        <a href="#top" className="font-display text-2xl tracking-wide text-white">
          {gymConfig.logoText.split(" ")[0]}
          <span className="text-accent"> {gymConfig.logoText.split(" ").slice(1).join(" ")}</span>
        </a>

        <nav className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#membresias" className="hidden lg:inline-flex">
          Únete ahora
        </ButtonLink>

        <button
          aria-label="Abrir menú"
          className="text-white lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink lg:hidden">
          <Container className="flex items-center justify-between py-5">
            <span className="font-display text-2xl text-white">
              {gymConfig.logoText.split(" ")[0]}
              <span className="text-accent"> {gymConfig.logoText.split(" ").slice(1).join(" ")}</span>
            </span>
            <button aria-label="Cerrar menú" className="text-white" onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </Container>
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg font-medium text-white/80 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#membresias" className="mt-6 w-full" onClick={() => setOpen(false)}>
              Únete ahora
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
