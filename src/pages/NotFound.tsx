import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-6 py-40 text-center">
      <h1 className="font-display text-4xl font-bold mb-4">404 — Página não encontrada</h1>
      <p className="text-muted-foreground mb-6">A página que você procura não existe ou foi movida.</p>
      <Link to="/" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground font-semibold">Voltar para a Home</Link>
    </div>
  );
};

export default NotFound;
