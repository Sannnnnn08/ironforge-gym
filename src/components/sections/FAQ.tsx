"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" className="bg-ink py-24">
      <Container className="max-w-3xl">
        <SectionHeading kicker="Preguntas frecuentes" title="¿Tienes dudas?" />

        <div className="divide-y divide-line rounded-sm border border-line">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-white/50 transition-transform ${isOpen ? "rotate-180 text-accent" : ""}`}
                  />
                </button>
                {isOpen && <p className="px-6 pb-5 text-sm text-white/55">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
