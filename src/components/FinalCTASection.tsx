import { Button } from "@/components/ui/button";
export const FinalCTASection = () => {
  return <section className="py-12 md:py-24 bg-gradient-primary text-gold">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight mobile-text-balance">
            Está pronto para fortalecer sua fé e receber a palavra de Deus todos os dias?
          </h2>
          
          <p className="text-base md:text-xl mb-8 md:mb-12 opacity-90 leading-relaxed text-slate-950">
            Junte-se a mais de 1.250 pessoas que já transformaram sua jornada espiritual
          </p>
          
          <Button variant="gold" size="lg" className="font-bold text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full w-full sm:w-auto">
            Quero começar agora mesmo
          </Button>
          
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-xs md:text-sm opacity-75">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>Acesso imediato após confirmação do pagamento</span>
          </div>
        </div>
      </div>
    </section>;
};