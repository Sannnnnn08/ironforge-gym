"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactSubmission } from "@/types";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<ContactSubmission>({
    name: "",
    phone: "",
    email: "",
    reason: "Información general",
    message: ""
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Fallo el envío");
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", reason: "Información general", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-carbon py-24">
      <Container className="max-w-2xl">
        <SectionHeading
          kicker="Contacto"
          title="Escríbenos"
          description="Este formulario envía la solicitud a /api/contact. Ver README para conectarlo a un proveedor de email real."
        />

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <input
            required
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-sm border border-line bg-ink px-4 py-3 text-sm text-white outline-none focus:border-accent"
          />
          <input
            required
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-sm border border-line bg-ink px-4 py-3 text-sm text-white outline-none focus:border-accent"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-sm border border-line bg-ink px-4 py-3 text-sm text-white outline-none focus:border-accent sm:col-span-2"
          />
          <select
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            className="rounded-sm border border-line bg-ink px-4 py-3 text-sm text-white outline-none focus:border-accent sm:col-span-2"
          >
            <option>Información general</option>
            <option>Membresías</option>
            <option>Clases grupales</option>
            <option>Entrenamiento personalizado</option>
          </select>
          <textarea
            required
            placeholder="Mensaje"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-sm border border-line bg-ink px-4 py-3 text-sm text-white outline-none focus:border-accent sm:col-span-2"
          />

          <Button type="submit" disabled={status === "sending"} className="sm:col-span-2">
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </Button>

          {status === "sent" && (
            <p className="text-sm text-emerald-400 sm:col-span-2">
              ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 sm:col-span-2">
              No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
