import { Shield, Lock, Award, HeadphonesIcon } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Proteção total em todas as transações",
    },
    {
      icon: Lock,
      title: "Dados Protegidos",
      description: "Sua privacidade é nossa prioridade",
    },
    {
      icon: Award,
      title: "Garantia de Autenticidade",
      description: "Ingressos 100% verificados",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Estamos sempre aqui para ajudar",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que confiar na <span className="gradient-text">Premier Pass</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência em compra de ingressos com total segurança e confiabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan to-magenta flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
