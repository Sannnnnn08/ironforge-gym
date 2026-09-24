"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/gymConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
