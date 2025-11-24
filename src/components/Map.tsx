const Map = () => {
  return (
    <section id="localizacao" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossa Localização
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground">
              Venha nos visitar ou solicite a entrega em seu local
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.2!2d-47.5823!3d-23.6434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b3a0e0e0e0f%3A0x0!2sFrancisco%20Ortiz%20Filho%2C%2077%20-%20Jardim%20San%20Rafael%2C%20Salto%20de%20Pirapora%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização MELLO Locações"
              className="w-full"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-lg">
              <strong className="text-foreground">Endereço:</strong> Francisco Ortiz Filho, 77 – Jardim San Rafael – Salto de Pirapora – SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
