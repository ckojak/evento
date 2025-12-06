import EventCard from "@/components/events/EventCard";

interface EventItem {
  title: string;
  location: string;
  date: string;
  price: string;
  discount?: string;
  category?: string;
  imageUrl?: string;
}

const DynamicEventsSection = ({ events }: { events: EventItem[] }) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/10 to-magenta/10 border border-cyan/20 text-cyan text-sm font-display font-medium mb-4">🔥 Eventos em Alta</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Eventos <span className="gradient-text">Imperdíveis</span></h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">Os shows e festivais mais aguardados do Brasil. Garanta seu ingresso com segurança e os melhores preços.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground">Nenhum evento publicado ainda. Seja o primeiro a publicar!</div>
          ) : (
            events.map((event, index) => {
              // Parse price: remove currency symbol, handle both . and , as thousand/decimal separators
              const priceStr = event.price.replace(/[^\d,.]/g, '');
              const price = parseFloat(priceStr.replace(/\./g, '').replace(',', '.')) || 0;
              
              return (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <EventCard
                    id={`local-${index}`}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    image={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400"}
                    price={price}
                    category={event.category || "Geral"}
                    availableTickets={100}
                    index={index}
                  />
                </div>
              );
            })
          )}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full border border-border text-foreground font-display font-semibold hover:bg-muted transition-all duration-300">Ver Todos os Eventos</button>
        </div>
      </div>
    </section>
  );
};

export default DynamicEventsSection;
