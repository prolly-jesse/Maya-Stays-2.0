import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bed, Wifi, Tv, Car, ShieldCheck, Bath } from "lucide-react";

const suites = [
  {
    title: "Kifaru Suite",
    price: "KSh 3,000",
    period: "/24hrs",
    image:
      "https://res.cloudinary.com/dcpqn8ecp/image/upload/v1776885816/WhatsApp_Image_2026-04-16_at_09.14.44_tdtmll.jpg",
    features: [
      "King-size bed",
      "Smart TV",
      "High-speed Wi-Fi",
      "Modern bathroom",
      "Secure parking",
    ],
    guests: "1-2 guests",
  },
  {
    title: "Tembo Suite",
    price: "KSh 3,500",
    period: "/24hrs",
    image:
      "https://res.cloudinary.com/dcpqn8ecp/image/upload/v1776885813/WhatsApp_Image_2026-04-16_at_09.14.45_wbfrez.jpg",
    features: [
      "King-size bed",
      "Smart TV",
      "High-speed Wi-Fi",
      "Modern bathroom",
      "Secure parking",
    ],
    guests: "1-2 guests",
  },
  {
    title: "Nyati Suite",
    price: "KSh 3,000",
    period: "/24hrs",
    image:
      "https://res.cloudinary.com/dcpqn8ecp/image/upload/v1777234704/suite-nyati_l9m7dm.jpg",
    features: [
      "King-size bed",
      "Smart TV",
      "High-speed Wi-Fi",
      "Modern bathroom",
      "Secure parking",
    ],
    guests: "1-2 guests",
  },
  {
    title: "Twiga Suite",
    price: "KSh 3,000",
    period: "/24hrs",
    image:
      "https://res.cloudinary.com/dcpqn8ecp/image/upload/v1776885860/WhatsApp_Image_2026-04-16_at_09.14.48_2_fqbaye.jpg",
    features: [
      "King-size bed",
      "Smart TV",
      "High-speed Wi-Fi",
      "Modern bathroom",
      "Secure parking",
    ],
    guests: "1-2 guests",
  },
];

const featureIcons: Record<string, typeof Wifi> = {
  "High-speed Wi-Fi": Wifi,
  "Smart TV": Tv,
  "Secure parking": Car,
  "Modern bathroom": Bath,
  "King-size bed": Bed,
};

const UnitSelector = () => {
  const ref = useScrollReveal();

  return (
    <section id="suites" className="section-padding max-w-7xl mx-auto">
      <div ref={ref} className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          <span className="gold-text">Our Suites</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Four uniquely named 1-bedroom suites with top-notch finishing and
          every comfort you need.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
        {suites.map((suite) => (
          <div
            key={suite.title}
            className="glass-card rounded-2xl overflow-hidden group min-w-[280px] snap-start sm:min-w-0"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={suite.image.replace(
                  "/upload/",
                  "/upload/f_auto,q_auto,w_800/"
                )}
                alt={suite.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 gold-gradient text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                {suite.price}
                {suite.period}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Bed size={20} className="text-primary" />
                <h3 className="font-serif text-lg font-semibold">
                  {suite.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                {suite.guests}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suite.features.map((f) => {
                  const Icon = featureIcons[f];
                  return (
                    <span
                      key={f}
                      className="flex items-center gap-1 text-xs bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-full border border-border/50"
                    >
                      {Icon && <Icon size={11} />}
                      {f}
                    </span>
                  );
                })}
              </div>
              <a
                href="#booking"
                className="mt-4 block text-center gold-gradient text-primary-foreground font-semibold py-2.5 rounded-full hover:opacity-90 hover:shadow-[0_0_20px_rgba(114,201,189,0.25)] transition-all duration-300 text-sm"
              >
                Book This Suite
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnitSelector;
