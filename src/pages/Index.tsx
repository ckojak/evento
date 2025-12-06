import React, { useEffect, useState } from "react";
import DynamicEventsSection from "@/components/DynamicEventsSection";
import TrustSection from "@/components/TrustSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";

interface EventItem {
  title: string;
  location: string;
  date: string;
  price: string;
  discount?: string;
  category?: string;
  imageUrl?: string;
}

const LOCAL_KEY = "premierpass_events_v1";

const Index = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      try {
        setEvents(JSON.parse(raw));
      } catch (e) {
        setEvents([]);
      }
    }
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(events));
  }, [events]);

  function addEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newEvent: EventItem = {
      title: String(fd.get("title") || "Evento Sem Título"),
      location: String(fd.get("location") || "Local a definir"),
      date: String(fd.get("date") || "TBD"),
      price: String(fd.get("price") || "Gratuito"),
      category: String(fd.get("category") || "Geral"),
      imageUrl: String(fd.get("imageUrl") || ""),
    };
    setEvents((prev) => [newEvent, ...prev]);
    setShowForm(false);
    e.currentTarget.reset();
  }

  return (
    <div>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}

      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-magenta flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" fill="hsl(220 20% 8%)"/></svg>
            </div>
            <span className="font-display font-bold text-lg gradient-text">Premier Pass</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowForm((s) => !s)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground font-semibold"
            >
              {showForm ? "Fechar" : "Adicionar Evento"}
            </button>
          </div>
        </div>
      </header>

      {showForm && (
        <div className="container mx-auto px-6 py-6">
          <form onSubmit={addEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-card p-6 rounded-xl">
            <input name="title" placeholder="Título do evento" className="p-3 rounded-lg bg-input text-foreground" />
            <input name="location" placeholder="Local" className="p-3 rounded-lg bg-input text-foreground" />
            <input name="date" placeholder="Data (ex: 31 Dez)" className="p-3 rounded-lg bg-input text-foreground" />
            <input name="price" placeholder="Preço (ex: R$ 199,00)" className="p-3 rounded-lg bg-input text-foreground" />
            <input name="category" placeholder="Categoria" className="p-3 rounded-lg bg-input text-foreground" />
            <input name="imageUrl" placeholder="URL da imagem (opcional)" className="p-3 rounded-lg bg-input text-foreground" />

            <div className="md:col-span-2 flex gap-2 justify-end">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-full border border-border">Cancelar</button>
              <button type="submit" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground font-semibold">Publicar Evento</button>
            </div>
          </form>
        </div>
      )}

      <main>
        <DynamicEventsSection events={events} />
        <TrustSection />
        <TrustBadges />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
