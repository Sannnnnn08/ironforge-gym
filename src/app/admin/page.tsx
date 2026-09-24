"use client";

import { useEffect, useState } from "react";
import { loadCollection, saveCollection } from "@/lib/adminStore";
import { memberships as defaultMemberships } from "@/data/memberships";
import { faq as defaultFaq } from "@/data/faq";
import { Membership, FaqItem } from "@/types";

/**
 * PROTOTIPO DE PANEL ADMIN
 * ------------------------------------------------------------------
 * Qué SÍ hace ahora mismo:
 *  - Editar precios/beneficios de membresías y preguntas de FAQ.
 *  - Guardar los cambios en localStorage (persisten al recargar ESTE navegador).
 *
 * Qué falta para que sea un admin real:
 *  1. Autenticación (esta página no tiene login — cualquiera con la URL entra).
 *     Recomendado: NextAuth.js, Clerk o Supabase Auth con roles.
 *  2. Persistencia en base de datos compartida (Supabase/Postgres/Firebase)
 *     en vez de localStorage, vía rutas API protegidas.
 *  3. CRUD completo para servicios, entrenadores, clases, testimonios,
 *     galería y transformaciones (aquí solo se cubren Membresías y FAQ
 *     como ejemplo del patrón a replicar).
 *  4. Subida de imágenes real (Supabase Storage / Cloudinary / S3).
 *
 * El patrón (cargar → editar en estado → guardar) es el mismo para
 * cualquier otra colección: duplica este archivo por sección o
 * generaliza un componente <CollectionEditor />.
 */
export default function AdminPage() {
  const [tab, setTab] = useState<"memberships" | "faq">("memberships");
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setMemberships(loadCollection("memberships", defaultMemberships));
    setFaqItems(loadCollection("faq", defaultFaq));
  }, []);

  function persist() {
    saveCollection("memberships", memberships);
    saveCollection("faq", faqItems);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display text-3xl">Panel de administración (prototipo)</h1>
      <p className="mt-2 text-sm text-white/50">
        Los cambios aquí se guardan solo en este navegador. Ver comentario al inicio del archivo
        <code className="mx-1 rounded bg-black/30 px-1.5 py-0.5">src/app/admin/page.tsx</code>
        para conectar una base de datos real.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => setTab("memberships")}
          className={`rounded-sm px-4 py-2 text-sm ${tab === "memberships" ? "bg-accent text-ink" : "bg-steel text-white/70"}`}
        >
          Membresías
        </button>
        <button
          onClick={() => setTab("faq")}
          className={`rounded-sm px-4 py-2 text-sm ${tab === "faq" ? "bg-accent text-ink" : "bg-steel text-white/70"}`}
        >
          FAQ
        </button>
      </div>

      {tab === "memberships" && (
        <div className="mt-8 space-y-4">
          {memberships.map((m, i) => (
            <div key={m.id} className="grid gap-3 rounded-sm border border-line p-4 sm:grid-cols-4">
              <input
                value={m.name}
                onChange={(e) => {
                  const next = [...memberships];
                  next[i] = { ...m, name: e.target.value };
                  setMemberships(next);
                }}
                className="rounded-sm border border-line bg-ink px-3 py-2 text-sm"
                placeholder="Nombre del plan"
              />
              <input
                type="number"
                value={m.price}
                onChange={(e) => {
                  const next = [...memberships];
                  next[i] = { ...m, price: Number(e.target.value) };
                  setMemberships(next);
                }}
                className="rounded-sm border border-line bg-ink px-3 py-2 text-sm"
                placeholder="Precio"
              />
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={m.active}
                  onChange={(e) => {
                    const next = [...memberships];
                    next[i] = { ...m, active: e.target.checked };
                    setMemberships(next);
                  }}
                />
                Activo
              </label>
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={m.featured}
                  onChange={(e) => {
                    const next = [...memberships];
                    next[i] = { ...m, featured: e.target.checked };
                    setMemberships(next);
                  }}
                />
                Destacado
              </label>
            </div>
          ))}
        </div>
      )}

      {tab === "faq" && (
        <div className="mt-8 space-y-4">
          {faqItems.map((f, i) => (
            <div key={f.id} className="rounded-sm border border-line p-4">
              <input
                value={f.question}
                onChange={(e) => {
                  const next = [...faqItems];
                  next[i] = { ...f, question: e.target.value };
                  setFaqItems(next);
                }}
                className="mb-2 w-full rounded-sm border border-line bg-ink px-3 py-2 text-sm font-medium"
              />
              <textarea
                value={f.answer}
                onChange={(e) => {
                  const next = [...faqItems];
                  next[i] = { ...f, answer: e.target.value };
                  setFaqItems(next);
                }}
                rows={2}
                className="w-full rounded-sm border border-line bg-ink px-3 py-2 text-sm"
              />
            </div>
          ))}
        </div>
      )}

      <button onClick={persist} className="mt-8 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase text-ink">
        Guardar cambios
      </button>
      {saved && <span className="ml-4 text-sm text-emerald-400">Guardado localmente ✓</span>}
    </div>
  );
}
