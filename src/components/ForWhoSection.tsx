import { Heart, Shield, Star, Users } from "lucide-react"

export const ForWhoSection = () => {
  const benefits = [
    {
      icon: Heart,
      text: "Para quem deseja fortalecer a fé todos os dias",
      color: "primary"
    },
    {
      icon: Shield,
      text: "Para quem sente falta de apoio espiritual nos momentos difíceis",
      color: "gold"
    },
    {
      icon: Star,
      text: "Para quem busca paz interior em meio às preocupações",
      color: "accent"
    },
    {
      icon: Users,
      text: "Para quem quer sentir a presença de Deus falando direto ao coração",
      color: "primary"
    }
  ]

  return (
    <section className="py-16 md:py-24 gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 mobile-text-balance">
              Para quem é o <span className="text-gold">Caminho de Luz</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Se você se identifica com alguma dessas situações, esta mensagem é para você
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-background/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-divine animate-fade-in transition-all duration-300 hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-${benefit.color === 'gold' ? 'gold' : 'primary'} rounded-full flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300`}>
                    <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-gold-foreground" />
                  </div>
                </div>
                <p className="text-foreground font-medium text-sm md:text-base leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}