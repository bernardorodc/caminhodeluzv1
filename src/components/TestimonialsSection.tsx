import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";
export const TestimonialsSection = () => {
  const testimonials = [{
    name: "Maria",
    age: 52,
    city: "São Paulo",
    text: "Eu chorava todas as noites, mas quando a primeira mensagem chegou, senti que Deus lembrava de mim. Minha fé foi renovada.",
    image: testimonial1
  }, {
    name: "Ana",
    age: 45,
    city: "Brasília",
    text: "As mensagens chegavam sempre na hora certa, como se soubessem o que eu precisava ouvir.",
    image: testimonial2
  }, {
    name: "Mariana",
    age: 32,
    city: "Recife",
    text: "Parece que a mensagem fala comigo todos os dias.",
    image: testimonial3
  }];
  return <section className="py-20 md:py-32 gradient-divine relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block bg-gold/10 text-gold px-6 py-3 rounded-full text-sm font-semibold mb-6">
              ✨ Histórias Reais
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 md:mb-8 mobile-text-balance leading-tight">
              Vidas transformadas pela <span className="bg-gradient-gold bg-clip-text text-yellow-500">fé</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Histórias reais de pessoas que encontraram esperança, força e renovação espiritual
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <div key={index} className="group bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-elevated hover:shadow-glow border border-gold/20 hover:border-gold/40 animate-fade-in transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {/* Gradiente de fundo decorativo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-5 blur-2xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  
                  <p className="text-foreground mb-8 italic leading-relaxed text-base relative text-center min-h-[80px] flex items-center">
                    <span className="text-gold text-3xl absolute -top-2 -left-2 font-serif">"</span>
                    <span className="block pt-2 px-4">{testimonial.text}</span>
                    <span className="text-gold text-3xl absolute -bottom-2 -right-2 font-serif">"</span>
                  </p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-all duration-300 border-3 border-gold/30">
                      <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-primary text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.age} anos • {testimonial.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};