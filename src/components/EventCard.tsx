import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  location: string;
  date: string;
  price: string;
  discount?: string;
  category?: string;
  imageUrl?: string;
}

const EventCard = ({
  title,
  location,
  date,
  price,
  discount,
  category,
  imageUrl,
}: EventCardProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop";
  
  return (
    <div className="group block">
      <div className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl || defaultImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          {category && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-cyan to-magenta text-primary-foreground text-sm font-semibold">
              {category}
            </div>
          )}
          {discount && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-semibold">
              {discount}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <span className="text-xs text-muted-foreground">A partir de</span>
              <p className="text-xl font-bold text-gradient">
                {price}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary-foreground text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
