import { CheckCircle2 } from "lucide-react";

const badges = [
  "Certificado SSL",
  "Pagamento PCI Compliant",
  "Dados Criptografados",
  "Suporte Verificado"
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-cyan" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
