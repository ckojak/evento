import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Preparando sua experiência");

  const loadingMessages = [
    "Preparando sua experiência",
    "Carregando eventos incríveis",
    "Sincronizando ingressos",
    "Quase lá...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        return loadingMessages[(currentIndex + 1) % loadingMessages.length];
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, hsl(188 100% 50%) 0%, transparent 70%)'
                : 'radial-gradient(circle, hsl(325 100% 50%) 0%, transparent 70%)',
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Rotating Glow Ring */}
      <div className="absolute w-[500px] h-[500px] animate-rotate-slow opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-magenta blur-3xl" />
      </div>

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Ticket Icon */}
        <div className="relative animate-ticket-float">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="animate-pulse-glow"
          >
            {/* Ticket Shape */}
            <defs>
              <linearGradient id="ticketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(188 100% 50%)" />
                <stop offset="100%" stopColor="hsl(325 100% 50%)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Main Ticket Body */}
            <rect
              x="15"
              y="30"
              width="90"
              height="60"
              rx="8"
              fill="url(#ticketGradient)"
              filter="url(#glow)"
            />
            
            {/* Ticket Perforations */}
            <circle cx="15" cy="50" r="8" fill="hsl(220 20% 8%)" />
            <circle cx="15" cy="70" r="8" fill="hsl(220 20% 8%)" />
            <circle cx="105" cy="50" r="8" fill="hsl(220 20% 8%)" />
            <circle cx="105" cy="70" r="8" fill="hsl(220 20% 8%)" />
            
            {/* Dashed Line */}
            <line
              x1="75"
              y1="35"
              x2="75"
              y2="85"
              stroke="hsl(220 20% 8%)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-dash"
            />
            
            {/* Star Icon */}
            <path
              d="M45 50 L47.5 55 L53 56 L49 60 L50 66 L45 63 L40 66 L41 60 L37 56 L42.5 55 Z"
              fill="hsl(220 20% 8%)"
            />
            
            {/* QR Code Representation */}
            <rect x="82" y="45" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="88" y="45" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="94" y="45" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="82" y="51" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="94" y="51" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="82" y="57" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="88" y="57" width="4" height="4" fill="hsl(220 20% 8%)" />
            <rect x="94" y="57" width="4" height="4" fill="hsl(220 20% 8%)" />
          </svg>
          
          {/* Glow Effect Behind */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-50 bg-gradient-to-r from-cyan to-magenta rounded-full scale-150" />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Premier Pass</span>
          </h1>
          <p className="text-muted-foreground text-sm font-body tracking-widest uppercase">
            Sua entrada para experiências únicas
          </p>
        </div>

        {/* Progress Section */}
        <div className="w-64 md:w-80 space-y-4 mt-4">
          {/* Sound Wave Animation */}
          <div className="flex items-end justify-center gap-1 h-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-cyan to-magenta animate-wave"
                style={{
                  height: "100%",
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.4 + (i % 3) * 0.2,
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan to-magenta rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Shimmer Effect */}
            <div
              className="absolute inset-y-0 left-0 w-full animate-shimmer opacity-50"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-body animate-fade-up">
              {loadingText}
            </span>
            <span className="font-display font-semibold gradient-text">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-8 flex items-center gap-2 text-muted-foreground/50 text-xs">
        <span className="font-body">©2024 Premier Pass</span>
        <span>•</span>
        <span className="font-body">Todos os direitos reservados</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
