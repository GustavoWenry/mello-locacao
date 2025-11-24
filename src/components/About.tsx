import { Award, CheckCircle, Heart, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Produtos impecavelmente limpos e conservados para seu evento"
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Profissionalismo e pontualidade em cada entrega"
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para tornar seu evento inesquecível"
    },
    {
      icon: CheckCircle,
      title: "Experiência",
      description: "Desde 2023 atendendo eventos com excelência"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre a MELLO Locações
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialistas em locação de móveis para eventos, oferecemos soluções completas 
              com qualidade superior e atendimento diferenciado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Por que escolher a MELLO?
            </h3>
            <p className="text-lg opacity-95 max-w-3xl mx-auto">
              Combinamos experiência, organização impecável e produtos de primeira linha 
              para garantir que seu evento seja um sucesso absoluto. Nossa equipe está 
              comprometida em superar suas expectativas em cada locação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
