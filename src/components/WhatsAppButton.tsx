import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent("Olá! Encontrei o serviço de vocês pelo google e gostaria de fazer um orçamento.");
  const whatsappLink = `https://wa.me/5515998577202?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
