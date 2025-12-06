import EventCard from "@/components/EventCard";
import type { EventItem } from "@/types/events";

const DynamicEventsSection = ({ events }: { events: EventItem[] }) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/10 to-magenta/10 border border-cyan/20 text-cyan text-sm font-display font-medium mb-4">🔥 Eventos em Alta</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Eventos <span className="text-gradient">Imperdíveis</span></h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">Os shows e festivais mais aguardados do Brasil. Garanta seu ingresso com segurança e os melhores preços.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.length === 0 ? (
            <div className="md:col-span-4 text-center text-muted-foreground">Nenhum evento publicado ainda. Seja o primeiro a publicar!</div>
          ) : (
            events.map((event, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard {...event} />
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-display font-semibold hover:bg-muted transition-all duration-300 max-w-xs">Ver Todos os Eventos</a>
        </div>
      </div>
    </section>
  );
};

export default DynamicEventsSection;
