import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo-caminho-luz-new.png"
import mockupImage from "@/assets/iphone-mockup.png"
import testimonial1 from "@/assets/testimonial1.jpg"
import testimonial2 from "@/assets/testimonial2.jpg"
import testimonial3 from "@/assets/testimonial3.jpg"

export const Hero = () => {
  return (
    <section className="gradient-hero py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-2 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            {/* Conteúdo */}
            <div className="text-center lg:text-left animate-fade-in space-y-3 md:space-y-8">
              <img 
                src={logoImage} 
                alt="Caminho de Luz"
                className="h-48 md:h-56 lg:h-64 xl:h-72 mx-auto lg:mx-0 mobile-spacing drop-shadow-lg"
              />
              
              <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mobile-text-balance px-1">
                Receba uma mensagem de <span className="text-gold">fé</span> no seu WhatsApp todos os dias
              </h1>
              
              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 px-1">
                "Um sopro de esperança, um versículo de força, uma palavra de Deus para renovar seu coração diariamente."
              </p>
              
              <div className="pt-2 md:pt-4 px-1">
                <Button 
                  variant="gold"
                  size="xl" 
                  className="w-full sm:w-auto px-3 md:px-8 py-2 md:py-6 rounded-full text-xs md:text-lg"
                >
                  Quero receber minhas mensagens de fé agora
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3 text-muted-foreground pt-2 md:pt-4">
                <div className="flex -space-x-2 shrink-0">
                  <img 
                    src={testimonial1} 
                    alt="Usuária satisfeita"
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background shadow-sm object-cover"
                  />
                  <img 
                    src={testimonial2} 
                    alt="Usuária satisfeita"
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background shadow-sm object-cover"
                  />
                  <img 
                    src={testimonial3} 
                    alt="Usuária satisfeita"
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background shadow-sm object-cover"
                  />
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gold rounded-full border-2 border-background shadow-sm flex items-center justify-center text-xs font-bold text-gold-foreground">
                    +
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-center sm:text-left">
                  Mais de <span className="text-gold font-bold">1.250 assinantes</span> já fortalecem sua fé com o Caminho de Luz
                </span>
              </div>
            </div>
            
            {/* Mockup */}
            <div className="text-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full transform scale-75"></div>
                <img 
                  src={mockupImage}
                  alt="Mockup do aplicativo no celular"
                  className="relative w-40 sm:w-64 md:w-80 lg:max-w-xl mx-auto drop-shadow-2xl z-10 transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}