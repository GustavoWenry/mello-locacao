import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Encontrei o serviço de vocês pelo google e gostaria de fazer um orçamento."
  );
  const whatsappLink = `https://wa.me/5515998577202?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para tornar seu evento perfeito. Fale conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Faça seu orçamento agora mesmo pelo WhatsApp
                  </p>
                  <Button asChild className="w-full sm:w-auto">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      (15) 99857-7202
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card
              className="p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Francisco Ortiz Filho, 77
                    <br />
                    Jardim San Rafael
                    <br />
                    Salto de Pirapora - SP
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Siga-nos nas Redes Sociais
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <a
                  href="https://instagram.com/mellocadeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <a
                  href="https://www.facebook.com/locacoes.mello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
