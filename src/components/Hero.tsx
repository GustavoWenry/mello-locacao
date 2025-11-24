import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const whatsappMessage = encodeURIComponent("Olá! Encontrei o serviço de vocês pelo google e gostaria de fazer um orçamento.");
  const whatsappLink = `https://wa.me/5515998577202?text=${whatsappMessage}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <img 
            src={logo} 
            alt="MELLO Locações Logo" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto animate-scale-in"
          />
          
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Aluguel de Mesas e Cadeiras para Eventos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme seu evento com móveis de qualidade impecável. 
              Atendemos com profissionalismo e dedicação desde 2023 em Salto de Pirapora e região.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fazer Orçamento
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#servicos">
                Nossos Serviços
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Atuando desde 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Equipamentos de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
