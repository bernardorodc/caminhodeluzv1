import { BookOpen, Heart, Clock } from "lucide-react"

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Palavra diária",
      description: "Versículos e mensagens que fortalecem sua caminhada",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Reflexões personalizadas",
      description: "Textos que falam direto ao coração",
      color: "gold"
    },
    {
      icon: Clock,
      title: "Companhia espiritual 24h",
      description: "Um lembrete constante de que Deus está com você",
      color: "accent"
    }
  ]

  return (
    <section className="py-16 md:py-24 gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 mobile-text-balance">
              Benefícios que <span className="text-gold">transformam</span> sua vida
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada mensagem é cuidadosamente preparada para tocar sua alma
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-background/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-divine hover:shadow-elevated text-center animate-fade-in transition-all duration-300 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-${benefit.color === 'gold' ? 'gold' : 'primary'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-gold-foreground" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}