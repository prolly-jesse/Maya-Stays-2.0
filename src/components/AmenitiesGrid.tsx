import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wifi, Tv, WashingMachine, Car, Shield, Clock } from "lucide-react";

const amenities = [
  { icon: Wifi, title: "High-Speed Mesh Wi-Fi", desc: "Blazing fast internet throughout the property." },
  { icon: Tv, title: "Smart TVs", desc: "Stream your favourite content in every suite." },
  { icon: WashingMachine, title: "Laundry Service", desc: "Professional laundry available on request." },
  { icon: Car, title: "Ample Secure Parking", desc: "Spacious, well-lit parking with 24/7 surveillance." },
  { icon: Shield, title: "24/7 Security", desc: "Round-the-clock security for total peace of mind." },
  { icon: Clock, title: "Flexible Check-in", desc: "Hassle-free self-check-in with smart access." },
];

const AmenitiesGrid = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding relative">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Elite Amenities</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need for a world-class stay.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="glass-card rounded-xl p-6 group cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(114,201,189,0.15)] transition-all duration-500">
                <a.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;
