import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Olá! Encontrei o serviço de vocês pelo google e gostaria de fazer um orçamento.");
  const whatsappLink = `https://wa.me/5515998577202?text=${whatsappMessage}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="MELLO Locações" 
                className="h-20 w-auto"
              />
              <p className="text-muted-foreground text-sm">
                Locação profissional de mesas e cadeiras para eventos. Qualidade e confiança desde 2023.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    (15) 99857-7202
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  Salto de Pirapora - SP
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/mellocadeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/mellolocacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MELLO Locações - Aluguel de Mesas e Cadeiras. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
