import { CreditCard, MessageCircle, Calendar } from "lucide-react"

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Faça sua assinatura de forma segura",
      description: "Processo rápido e protegido",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Receba sua primeira mensagem no WhatsApp em poucos minutos",
      description: "Confirmação imediata",
      color: "gold"
    },
    {
      icon: Calendar,
      title: "Todos os dias, novas palavras de fé chegam até você",
      description: "Renovação diária da sua fé",
      color: "accent"
    }
  ]

  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 mobile-text-balance">
              Como <span className="text-gold">funciona</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Em apenas 3 passos simples, você terá acesso às mensagens diárias
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group text-center animate-scale-in relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Linha conectora (apenas desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-12 xl:w-24 h-0.5 bg-gradient-to-r from-gold/50 to-transparent z-0"></div>
                )}
                
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-gold rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:shadow-glow group-hover:scale-110 transition-all duration-300 relative">
                    <step.icon className="w-10 h-10 md:w-14 md:h-14 text-gold-foreground" />
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-gold text-gold-foreground rounded-full flex items-center justify-center text-base md:text-lg font-black shadow-glow border-2 border-background">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-divine transition-all duration-300 border border-border/50">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-3 md:mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}