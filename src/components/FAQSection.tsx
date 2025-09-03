import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQSection = () => {
  const faqs = [
    {
      question: "Como recebo as mensagens?",
      answer: "Diretamente no seu WhatsApp, todos os dias. Nossas mensagens chegam automaticamente no horário que você preferir, trazendo palavras de fé, versículos bíblicos e reflexões inspiradoras."
    },
    {
      question: "Quando começa?",
      answer: "Assim que o pagamento é confirmado, você já recebe a primeira mensagem em poucos minutos. O sistema é completamente automatizado para garantir que você não perca nenhum dia de inspiração."
    },
    {
      question: "É seguro?",
      answer: "Sim, usamos sistemas confiáveis e criptografados para garantir sua privacidade e segurança. Seus dados pessoais são protegidos e nunca compartilhados com terceiros."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem burocracias. Basta nos enviar uma mensagem e processaremos o cancelamento imediatamente."
    },
    {
      question: "Funciona em qualquer celular?",
      answer: "Sim! As mensagens chegam via WhatsApp, então funciona em qualquer smartphone, iPhone ou Android. Não precisa baixar nenhum aplicativo adicional."
    }
  ]

  return (
    <section className="py-16 md:py-24 gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-gold rounded-full shadow-gold mb-6 md:mb-8">
              <span className="text-2xl md:text-3xl">❓</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 mobile-text-balance">
              Perguntas <span className="text-gold">Frequentes</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tire suas dúvidas sobre o Caminho de Luz
            </p>
          </div>
          
          <div className="bg-background/90 backdrop-blur-sm rounded-3xl shadow-elevated p-6 md:p-8 border border-border/50">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gradient-soft rounded-xl shadow-soft border border-border/30 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 md:px-8 md:py-6 text-left font-bold text-primary hover:no-underline hover:bg-gradient-divine transition-all duration-300 text-sm md:text-base group">
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-gold rounded-full flex items-center justify-center text-gold-foreground font-bold text-sm md:text-base group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 md:px-8 md:pb-8 text-foreground text-sm md:text-base leading-relaxed">
                    <div className="pl-11 md:pl-13">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}