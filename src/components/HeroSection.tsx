import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={
          "https://res.cloudinary.com/dcpqn8ecp/image/upload/f_auto,q_auto/v1777245304/hero-bg_i62fo5.jpg"
        }
        alt="Maya Stays luxury exterior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[120px] animate-glow-pulse pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <div className="inline-block glass rounded-full px-5 py-2 mb-6">
          <span className="text-sm font-medium text-primary">
            Starting from KSh 3,000/24hrs
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="gold-text brand-glow-dual">Maya Stays</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
          Comfort, Security, &amp; Peace of Mind.Premium BnB accommodation on
          the Kisumu-Busia Highway.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#suites"
            className="gold-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 hover:shadow-[0_0_30px_rgba(114,201,189,0.3)] transition-all duration-300"
          >
            Explore Suites
          </a>
          <a
            href="#booking"
            className="glass text-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:border-primary/30 transition-all duration-300"
          >
            Reserve Now
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
