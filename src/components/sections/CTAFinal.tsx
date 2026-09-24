import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/gymConfig";

export default function CTAFinal() {
  return (
    <section className="bg-accent py-20 text-ink">
      <Container className="text-center">
        <h2 className="font-display text-4xl sm:text-5xl">Tu mejor versión comienza hoy.</h2>
        <p className="mt-3 text-ink/70">Da el primer paso.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#membresias" className="bg-ink text-accent hover:bg-carbon">
            Inscribirme
          </ButtonLink>
          <ButtonLink
            href={buildWhatsAppUrl(whatsappMessages.signup)}
            variant="outline"
            className="border-ink text-ink hover:border-ink hover:text-ink/70"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
