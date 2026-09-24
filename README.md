# IronForge Gym — Sitio Web

Sitio web premium para gimnasio construido con **Next.js 14 (App Router)**,
**TypeScript** y **Tailwind CSS**.

## 🚀 Puesta en marcha

Requisitos: Node.js 18.18+ (recomendado 20 LTS).

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env.local
# (edítalo si vas a conectar email/base de datos, ver sección "Pendiente")

# 3. Levantar en desarrollo
npm run dev
# abre http://localhost:3000

# 4. Build de producción
npm run build
npm run start
```

## ✏️ Cómo editar el contenido

Toda la información editable está centralizada, sin datos repetidos en los
componentes:

| Qué quieres cambiar              | Archivo                          |
|-----------------------------------|-----------------------------------|
| Nombre, teléfono, WhatsApp, redes, horario, colores, SEO | `src/config/gymConfig.ts` |
| Horario detallado                 | `src/config/gymConfig.ts` (`openingHours`) |
| Precios y beneficios de membresías| `src/data/memberships.ts`        |
| Servicios                         | `src/data/services.ts`           |
| Entrenadores                      | `src/data/trainers.ts`           |
| Clases grupales                   | `src/data/classes.ts`            |
| Testimonios                       | `src/data/testimonials.ts`       |
| Transformaciones antes/después    | `src/data/transformations.ts`    |
| Galería de instalaciones          | `src/data/gallery.ts`            |
| Preguntas frecuentes              | `src/data/faq.ts`                |
| Color de acento (dorado por defecto) | `tailwind.config.ts` (`colors.accent`) y `gymConfig.accentColor` |

No necesitas tocar ningún componente para cambiar textos, precios o datos de
contacto — todo se lee desde estos archivos.

## 🧩 Estructura del proyecto

```
src/
  app/                  Rutas (App Router): layout, home, sitemap, robots,
                         API route de contacto, panel /admin
  components/
    layout/              Header, Footer, botón flotante de WhatsApp
    sections/             Las 13 secciones de la home (Hero, Membresías, etc.)
    ui/                   Button, Container, SectionHeading reutilizables
  config/               gymConfig.ts — configuración central
  data/                 Colecciones de contenido (membresías, servicios, etc.)
  types/                Interfaces TypeScript de todos los modelos de datos
  lib/                  Helpers (persistencia local del panel admin)
```

## ⚠️ Qué es un prototipo funcional y qué falta conectar

Siguiendo la regla de "no simular funcionalidad que no existe", esto es lo
que **ya funciona de verdad** vs. lo que queda **preparado pero pendiente**:

### ✅ Funciona ahora mismo
- Todo el sitio (diseño, contenido, navegación, SEO, JSON-LD, responsive)
- Formulario de contacto: valida y llega a `src/app/api/contact/route.ts`
  (queda registrado en consola del servidor)
- Panel `/admin`: edita membresías y FAQ, persiste en `localStorage` del
  navegador (sirve para probar la experiencia de edición)
- Enlaces de WhatsApp con mensajes predefinidos por sección
- Mapa de Google embebido, lightbox de galería, acordeón FAQ, carousel de
  testimonios — todo interactivo sin dependencias externas de pago

### 🔧 Pendiente de conectar (arquitectura ya preparada)
1. **Envío de email real** — `src/app/api/contact/route.ts` tiene un `TODO`
   explicando cómo conectar Resend o SendGrid en ~5 líneas.
2. **Pagos en línea** (Stripe / Mercado Pago) — las membresías en
   `src/data/memberships.ts` están listas para pasarles un `priceId` de
   Stripe cuando actives el checkout; hoy el CTA de cada plan lleva a
   WhatsApp para confirmar inscripción.
3. **Autenticación de `/admin`** — hoy la ruta no tiene login (ver
   comentario al inicio de `src/app/admin/page.tsx`). Antes de usarla en
   producción, protégela con NextAuth.js, Clerk o Supabase Auth.
4. **Base de datos compartida** — el admin usa `localStorage` (por
   navegador, no compartido). Para un admin real, reemplaza
   `src/lib/adminStore.ts` por llamadas a una API respaldada por
   Supabase/Postgres/Firebase, y replica el mismo patrón para servicios,
   entrenadores, clases, testimonios, galería y transformaciones (hoy solo
   Membresías y FAQ tienen editor de ejemplo).
5. **Imágenes propias** — actualmente se usan fotos de stock de Unsplash
   como placeholder. Reemplázalas en `src/data/*.ts` y `src/components/sections/*`
   por las fotos reales del gimnasio (o conecta Supabase Storage/Cloudinary
   para subirlas desde el futuro admin).

## ✅ Revisión de calidad realizada

Antes de este ZIP se verificó manualmente (sin `npm install` porque este
entorno no tiene acceso a red para descargar paquetes):
- Todos los imports con alias `@/...` resuelven a un archivo existente
- No hay JSX con `class=` en vez de `className`
- Balance de llaves/paréntesis en cada archivo (el único "desbalance"
  detectado fue texto dentro de un comentario, no código real)
- Cada componente de sección exporta correctamente su `export default`, y
  `Button`/`ButtonLink` se importan como named imports en todos sus usos
- Tipos de TypeScript consistentes entre `src/types/index.ts` y cada archivo
  de `src/data/`

**Nota honesta:** esta revisión fue estática (lectura de código), no una
compilación real. No pude ejecutar `npm install` ni `next build` en este
entorno porque no tiene acceso a internet. Te recomiendo correr `npm run
build` en tu máquina antes de desplegar — si surge algún error de tipos que
se me haya escapado, es rápido de corregir y puedo ayudarte con eso.

## 📦 Despliegue

El proyecto es un Next.js estándar, así que despliega directo en
[Vercel](https://vercel.com) (recomendado, cero configuración) o cualquier
hosting compatible con Node.js/Next.js (Railway, Render, un VPS con
`npm run build && npm run start`, etc.).
