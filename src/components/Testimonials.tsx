import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento",
      text: "Aluguei as cadeiras e mesas para meu casamento e fiquei encantada! Tudo impecável, limpo e muito bem organizado. A equipe foi super atenciosa e profissional. Recomendo muito!",
      rating: 5,
    },
    {
      name: "João Santos",
      event: "Churrasco",
      text: "Perfeito para o meu churrasco de família! As mesas e cadeiras chegaram no horário, limpíssimas e de ótima qualidade. O atendimento via WhatsApp foi rápido e eficiente. Com certeza vou alugar novamente!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      event: "Aniversário",
      text: "Contratei para a festa de 15 anos da minha filha e superou minhas expectativas! As toalhas e capas das cadeiras estavam impecáveis. Tudo muito bem cuidado e entregue pontualmente. Adorei o serviço!",
      rating: 5,
    },
    {
      name: "Carla Mendes",
      event: "Chá de Bebê",
      text: "Aluguei para o chá de bebê da minha irmã e foi maravilhoso! A tenda protegeu perfeitamente do sol, e as cadeiras eram super confortáveis. Preço justo e qualidade excelente. Muito satisfeita!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experiências reais de quem confiou na MELLO Locações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.event}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
