import { NextRequest, NextResponse } from "next/server";
import { ContactSubmission } from "@/types";

/**
 * STUB — funciona localmente (valida y responde 200) pero NO envía ningún
 * email ni guarda datos en una base real todavía.
 *
 * Para activarlo de verdad, conecta uno de estos servicios aquí:
 *
 * 1) Resend (recomendado, simple):
 *    npm install resend
 *    import { Resend } from "resend";
 *    const resend = new Resend(process.env.RESEND_API_KEY);
 *    await resend.emails.send({ from: "...", to: gymConfig.email, subject: "...", html: "..." });
 *
 * 2) SendGrid: @sendgrid/mail con SENDGRID_API_KEY.
 *
 * 3) Guardar en base de datos (Supabase/Postgres) además o en vez de email,
 *    para listar los leads en /admin.
 *
 * Recuerda añadir las API keys como variables de entorno (.env.local) y
 * NUNCA exponerlas en el cliente.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactSubmission;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  // TODO: enviar email real / guardar en base de datos aquí.
  console.log("Nuevo contacto recibido (sin enviar aún, ver TODO):", body);

  return NextResponse.json({ ok: true });
}
