import { Shield } from "lucide-react"

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 text-center border border-gold/20 shadow-divine animate-scale-in">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
              <Shield className="w-8 h-8 text-gold-foreground" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Garantia Total
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              Você está totalmente protegido. Se por qualquer motivo não quiser continuar, 
              pode cancelar facilmente. <strong className="text-primary">Sua fé e sua paz são prioridade.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}