"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonios" className="bg-ink py-24">
      <Container>
        <SectionHeading kicker="Testimonios" title="Resultados reales" center />

        <div className="mx-auto max-w-2xl rounded-sm border border-line bg-carbon p-10 text-center">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < t.rating ? "fill-accent text-accent" : "text-white/20"} />
            ))}
          </div>
          <p className="text-lg text-white/80">&ldquo;{t.comment}&rdquo;</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img src={t.photo} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
            <span className="text-sm font-medium text-white">{t.name}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button aria-label="Anterior" onClick={prev} className="text-white/50 hover:text-accent">
            <ChevronLeft size={22} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full ${i === index ? "bg-accent" : "bg-white/20"}`}
              />
            ))}
          </div>
          <button aria-label="Siguiente" onClick={next} className="text-white/50 hover:text-accent">
            <ChevronRight size={22} />
          </button>
        </div>
      </Container>
    </section>
  );
}
