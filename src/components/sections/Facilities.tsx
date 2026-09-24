"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  return (
    <section id="instalaciones" className="bg-ink py-24">
      <Container>
        <SectionHeading
          kicker="Instalaciones"
          title="Un espacio diseñado para rendir al máximo."
          description="Peso libre, máquinas, cardio, área funcional y más — todo pensado para tu entrenamiento."
        />

        <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {gallery.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setActiveIndex(i)}
              className="block w-full overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6">
          <button aria-label="Cerrar" onClick={close} className="absolute right-6 top-6 text-white/70 hover:text-white">
            <X size={32} />
          </button>
          <button aria-label="Anterior" onClick={prev} className="absolute left-4 text-white/70 hover:text-white">
            <ChevronLeft size={36} />
          </button>
          <img
            src={gallery[activeIndex].src}
            alt={gallery[activeIndex].alt}
            className="max-h-[80vh] max-w-3xl rounded-sm object-contain"
          />
          <button aria-label="Siguiente" onClick={next} className="absolute right-4 text-white/70 hover:text-white">
            <ChevronRight size={36} />
          </button>
          <span className="absolute bottom-6 text-sm text-white/50">{gallery[activeIndex].category}</span>
        </div>
      )}
    </section>
  );
}
