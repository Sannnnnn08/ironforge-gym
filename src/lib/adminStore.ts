"use client";

/**
 * PROTOTIPO — persiste cambios en localStorage del navegador únicamente.
 * Esto es suficiente para probar la experiencia de edición, PERO:
 *  - No es multiusuario (cada navegador tiene su propia copia).
 *  - No es seguro (localStorage se puede editar desde devtools).
 *  - Se pierde si el usuario limpia datos del navegador.
 *
 * Para producción, reemplaza estas funciones por llamadas a tu API
 * (por ejemplo /api/admin/memberships) respaldada por Supabase/Postgres,
 * y protege /admin con autenticación real (NextAuth, Clerk, Supabase Auth).
 */

export function loadCollection<T>(key: string, fallback: T[]): T[] {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(`ironforge_${key}`);
    return raw ? (JSON.parse(raw) as T[]) : fallback;
  } catch {
    return fallback;
  }
}

export function saveCollection<T>(key: string, data: T[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(`ironforge_${key}`, JSON.stringify(data));
}
