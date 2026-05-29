import { MessageCircle } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONTENT.contact.phone.replace(/\s+/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
        WhatsApp Inquiry
      </span>
    </a>
  );
};
