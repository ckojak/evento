import { CheckCircle2 } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    "Pagamento 100% Seguro",
    "Reembolso Garantido",
    "Suporte Especializado",
    "Ingressos Verificados",
    "Milhares de Eventos",
    "Avaliação 4.9/5",
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan" />
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
