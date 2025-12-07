import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import TrustBadges from "@/components/TrustBadges";
import EventsSection from "@/components/EventsSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div 
        className={`min-h-screen bg-background transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Hero Section */}
        <header className="relative min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-magenta flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="2" fill="hsl(220 20% 8%)" />
                  <circle cx="3" cy="10" r="2" fill="hsl(220 20% 8%)" />
                  <circle cx="3" cy="14" r="2" fill="hsl(220 20% 8%)" />
                  <circle cx="21" cy="10" r="2" fill="hsl(220 20% 8%)" />
                  <circle cx="21" cy="14" r="2" fill="hsl(220 20% 8%)" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Premier Pass
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-body">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Eventos</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Sobre</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Contato</a>
            </div>
            
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-105">
              Entrar
            </button>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 animate-fade-up">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/10 to-magenta/10 border border-cyan/20 text-cyan text-sm font-display font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                    Plataforma 100% Segura
                  </span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Bem-vindo ao{' '}
                  <span className="gradient-text">Premier Pass</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  A plataforma de ingressos mais confiável do Brasil. Compre com segurança, 
                  receba instantaneamente e viva experiências inesquecíveis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground font-display font-semibold hover:shadow-xl hover:shadow-cyan/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Explorar Eventos
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="px-8 py-4 rounded-full border border-border text-foreground font-display font-semibold hover:bg-muted transition-all duration-300 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  Garantia Total
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(188 100% 50%)" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(325 100% 50%)" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>LGPD Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(188 100% 50%)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  <span>Garantia de Reembolso</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30 mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">+2M</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">Ingressos Vendidos</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">4.9★</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">Avaliação Média</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">100%</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">Transações Seguras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-magenta/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan/5 via-transparent to-transparent" />
          </div>
        </header>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Events Section */}
        <EventsSection />

        {/* Trust Section */}
        <TrustSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
