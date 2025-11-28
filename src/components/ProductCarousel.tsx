import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import product7 from "@/assets/product-7.png";
import product8 from "@/assets/product-8.png";
import product9 from "@/assets/product-9.png";
import product10 from "@/assets/product-10.png";
import product11 from "@/assets/product-11.png";
import product12 from "@/assets/product-12.png";
import product13 from "@/assets/product-13.png";
import product14 from "@/assets/product-14.png";
import product15 from "@/assets/product-15.png";
import product16 from "@/assets/product-16.png";
import product17 from "@/assets/product-17.png";

const ProductCarousel = () => {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos Produtos em Ação
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja a qualidade dos nossos produtos em eventos reais
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full overflow-hidden rounded-2xl bg-card shadow-2xl">
                    <div className="aspect-video w-full bg-gradient-to-br from-muted to-background p-4">
                      <img
                        src={product}
                        alt={`Produto MELLO Locações ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                        style={{
                          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))",
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
