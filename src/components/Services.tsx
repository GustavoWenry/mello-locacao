import { Armchair, Table, Shirt, Tent } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Armchair,
      title: "Cadeiras",
      description: "Amplo catálogo de cadeiras confortáveis e elegantes, perfeitas para qualquer tipo de evento",
      features: ["Diversos modelos", "Limpeza impecável", "Ótimo estado de conservação"]
    },
    {
      icon: Table,
      title: "Mesas",
      description: "Mesas de diversos tamanhos e formatos para acomodar seus convidados com conforto",
      features: ["Redondas e retangulares", "Vários tamanhos", "Estrutura reforçada"]
    },
    {
      icon: Shirt,
      title: "Toalhas e Capas",
      description: "Toalhas de mesa e capas de cadeiras para dar o toque final na decoração",
      features: ["Cores variadas", "Tecidos de qualidade", "Sempre limpas"]
    },
    {
      icon: Tent,
      title: "Tendas",
      description: "Tendas e coberturas para proteger seu evento das intempéries",
      features: ["Diversos tamanhos", "Montagem profissional", "Estrutura segura"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas para seu evento com produtos de alta qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
