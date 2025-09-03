export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-gold rounded-full shadow-gold mb-6 md:mb-8">
              <span className="text-2xl md:text-3xl">✨</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8 mobile-text-balance">
              O que é o <span className="text-gold">Caminho de Luz</span>
            </h2>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-divine">
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                Em meio à correria e às dificuldades do dia a dia, muitas vezes nos sentimos sozinhos ou sem direção. 
                O Caminho de Luz nasceu para lembrar que <strong className="text-primary font-bold">Deus nunca se esquece de você</strong>. 
              </p>
              
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-divine rounded-xl border-l-4 border-gold">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Todos os dias, diretamente no seu WhatsApp, você recebe uma mensagem de fé, inspiração e esperança, 
                  para <span className="text-gold font-semibold">renovar sua força</span> e guiar seus passos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}