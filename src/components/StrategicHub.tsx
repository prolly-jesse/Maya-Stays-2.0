import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Truck, Globe, Building } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "100M behind Dreams Hotel on the Kisumu-Busia Highway.",
  },
  {
    icon: Globe,
    title: "Border Proximity",
    desc: "Close to the Busia/Uganda border — ideal for cross-border business travellers.",
  },
  {
    icon: Truck,
    title: "Transit Hub",
    desc: "Perfect stopover for long-haul transport and logistics professionals.",
  },
  {
    icon: Building,
    title: "Business District",
    desc: "Minutes from key commercial centres and government offices.",
  },
];

const StrategicHub = () => {
  const ref = useScrollReveal();

  return (
    <section id="location" className="section-padding relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Strategic Hub</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Perfectly positioned for business, transit, and leisure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="glass-card rounded-xl p-6 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(114,201,189,0.15)] transition-all duration-500">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicHub;
