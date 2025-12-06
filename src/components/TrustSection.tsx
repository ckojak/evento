import { Shield, Lock, CreditCard, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Pagamentos 100% seguros e protegidos"
  },
  {
    icon: Lock,
    title: "Dados Protegidos",
    description: "Suas informações sempre criptografadas"
  },
  {
    icon: CreditCard,
    title: "Várias Formas de Pagamento",
    description: "Pix, cartão de crédito e mais"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Atendimento sempre disponível"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-magenta/10 border border-cyan/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
