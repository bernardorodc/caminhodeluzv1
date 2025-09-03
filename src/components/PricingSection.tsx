import { Button } from "@/components/ui/button";
import { Check, Shield, Smartphone, RefreshCw } from "lucide-react";
export const PricingSection = () => {
  const comparisons = [{
    item: "Café diário",
    price: "R$150/mês",
    icon: "☕"
  }, {
    item: "Sessão de terapia",
    price: "R$200+",
    icon: "🛋️"
  }, {
    item: "Caminho de Luz",
    price: "R$14,90/mês",
    highlight: true,
    icon: "✨"
  }];
  const benefits = [{
    text: "Pagamento 100% seguro",
    icon: Shield
  }, {
    text: "Funciona em qualquer celular",
    icon: Smartphone
  }, {
    text: "Garantia de 7 dias ou seu dinheiro de volta",
    icon: RefreshCw
  }];
  return <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 mobile-text-balance">
              Sua oportunidade de ter um <span className="text-gold">anjo</span> ao seu lado
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              É acessível e transforma sua vida espiritual de forma completa.
            </p>
          </div>
          
          {/* Comparação */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {comparisons.map((comparison, index) => <div key={index} className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${comparison.highlight ? 'bg-gradient-gold text-gold-foreground shadow-gold transform scale-105 lg:scale-110 ring-2 ring-gold/30' : 'bg-background/80 backdrop-blur-sm shadow-soft hover:shadow-divine border border-border/50'}`}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">{comparison.icon}</div>
                  <h3 className={`font-bold mb-3 text-lg md:text-xl ${comparison.highlight ? 'text-gold-foreground' : 'text-foreground'}`}>
                    {comparison.item}
                  </h3>
                  <p className={`text-xl md:text-2xl font-bold ${comparison.highlight ? 'text-gold-foreground' : 'text-muted-foreground'}`}>
                    {comparison.price}
                  </p>
                  {comparison.highlight && <div className="mt-4 text-sm font-medium bg-white/20 rounded-full px-4 py-2">
                      Valor que transforma
                    </div>}
                </div>
              </div>)}
          </div>
          
          {/* Plano Premium */}
          <div className="bg-background/90 backdrop-blur-sm rounded-3xl shadow-elevated p-8 md:p-12 max-w-2xl mx-auto border border-gold/20">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-full shadow-glow mb-6">
                <span className="text-3xl">👼</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Plano Premium Completo
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold">R$14,90</span>
                <span className="text-muted-foreground text-lg md:text-xl">/mês</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                Menos que o preço de um lanche
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-4 p-3 md:p-4 bg-gradient-divine rounded-xl">
                  <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-soft">
                    <benefit.icon className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{benefit.text}</span>
                </div>)}
            </div>
            
            <Button variant="gold" size="xl" className="w-full py-6 md:py-8 rounded-2xl mb-6 text-base">
              Assinar Agora - Acesso Imediato
            </Button>
            
            <div className="text-center">
              <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2 mb-2">
                🔥 <span className="font-bold text-gold">Restam apenas 27 vagas</span> com acesso imediato
              </p>
              <p className="text-xs text-muted-foreground">
                Cancelamento fácil a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};